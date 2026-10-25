import type {Metadata} from "next";import {SpecialistsPage} from "@/components/site/specialists-page";
export const metadata:Metadata={title:"匹配上海知名专家",description:"按病情方向查找上海医院、重点专科与知名专家公开资料。",alternates:{canonical:"/zh/specialists",languages:{en:"/specialists","zh-CN":"/zh/specialists","x-default":"/specialists"}}};export default function Page(){return <SpecialistsPage locale="zh"/>}
