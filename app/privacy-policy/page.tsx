import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
export const metadata: Metadata = { title: "Privacy Policy", description: "How MedVia China collects, uses and protects enquiry information.", alternates: { canonical: "/privacy-policy", languages: { en: "/privacy-policy", "zh-CN": "/zh/privacy-policy", "x-default": "/privacy-policy" } } };
export default function Page(){return <LegalPage locale="en" kind="privacy"/>}
