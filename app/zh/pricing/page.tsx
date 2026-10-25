import type { Metadata } from "next";
import { PricingPage } from "@/components/site/pricing-page";

export const metadata: Metadata = { title: "上海治疗费用与支付方式", description: "了解上海常见医疗项目费用参考、国内外费用对比、费用构成和治疗费用支付方式。", alternates: { canonical: "/zh/pricing", languages: { en: "/pricing", "zh-CN": "/zh/pricing" } } };
export default function Page() { return <PricingPage locale="zh"/>; }
