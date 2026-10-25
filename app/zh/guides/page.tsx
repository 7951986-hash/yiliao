import type { Metadata } from "next";
import { GuidesPage } from "@/components/site/guides-page";

export const metadata: Metadata = { title: "来华就医患者指南", description: "来华就医前的医院选择、资料准备、费用预算、保险、翻译、行程和回国随访指南。", alternates: { canonical: "/zh/guides", languages: { en: "/guides", "zh-CN": "/zh/guides" } } };
export default function Page() { return <GuidesPage locale="zh"/>; }
