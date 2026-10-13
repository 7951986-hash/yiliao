export type Locale = "en" | "zh";

export const content = {
  en: {
    locale: "en" as const,
    langLabel: "简体中文",
    langHref: "/zh/",
    nav: [
      ["Hospitals", "#hospitals"],
      ["Specialties", "#specialties"],
      ["Find a Specialist", "#specialist"],
      ["Treatment Costs", "#costs"],
      ["Services", "#services"],
      ["Patient Guide", "#guides"],
      ["About", "#about"],
    ],
    eyebrow: "Independent support for international patients",
    heroTitle: "Access leading hospitals and medical specialists in Shanghai",
    heroBody:
      "Understand your hospital options, prepare the right information, and coordinate each practical step of your medical visit with one bilingual team.",
    primaryCta: "Request medical assistance",
    secondaryCta: "Explore Shanghai hospitals",
    trustPoints: ["Non-clinical coordination", "Hospital fees paid directly", "No appointment guarantees"],
    form: {
      kicker: "Private enquiry",
      title: "Tell us what care you are looking for",
      body: "Share a brief overview. Please do not send medical records or identity documents through this form.",
      name: "Full name",
      email: "Email",
      country: "Country or region",
      whatsapp: "WhatsApp (optional)",
      specialty: "Medical need",
      request: "Brief request",
      consent: "I agree to the privacy policy and understand this is not medical advice.",
      submit: "Send enquiry",
      submitting: "Sending…",
      success: "Thank you. Your enquiry has been received.",
      error: "We could not send your enquiry. Please try again or contact us on WhatsApp.",
    },
    medicalNeedsTitle: "Start with your medical need",
    medicalNeedsBody: "Choose a field to understand the relevant Shanghai hospital landscape. This is informational navigation, not diagnosis.",
    hospitalsTitle: "Selected Shanghai public hospitals",
    hospitalsBody: "A research-led view of major public hospitals. Inclusion does not imply a partnership or guaranteed access.",
    verified: "Official information reviewed",
    specialtiesTitle: "Explore medical specialties",
    specialtiesBody: "We connect each specialty to relevant hospitals, practical preparation and the right next question to ask.",
    whyTitle: "Why plan medical care in Shanghai?",
    whyBody: "Shanghai brings together large public teaching hospitals, highly specialised departments and international transport links. The right route still depends on your condition, records and each hospital’s acceptance process.",
    specialistTitle: "Find the right specialist pathway",
    specialistBody: "Good coordination starts before an appointment request. We help organise the information a hospital needs, identify relevant departments and support the contact process.",
    costTitle: "Understand the full cost picture",
    costBody: "A responsible estimate separates hospital charges, concierge service fees and personal travel expenses. Final medical charges are set by the hospital after clinical review.",
    servicesTitle: "Medical concierge services in Shanghai",
    servicesBody: "Choose only the coordination support you need. Hospital care and clinical decisions remain with licensed medical providers.",
    processTitle: "How to plan your medical visit",
    processBody: "Seven practical stages, with hospital confirmation before travel decisions are finalised.",
    complianceTitle: "Clear boundaries build trust",
    complianceBody: "Shanghai Medical Concierge is an independent information and non-clinical coordination service. We are not a hospital, clinic, insurer or diagnostic service.",
    guidesTitle: "Patient guides for planning ahead",
    guidesBody: "Plain-language guidance for records, payment and travel preparation. Policy details are checked against current official sources before publication.",
    faqTitle: "Common questions",
    finalTitle: "Start planning your medical visit to Shanghai",
    finalBody: "Tell us what you need. We will explain the next practical step without promising a medical outcome or appointment.",
    footerText: "Independent hospital information and non-clinical coordination for international patients in Shanghai.",
  },
  zh: {
    locale: "zh" as const,
    langLabel: "English",
    langHref: "/",
    nav: [
      ["医院", "#hospitals"], ["医疗专科", "#specialties"], ["匹配专家", "#specialist"],
      ["治疗费用", "#costs"], ["我们的服务", "#services"], ["患者指南", "#guides"], ["关于我们", "#about"],
    ],
    eyebrow: "面向国际患者的独立就医协调服务",
    heroTitle: "连接上海优质医院与医疗专家",
    heroBody: "了解医院选择，准备合适的就医资料，并由双语团队协助协调来沪就医中的各项非临床事务。",
    primaryCta: "申请就医协助",
    secondaryCta: "了解上海医院",
    trustPoints: ["非临床协调服务", "医疗费直接支付医院", "不承诺专家号源"],
    form: {
      kicker: "私密咨询",
      title: "请告诉我们您需要什么帮助",
      body: "请简要说明需求。请勿通过此表单发送病历、护照或其他身份文件。",
      name: "姓名",
      email: "电子邮箱",
      country: "国家或地区",
      whatsapp: "WhatsApp（选填）",
      specialty: "医疗需求",
      request: "简要需求",
      consent: "我同意隐私政策，并理解本服务不提供医疗诊断或建议。",
      submit: "提交咨询",
      submitting: "正在提交…",
      success: "感谢您的咨询，我们已收到您的信息。",
      error: "暂时无法提交，请稍后重试或通过 WhatsApp 联系我们。",
    },
    medicalNeedsTitle: "从您的医疗需求开始",
    medicalNeedsBody: "选择医疗方向，了解上海相关医院资源。本功能仅用于信息导航，不构成诊断。",
    hospitalsTitle: "上海主要公立医院",
    hospitalsBody: "基于官方公开资料整理。医院被收录不代表与本平台存在合作关系，也不代表能够保证接诊。",
    verified: "已核对官方公开信息",
    specialtiesTitle: "探索医疗专科",
    specialtiesBody: "将医疗专科与相关医院、行前准备和正确的咨询问题连接起来。",
    whyTitle: "为什么在上海规划医疗服务？",
    whyBody: "上海汇集大型公立教学医院、高度细分的专业科室与便利的国际交通。具体路径仍取决于病情、病历资料及医院接诊流程。",
    specialistTitle: "寻找合适的专家就医路径",
    specialistBody: "有效协调从预约之前开始。我们协助整理医院需要的信息、识别相关科室并推进联系流程。",
    costTitle: "了解完整费用构成",
    costBody: "负责任的费用说明会区分医院医疗费、平台服务费和个人差旅支出。最终医疗费用由医院完成评估后确定。",
    servicesTitle: "上海医疗礼宾服务",
    servicesBody: "按需选择协调服务。医疗行为和临床决策始终由持牌医疗机构及医生负责。",
    processTitle: "如何规划来沪就医",
    processBody: "七个清晰阶段，并在确定出行之前先取得医院的实际反馈。",
    complianceTitle: "清晰边界，建立信任",
    complianceBody: "Shanghai Medical Concierge 是独立的信息与非临床协调服务机构，不是医院、诊所、保险机构或诊断平台。",
    guidesTitle: "国际患者行前指南",
    guidesBody: "围绕病历、付款和行程准备提供易懂信息。政策内容仅在完成官方来源核验后发布。",
    faqTitle: "常见问题",
    finalTitle: "开始规划您的上海就医行程",
    finalBody: "告诉我们您的需求。我们会说明下一步可行流程，但不会承诺医疗结果或预约成功。",
    footerText: "为国际患者提供上海医院信息和非临床就医协调服务。",
  },
};

