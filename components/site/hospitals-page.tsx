import { Header } from "./header";
import { Footer } from "./home-page";
import { HospitalList } from "./hospital-list";
import { content, type Locale } from "@/lib/site-content";

export function HospitalsPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return <>
    <Header copy={content[locale]}/>
    <main className="bg-[#f4f7f7]">
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 lg:px-8 lg:py-24">
        <div className="mx-auto mb-12 max-w-[820px] text-center">
          <p className="eyebrow">{zh ? "上海知名公立医院" : "Leading public hospitals in Shanghai"}</p>
          <h1 className="section-title mx-auto mt-3">{zh ? "20家上海重点公立医院与优势专科" : "20 leading Shanghai public hospitals and departments"}</h1>
          <p className="mx-auto mt-5 max-w-[68ch] text-[15px] leading-7 text-slate-600">{zh ? "按医院集中查看地址、优势专科及代表专家。页面仅收录20家具有代表性的上海公立医院，便于国际患者进行初步比较。" : "Compare locations, leading departments and representative specialists across 20 prominent Shanghai public hospitals."}</p>
        </div>
        <HospitalList locale={locale}/>
      </section>
    </main>
    <Footer locale={locale}/>
  </>;
}
