import type { Metadata } from "next";
import { PricingPage } from "@/components/site/pricing-page";

export const metadata: Metadata = { title: "Treatment Costs and Payment in Shanghai", description: "Review indicative treatment costs, international comparisons, fee structure and payment methods for medical care in Shanghai.", alternates: { canonical: "/pricing", languages: { en: "/pricing", "zh-CN": "/zh/pricing" } } };
export default function Page() { return <PricingPage locale="en"/>; }
