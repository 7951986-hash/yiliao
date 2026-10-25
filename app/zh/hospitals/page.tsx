import type { Metadata } from "next";
import { HospitalsPage } from "@/components/site/hospitals-page";

export const metadata: Metadata = { title: "上海公立医院与知名专家", description: "查看上海重点公立医院、优势专科与知名专家公开资料。", alternates: { canonical: "/zh/hospitals", languages: { en: "/hospitals", "zh-CN": "/zh/hospitals" } } };
export default function Page() { return <HospitalsPage locale="zh"/>; }
