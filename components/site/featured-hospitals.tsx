import Image from "next/image";
import { ArrowRight, Building2, MapPin, Trophy, UserRound } from "lucide-react";
import type { Locale } from "@/lib/site-content";

const hospitals = [
  {
    key: "zhongshan",
    nameZh: "复旦大学附属中山医院",
    nameEn: "Zhongshan Hospital, Fudan University",
    addressZh: "上海市徐汇区枫林路 180 号",
    addressEn: "180 Fenglin Road, Xuhui District, Shanghai",
    summaryZh: "国家卫生健康委直属三级甲等综合医院，心血管、肝外科和普通外科是其最具代表性的全国优势学科。",
    summaryEn: "A national tertiary public hospital best known for cardiovascular medicine, liver surgery and general surgery.",
    overall: "A++++",
    departments: [
      { nameZh: "心血管内科", nameEn: "Cardiology", rankZh: "全国第 2", rankEn: "No. 2 in China", expertZh: "葛均波 · 中国科学院院士", expertEn: "Ge Junbo · CAS Academician", achievementZh: "研发国产可降解心脏支架；发现“心肌桥半月现象”，成为国际通用判定依据。", achievementEn: "Developed a Chinese bioresorbable cardiac scaffold and identified the internationally used myocardial-bridge half-moon sign." },
      { nameZh: "肝外科", nameEn: "Liver surgery", rankZh: "普通外科全国第 2", rankEn: "General Surgery No. 2", expertZh: "樊嘉、周俭 · 中国科学院院士", expertEn: "Fan Jia & Zhou Jian · CAS Academicians", achievementZh: "建立肝癌早诊与个体化治疗体系，在肝移植和复杂肝胆肿瘤术式方面具有国际影响力。", achievementEn: "Known for liver-cancer early diagnosis, precision treatment, transplantation and complex hepatobiliary procedures." },
      { nameZh: "全科医学科", nameEn: "General practice", rankZh: "全国第 1", rankEn: "No. 1 in China", expertZh: "祝墡珠 · 教授", expertEn: "Zhu Shanzhu · Professor", achievementZh: "牵头全科医师规范化培训与全国全科医学教育标准建设。", achievementEn: "A national leader in standardized general-practitioner training and medical-education standards." },
    ],
  },
  {
    key: "ruijin",
    nameZh: "上海交通大学医学院附属瑞金医院",
    nameEn: "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
    addressZh: "上海市黄浦区瑞金二路 197 号",
    addressEn: "197 Ruijin 2nd Road, Huangpu District, Shanghai",
    summaryZh: "三级甲等综合医院，在内分泌代谢、血液病和重度烧伤救治领域形成全国领先的诊疗体系。",
    summaryEn: "A tertiary public hospital with nationally leading programs in endocrinology, haematology and severe-burn care.",
    overall: "A++++",
    departments: [
      { nameZh: "内分泌代谢科", nameEn: "Endocrinology", rankZh: "全国第 1 · 连续多年", rankEn: "No. 1 in China · consecutive years", expertZh: "宁光 · 中国工程院院士", expertEn: "Ning Guang · CAE Academician", achievementZh: "建成全国标准化代谢病管理中心与大型代谢基因组数据库，相关研究影响糖尿病管理指南。", achievementEn: "Built a nationwide metabolic-disease management network and a major metabolic genomics database." },
      { nameZh: "血液科", nameEn: "Haematology", rankZh: "全国第 3", rankEn: "No. 3 in China", expertZh: "王振义、陈赛娟 · 中国工程院院士", expertEn: "Wang Zhenyi & Chen Saijuan · CAE Academicians", achievementZh: "创立急性早幼粒细胞白血病“上海方案”，显著提高长期生存率，并推动国产 CAR-T 研发。", achievementEn: "Created the Shanghai approach to acute promyelocytic leukaemia and advanced domestic CAR-T research." },
      { nameZh: "烧伤科", nameEn: "Burn care", rankZh: "全国第 3", rankEn: "No. 3 in China", expertZh: "郇京宁 · 教授", expertEn: "Huan Jingning · Professor", achievementZh: "擅长大面积深度烧伤救治与复杂创面修复，特重度烧伤救治具有国际影响力。", achievementEn: "Specialises in extensive deep burns and complex wound reconstruction, with international recognition in critical burn care." },
    ],
  },
  {
    key: "huashan",
    nameZh: "复旦大学附属华山医院",
    nameEn: "Huashan Hospital, Fudan University",
    addressZh: "上海市静安区乌鲁木齐中路 12 号",
    addressEn: "12 Middle Urumqi Road, Jing'an District, Shanghai",
    summaryZh: "三级甲等综合医院，神经外科、皮肤科及传染感染科长期位居全国前列。",
    summaryEn: "A tertiary public hospital nationally renowned for neurosurgery, dermatology and infectious diseases.",
    overall: "A++++",
    departments: [
      { nameZh: "皮肤科", nameEn: "Dermatology", rankZh: "全国第 1", rankEn: "No. 1 in China", expertZh: "徐金华、项蕾红 · 教授", expertEn: "Xu Jinhua & Xiang Leihong · Professors", achievementZh: "聚焦银屑病、白癜风、皮肤肿瘤、痤疮及色素性疾病的精准诊疗。", achievementEn: "Known for precision care in psoriasis, vitiligo, skin tumours, acne and pigmentary disorders." },
      { nameZh: "传染感染科", nameEn: "Infectious diseases", rankZh: "全国第 1", rankEn: "No. 1 in China", expertZh: "张文宏 · 教授", expertEn: "Zhang Wenhong · Professor", achievementZh: "国家传染病医学中心主任，牵头重大传染病临床救治方案，具有广泛国际学术影响。", achievementEn: "Leads the National Medical Center for Infectious Diseases and major clinical treatment protocols." },
      { nameZh: "神经外科", nameEn: "Neurosurgery", rankZh: "全国第 2", rankEn: "No. 2 in China", expertZh: "周良辅院士、毛颖教授", expertEn: "Zhou Liangfu & Mao Ying", achievementZh: "在脑肿瘤、胶质瘤与脑血管病外科方面长期领先，脑胶质瘤手术量居国际前列。", achievementEn: "A long-standing leader in brain tumours, glioma and cerebrovascular surgery, with globally significant case volume." },
    ],
  },
] as const;

