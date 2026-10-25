import type {Metadata} from "next";
import {ServicesPage} from "@/components/site/services-page";

export const metadata:Metadata={title:"我们的服务｜上海国际患者就医协调",description:"为国际患者提供上海医院路径、专家申请、病历翻译、院内陪诊及来沪行程协调等非临床服务。",alternates:{canonical:"/zh/services",languages:{en:"/services","zh-CN":"/zh/services"}}};
export default function Page(){return <ServicesPage locale="zh"/>}
