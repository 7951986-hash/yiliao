import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
export const metadata: Metadata = { title: "Medical Disclaimer", description: "Important limits of MedVia China hospital information and non-clinical coordination services.", alternates: { canonical: "/medical-disclaimer", languages: { en: "/medical-disclaimer", "zh-CN": "/zh/medical-disclaimer", "x-default": "/medical-disclaimer" } } };
export default function Page(){return <LegalPage locale="en" kind="disclaimer"/>}