export function FeaturedHospitals({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return <section id="hospitals" className="bg-[#f4f7f7]">
    <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[820px] text-center"><p className="eyebrow">{zh ? "上海优质医疗资源" : "Leading medical resources in Shanghai"}</p><h2 className="section-title mx-auto mt-3">{zh ? "连接上海顶尖公立医院与权威专家" : "Access leading Shanghai public hospitals and specialists"}</h2><p className="mx-auto mt-5 max-w-[68ch] text-[15px] leading-7 text-slate-600">{zh ? "聚焦上海头部公立医院的全国优势专科与知名专家资源，从医院实力、专科排名到专家专长一并呈现，帮助国际患者更高效地匹配合适的医院、科室与就医路径。" : "Explore Shanghai's leading public hospitals, nationally ranked departments and renowned specialists in one place, helping international patients identify a suitable hospital, department and care pathway more efficiently."}</p></div>
      <div className="mt-12 grid gap-8">{hospitals.map((hospital,index)=><article key={hospital.key} className="overflow-hidden rounded-[28px] border border-[#d8e3e4] bg-white shadow-[0_18px_50px_rgba(18,48,74,.06)] lg:grid lg:grid-cols-[.86fr_1.14fr]">
        <div className="relative flex min-h-[430px] flex-col overflow-hidden bg-[#12304A] text-white"><div className="relative h-64 overflow-hidden lg:h-[285px]"><Image src={`/images/hospitals/${hospital.key}.webp`} alt={zh ? hospital.nameZh : hospital.nameEn} fill sizes="(min-width:1024px) 42vw,100vw" className="object-cover transition duration-500 hover:scale-[1.025]"/><div className="absolute inset-0 bg-gradient-to-t from-[#12304A]/70 to-transparent"/><span className="absolute left-5 top-5 rounded-lg bg-white/92 px-3 py-2 text-xs font-bold text-[#12304A]">0{index+1}</span></div><div className="flex flex-1 flex-col p-7"><div className="flex items-center gap-2 text-xs font-semibold text-[#65d1ca]"><Building2 size={15}/>{zh ? "公立三级甲等综合医院" : "Public tertiary hospital"}</div><h3 className="mt-3 font-serif text-[1.65rem] leading-tight">{zh ? hospital.nameZh : hospital.nameEn}</h3><p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-300"><MapPin size={15} className="mt-0.5 shrink-0 text-[#65d1ca]"/>{zh ? hospital.addressZh : hospital.addressEn}</p><p className="mt-4 text-sm leading-6 text-slate-200">{zh ? hospital.summaryZh : hospital.summaryEn}</p><div className="mt-auto pt-6"><span className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold"><Trophy size={15} className="text-[#65d1ca]"/>{zh ? `复旦版中国医院排行榜：${hospital.overall}` : `Fudan hospital rating: ${hospital.overall}`}</span></div></div></div>
        <div className="p-6 sm:p-8"><div className="border-b border-slate-200 pb-5"><p className="text-sm font-bold text-[#0F8F8A]">{zh ? "优势专科与代表专家" : "Leading departments and specialists"}</p></div><div className="divide-y divide-slate-200">{hospital.departments.map((department)=><div key={department.nameZh} className="py-6"><div className="flex flex-wrap items-center justify-between gap-3"><h4 className="text-lg font-bold text-[#12304A]">{zh ? department.nameZh : department.nameEn}</h4><span className="rounded-md bg-[#e6f4f2] px-3 py-1.5 text-xs font-bold tabular-nums text-[#08746f]">{zh ? department.rankZh : department.rankEn}</span></div><div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1.4fr]"><div className="flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#eef3f5] text-[#0F8F8A]"><UserRound size={17}/></span><div><p className="text-[11px] font-semibold text-slate-400">{zh ? "代表专家" : "Representative specialist"}</p><p className="mt-1 text-sm font-bold leading-5 text-[#12304A]">{zh ? department.expertZh : department.expertEn}</p></div></div><p className="text-[13px] leading-6 text-slate-600">{zh ? department.achievementZh : department.achievementEn}</p></div></div>)}</div></div>
      </article>)}</div>
      <div className="mt-9 flex justify-center"><a href={`${zh ? "/zh" : ""}/hospitals`} className="button-primary min-w-52 justify-center">{zh ? "查看更多医院与专家" : "Explore more hospitals and specialists"}<ArrowRight size={16}/></a></div>
      <p className="mt-6 text-center text-xs leading-6 text-slate-400">{zh ? "资料整理自医院公开信息及复旦版《中国医院专科声誉排行榜》2024。排名用于帮助理解专科优势，不代表接诊承诺；专家号源与具体安排以医院回复为准。" : "Compiled from hospital public information and the 2024 Fudan specialty reputation ranking. Rankings indicate department strength and do not guarantee acceptance or specialist availability."}</p>
    </div>
  </section>;
}
