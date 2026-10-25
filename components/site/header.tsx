"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Languages, Menu, MessageCircle, X } from "lucide-react";
import type { SiteCopy } from "@/lib/site-content";
import { BrandLogo } from "./brand-logo";

export function Header({ copy }: { copy: SiteCopy }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-5 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a href={copy.locale === "zh" ? "/zh/" : "/"} className="shrink-0" aria-label={copy.locale === "zh" ? "MedVia China 中文首页" : "MedVia China home"}><BrandLogo/></a>

        <nav className="hidden min-w-0 items-center gap-1 xl:flex" aria-label="Primary navigation">
          {copy.nav.map(([label, href]) => <a key={label} href={href} aria-current={active(href) ? "page" : undefined} className={`whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-semibold transition ${active(href) ? "bg-[#eaf6f4] text-[#08746f]" : "text-slate-600 hover:bg-slate-50 hover:text-[#0F8F8A]"}`}>{label}</a>)}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <LanguageSwitch locale={copy.locale}/>
          <a href="https://wa.me/8619858146860" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 px-4 text-sm font-semibold text-[#12304A] transition hover:border-[#0F8F8A] hover:text-[#0F8F8A]"><MessageCircle size={16}/>WhatsApp</a>
          <a href="mailto:support@medviachina.com" className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-[#12304A] px-5 text-sm font-semibold text-white transition hover:bg-[#0c253a]">{copy.primaryCta}<ArrowUpRight size={16}/></a>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 transition hover:border-[#0F8F8A] xl:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>

      {open && <div id="mobile-navigation" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-4 xl:hidden">
        <div className="mb-4"><LanguageSwitch locale={copy.locale} mobile/></div>
        <nav className="grid gap-1" aria-label="Mobile navigation">{copy.nav.map(([label, href]) => <a key={label} href={href} aria-current={active(href) ? "page" : undefined} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-3 text-sm font-semibold ${active(href) ? "bg-[#eaf6f4] text-[#08746f]" : "text-slate-700 hover:bg-slate-50"}`}>{label}</a>)}</nav>
        <div className="mt-4 grid grid-cols-2 gap-2"><a href="https://wa.me/8619858146860" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold">WhatsApp</a><a href="mailto:support@medviachina.com" onClick={() => setOpen(false)} className="rounded-xl bg-[#12304A] px-4 py-3 text-center text-sm font-semibold text-white">{copy.primaryCta}</a></div>
      </div>}
    </header>
  );
}

function LanguageSwitch({ locale, mobile = false }: { locale: "en" | "zh"; mobile?: boolean }) {
  const item = (current: boolean) => `${mobile ? "flex-1" : ""} rounded-full px-3 py-1.5 text-center text-xs font-bold transition ${current ? "bg-white text-[#12304A] shadow-sm" : "text-slate-500 hover:text-[#0F8F8A]"}`;
  return <nav aria-label={locale === "zh" ? "语言切换" : "Language switcher"} className={`flex items-center gap-1 rounded-full bg-slate-100 p-1 ${mobile ? "w-full" : ""}`}><Languages size={15} className="ml-2 shrink-0 text-[#0F8F8A]"/><Link href="/" hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined} className={item(locale === "en")}>EN</Link><Link href="/zh/" hrefLang="zh-CN" lang="zh-CN" aria-current={locale === "zh" ? "page" : undefined} className={item(locale === "zh")}>中文</Link></nav>;
}