export type SiteCopy = (typeof content)[Locale];

export const medicalNeeds = ["Oncology", "Cardiology", "Neurology & Neurosurgery", "Orthopedics", "Gastroenterology", "Endocrinology", "Ophthalmology", "Dermatology", "Pediatrics"];

export const hospitals = [
  { name: "Ruijin Hospital", zh: "上海交通大学医学院附属瑞金医院", area: "Huangpu", type: "Public teaching hospital", specialties: ["Endocrinology", "Hematology", "Burn care"], source: "Hospital official website", reviewed: "2026-10" },
  { name: "Zhongshan Hospital, Fudan University", zh: "复旦大学附属中山医院", area: "Xuhui", type: "Public teaching hospital", specialties: ["Cardiology", "Liver surgery", "Respiratory medicine"], source: "Hospital official website", reviewed: "2026-10" },
  { name: "Huashan Hospital, Fudan University", zh: "复旦大学附属华山医院", area: "Jing’an", type: "Public teaching hospital", specialties: ["Neurology", "Neurosurgery", "Dermatology"], source: "Hospital official website", reviewed: "2026-10" },
  { name: "Renji Hospital", zh: "上海交通大学医学院附属仁济医院", area: "Pudong / Huangpu", type: "Public teaching hospital", specialties: ["Gastroenterology", "Rheumatology", "Urology"], source: "Hospital official website", reviewed: "2026-10" },
];

