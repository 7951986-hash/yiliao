import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export function CurrencyPartnerSection({zh}:{zh:boolean}) {
  return <section className="bg-[#0d2b3f] text-white">
    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-7 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-20">
      <div>
        <p className="text-xs font-bold tracking-[.12em] text-[#35c7bd]">{zh?"直接联系":"Contact us directly"}</p>
        <h2 className="mt-4 max-w-[620px] font-serif text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-.03em]">{zh?"通过邮件或 WhatsApp 联系上海团队":"Contact our Shanghai team by email or WhatsApp"}</h2>
        <p className="mt-5 max-w-[58ch] text-sm leading-7 text-slate-300">{zh?"请简要说明患者情况、希望咨询的医院或专科，以及预计来沪时间。我们会回复可行的下一步流程，但不会承诺接诊、专家号源或治疗结果。":"Briefly describe the patient's situation, preferred hospital or specialty, and expected travel dates. We will explain practical next steps without promising acceptance, specialist availability or treatment outcomes."}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <a href="mailto:support@medviachina.com" className="group flex min-h-52 flex-col rounded-[22px] border border-white/25 bg-white/[.055] p-6 transition hover:-translate-y-1 hover:border-[#65d1ca] hover:bg-white/[.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65d1ca]">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[.08] text-[#65d1ca]"><Mail size={21}/></span>
          <span className="mt-8 text-xs font-bold tracking-[.1em] text-[#65d1ca]">{zh?"电子邮件":"EMAIL"}</span>
          <span className="mt-3 break-all text-sm font-semibold leading-6">support@medviachina.com</span>
          <span className="mt-auto flex items-center justify-between pt-5 text-xs text-slate-400">{zh?"发送邮件":"Send an email"}<ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></span>
        </a>
        <a href="https://wa.me/8619858146860" target="_blank" rel="noreferrer" className="group flex min-h-52 flex-col rounded-[22px] border border-white/25 bg-white/[.055] p-6 transition hover:-translate-y-1 hover:border-[#65d1ca] hover:bg-white/[.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65d1ca]">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[.08] text-[#65d1ca]"><MessageCircle size={22}/></span>
          <span className="mt-8 text-xs font-bold tracking-[.1em] text-[#65d1ca]">WHATSAPP</span>
          <span className="mt-3 text-sm font-semibold leading-6">+86 198 5814 6860</span>
          <span className="mt-auto flex items-center justify-between pt-5 text-xs text-slate-400">{zh?"打开 WhatsApp":"Open WhatsApp"}<ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></span>
        </a>
      </div>
    </div>
  </section>;
}
