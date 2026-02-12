"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getBreakthroughCompanies, type Company } from "@/lib/companies-data";

const BREAKTHROUGH_COMPANIES = getBreakthroughCompanies();

const TABS = [
  { label: "All", href: "/topcompanies" },
  { label: "Featured", href: "/topcompanies/featured" },
  { label: "Breakthrough", href: "/topcompanies/breakthrough" },
] as const;

export default function BreakthroughCompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = useMemo(() => {
    if (!searchQuery) return BREAKTHROUGH_COMPANIES;
    const q = searchQuery.toLowerCase();
    return BREAKTHROUGH_COMPANIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.oneLiner.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen px-4 pb-24 pt-14 md:px-8 md:pt-20">
      <div className="mx-auto max-w-[1200px]">
         <div className="mb-3 flex items-center justify-center gap-3">
            <span className="text-3xl">🚀</span>
            <h1 className="font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] uppercase tracking-tight text-[#16140f]">
              Breakthrough
            </h1>
          </div>
          <p className="mx-auto mb-8 max-w-[640px] text-center font-['Pretendard',sans-serif] text-[17px] font-normal leading-relaxed text-[#16140f]/80">
           The teams that rewrote the rules.
         </p>

        <div className="mb-8 flex items-center gap-1 border-b border-[#16140f]/10">
           {TABS.map((tab) => (
             <Link
               key={tab.href}
               href={tab.href}
               className={`border-b-2 px-5 py-3 font-['Pretendard',sans-serif] text-[14px] font-medium transition-colors ${
                 tab.href === "/topcompanies/breakthrough"
                   ? "border-[#FF6C0F] text-[#FF6C0F]"
                   : "border-transparent text-[#16140f]/50 hover:text-[#16140f]/80"
               }`}
             >
               {tab.label}
             </Link>
           ))}
        </div>

        <div className="relative mb-6">
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#16140f]/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
           <input
             type="text"
             placeholder="Search breakthrough companies..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full max-w-md rounded-lg border border-[#16140f]/10 bg-white py-3 pl-12 pr-4 font-['Pretendard',sans-serif] text-[15px] font-normal text-[#16140f] shadow-sm outline-none transition-all placeholder:text-[#16140f]/35 focus:border-[#FF6C0F]/40 focus:ring-2 focus:ring-[#FF6C0F]/10"
           />
        </div>

         <p className="mb-4 font-['Pretendard',sans-serif] text-[13px] font-medium tracking-wide text-[#16140f]/50 uppercase">
           {filteredCompanies.length} {filteredCompanies.length === 1 ? "company" : "companies"}
         </p>

        {filteredCompanies.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map((company) => (
              <BreakthroughCompanyCard key={company.slug} company={company} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BreakthroughCompanyCard({ company }: { company: Company }) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group flex flex-col rounded-xl border border-[#16140f]/8 bg-white p-5 shadow-sm transition-all hover:border-[#FF6C0F]/20 hover:shadow-md"
    >
       <div className="mb-3 flex items-start gap-3">
         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#16140f]/8 bg-[#f5f5ee]">
           <span className="font-['Pretendard',sans-serif] text-[16px] font-bold text-[#FF6C0F]">
             {company.name.charAt(0)}
           </span>
         </div>
         <div className="min-w-0 flex-1">
           <div className="flex items-center gap-2">
             <h3 className="font-['Pretendard',sans-serif] text-[15px] font-semibold text-[#16140f] transition-colors group-hover:text-[#FF6C0F]">
               {company.name}
             </h3>
             <span className="text-[12px]">🚀</span>
           </div>
           <span className="font-['Pretendard',sans-serif] text-[12px] font-medium text-[#FF6C0F]/70">
             {company.batch}
           </span>
         </div>
       </div>

       <p className="mb-3 line-clamp-2 flex-1 font-['Pretendard',sans-serif] text-[13px] font-normal leading-relaxed text-[#16140f]/60">
         {company.oneLiner}
       </p>

       <div className="flex flex-wrap gap-1.5">
         {company.industry.map((tag) => (
           <span key={tag} className="rounded-full bg-[#16140f]/5 px-2 py-0.5 font-['Pretendard',sans-serif] text-[11px] font-normal text-[#16140f]/60">
             {tag}
           </span>
         ))}
         {company.isHiring && (
           <span className="rounded-full bg-green-100 px-2 py-0.5 font-['Pretendard',sans-serif] text-[11px] font-medium text-green-700">
             Hiring
           </span>
         )}
       </div>
    </Link>
  );
}

function EmptyState() {
   return (
     <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#16140f]/15 py-20">
       <svg className="mb-4 h-12 w-12 text-[#16140f]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
       </svg>
       <p className="font-['Pretendard',sans-serif] text-[15px] font-normal text-[#16140f]/50">
         No companies match your search.
       </p>
     </div>
   );
 }
