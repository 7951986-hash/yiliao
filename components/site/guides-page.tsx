import { Clock3 } from "lucide-react";
import { Header } from "./header";
import { Footer } from "./home-page";
import { content, guides, guidesZh, type Locale } from "@/lib/site-content";

const guideSlugs = ["medical-travel-china-checklist","china-medical-travel-budget","health-screening-china","hospital-booking-foreign-patients","medical-interpretation-china","choose-hospital-china","medical-travel-insurance-china","aftercare-return-home","dental-treatment-china"];

export function GuidesPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const guideItems = zh ? guidesZh : guides;
  return <>
    <Header copy={content[locale]}/>
    <main>
      <section className="bg-[#f6f8f8]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 lg:px-8 lg:py-24">
          <div className="mx-auto mb-12 max-w-[820px] text-center"><p className="eyebrow">{zh ? "出发之前" : "Before you travel"}</p><h1 className="section-title mx-auto mt-3">{zh ? "患者指南" : "Patient guides"}</h1><p className="mx-auto mt-4 max-w-[68ch] text-[15px] leading-7 text-slate-600">{zh ? "从医院选择、资料整理和费用预算，到保险、翻译、抵沪安排及回国随访，把来华前需要确认的事项逐项准备好。" : "Prepare each step before travelling—from hospital selection, records and budgeting to insurance, interpretation, arrival arrangements and follow-up at home."}</p></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guideItems.map(([title,body],index)=><article id={guideSlugs[index]} key={title} className="group flex min-h-[285px] scroll-mt-24 flex-col rounded-2xl border border-[#cbded8] bg-white p-6 transition hover:-translate-y-1 hover:border-[#0F8F8A]/50 hover:shadow-[0_14px_36px_rgba(18,48,74,.06)]"><div className="flex items-center justify-between"><span className="text-[11px] font-bold text-[#0F8F8A]">GUIDE {String(index+1).padStart(2,"0")}</span><Clock3 size={15} className="text-slate-300"/></div><h2 className="mt-6 text-xl font-semibold leading-snug text-[#12304A]">{title}</h2><p className="mt-4 text-[13px] leading-6 text-slate-600">{body}</p><span className="mt-auto pt-5 text-xs font-semibold text-[#0F8F8A]">{zh?"指南摘要":"Guide summary"}</span></article>)}</div>
        </div>
      </section>
    </main>
    <Footer locale={locale}/>
  </>;
}
