import { NextResponse } from "next/server";
import { and, count, eq, gt } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db";
import { consultations } from "@/db/schema";

const schema = z.object({
  name: z.string().trim().min(2).max(100), email: z.string().email().max(180), country: z.string().trim().min(2).max(100), whatsapp: z.string().trim().max(80).optional().nullable(), medicalSpecialty: z.string().trim().min(2).max(120), briefRequest: z.string().trim().min(5).max(1200), privacyConsent: z.literal(true), locale: z.enum(["en","zh"]), consultationType: z.enum(["hero","full"]), landingPage: z.string().max(300).optional().nullable(), referrer: z.string().max(500).optional().nullable(), utmSource: z.string().max(120).optional().nullable(), utmMedium: z.string().max(120).optional().nullable(), utmCampaign: z.string().max(120).optional().nullable(), companyWebsite: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try { body=await request.json(); } catch { return NextResponse.json({error:"Invalid request"},{status:400}); }
  const parsed=schema.safeParse(body);
  if(!parsed.success) return NextResponse.json({error:"Please check the form fields."},{status:422});
  const data=parsed.data;
  const ip=request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const ipHash=await hash(ip);
  try {
    const db=getDb();
    const since=new Date(Date.now()-10*60*1000);
    const recent=await db.select({value:count()}).from(consultations).where(and(eq(consultations.ipHash,ipHash),gt(consultations.createdAt,since)));
    if((recent[0]?.value??0)>=5) return NextResponse.json({error:"Too many requests"},{status:429});
    const id=crypto.randomUUID(); const now=new Date();
    await db.insert(consultations).values({id,name:data.name,email:data.email,country:data.country,whatsapp:data.whatsapp||null,medicalSpecialty:data.medicalSpecialty,briefRequest:data.briefRequest,locale:data.locale,consultationType:data.consultationType,landingPage:data.landingPage||null,referrer:data.referrer||null,utmSource:data.utmSource||null,utmMedium:data.utmMedium||null,utmCampaign:data.utmCampaign||null,privacyConsentAt:now,status:"new",notificationStatus:"pending",ipHash,createdAt:now});
    const notified=await notify({id,name:data.name,email:data.email,country:data.country,specialty:data.medicalSpecialty,locale:data.locale});
    if(notified) await db.update(consultations).set({notificationStatus:"sent"}).where(eq(consultations.id,id));
    return NextResponse.json({ok:true,id},{status:201});
  } catch (error) {
    console.error("Consultation storage unavailable", error instanceof Error ? error.message : "unknown");
    return NextResponse.json({error:"Service unavailable"},{status:503});
  }
}

async function hash(value:string){const bytes=new TextEncoder().encode(`${process.env.RATE_LIMIT_SALT??"local-preview"}:${value}`);return [...new Uint8Array(await crypto.subtle.digest("SHA-256",bytes))].map(b=>b.toString(16).padStart(2,"0")).join("");}
async function notify(data:{id:string;name:string;email:string;country:string;specialty:string;locale:string}){const key=process.env.RESEND_API_KEY;const to=process.env.ENQUIRY_TO_EMAIL;if(!key||!to)return false;const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{authorization:`Bearer ${key}`,"content-type":"application/json"},body:JSON.stringify({from:process.env.ENQUIRY_FROM_EMAIL??"Shanghai Medical Concierge <enquiries@resend.dev>",to:[to],subject:`New website enquiry: ${data.specialty}`,text:`Reference: ${data.id}\nName: ${data.name}\nEmail: ${data.email}\nCountry: ${data.country}\nSpecialty: ${data.specialty}\nLanguage: ${data.locale}\n\nMedical details remain in the protected enquiry database.`})});return response.ok;}
