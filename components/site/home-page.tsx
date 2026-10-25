import Image from "next/image";
import { ArrowRight, Building2, Check, CreditCard, FileCheck2, Languages, Mail, MessageCircle, QrCode, ReceiptText, ShieldCheck, UserRound } from "lucide-react";
import { Header } from "./header";
import { FeaturedHospitals } from "./featured-hospitals";
import { CurrencyPartnerSection } from "./currency-partner-section";
import { content, type Locale } from "@/lib/site-content";
import { BrandLogo } from "./brand-logo";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const zh = locale === "zh";
  const mobileHero = zh ? {
    eyebrow: "国际患者来沪就医协调",
    title: "连接上海顶尖医院与知名专家",
    body: "协助匹配医院与专家，并协调病历、翻译、陪诊及来沪安排。",
    cta: "联系我们预约",
  } : {
    eyebrow: "Medical access in Shanghai",
    title: "Access leading hospitals and specialists in Shanghai",
    body: "Hospital matching, specialist requests, interpretation and on-site coordination for international patients.",
    cta: "Contact us to plan your visit",
  };
  const metrics = [[UserRound,"10000+",zh?"服务患者总数":"Patients supported"],[Building2,"40",zh?"合作医院":"Hospital connections"],[ShieldCheck,"100+",zh?"商业保险对接":"Insurance connections"],[Languages,"10",zh?"支持语言":"Languages supported"]] as const;
  return <>
    <Header copy={copy}/>
    <main>
      <section className="relative isolate min-h-[550px] overflow-hidden bg-[#12304A] text-white sm:min-h-[680px] lg:min-h-[760px]">
        <div role="img" aria-label={zh ? "国际患者与上海医疗协调人员沟通就医方案" : "International patient reviewing a care plan with a Shanghai medical coordinator"} className="absolute inset-0 -z-20 bg-[url('/images/shanghai-medical-concierge-hero-mobile.webp')] bg-cover bg-center sm:bg-[url('/images/shanghai-medical-concierge-hero.webp')] sm:bg-[position:66%_center]"/>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,42,.92)_0%,rgba(7,27,42,.84)_52%,rgba(7,27,42,.5)_78%,rgba(7,27,42,.24)_100%)] sm:bg-[linear-gradient(90deg,rgba(7,27,42,.94)_0%,rgba(7,27,42,.82)_38%,rgba(7,27,42,.28)_70%,rgba(7,27,42,.08)_100%)]"/>
        <div className="mx-auto flex min-h-[550px] max-w-[1200px] items-start px-5 pb-10 pt-3 min-[380px]:px-11 sm:min-h-[680px] sm:items-center sm:px-7 sm:pb-64 sm:pt-16 lg:min-h-[760px] lg:px-8 lg:pb-44">
          <div className="w-full max-w-[760px] py-0 sm:py-10">
            <p className="eyebrow text-[#65d1ca]"><span className="sm:hidden">{mobileHero.eyebrow}</span><span className="hidden sm:inline">{copy.eyebrow}</span></p>
            <h1 className="mt-4 font-serif text-[clamp(2rem,8.7vw,3.85rem)] font-bold leading-[1.06] tracking-[-.04em] text-white sm:mt-5 sm:max-w-[720px]"><span className="sm:hidden">{zh?<><span className="block whitespace-nowrap">连接上海顶尖</span><span className="block whitespace-nowrap">医院与知名专家</span></>:mobileHero.title}</span><span className="hidden sm:inline">{copy.heroTitle}</span></h1>
            <p className="mt-5 max-w-[30ch] text-[15px] leading-7 text-slate-200 sm:mt-7 sm:max-w-2xl sm:text-lg sm:leading-8"><span className="sm:hidden">{mobileHero.body}</span><span className="hidden sm:inline">{copy.heroBody}</span></p>
            <div className="relative z-10 mt-6 w-[15rem] max-w-[72%] translate-y-24 min-[380px]:-translate-x-6 sm:hidden"><a className="button-primary" href="#contact">{mobileHero.cta}<ArrowRight size={17}/></a></div>
            <div className="mt-9 hidden flex-wrap gap-3 sm:flex"><a className="button-primary" href="mailto:support@medviachina.com">{copy.primaryCta}<ArrowRight size={17}/></a><a className="button-secondary border-white/35 bg-white/10 text-white hover:bg-white/20" href="#contact">{copy.secondaryCta}</a></div>
            <div className="relative z-10 mt-5 grid translate-y-24 gap-2 min-[380px]:-translate-x-6 sm:mt-9 sm:flex sm:translate-x-0 sm:translate-y-0 sm:flex-wrap sm:gap-x-6 sm:gap-y-3">{copy.trustPoints.map(point => <span key={point} className="inline-flex items-center gap-2 text-[11px] font-semibold leading-4 text-slate-100 sm:text-xs"><Check size={14} className="shrink-0 text-[#65d1ca]"/>{point}</span>)}</div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071b2a]/65 to-transparent sm:h-64 sm:from-[#071b2a]/95 sm:via-[#071b2a]/58"/>
        <div className="absolute inset-x-0 bottom-5 z-10 hidden px-7 sm:block lg:bottom-7 lg:px-8"><div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">{metrics.map(([Icon,value,label],index)=>{const MetricIcon=Icon;return <div key={label} className={`relative px-4 py-3 text-center lg:py-4 ${index%2===0?"border-r border-white/[.12]":""} ${index<2?"border-b border-white/[.12] lg:border-b-0":""} ${index>0?"lg:border-l lg:border-white/[.12]":""} lg:border-r-0`}><MetricIcon size={18} strokeWidth={1.7} className="mx-auto text-[#35c7bd] drop-shadow-[0_1px_3px_rgba(0,0,0,.35)]"/><p className="mt-2 text-[1.55rem] font-semibold leading-none tracking-[-.025em] tabular-nums text-white drop-shadow-[0_2px_5px_rgba(0,0,0,.35)] lg:text-[1.7rem]">{value}</p><p className="mt-2 text-[11px] font-medium tracking-wide text-slate-300 lg:text-xs">{label}</p></div>})}</div></div>
      </section>

      <section aria-label={zh?"服务数据":"Service figures"} className="relative z-10 mx-3 -mt-4 grid grid-cols-2 overflow-hidden rounded-t-2xl border border-b-0 border-slate-200 bg-white shadow-[0_-10px_28px_rgba(7,27,42,.12)] sm:hidden">{metrics.map(([Icon,value,label],index)=>{const MetricIcon=Icon;return <div key={label} className={`px-3 py-4 text-center ${index%2===0?"border-r border-slate-200":""} ${index<2?"border-b border-slate-200":""}`}><MetricIcon size={17} className="mx-auto text-[#0F8F8A]"/><p className="mt-2 text-xl font-bold tabular-nums text-[#12304A]">{value}</p><p className="mt-1 text-[10px] font-medium text-slate-500">{label}</p></div>})}</section>

      <FeaturedHospitals locale={locale}/>

      <TransparentPricing zh={zh}/>

      <InternationalCostComparison zh={zh}/>

      <CurrencyPartnerSection zh={zh}/>
    </main>
    <Footer locale={locale}/>
  </>;
}

export function TreatmentDirections({zh}:{zh:boolean}) {
  const slugs = ["oncology","cardiovascular-neurology","orthopaedics-sports-medicine","digestive-hepatobiliary","ophthalmology-ent","women-children-fertility","dermatology-reconstruction","tcm-rehabilitation","dental-maxillofacial","respiratory-thoracic","urology-kidney","endocrinology-hematology"];
  const items = zh ? [
    ["肿瘤诊疗", "乳腺、肺部、消化系统及复杂肿瘤", "肿瘤内科 · 外科 · 放疗 · 病理"],
    ["心脑血管", "冠心病、心律失常、脑血管疾病", "心内科 · 心外科 · 神经内外科"],
    ["骨科与运动医学", "关节、脊柱、创伤与运动损伤", "骨科 · 运动医学 · 康复医学"],
    ["消化与肝胆", "胃肠、肝脏、胰腺及复杂消化疾病", "消化科 · 肝外科 · 胆胰外科"],
    ["眼科与五官", "眼底、角膜、听力及头颈疾病", "眼科 · 耳鼻喉科 · 头颈外科"],
    ["妇儿与生殖", "妇科、产科、生殖及儿童专科", "妇产科 · 生殖医学 · 儿科"],
    ["皮肤与整复", "疑难皮肤病、创面及功能重建", "皮肤科 · 整复外科 · 烧伤科"],
    ["中医与康复", "慢病管理、针灸及术后康复", "中医科 · 针灸科 · 康复医学"],
    ["口腔与颌面", "牙齿修复、种植、正畸及颌面疾病", "口腔科 · 口腔种植科 · 口腔颌面外科"],
    ["呼吸与胸部疾病", "肺部疾病、胸部肿瘤及呼吸系统问题", "呼吸科 · 胸外科 · 肺部肿瘤科"],
    ["泌尿与肾脏", "泌尿系统、男性健康及肾脏疾病", "泌尿外科 · 肾内科 · 男科"],
    ["内分泌与血液", "糖尿病、甲状腺及血液系统疾病", "内分泌科 · 血液科 · 甲状腺外科"],
  ] : [
    ["Cancer care", "Breast, lung, digestive and complex cancers", "Medical oncology · Surgery · Radiotherapy · Pathology"],
    ["Heart & brain", "Coronary, rhythm and cerebrovascular conditions", "Cardiology · Cardiac surgery · Neurology"],
    ["Orthopaedics", "Joint, spine, trauma and sports injuries", "Orthopaedics · Sports medicine · Rehabilitation"],
    ["Digestive & liver", "Gastrointestinal, liver, pancreatic and biliary care", "Gastroenterology · Liver surgery · HPB surgery"],
    ["Eye & ENT", "Retinal, corneal, hearing and head-and-neck care", "Ophthalmology · ENT · Head & neck surgery"],
    ["Women & children", "Gynaecology, fertility and paediatric care", "OB-GYN · Reproductive medicine · Paediatrics"],
    ["Skin & reconstruction", "Complex skin conditions, wounds and reconstruction", "Dermatology · Plastic surgery · Burn care"],
    ["TCM & rehabilitation", "Chronic care, acupuncture and recovery support", "TCM · Acupuncture · Rehabilitation"],
    ["Dental & maxillofacial", "Restoration, implants, orthodontics and maxillofacial conditions", "Dentistry · Implant dentistry · Oral & maxillofacial surgery"],
    ["Respiratory & thoracic", "Lung disease, thoracic tumours and respiratory conditions", "Respiratory medicine · Thoracic surgery · Pulmonary oncology"],
    ["Urology & kidney", "Urinary, men's health and kidney conditions", "Urology · Nephrology · Andrology"],
    ["Endocrine & blood", "Diabetes, thyroid and haematological conditions", "Endocrinology · Haematology · Thyroid surgery"],
  ];
  return <Section id="specialist" className="bg-white" eyebrow={zh?"上海重点科室导航":"Shanghai department directory"} title={zh?"按治疗方向查找对应科室":"Find the right department for your treatment needs"} body={zh?"选择您关注的治疗方向，进入对应科室频道，了解诊疗范围、上海优势医院和相关专家。":"Choose a treatment field to enter its department channel and review its clinical scope, leading Shanghai hospitals and relevant specialists."}>
    <div className="grid overflow-hidden rounded-[30px] border border-slate-200 md:grid-cols-2 xl:grid-cols-4">{items.map(([title,body,departments],index)=><a href={`${zh?"/zh":""}/specialties#${slugs[index]}`} key={title} className="group min-h-64 border-b border-slate-200 p-7 transition hover:bg-[#edf7f6] md:border-r xl:[&:nth-child(4n)]:border-r-0 xl:[&:nth-last-child(-n+4)]:border-b-0"><div className="flex items-center justify-between"><span className="text-xs font-bold text-[#0F8F8A]">{String(index+1).padStart(2,"0")}</span><ArrowRight size={18} className="text-[#0F8F8A] transition group-hover:translate-x-1"/></div><h3 className="mt-10 font-serif text-2xl text-[#12304A]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p><p className="mt-5 text-xs leading-5 text-slate-400">{departments}</p></a>)}</div>
  </Section>;
}

export function JourneySteps({zh,steps}:{zh:boolean;steps:string[]}) {
  const notes = zh?["说明主要问题与期望","整理诊断、影像和病理资料","比较科室、医院及可行入口","由医院确认接诊与排期","准备签证、付款和行程","翻译、陪诊及院内协调","协助获取资料与后续沟通"]:["Explain the main issue and goal","Organise diagnoses, scans and pathology","Compare departments, hospitals and routes","Hospital confirms acceptance and timing","Prepare visa, payment and travel","Interpretation and on-site coordination","Records and follow-up communication"];
  return <Section className="bg-[#eaf4f3]" eyebrow={zh?"来沪就医7个步骤":"Seven-step medical journey"} title={zh?"从资料初审、医院确认到抵沪陪诊和回国随访":"From record review and hospital confirmation to on-site support and follow-up"} body={zh?"每一步都有明确产出。医院确认接诊与时间后，再安排不可退改的出行项目。":"Each stage has a clear outcome. Book non-refundable travel only after the hospital confirms acceptance and timing."}>
    <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-7">{steps.map((step,index)=><article key={step} className="relative min-h-52 rounded-[22px] bg-white p-6"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#0F8F8A] text-xs font-bold text-white">{index+1}</span><h3 className="mt-7 font-serif text-xl leading-tight text-[#12304A]">{step}</h3><p className="mt-4 text-xs leading-5 text-slate-500">{notes[index]}</p></article>)}</div>
  </Section>;
}

export function ShanghaiSupport({zh}:{zh:boolean}) {
  const items = zh?[["/images/shanghai-support/accommodation.webp","医院附近住宿","根据就诊院区、陪护人数和停留时间，协助筛选交通方便的酒店或服务式公寓。"],["/images/shanghai-support/chauffeur.webp","专车与医院往返","协调机场、酒店和医院之间的车辆接送，出发前确认车型、时间与费用。"],["/images/shanghai-support/airport-welcome.webp","机场接机与抵沪安顿","抵达上海后安排接机，协助办理入住、通信和初到上海的必要事务。"]]:[["/images/shanghai-support/accommodation.webp","Accommodation near the hospital","Shortlist hotels or serviced apartments around the hospital based on campus, companions and length of stay."],["/images/shanghai-support/chauffeur.webp","Private transport to appointments","Coordinate transport between the airport, accommodation and hospital with timing, vehicle and costs confirmed in advance."],["/images/shanghai-support/airport-welcome.webp","Airport welcome and arrival support","Arrange airport pickup and help with check-in, connectivity and essential first-day arrangements in Shanghai."]];
  return <Section id="costs" className="bg-[#f4f7f8]" eyebrow={zh?"抵沪后的事务由本地团队处理":"Local support after arrival"} title={zh?"上海落地全过程":"Complete on-the-ground support in Shanghai"} body={zh?"从机场接机、住宿安排到医院往返，把抵沪后的具体事务提前衔接好。":"From airport pickup and accommodation to hospital transport, practical arrangements are coordinated before you arrive."}>
    <div className="grid gap-5 lg:grid-cols-3">{items.map(([image,title,body])=><article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(18,48,74,.05)]"><div className="relative aspect-[3/2] overflow-hidden"><Image src={image} alt={title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.025]"/></div><div className="p-6"><h3 className="text-xl font-bold text-[#12304A]">{title}</h3><p className="mt-3 text-[13px] leading-6 text-slate-600">{body}</p></div></article>)}</div>
  </Section>;
}

