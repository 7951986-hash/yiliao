import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
export const metadata: Metadata = { title: "Terms of Service", description: "Terms governing MedVia China information and non-clinical coordination services.", alternates: { canonical: "/terms-of-service", languages: { en: "/terms-of-service", "zh-CN": "/zh/terms-of-service", "x-default": "/terms-of-service" } } };
export default function Page(){return <LegalPage locale="en" kind="terms"/>}
