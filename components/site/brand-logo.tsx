export function BrandLogo({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  const ink = inverse ? "text-white" : "text-[#12304A]";
  return <span className="inline-flex items-center gap-2.5 sm:gap-3">
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-10 shrink-0 drop-shadow-[0_8px_18px_rgba(18,48,74,.16)] sm:h-11 sm:w-11">
      <defs><linearGradient id="medvia-mark" x1="7" y1="6" x2="42" y2="43" gradientUnits="userSpaceOnUse"><stop stopColor="#12304A"/><stop offset="1" stopColor="#0F9D96"/></linearGradient></defs>
      <rect width="48" height="48" rx="14" fill="url(#medvia-mark)"/>
      <path d="M11.5 30.5c5.8 0 7.2-13 13-13 4.7 0 5.4 8.1 12 8.1" fill="none" stroke="white" strokeWidth="3.2" strokeLinecap="round"/>
      <circle cx="11.5" cy="30.5" r="3" fill="#6FE0D7" stroke="white" strokeWidth="1.6"/>
      <path d="M34.5 11.5v9M30 16h9" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M36.5 25.6l-3.7 7.1-4.1-4.3-5.2 8.1" fill="none" stroke="#6FE0D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    {!compact && <span className="leading-none">
      <strong className={`block text-[17px] font-extrabold tracking-[-.035em] sm:text-[19px] ${ink}`}><span>MedVia</span><span className="ml-1 text-[#0F8F8A]">China</span></strong>
      <span className={`mt-1 block text-[8px] font-bold uppercase tracking-[.14em] sm:mt-1.5 sm:text-[9px] sm:tracking-[.2em] ${inverse ? "text-[#7ee2dc]" : "text-slate-500"}`}>Medical Access · Shanghai</span>
    </span>}
  </span>;
}