export function TransparentPricing({zh,asPageTitle=false}:{zh:boolean;asPageTitle?:boolean}) {
  const rows=zh?[
    ["骨科","全膝关节置换","单侧；含假体","¥80,000–120,000","国产假体方案可更低，进口或定制假体可能更高"],
    ["骨科","全髋关节置换","单侧；含假体","¥80,000–120,000","机器人辅助或 3D 打印定制约 ¥150,000–200,000"],
    ["骨科","关节镜微创","半月板或交叉韧带","¥20,000–50,000","常见为日间或短期住院手术"],
    ["骨科","脊柱融合内固定","单节段","¥80,000–150,000","节段数量和内固定耗材影响较大"],
    ["心血管","冠脉造影＋支架植入","单支架","¥30,000–50,000","冠脉造影单列约 ¥5,000–8,000"],
    ["心血管","冠状动脉搭桥 CABG","常规手术总费用","¥80,000–150,000","复杂或多支搭桥可达 ¥200,000–300,000"],
    ["心血管","TAVR 经导管瓣膜置换","单次治疗","¥250,000–350,000","瓣膜型号及围术期情况影响费用"],
    ["肿瘤","质子／重离子放射治疗","单疗程","¥278,000","按上海统一定价口径"],
    ["肿瘤","CAR-T 细胞治疗","单次","¥999,000–1,290,000","药物品种、住院周期和并发症处理另有差异"],
    ["眼科","白内障＋晶体植入","单眼","¥5,000–15,000","多焦点晶体约 ¥15,000–30,000"],
    ["眼科","全飞秒／ICL 近视矫正","双眼","¥15,000–25,000／¥28,000–38,000","术式和晶体型号决定价格"],
    ["口腔","种植牙","单颗","¥6,000–15,000","植体品牌、牙冠和植骨需求影响费用"],
    ["生殖","IVF 体外受精－胚胎移植","单周期","¥30,000–50,000","药物、ICSI 或 PGT 项目另计"],
    ["神经外科","颅内肿瘤显微／立体定向手术","单次住院","¥60,000–150,000","病变位置、手术难度及耗材影响费用"],
  ]:[
    ["Orthopaedics","Total knee replacement","One side; implant included","¥80,000–120,000","Domestic implants may cost less; imported or custom implants may cost more"],
    ["Orthopaedics","Total hip replacement","One side; implant included","¥80,000–120,000","Robotic or 3D-printed custom options may reach ¥150,000–200,000"],
    ["Orthopaedics","Arthroscopic surgery","Meniscus or cruciate ligament","¥20,000–50,000","Often performed as day surgery or a short admission"],
    ["Orthopaedics","Single-level spinal fusion","One spinal level","¥80,000–150,000","Cost varies with levels and fixation devices"],
    ["Cardiovascular","Angiography plus coronary stent","One stent","¥30,000–50,000","Angiography alone is about ¥5,000–8,000"],
    ["Cardiovascular","CABG","Typical total surgical cost","¥80,000–150,000","Complex multi-vessel cases may reach ¥200,000–300,000"],
    ["Cardiovascular","TAVR","One procedure","¥250,000–350,000","Valve model and perioperative needs affect the total"],
    ["Oncology","Proton or heavy-ion radiotherapy","One course","¥278,000","Shanghai unified-price reference"],
    ["Oncology","CAR-T cell therapy","One treatment","¥999,000–1,290,000","Product, admission length and complication management vary"],
    ["Ophthalmology","Cataract surgery with lens","One eye","¥5,000–15,000","Multifocal lenses are about ¥15,000–30,000"],
    ["Ophthalmology","SMILE or ICL vision correction","Both eyes","¥15,000–25,000 / ¥28,000–38,000","Technique and lens model determine cost"],
    ["Dental","Dental implant","One tooth","¥6,000–15,000","Implant brand, crown and bone grafting affect cost"],
    ["Fertility","IVF","One cycle","¥30,000–50,000","Medication, ICSI and PGT may be additional"],
    ["Neurosurgery","Intracranial tumour surgery","One admission","¥60,000–150,000","Location, complexity and consumables affect cost"],
  ];
  const headers=zh?["专科","治疗项目","计价范围","公立医院参考总费用","影响费用的主要因素"]:["Specialty","Treatment","Scope","Public-hospital total","Main cost variables"];
  const title=zh?"上海公立医院常见治疗费用参考":"Indicative treatment costs at Shanghai public hospitals";
  return <section className="bg-white"><div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 lg:px-8 lg:py-24"><div className="mx-auto max-w-[840px] text-center"><p className="eyebrow">{zh?"中国公立医院费用明细":"Chinese public-hospital costs"}</p>{asPageTitle?<h1 className="section-title mx-auto mt-3">{title}</h1>:<h2 className="section-title mx-auto mt-3">{title}</h2>}<p className="mx-auto mt-4 max-w-[68ch] text-[15px] leading-7 text-slate-600">{zh?"按自费患者常见手术总费用口径整理，通常包括手术、麻醉、主要耗材、床位及常规用药。":"Indicative self-pay totals generally include surgery, anaesthesia, major consumables, inpatient bed and routine medication."}</p></div>
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_34px_rgba(18,48,74,.04)]"><div className="overflow-x-auto"><table className="w-full min-w-[1000px] border-collapse text-left"><thead><tr>{headers.map((header,index)=><th key={header} className={`border-b border-slate-200 px-5 py-4 text-xs font-bold text-[#12304A] ${index===3?"bg-[#eaf6f4] text-[#08746f]":"bg-[#f7f9fa]"}`}>{header}</th>)}</tr></thead><tbody>{rows.map((row,index)=><tr key={`${row[1]}-${index}`} className="border-b border-slate-200 last:border-b-0">{row.map((cell,cellIndex)=><td key={`${row[1]}-${cellIndex}`} className={`px-5 py-4 text-[13px] leading-5 ${cellIndex===0?"font-semibold text-[#0F8F8A]":cellIndex===1?"font-semibold text-[#12304A]":"text-slate-600"} ${cellIndex===3?"bg-[#f1faf8] font-bold tabular-nums text-[#075276]":""}`}>{cell}</td>)}</tr>)}</tbody></table></div></div>
    <p className="mt-5 text-xs leading-6 text-slate-500">{zh?"* 费用数据为 2025–2026 年调研资料中的预算参考，不是医院正式报价。实际费用会因病情、医院、医生、耗材、住院天数和治疗方案变化；不含协调服务费、差旅及个人消费。":"* Figures are 2025–2026 budgeting references, not hospital quotations. Actual costs vary by condition, provider, physician, consumables, admission length and treatment plan; coordination, travel and personal expenses are excluded."}</p>
  </div></section>;
}

