import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: { absolute: "Medical Tourism in China | Shanghai Hospitals | MedVia China" },
  description: "Plan medical treatment in China with access to Shanghai public hospitals, specialist pathways, treatment-cost guidance, interpretation and non-clinical patient coordination.",
  alternates: { canonical: "/", languages: { "en": "/", "zh-CN": "/zh/", "x-default": "/" } },
  openGraph: { title: "Medical Tourism in China | Shanghai Hospitals", description: "Shanghai hospital information, specialist pathways and non-clinical coordination for international patients planning medical treatment in China.", url: "/", locale: "en_US", type: "website", images: ["/images/shanghai-medical-concierge-hero.webp"] },
};

export default function Page() { return <HomePage locale="en"/>; }
