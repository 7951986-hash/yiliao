import type { Metadata } from "next";
import { GuidesPage } from "@/components/site/guides-page";

export const metadata: Metadata = { title: "Patient Guides for Medical Travel to China", description: "Guidance on hospital selection, medical records, costs, insurance, interpretation, travel and follow-up for care in China.", alternates: { canonical: "/guides", languages: { en: "/guides", "zh-CN": "/zh/guides" } } };
export default function Page() { return <GuidesPage locale="en"/>; }
