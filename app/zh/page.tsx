import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "来华就医服务｜上海公立医院与专家",
  description: "面向国际患者提供来华就医与上海公立医院信息、专家路径、治疗费用参考、医疗翻译及非临床就医协调服务。",
  alternates: { canonical: "/zh/", languages: { "en": "/", "zh-CN": "/zh/", "x-default": "/" } },
  openGraph: { title: "来华就医服务｜上海公立医院与专家", description: "为国际患者提供上海医院信息、专家路径、费用参考和非临床就医协调服务。", url: "/zh/", locale: "zh_CN", type: "website", images: ["/images/shanghai-medical-concierge-hero.webp"] },
};

export default function Page() { return <HomePage locale="zh"/>; }
