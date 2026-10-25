import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
export const metadata: Metadata = { title: "医疗免责声明", description: "MedVia China 医院信息与非临床协调服务的重要范围说明。", alternates: { canonical: "/zh/medical-disclaimer", languages: { en: "/medical-disclaimer", "zh-CN": "/zh/medical-disclaimer", "x-default": "/medical-disclaimer" } } };
export default function Page(){return <LegalPage locale="zh" kind="disclaimer"/>}