export function InternationalCostComparison({zh}:{zh:boolean}) {
  const rows=zh?[
    ["全膝关节置换（单侧）","¥80,000–120,000","$30,000–70,000","约 ¥210,000–500,000","约 4–6 倍"],
    ["全髋关节置换（单侧）","¥80,000–120,000","$30,000–75,000","约 ¥210,000–530,000","约 4–6 倍"],
    ["脊柱融合内固定（单节段）","¥80,000–150,000","$50,000–150,000","约 ¥360,000–1,070,000","约 4–8 倍"],
    ["冠脉造影＋支架（单支架）","¥30,000–50,000","$25,000–50,000","约 ¥180,000–360,000","约 4–6 倍"],
    ["冠状动脉搭桥 CABG","¥80,000–150,000","$100,000–200,000","约 ¥710,000–1,420,000","约 6–10 倍"],
    ["肝移植","¥300,000–500,000","$800,000–1,500,000","约 ¥5,700,000–10,700,000","约 15–25 倍"],
    ["质子／重离子放疗（单疗程）","¥278,000","$125,000–200,000","约 ¥890,000–1,420,000","约 3–5 倍"],
    ["CAR-T 细胞治疗（单次）","¥999,000–1,290,000","$390,000–550,000","约 ¥2,780,000–3,900,000","约 2–3 倍"],
    ["种植牙（单颗）","¥6,000–15,000","$3,000–6,000","约 ¥21,000–43,000","约 3–4 倍"],
    ["IVF（单周期）","¥30,000–50,000","$12,000–25,000","约 ¥85,000–180,000","约 3–4 倍"],
    ["颅内肿瘤手术","¥60,000–150,000","$60,000–150,000","约 ¥430,000–1,070,000","约 5–8 倍"],
  ]:[
    ["Total knee replacement","¥80,000–120,000","$30,000–70,000","Approx. ¥210,000–500,000","Approx. 4–6×"],
    ["Total hip replacement","¥80,000–120,000","$30,000–75,000","Approx. ¥210,000–530,000","Approx. 4–6×"],
    ["Single-level spinal fusion","¥80,000–150,000","$50,000–150,000","Approx. ¥360,000–1,070,000","Approx. 4–8×"],
    ["Angiography plus one stent","¥30,000–50,000","$25,000–50,000","Approx. ¥180,000–360,000","Approx. 4–6×"],
    ["CABG","¥80,000–150,000","$100,000–200,000","Approx. ¥710,000–1,420,000","Approx. 6–10×"],
    ["Liver transplant","¥300,000–500,000","$800,000–1,500,000","Approx. ¥5,700,000–10,700,000","Approx. 15–25×"],
    ["Proton or heavy-ion radiotherapy","¥278,000","$125,000–200,000","Approx. ¥890,000–1,420,000","Approx. 3–5×"],
    ["CAR-T cell therapy","¥999,000–1,290,000","$390,000–550,000","Approx. ¥2,780,000–3,900,000","Approx. 2–3×"],
    ["Dental implant","¥6,000–15,000","$3,000–6,000","Approx. ¥21,000–43,000","Approx. 3–4×"],
    ["IVF cycle","¥30,000–50,000","$12,000–25,000","Approx. ¥85,000–180,000","Approx. 3–4×"],
    ["Intracranial tumour surgery","¥60,000–150,000","$60,000–150,000","Approx. ¥430,000–1,070,000","Approx. 5–8×"],
  ];
  const headers=zh?["治疗项目","中国公立医院（人民币）","美国私立医院（美元）","美国费用折合人民币","最大价差"]:["Treatment","China public hospital (CNY)","US private hospital (USD)","US cost converted to CNY","Maximum difference"];
  return <section className="bg-[#f4f8fa]"><div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 lg:px-8 lg:py-24">
    <div className="grid items-end gap-6 lg:grid-cols-[1fr_.75fr]"><div><p className="eyebrow">{zh?"同项目费用对比":"Like-for-like cost comparison"}</p><h2 className="section-title mt-3">{zh?"中国公立医院与美国私立医院自费费用对比":"China public-hospital vs US private-hospital self-pay costs"}</h2></div><p className="max-w-[52ch] text-[15px] leading-7 text-slate-600 lg:pb-1">{zh?"中国列采用公立三甲医院自费手术总费用，美国列采用私立医院常见自费或商保结算前报价，并同时给出人民币折算区间。":"China figures use tertiary public-hospital self-pay totals. US figures use common private-hospital self-pay or pre-insurance quotations, with CNY conversions shown alongside."}</p></div>
    <div className="mt-9 grid gap-3 md:grid-cols-3">{[
      [zh?"价格差异":"Cost difference",zh?"部分项目的公开价格参考明显低于欧美常见区间":"Published reference prices for selected services can be lower than common Western ranges"],
      [zh?"流程效率":"Process efficiency",zh?"资料齐全后，可更集中地安排检查、门诊及后续步骤":"With complete records, tests, consultations and next steps may be scheduled more compactly"],
      [zh?"整体价值":"Overall value",zh?"把医疗费用与等待时间、差旅和康复安排放在一起比较":"Compare medical charges together with waiting time, travel and recovery logistics"],
    ].map(([title,body])=><article key={title} className="rounded-2xl border border-[#bcd6ea] bg-[#eef5ff] p-5"><h3 className="font-bold text-[#0755a0]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_34px_rgba(18,48,74,.04)]"><div className="overflow-x-auto"><table className="w-full min-w-[960px] border-collapse text-left"><thead><tr>{headers.map((header,index)=><th key={header} className={`border-b border-slate-200 px-5 py-5 text-sm font-bold text-[#12304A] ${index===1?"bg-[#eaf6f4] text-[#08746f]":index===2||index===3?"bg-[#eef5ff] text-[#0755a0]":"bg-[#f8fafb]"}`}>{header}</th>)}</tr></thead><tbody>{rows.map(row=><tr key={row[0]} className="border-b border-slate-200 last:border-b-0">{row.map((cell,index)=><td key={`${row[0]}-${index}`} className={`px-5 py-5 text-sm ${index===0?"font-semibold text-[#12304A]":"font-medium text-slate-600"} ${index===1?"bg-[#f1faf8] font-bold text-[#006554]":index===4?"font-bold text-[#0755a0]":""}`}>{cell}</td>)}</tr>)}</tbody></table></div></div>
    <p className="mt-5 text-xs leading-6 text-slate-500">{zh?"* 美国数据为 2025–2026 年调研资料中的私立医院自费／商保前报价区间；人民币折算采用资料原表约 1 美元＝7.1 元的统一口径，仅用于预算比较。最终费用受医院、地区、病情、耗材、住院天数和保险合同影响。":"* US figures are 2025–2026 private-hospital self-pay or pre-insurance reference ranges. CNY conversions follow the source workbook's approximate rate of USD 1 = CNY 7.1 for budgeting comparison only. Final costs vary by provider, location, condition, consumables, admission length and insurance contract."}</p>
  </div></section>;
}

export function PaymentMethods({zh}:{zh:boolean}) {
  const paymentMethods=zh?["银行转账（人民币 / 卢布 / 美元）","Visa / Mastercard 国际卡","支付宝 / 微信支付","保险直接结算","医院现金支付（人民币）"]:["Bank transfer (CNY / RUB / USD)","Visa / Mastercard","Alipay / WeChat Pay","Direct insurance settlement","Cash payment to hospital (CNY)"];
  const paymentSteps=zh?["您将收到治疗方案及详细费用明细","医疗费用直接支付至医院对公账户","协调服务费支付至服务方账户","我们提供收据、发票及服务合同","协助办理保险理赔申请"]:["Receive the treatment plan and detailed cost breakdown","Pay medical fees directly to the hospital account","Pay coordination fees to the service provider","Receive receipts, invoices and the service agreement","Receive assistance with insurance claims"];
  const safeguards=zh?["医疗费用直接支付至医院账户，平台不经手","协调服务费按透明合同单独支付","所有项目提供官方收据与发票","签署完整服务合同，所有费用明确列明","符合约定条件的取消项目按合同办理退款"]:["Medical fees go directly to the hospital; the platform does not handle them","Coordination fees are paid separately under a transparent agreement","Official receipts and invoices are provided","A complete service agreement lists all charges","Eligible cancellations are refunded according to the agreement"];
  return <section id="about" className="bg-white"><div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 lg:px-8 lg:py-24"><div className="text-center"><p className="eyebrow">{zh?"费用与支付":"Fees and payment"}</p><h2 className="section-title mx-auto mt-3">{zh?"治疗费用支付方式":"How treatment costs are paid"}</h2><p className="mx-auto mt-4 max-w-[62ch] text-[15px] leading-7 text-slate-600">{zh?"透明安全的支付体系——医疗费与协调服务费分开支付":"A transparent payment structure keeps hospital charges separate from coordination fees"}</p></div>
    <div className="mt-10 rounded-2xl border border-[#acd5df] bg-gradient-to-r from-[#eef6ff] to-[#effcf9] p-6 shadow-[0_2px_4px_rgba(18,48,74,.12)] sm:p-8"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#dbeaf5] text-[#075276]"><ReceiptText size={21}/></span><h3 className="text-xl font-bold text-[#12304A]">{zh?"费用构成":"Fee structure"}</h3></div><div className="mt-5 grid gap-5 lg:grid-cols-3">
      <FeeBlock dot="bg-[#075276]" title={zh?"医疗费用":"Hospital medical fees"} body={zh?"治疗、检查、药品费用直接支付至医院官方账户。":"Treatment, examinations and medication are paid directly to the hospital's official account."} note={zh?"我们协助比较医院和方案，减少不必要的时间与成本。":"We help compare hospitals and pathways to reduce unnecessary time and cost."}/>
      <FeeBlock dot="bg-[#19aa98]" title={zh?"协调服务费（MedVia China）":"Coordination fee (MedVia China)"} body={zh?"用于治疗安排、医学翻译、医院沟通、签证材料、陪同及其他约定服务。费用按项目书面报价，并在服务开始前确认。":"Covers treatment coordination, medical interpretation, hospital communication, visa documents, accompaniment and other agreed services. Fees are quoted in writing before work begins."}/>
      <FeeBlock dot="bg-orange-500" title={zh?"个人费用（自费）":"Personal expenses"} body={zh?"机票、住宿、餐饮、观光、签证及个人消费由患者自行支付。":"Flights, accommodation, meals, sightseeing, visas and personal expenses are paid by the patient."} note={zh?"可协助兑换人民币及安排相关在地服务。":"We can assist with local arrangements and currency guidance."}/>
    </div></div>
    <div className="mt-6 grid gap-6 lg:grid-cols-3"><PaymentPanel icon={CreditCard} tone="blue" title={zh?"支付方式":"Payment methods"} items={paymentMethods}/><PaymentPanel icon={ShieldCheck} tone="green" title={zh?"支付流程":"Payment process"} items={paymentSteps} numbered/><PaymentPanel icon={FileCheck2} tone="orange" title={zh?"安全保障":"Payment safeguards"} items={safeguards}/></div>
  </div></section>;
}

function FeeBlock({dot,title,body,note}:{dot:string;title:string;body:string;note?:string}) { return <article className="rounded-2xl border border-slate-200 bg-white p-5"><h4 className="flex items-center gap-2 text-sm font-bold text-[#12304A]"><span className={`h-3 w-3 rounded-full ${dot}`}/>{title}</h4><p className="mt-4 text-[13px] leading-6 text-slate-600">{body}</p>{note&&<p className="mt-3 text-xs leading-5 text-orange-500">{note}</p>}</article> }
function PaymentPanel({icon:Icon,tone,title,items,numbered=false}:{icon:typeof CreditCard;tone:"blue"|"green"|"orange";title:string;items:string[];numbered?:boolean}) { const styles={blue:"bg-[#f2f7fd] text-[#075276]",green:"bg-[#effaf7] text-[#0F8F8A]",orange:"bg-[#fff8ef] text-orange-500"}[tone]; return <article className={`min-h-[350px] rounded-2xl border border-slate-200 p-7 ${styles.split(" ")[0]}`}><span className={`grid h-12 w-12 place-items-center rounded-xl bg-white/70 ${styles.split(" ")[1]}`}><Icon size={22}/></span><h3 className="mt-6 text-xl font-bold text-[#12304A]">{title}</h3><div className="mt-5 grid gap-3">{items.map((item,index)=><p key={item} className="flex items-start gap-3 text-[13px] leading-6 text-slate-600"><span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold ${numbered?"bg-[#19aa98] text-white":"border border-current "+styles.split(" ")[1]}`}>{numbered?index+1:"✓"}</span>{item}</p>)}</div></article> }

function Section({ id, className="bg-white", eyebrow, title, body, children }: {id?:string;className?:string;eyebrow:string;title:string;body?:string;children:React.ReactNode}) { return <section id={id} className={className}><div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-7 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto mb-8 max-w-[820px] text-center sm:mb-10"><p className="eyebrow">{eyebrow}</p><h2 className="section-title mx-auto mt-3">{title}</h2>{body&&<p className="mx-auto mt-4 max-w-[68ch] text-[14px] leading-7 text-slate-600 sm:text-[15px]">{body}</p>}</div>{children}</div></section> }
export function Footer({locale}:{locale:Locale}) {
  const zh=locale==="zh";const base=zh?"/zh":"";
  const links=[[zh?"服务项目":"Services",`${base}/services`],[zh?"医院与医生":"Hospitals & doctors",`${base}/hospitals`],[zh?"科室导航":"Departments",`${base}/specialties`],[zh?"医疗专家":"Specialists",`${base}/specialists`],[zh?"治疗费用":"Treatment costs",`${base}/pricing`],[zh?"来华指南":"Travel guides",`${base}/guides`],[zh?"联系我们":"Contact","#contact"]];
  return <footer id="contact" className="border-t-4 border-[#0F8F8A] bg-[#f4f7f9] text-[#405872]"><div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-7 lg:px-8">
    <div className="grid gap-10 border-b border-slate-200 pb-10 lg:grid-cols-[1.15fr_.95fr_1fr]"><div><BrandLogo/><p className="mt-5 max-w-[42ch] text-sm leading-7">{content[locale].footerText}</p><div className="mt-5 grid gap-2.5 text-sm"><span>⌖ Shanghai, China</span><a href="mailto:support@medviachina.com">✉ support@medviachina.com</a><a href="https://wa.me/8619858146860" target="_blank" rel="noreferrer">☏ +86 198 5814 6860</a><a href="https://www.medviachina.com">↗ medviachina.com</a></div></div>
      <div><p className="text-sm font-bold text-[#12304A]">{zh?"快捷链接":"Quick links"}</p><nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">{links.map(([label,href])=><a key={label} href={href} className="transition hover:text-[#0F8F8A]">{label}</a>)}</nav></div>
      <div><p className="text-sm font-bold text-[#12304A]">{zh?"联系信息":"Contact information"}</p><div className="mt-5 grid gap-3 text-sm"><a href="mailto:support@medviachina.com" className="flex gap-3"><Mail size={17} className="mt-0.5 text-[#0F8F8A]"/>support@medviachina.com</a><a href="https://wa.me/8619858146860" target="_blank" rel="noreferrer" className="flex gap-3"><MessageCircle size={17} className="mt-0.5 text-[#0F8F8A]"/>WhatsApp: +86 198 5814 6860</a><span className="flex gap-3"><QrCode size={17} className="mt-0.5 text-[#0F8F8A]"/>WeChat: 8619858146860</span></div><p className="mt-6 text-xs font-bold text-[#12304A]">{zh?"服务患者来自":"Patients served from"}</p><p className="mt-2 text-[11px] leading-6 text-slate-500">{zh?"俄罗斯、哈萨克斯坦、乌兹别克斯坦、韩国、日本、印度尼西亚、泰国、越南、马来西亚、菲律宾、澳大利亚、欧美地区":"Russia, Kazakhstan, Uzbekistan, South Korea, Japan, Indonesia, Thailand, Vietnam, Malaysia, the Philippines, Australia, Europe and North America"}</p></div></div>
    <div className="flex flex-wrap justify-center gap-3 border-b border-slate-200 py-5"><span className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">♢ {zh?"安全 HTTPS 传输":"Secure HTTPS"}</span><span className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">▣ {zh?"医疗费直接支付医院":"Hospital-direct payment"}</span><span className="rounded-xl border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold text-purple-700">◉ {zh?"隐私资料保护":"Privacy protection"}</span></div>
    <div className="my-5 rounded-xl border border-slate-200 bg-[#edf3f7] px-5 py-3 text-center text-[11px] leading-6 text-slate-500">{zh?"MedVia China 提供医院信息与非临床协调服务，不是医院、诊所、保险机构或诊断平台。所有诊疗决定由持牌医疗机构及医生作出；医院接诊、专家号源、费用和治疗结果均不作保证。":"MedVia China provides hospital information and non-clinical coordination. It is not a hospital, clinic, insurer or diagnostic service. All clinical decisions are made by licensed providers; acceptance, specialist availability, costs and outcomes are not guaranteed."}</div>
    <div className="text-center"><p className="text-xs font-bold text-[#12304A]">{zh?"资料与服务规范":"Information and service standards"}</p><div className="mt-3 flex flex-wrap justify-center gap-2">{[zh?"医院官网公开资料":"Hospital public sources",zh?"费用书面确认":"Written fee confirmation",zh?"医疗费与服务费分开":"Separated payments",zh?"保险资格逐案核对":"Case-by-case insurance checks"].map(item=><span key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-[10px] font-semibold text-slate-500">{item}</span>)}</div></div>
    <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-[11px] text-slate-400 sm:flex-row"><p>© 2026 MedVia China. {zh?"保留所有权利。":"All rights reserved."}</p><div className="flex flex-wrap justify-center gap-4"><a href={`${base}/terms-of-service`}>{zh?"服务条款":"Terms"}</a><a href={`${base}/privacy-policy`}>{zh?"隐私政策":"Privacy"}</a><a href={`${base}/medical-disclaimer`}>{zh?"医疗免责声明":"Medical disclaimer"}</a></div></div>
  </div></footer>;
}
