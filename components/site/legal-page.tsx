import Link from "next/link";
import type { Locale } from "@/lib/site-content";

const pages = {
  privacy: {
    en: ["Privacy Policy", "We collect only the contact and enquiry information you choose to submit. We use it to respond to your request, protect the service from abuse and maintain a business record of the enquiry.", ["Do not submit medical records, identity documents or payment details through the general enquiry form.", "We do not sell personal information.", "Access is limited to personnel who need the information to respond.", "You may request correction or deletion through the contact channel shown on the website."]],
    zh: ["隐私政策", "我们仅收集您主动提交的联系方式和咨询信息，用于回复咨询、防止滥用并保留必要的业务记录。", ["请勿通过普通咨询表单发送病历、身份证件或付款资料。", "我们不会出售个人信息。", "只有处理咨询所必需的人员可以访问相关信息。", "您可以通过网站公布的联系方式申请更正或删除信息。"]],
  },
  terms: {
    en: ["Terms of Service", "The website provides general information and non-clinical coordination support. A separate written scope and fee quotation applies before any paid concierge service begins.", ["Hospital acceptance, specialist availability and treatment timing are controlled by the relevant medical institution.", "Hospital charges are separate from concierge service fees.", "Visitors must provide accurate information and make their own clinical decisions with qualified physicians.", "Nothing on this website creates a hospital, physician or insurance relationship."]],
    zh: ["服务条款", "本网站提供一般信息和非临床协调服务。任何收费服务开始前，双方应另行确认书面服务范围和报价。", ["是否接诊、专家是否有号及治疗时间由相关医疗机构决定。", "医院医疗费与平台服务费相互独立。", "用户应提供真实信息，并与合格医生共同作出医疗决定。", "本网站内容不建立医院、医患或保险关系。"]],
  },
  disclaimer: {
    en: ["Medical Disclaimer", "Shanghai Medical Concierge is not a hospital, clinic, insurer or diagnostic service. Website content is general information and is not medical advice.", ["We do not diagnose conditions, prescribe treatment or guarantee outcomes.", "We do not guarantee access to a named specialist, hospital bed or surgery date.", "Medical decisions and final prices are provided by licensed hospitals and physicians.", "For an emergency, contact local emergency services immediately."]],
    zh: ["医疗免责声明", "Shanghai Medical Concierge 不是医院、诊所、保险机构或诊断服务。本网站内容仅为一般信息，不构成医疗建议。", ["我们不进行诊断、不开具治疗方案，也不保证治疗结果。", "我们不保证指定专家号源、住院床位或手术日期。", "医疗决定及最终价格由持牌医院和医生提供。", "如遇紧急情况，请立即联系所在地急救服务。"]],
  },
} as const;

export function LegalPage({ locale, kind }: { locale: Locale; kind: keyof typeof pages }) {
  const [title, intro, bullets] = pages[kind][locale];
  return <main className="min-h-screen bg-[#f6f8f8] px-5 py-16 text-[#243247] sm:px-8"><article className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-sm sm:p-14"><Link href={locale === "zh" ? "/zh/" : "/"} className="text-sm font-bold text-[#0F8F8A]">← {locale === "zh" ? "返回首页" : "Back to home"}</Link><h1 className="mt-10 font-serif text-5xl text-[#12304A]">{title}</h1><p className="mt-8 text-lg leading-8 text-slate-600">{intro}</p><ul className="mt-8 space-y-5">{bullets.map(item => <li key={item} className="flex gap-3 leading-7"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0F8F8A]"/>{item}</li>)}</ul><p className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-400">Last updated: 13 October 2026</p></article></main>;
}
