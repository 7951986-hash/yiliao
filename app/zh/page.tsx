import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "上海国际医疗礼宾与就医协调",
  description: "为国际患者提供上海医院信息、专家就医路径、预约协调、医疗翻译及来沪行程准备等非临床服务。",
  alternates: { canonical: "/zh/", languages: { "en": "/", "zh-CN": "/zh/", "x-default": "/" } },
  openGraph: { title: "Shanghai Medical Concierge 上海国际医疗礼宾", description: "上海医院信息与国际患者非临床就医协调服务。", url: "/zh/", locale: "zh_CN", type: "website", images: ["/images/shanghai-medical-concierge-hero.png"] },
};

export default function Page() { return <HomePage locale="zh"/>; }
