import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
export const metadata: Metadata = { title: "隐私政策", description: "MedVia China 如何收集、使用与保护咨询信息。", alternates: { canonical: "/zh/privacy-policy", languages: { en: "/privacy-policy", "zh-CN": "/zh/privacy-policy", "x-default": "/privacy-policy" } } };
export default function Page(){return <LegalPage locale="zh" kind="privacy"/>}
