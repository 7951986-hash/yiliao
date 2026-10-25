import type {Metadata} from "next";import {SpecialtiesPage} from "@/components/site/specialties-page";
export const metadata:Metadata={title:"上海医疗专科导航",description:"按治疗方向查找上海优势医院、重点科室与相关专家。",alternates:{canonical:"/zh/specialties",languages:{en:"/specialties","zh-CN":"/zh/specialties","x-default":"/specialties"}}};export default function Page(){return <SpecialtiesPage locale="zh"/>}
