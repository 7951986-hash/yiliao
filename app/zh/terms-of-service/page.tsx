import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
export const metadata: Metadata = { title: "服务条款", description: "MedVia China 医院信息与非临床协调服务适用条款。", alternates: { canonical: "/zh/terms-of-service", languages: { en: "/terms-of-service", "zh-CN": "/zh/terms-of-service", "x-default": "/terms-of-service" } } };
export default function Page(){return <LegalPage locale="zh" kind="terms"/>}
