"use client";

import { useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import type { SiteCopy } from "@/lib/site-content";
import { medicalNeeds } from "@/lib/site-content";

export function ConsultationForm({ copy, compact = false }: { copy: SiteCopy; compact?: boolean }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const params = new URLSearchParams(window.location.search);
    try {
      const response = await fetch("/api/consultations", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...data, privacyConsent: data.privacyConsent === "on", locale: copy.locale, consultationType: compact ? "hero" : "full", landingPage: window.location.pathname, referrer: document.referrer || null, utmSource: params.get("utm_source"), utmMedium: params.get("utm_medium"), utmCampaign: params.get("utm_campaign") }) });
      if (!response.ok) throw new Error("submission failed");
      setState("success"); form.reset();
    } catch { setState("error"); }
  }
  return (
    <form onSubmit={onSubmit} className={compact ? "rounded-[28px] border border-white/70 bg-white p-5 shadow-[0_24px_80px_rgba(18,48,74,.16)] sm:p-7" : "rounded-[32px] bg-white p-6 shadow-[0_30px_100px_rgba(7,35,52,.18)] sm:p-9"}>
      <p className="text-[11px] font-bold uppercase tracking-[.24em] text-[#0F8F8A]">{copy.form.kicker}</p>
      <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[#12304A] sm:text-3xl">{copy.form.title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">{copy.form.body}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Input name="name" label={copy.form.name} autoComplete="name" required />
        <Input name="email" type="email" label={copy.form.email} autoComplete="email" required />
        <Input name="country" label={copy.form.country} autoComplete="country-name" required />
        <Input name="whatsapp" type="tel" label={copy.form.whatsapp} autoComplete="tel" />
        <label className="sm:col-span-2"><span className="sr-only">{copy.form.specialty}</span><select name="medicalSpecialty" required defaultValue="" className="form-control"><option value="" disabled>{copy.form.specialty}</option>{medicalNeeds.map(item => <option key={item}>{item}</option>)}</select></label>
        {!compact && <label className="sm:col-span-2"><span className="sr-only">{copy.form.request}</span><textarea name="briefRequest" required maxLength={1200} rows={4} placeholder={copy.form.request} className="form-control resize-none" /></label>}
        {compact && <input type="hidden" name="briefRequest" value="Initial homepage enquiry" />}
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>
      <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-500"><input name="privacyConsent" required type="checkbox" className="mt-1 accent-[#0F8F8A]"/><span>{copy.form.consent}</span></label>
      <button disabled={state === "loading"} className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0F8F8A] px-5 text-sm font-bold text-white transition hover:bg-[#087b77] disabled:opacity-60">{state === "loading" ? copy.form.submitting : copy.form.submit}<ArrowRight size={16}/></button>
      <div aria-live="polite" className="min-h-6 pt-3 text-center text-xs"><span className="inline-flex items-center gap-1 text-slate-400"><LockKeyhole size={12}/>{state === "success" ? copy.form.success : state === "error" ? copy.form.error : copy.locale === "zh" ? "您的信息将仅用于回复本次咨询。" : "Your details are used only to respond to this enquiry."}</span></div>
    </form>
  );
}

function Input({ name, label, type = "text", autoComplete, required = false }: { name: string; label: string; type?: string; autoComplete?: string; required?: boolean }) {
  return <label><span className="sr-only">{label}</span><input className="form-control" name={name} type={type} autoComplete={autoComplete} required={required} placeholder={label}/></label>;
}
