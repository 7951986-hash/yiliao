"use client";

import { useState } from "react";
import { ArrowUpRight, Languages, Menu, MessageCircle, X } from "lucide-react";
import type { SiteCopy } from "@/lib/site-content";

export function Header({ copy }: { copy: SiteCopy }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 xl:px-12">
        <a href={copy.locale === "zh" ? "/zh/" : "/"} className="group flex items-center gap-3" aria-label="Shanghai Medical Concierge home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#12304A] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(18,48,74,.18)]">SM</span>
          <span className="leading-tight"><strong className="block font-serif text-[17px] text-[#12304A]">Shanghai Medical</strong><span className="block text-[10px] font-semibold uppercase tracking-[.22em] text-[#0F8F8A]">Concierge</span></span>
        </a>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {copy.nav.map(([label, href]) => <a key={label} href={href} className="text-[13px] font-semibold text-slate-600 transition hover:text-[#0F8F8A]">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href={copy.langHref} className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-slate-600 hover:bg-slate-50"><Languages size={16}/>{copy.langLabel}</a>
          <a href="https://wa.me/8613800000000" target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-[#12304A] hover:border-[#0F8F8A]"><MessageCircle size={16}/>WhatsApp</a>
          <a href="#consultation" className="inline-flex h-11 items-center gap-2 rounded-full bg-[#12304A] px-5 text-sm font-semibold text-white transition hover:bg-[#0c253a]">{copy.primaryCta}<ArrowUpRight size={16}/></a>
        </div>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 md:hidden" aria-expanded={open} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden"><nav className="grid gap-1">{copy.nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{label}</a>)}</nav><div className="mt-4 grid grid-cols-2 gap-2"><a href={copy.langHref} className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold">{copy.langLabel}</a><a href="#consultation" onClick={() => setOpen(false)} className="rounded-xl bg-[#12304A] px-4 py-3 text-center text-sm font-semibold text-white">{copy.primaryCta}</a></div></div>}
    </header>
  );
}
