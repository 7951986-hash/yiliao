import type { Metadata } from "next";
import { HospitalsPage } from "@/components/site/hospitals-page";

export const metadata: Metadata = { title: "Shanghai Public Hospitals and Specialists", description: "Browse leading Shanghai public hospitals, departments and specialist profiles.", alternates: { canonical: "/hospitals", languages: { en: "/hospitals", "zh-CN": "/zh/hospitals" } } };
export default function Page() { return <HospitalsPage locale="en"/>; }
