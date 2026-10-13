import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "Shanghai Medical Concierge | International Patient Support",
  description: "Explore Shanghai hospital options and receive independent, non-clinical coordination support for specialist pathways, appointments, translation and travel preparation.",
  alternates: { canonical: "/", languages: { "en": "/", "zh-CN": "/zh/", "x-default": "/" } },
  openGraph: { title: "Shanghai Medical Concierge", description: "Independent hospital information and non-clinical patient coordination in Shanghai.", url: "/", locale: "en_US", type: "website", images: ["/images/shanghai-medical-concierge-hero.png"] },
};

export default function Page() { return <HomePage locale="en"/>; }
