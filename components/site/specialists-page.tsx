import { Header } from "./header";
import { Footer } from "./home-page";
import { HospitalDirectory } from "./hospital-directory";
import { content, type Locale } from "@/lib/site-content";

export function SpecialistsPage({locale}:{locale:Locale}){const zh=locale==="zh";return <><Header copy={content[locale]}/><main className="bg-[#f4f7f7]"><section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 lg:px-8 lg:py-24"><div className="mx-auto mb-12 max-w-[820px] text-center"><p className="eyebrow">{zh?"匹配专家":"Find a specialist"}</p><h1 className="section-title mx-auto mt-3">{zh?"从病情方向匹配医院、科室与专家":"Match the hospital, department and specialist to your needs"}</h1><p className="mx-auto mt-5 max-w-[68ch] text-[15px] leading-7 text-slate-600">{zh?"您可以指定专家，也可以提交诊断、影像和病理摘要，由团队梳理可能对应的专科方向。专家号源与接诊安排以医院回复为准。":"Request a named specialist or share a diagnosis and record summary so the relevant clinical field can be identified. Availability and acceptance remain subject to the hospital."}</p></div><HospitalDirectory locale={locale} initialView="doctors" showTabs={false}/></section></main><Footer locale={locale}/></>}
