import type {Metadata} from "next";
import {ServicesPage} from "@/components/site/services-page";

export const metadata:Metadata={title:"Medical Concierge Services in Shanghai",description:"Hospital pathways, specialist requests, medical interpretation, on-site support and travel coordination for international patients.",alternates:{canonical:"/services",languages:{en:"/services","zh-CN":"/zh/services"}}};
export default function Page(){return <ServicesPage locale="en"/>}