export const services = ["Hospital appointment assistance", "Specialist pathway matching", "Medical translation", "On-site medical concierge", "Visa document assistance", "Airport transfer", "Accommodation assistance"];
export const servicesZh = ["医院预约协助", "专家路径匹配", "医疗翻译", "院内陪诊协调", "签证材料协助", "机场接送", "住宿安排协助"];

export const processSteps = ["Submit your request", "Discuss your needs", "Review hospital options", "Coordinate appointments", "Prepare for Shanghai", "Receive on-site assistance", "Follow-up coordination"];
export const processStepsZh = ["提交需求", "沟通医疗需求", "了解医院选择", "协调预约流程", "准备上海行程", "获得在地协助", "协调后续随访"];

export const guides = [
  ["How to see a doctor in Shanghai", "Understand the usual route from initial enquiry to hospital confirmation."],
  ["Preparing medical records", "Organise summaries, imaging and pathology information before hospital review."],
  ["Paying hospital fees in China", "Learn why medical fees and concierge fees should remain separate."],
  ["Preparing for medical travel", "Plan timing, accommodation, payment and local support with realistic buffers."],
];

export const guidesZh = [
  ["外国患者如何在上海就医", "了解从首次咨询到医院确认接诊的一般路径。"],
  ["如何准备医疗资料", "在医院审核前整理病历摘要、影像和病理信息。"],
  ["如何支付中国医院费用", "了解为什么医疗费与平台服务费必须分开。"],
  ["来华就医行前准备", "为时间、住宿、付款和在地支持预留合理空间。"],
];

export const faqs = [
  ["Can international patients receive care in Shanghai?", "Many Shanghai hospitals receive international patients, but acceptance routes and requirements differ by hospital, department and case."],
  ["Can you guarantee a specific specialist?", "No. We can help prepare and submit an appropriate request, but availability and acceptance are determined by the hospital and specialist team."],
  ["How are treatment costs confirmed?", "The hospital determines medical charges after reviewing the case. Our non-clinical service fees are quoted separately in writing."],
  ["Do you provide translation and travel support?", "We can coordinate medical translation, on-site accompaniment, airport transfer and accommodation assistance according to the agreed service scope."],
  ["How are hospital fees paid?", "Medical charges should be paid directly to the hospital through its official payment channel. We do not add a markup to hospital bills."],
];

export const faqsZh = [
  ["外国患者可以在上海就医吗？", "上海多家医院接诊国际患者，但不同医院、科室和病例的接诊入口及要求并不相同。"],
  ["可以保证预约指定专家吗？", "不能。我们可以协助准备并提交合适的申请，但是否接诊及排期由医院和专家团队决定。"],
  ["治疗费用如何确定？", "医院在审核病例后确定医疗费用。平台的非临床服务费会另行书面报价。"],
  ["可以提供翻译和行程协助吗？", "可以根据约定范围协调医疗翻译、院内陪同、机场接送和住宿安排。"],
  ["医院医疗费如何支付？", "医疗费应通过医院官方渠道直接支付给医院。我们不会在医院账单上加价。"],
];
