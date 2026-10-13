import Image from "next/image";
import { ArrowRight, Building2, Check, Clock3, FileCheck2, Globe2, HeartHandshake, Languages, MapPin, Plane, ReceiptText, Search, ShieldCheck, Stethoscope } from "lucide-react";
import { Header } from "./header";
import { ConsultationForm } from "./consultation-form";
import { content, faqs, faqsZh, guides, guidesZh, hospitals, medicalNeeds, processSteps, processStepsZh, services, servicesZh, type Locale } from "@/lib/site-content";

const needIcons = [Stethoscope, HeartHandshake, Search, Building2, FileCheck2, ShieldCheck, Globe2, Languages, MapPin];

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const zh = locale === "zh";
  const localizedServices = zh ? servicesZh : services;
  const steps = zh ? processStepsZh : processSteps;
  const guideItems = zh ? guidesZh : guides;
  const faqItems = zh ? faqsZh : faqs;
  return <>
    <Header copy={copy}/>
    <main>
      <section className="relative isolate overflow-hidden bg-[#eef5f5]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(15,143,138,.12),transparent_33%),linear-gradient(90deg,#f8fbfb_0%,rgba(248,251,251,.94)_42%,rgba(238,245,245,.45)_100%)]"/>
        <div className="mx-auto grid min-h-[770px] max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.03fr_.97fr] lg:px-12 lg:py-20">
          <div className="relative z-10 max-w-2xl py-8">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 className="mt-6 max-w-[780px] font-serif text-[clamp(3rem,6.2vw,6.6rem)] font-medium leading-[.93] tracking-[-.045em] text-[#12304A]">{copy.heroTitle}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">{copy.heroBody}</p>
            <div className="mt-9 flex flex-wrap gap-3"><a className="button-primary" href="#consultation">{copy.primaryCta}<ArrowRight size={17}/></a><a className="button-secondary" href="#hospitals">{copy.secondaryCta}</a></div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">{copy.trustPoints.map(point => <span key={point} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600"><Check size={14} className="text-[#0F8F8A]"/>{point}</span>)}</div>
          </div>
          <div className="relative min-h-[650px]">
            <div className="absolute inset-0 overflow-hidden rounded-[44px]"><Image src="/images/shanghai-medical-concierge-hero.png" alt={zh ? "上海城市背景中的国际患者就医协调场景" : "International patient speaking with a medical concierge in Shanghai"} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[62%_center]"/><div className="absolute inset-0 bg-gradient-to-t from-[#12304A]/35 via-transparent to-transparent"/></div>
            <div className="absolute -bottom-8 left-4 right-4 sm:left-auto sm:right-8 sm:w-[430px]"><ConsultationForm copy={copy} compact/></div>
          </div>
        </div>
      </section>

      <Section id="specialties" className="bg-white" eyebrow={zh ? "医疗导航" : "Medical navigation"} title={copy.medicalNeedsTitle} body={copy.medicalNeedsBody}>
        <div className="grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">{medicalNeeds.map((item, index) => { const Icon=needIcons[index]; return <a href="#consultation" key={item} className="group flex min-h-36 items-start justify-between bg-white p-6 transition hover:bg-[#f3f8f7]"><div><Icon size={21} className="text-[#0F8F8A]"/><h3 className="mt-7 font-serif text-xl text-[#12304A]">{item}</h3></div><ArrowRight size={17} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0F8F8A]"/></a>})}</div>
      </Section>

      <Section id="hospitals" className="bg-[#f6f8f8]" eyebrow={zh ? "官方资料核验" : "Official-source research"} title={copy.hospitalsTitle} body={copy.hospitalsBody}>
        <div className="grid gap-5 lg:grid-cols-2">{hospitals.map((hospital, index) => <article key={hospital.name} className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 sm:p-9"><div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-[#0F8F8A]/10 to-transparent"/><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e9f4f3] text-[#0F8F8A]"><Building2/></span><span className="text-xs font-semibold text-slate-400">0{index+1}</span></div><h3 className="mt-8 max-w-lg font-serif text-2xl leading-tight text-[#12304A]">{zh ? hospital.zh : hospital.name}</h3><div className="mt-3 flex flex-wrap gap-3 text-xs font-medium text-slate-500"><span>{hospital.area}</span><span>·</span><span>{zh ? "公立教学医院" : hospital.type}</span></div><div className="mt-7 flex flex-wrap gap-2">{hospital.specialties.map(item=><span key={item} className="rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">{item}</span>)}</div><div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-400"><ShieldCheck size={14} className="text-[#0F8F8A]"/>{copy.verified} · {hospital.reviewed}</div></article>)}</div>
      </Section>

      <Section eyebrow={zh ? "上海医疗资源" : "Shanghai care landscape"} title={copy.specialtiesTitle} body={copy.specialtiesBody}>
        <div className="grid gap-6 md:grid-cols-3"><EditorialCard number="01" title={zh ? "从病种到科室" : "From condition to department"} body={zh ? "先识别对应专业方向，再讨论医院和专家选择。" : "Start with the relevant specialty before comparing hospitals and specialists."}/><EditorialCard number="02" title={zh ? "从科室到医院" : "From department to hospital"} body={zh ? "不同医院的优势专科和国际患者流程并不相同。" : "Clinical strengths and international-patient routes vary between institutions."}/><EditorialCard number="03" title={zh ? "从医院到下一步" : "From hospital to next step"} body={zh ? "先核对材料要求，再推进医院联系与预约申请。" : "Check the required information before starting hospital contact and appointment requests."}/></div>
      </Section>

      <section className="overflow-hidden bg-[#12304A] text-white"><div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32"><div><p className="eyebrow text-[#65d1ca]">{zh ? "为什么是上海" : "Why Shanghai"}</p><h2 className="section-title mt-5 text-white">{copy.whyTitle}</h2><p className="mt-6 max-w-xl text-base leading-8 text-slate-300">{copy.whyBody}</p></div><div className="grid gap-px overflow-hidden rounded-[28px] bg-white/15 sm:grid-cols-2"><DarkPoint icon={Building2} title={zh?"大型公立教学医院":"Major public teaching hospitals"}/><DarkPoint icon={Stethoscope} title={zh?"高度细分的临床专科":"Highly specialised departments"}/><DarkPoint icon={Plane} title={zh?"国际交通与城市配套":"International access and city support"}/><DarkPoint icon={HeartHandshake} title={zh?"本地双语协调服务":"Local bilingual coordination"}/></div></div></section>

      <Section id="specialist" eyebrow={zh ? "专家路径" : "Specialist pathway"} title={copy.specialistTitle} body={copy.specialistBody}>
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]"><div className="rounded-[32px] bg-[#eaf4f3] p-8 sm:p-12"><ol className="space-y-8">{(zh?["说明医疗需求与既往诊断","核对医院审核需要的资料","识别相关医院和科室","根据医院反馈协调后续"]:["Describe the medical need and existing diagnosis","Check what information a hospital needs","Identify relevant hospitals and departments","Coordinate the next step after hospital feedback"]).map((item,index)=><li key={item} className="flex gap-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0F8F8A] text-xs font-bold text-white">{index+1}</span><p className="pt-1 font-serif text-xl text-[#12304A]">{item}</p></li>)}</ol></div><div className="flex flex-col justify-between rounded-[32px] border border-slate-200 p-8 sm:p-12"><div><p className="text-sm font-bold text-[#0F8F8A]">{zh?"重要说明":"Important"}</p><p className="mt-5 font-serif text-3xl leading-tight text-[#12304A]">{zh?"匹配建议不等于医疗诊断，也不代表医院已经接受病例。":"A pathway recommendation is not a diagnosis or confirmation that a hospital has accepted a case."}</p></div><a href="#consultation" className="button-primary mt-10 w-fit">{copy.primaryCta}<ArrowRight size={17}/></a></div></div>
      </Section>

      <Section id="costs" className="bg-[#f6f8f8]" eyebrow={zh ? "费用透明" : "Cost clarity"} title={copy.costTitle} body={copy.costBody}>
        <div className="grid gap-5 md:grid-cols-3"><CostCard icon={Stethoscope} title={zh?"医院医疗费":"Hospital medical charges"} body={zh?"挂号、检查、治疗、药品和住院费用由医院确定并收取。":"Consultations, tests, treatment, medication and inpatient charges are set and collected by the hospital."}/><CostCard icon={ReceiptText} title={zh?"协调服务费":"Concierge service fees"} body={zh?"翻译、协调和在地协助按书面服务范围单独报价。":"Translation, coordination and local support are quoted separately in a written service scope."}/><CostCard icon={Plane} title={zh?"个人差旅支出":"Personal travel expenses"} body={zh?"机票、住宿、餐饮和个人消费由患者自行承担。":"Flights, accommodation, meals and personal spending remain the patient’s responsibility."}/></div>
      </Section>

      <Section id="services" eyebrow={zh ? "按需协调" : "Support by need"} title={copy.servicesTitle} body={copy.servicesBody}>
        <div className="divide-y divide-slate-200 border-y border-slate-200">{localizedServices.map((service,index)=><div key={service} className="group grid items-center gap-4 py-6 sm:grid-cols-[80px_1fr_auto]"><span className="text-xs font-bold text-[#0F8F8A]">0{index+1}</span><h3 className="font-serif text-2xl text-[#12304A]">{service}</h3><ArrowRight className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0F8F8A]"/></div>)}</div>
      </Section>

      <Section className="bg-[#eaf4f3]" eyebrow={zh ? "就医流程" : "Patient journey"} title={copy.processTitle} body={copy.processBody}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{steps.map((step,index)=><div key={step} className="min-h-44 rounded-[24px] bg-white p-6"><span className="text-xs font-bold text-[#0F8F8A]">{String(index+1).padStart(2,"0")}</span><h3 className="mt-10 font-serif text-xl text-[#12304A]">{step}</h3>{index===2&&<p className="mt-3 text-xs leading-5 text-slate-500">{zh?"医院确认前不预设接诊结果。":"No acceptance is assumed before hospital confirmation."}</p>}</div>)}</div>
      </Section>

      <section id="about" className="bg-white"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid overflow-hidden rounded-[36px] bg-[#12304A] text-white lg:grid-cols-[1fr_1.1fr]"><div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow text-[#65d1ca]">{zh?"责任边界":"Responsible coordination"}</p><h2 className="section-title mt-5 text-white">{copy.complianceTitle}</h2><p className="mt-6 leading-8 text-slate-300">{copy.complianceBody}</p></div><div className="grid gap-px bg-white/15 sm:grid-cols-2"><Boundary text={zh?"不提供医疗诊断":"No medical diagnosis"}/><Boundary text={zh?"不承诺治疗结果":"No outcome guarantees"}/><Boundary text={zh?"不保证专家号源":"No appointment guarantees"}/><Boundary text={zh?"医疗费直接支付医院":"Hospital fees paid directly"}/></div></div></div></section>

      <Section id="guides" className="bg-[#f6f8f8]" eyebrow={zh ? "行前阅读" : "Plan before travel"} title={copy.guidesTitle} body={copy.guidesBody}>
        <div className="grid gap-5 md:grid-cols-2">{guideItems.map(([title,body],index)=><article key={title} className="rounded-[26px] border border-slate-200 bg-white p-7"><div className="flex items-center justify-between"><span className="text-xs font-bold text-[#0F8F8A]">GUIDE 0{index+1}</span><Clock3 size={16} className="text-slate-300"/></div><h3 className="mt-8 font-serif text-2xl text-[#12304A]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{body}</p><span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-slate-400">{zh?"完整指南准备中":"Full guide in review"}</span></article>)}</div>
      </Section>

      <Section eyebrow="FAQ" title={copy.faqTitle}><div className="mx-auto max-w-4xl divide-y divide-slate-200 border-y border-slate-200">{faqItems.map(([question,answer])=><details key={question} className="group py-2"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-xl text-[#12304A]"><span>{question}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-lg transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div></Section>

      <section id="consultation" className="bg-[#0b2539]"><div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32"><div className="text-white"><p className="eyebrow text-[#65d1ca]">{zh?"下一步":"Next step"}</p><h2 className="section-title mt-5 text-white">{copy.finalTitle}</h2><p className="mt-6 max-w-lg text-base leading-8 text-slate-300">{copy.finalBody}</p><a href="https://wa.me/8613800000000" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#65d1ca]">WhatsApp <ArrowRight size={16}/></a></div><ConsultationForm copy={copy}/></div></section>
    </main>
    <Footer locale={locale}/>
  </>;
}

function Section({ id, className="bg-white", eyebrow, title, body, children }: {id?:string;className?:string;eyebrow:string;title:string;body?:string;children:React.ReactNode}) { return <section id={id} className={className}><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mb-12 grid gap-5 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">{eyebrow}</p><h2 className="section-title mt-5">{title}</h2></div>{body&&<p className="max-w-2xl text-base leading-8 text-slate-600 lg:pt-8">{body}</p>}</div>{children}</div></section> }
function EditorialCard({number,title,body}:{number:string;title:string;body:string}) { return <article className="border-t-2 border-[#12304A] py-7"><span className="text-xs font-bold text-[#0F8F8A]">{number}</span><h3 className="mt-10 font-serif text-3xl text-[#12304A]">{title}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">{body}</p></article> }
function DarkPoint({icon:Icon,title}:{icon:typeof Building2;title:string}) { return <div className="min-h-48 bg-[#12304A] p-8"><Icon className="text-[#65d1ca]"/><p className="mt-16 font-serif text-xl">{title}</p></div> }
function CostCard({icon:Icon,title,body}:{icon:typeof Stethoscope;title:string;body:string}) { return <article className="rounded-[28px] border border-slate-200 bg-white p-8"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e9f4f3] text-[#0F8F8A]"><Icon/></span><h3 className="mt-10 font-serif text-2xl text-[#12304A]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-500">{body}</p></article> }
function Boundary({text}:{text:string}) { return <div className="flex min-h-40 items-end bg-[#12304A] p-8"><p className="flex items-center gap-3 font-serif text-xl"><ShieldCheck size={19} className="text-[#65d1ca]"/>{text}</p></div> }
function Footer({locale}:{locale:Locale}) { const zh=locale==="zh"; return <footer className="bg-[#071b2a] text-slate-300"><div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12"><div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><p className="font-serif text-2xl text-white">Shanghai Medical Concierge</p><p className="mt-4 max-w-md text-sm leading-7 text-slate-400">{content[locale].footerText}</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-white">{zh?"重要信息":"Important"}</p><div className="mt-5 grid gap-3 text-sm"><a href={`${zh?"/zh":""}/privacy-policy`}>{zh?"隐私政策":"Privacy Policy"}</a><a href={`${zh?"/zh":""}/terms-of-service`}>{zh?"服务条款":"Terms of Service"}</a><a href={`${zh?"/zh":""}/medical-disclaimer`}>{zh?"医疗免责声明":"Medical Disclaimer"}</a></div></div><div><p className="text-xs font-bold uppercase tracking-widest text-white">{zh?"联系":"Contact"}</p><div className="mt-5 grid gap-3 text-sm"><span>Shanghai, China</span><span>hello@example.com</span><a href="https://wa.me/8613800000000">WhatsApp</a></div></div></div><p className="pt-7 text-xs leading-6 text-slate-500">© 2026 Shanghai Medical Concierge. {zh?"平台不提供医疗服务，所有医疗决定由持牌医疗机构和医生作出。":"This platform does not provide medical care. All medical decisions are made by licensed providers and physicians."}</p></div></footer> }
