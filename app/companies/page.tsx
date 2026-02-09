"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  COMPANIES,
  BATCH_OPTIONS,
  INDUSTRY_OPTIONS,
  REGION_OPTIONS,
  type Company,
} from "@/lib/companies-data";

const ITEMS_PER_PAGE = 40;

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [sortBy, setSortBy] = useState<"default" | "launch">("default");

  const [topCompaniesOnly, setTopCompaniesOnly] = useState(false);
  const [isHiringOnly, setIsHiringOnly] = useState(false);
  const [nonprofitOnly, setNonprofitOnly] = useState(false);
  const [blackFoundedOnly, setBlackFoundedOnly] = useState(false);
  const [womenFoundedOnly, setWomenFoundedOnly] = useState(false);
  const [hispanicLatinoFoundedOnly, setHispanicLatinoFoundedOnly] = useState(false);
  const [selectedBatches, setSelectedBatches] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const [batchExpanded, setBatchExpanded] = useState(false);
  const [industryExpanded, setIndustryExpanded] = useState(false);
  const [regionExpanded, setRegionExpanded] = useState(false);

  const toggleArrayItem = useCallback((arr: string[], item: string): string[] => {
    return arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];
  }, []);

  const filteredCompanies = useMemo(() => {
    const filtered = COMPANIES.filter((c) => {
      const q = searchQuery.toLowerCase();
      if (q && !c.name.toLowerCase().includes(q) && !c.oneLiner.toLowerCase().includes(q)) {
        return false;
      }
      if (topCompaniesOnly && !c.isTopCompany) return false;
      if (isHiringOnly && !c.isHiring) return false;
      if (nonprofitOnly && !c.isNonprofit) return false;
      if (blackFoundedOnly && !c.isBlackFounded) return false;
      if (womenFoundedOnly && !c.isWomenFounded) return false;
      if (hispanicLatinoFoundedOnly && !c.isHispanicLatinoFounded) return false;
      if (selectedBatches.length > 0 && !selectedBatches.includes(c.batch)) return false;
      if (selectedIndustries.length > 0 && !c.industry.some((ind) => selectedIndustries.includes(ind))) return false;
      if (selectedRegions.length > 0 && !selectedRegions.includes(c.region)) return false;
      return true;
    });

    if (sortBy === "launch") {
      return [...filtered].sort((a, b) => {
        const batchOrder = BATCH_OPTIONS;
        return batchOrder.indexOf(a.batch) - batchOrder.indexOf(b.batch);
      });
    }

    return filtered;
  }, [
    searchQuery, topCompaniesOnly, isHiringOnly, nonprofitOnly,
    blackFoundedOnly, womenFoundedOnly, hispanicLatinoFoundedOnly,
    selectedBatches, selectedIndustries, selectedRegions, sortBy,
  ]);

  const displayedCompanies = filteredCompanies.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCompanies.length;

  return (
    <div className="min-h-screen px-4 pb-16 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto max-w-[1200px] text-center">
         <h1
           className="mb-3 font-['Source_Serif_4',serif] font-medium tracking-tight text-[#16140f]"
           style={{ fontSize: "60px", lineHeight: "75px" }}
         >
           Startup Directory
         </h1>
         <p className="mx-auto mb-8 max-w-[640px] font-['Outfit',sans-serif] text-[15px] font-light leading-relaxed text-[#16140f]/60">
           Since 2005, we have invested in over 5,000 companies that have a combined
           valuation of over $1T. To find jobs at a YC startup, visit{" "}
           <Link href="/jobs" className="text-[#16140f] hover:text-[#ff6600]">
             Work at a Startup
           </Link>
           .
         </p>
      </div>

      <div className="mx-auto flex max-w-[1200px] gap-0">
        <aside className="hidden w-[300px] shrink-0 md:block">
          <div className="sticky top-24 space-y-1 overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
             <div className="mb-2">
               <FilterCheckbox label="💎 Top Companies" checked={topCompaniesOnly} onChange={() => setTopCompaniesOnly(!topCompaniesOnly)} />
               <FilterCheckbox label="Is Hiring" checked={isHiringOnly} onChange={() => setIsHiringOnly(!isHiringOnly)} />
               <FilterCheckbox label="Nonprofit" checked={nonprofitOnly} onChange={() => setNonprofitOnly(!nonprofitOnly)} />
             </div>

            <Divider />

            <FilterSection title="Batch" expanded={batchExpanded} onToggle={() => setBatchExpanded(!batchExpanded)}>
              {BATCH_OPTIONS.map((batch) => (
                <FilterCheckbox key={batch} label={batch} checked={selectedBatches.includes(batch)} onChange={() => setSelectedBatches(toggleArrayItem(selectedBatches, batch))} small />
              ))}
            </FilterSection>

            <FilterSection title="Industry" expanded={industryExpanded} onToggle={() => setIndustryExpanded(!industryExpanded)}>
              {INDUSTRY_OPTIONS.map((ind) => (
                <FilterCheckbox key={ind} label={ind} checked={selectedIndustries.includes(ind)} onChange={() => setSelectedIndustries(toggleArrayItem(selectedIndustries, ind))} small />
              ))}
            </FilterSection>

            <FilterSection title="HQ Region" expanded={regionExpanded} onToggle={() => setRegionExpanded(!regionExpanded)}>
              {REGION_OPTIONS.map((region) => (
                <FilterCheckbox key={region} label={region} checked={selectedRegions.includes(region)} onChange={() => setSelectedRegions(toggleArrayItem(selectedRegions, region))} small />
              ))}
            </FilterSection>

            <Divider />

            <div>
              <p className="px-1 py-1.5 font-['Outfit',sans-serif] text-[12px] font-semibold tracking-wide text-[#16140f]/50 uppercase">
                Tags
              </p>
              <FilterCheckbox label="Black-founded" checked={blackFoundedOnly} onChange={() => setBlackFoundedOnly(!blackFoundedOnly)} />
              <FilterCheckbox label="Women-founded" checked={womenFoundedOnly} onChange={() => setWomenFoundedOnly(!womenFoundedOnly)} />
              <FilterCheckbox label="Hispanic/Latino-founded" checked={hispanicLatinoFoundedOnly} onChange={() => setHispanicLatinoFoundedOnly(!hispanicLatinoFoundedOnly)} />
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
           <div className="mb-6">
             <input
               type="text"
               placeholder="Search..."
               value={searchQuery}
               onChange={(e) => {
                 setSearchQuery(e.target.value);
                 setVisibleCount(ITEMS_PER_PAGE);
               }}
               className="w-full border border-[#16140f]/10 bg-white px-4 py-3 font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f] shadow-sm outline-none transition-all placeholder:text-[#16140f]/35 focus:border-[#ff6600]/40 focus:ring-2 focus:ring-[#ff6600]/10"
               style={{ borderRadius: "4px" }}
             />
           </div>

           <div className="mb-4 flex items-center justify-between">
            <p className="font-['Outfit',sans-serif] text-[13px] font-medium tracking-wide text-[#16140f]/50 uppercase">
              {filteredCompanies.length} {filteredCompanies.length === 1 ? "company" : "companies"}
            </p>
            <div className="flex items-center gap-2">
              <span className="font-['Outfit',sans-serif] text-[13px] font-normal text-[#16140f]/50">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "default" | "launch")}
                className="border border-[#16140f]/10 bg-white px-3 py-1.5 font-['Outfit',sans-serif] text-[13px] font-normal text-[#16140f] outline-none focus:border-[#ff6600]/40"
                style={{ borderRadius: "4px" }}
              >
                <option value="default">Default</option>
                <option value="launch">Launch Date</option>
              </select>
            </div>
          </div>

          {displayedCompanies.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-0">
              {displayedCompanies.map((company) => (
                <CompanyCard key={company.slug} company={company} />
              ))}
            </div>
          )}

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="border border-[#ff6600]/20 bg-[#ff6600]/5 px-8 py-3 font-['Outfit',sans-serif] text-[14px] font-medium text-[#ff6600] transition-all hover:border-[#ff6600]/40 hover:bg-[#ff6600]/10"
                style={{ borderRadius: "4px" }}
              >
                Load more companies
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group flex gap-4 border-b border-[#16140f]/6 transition-colors hover:bg-[#ff6600]/3"
      style={{
        background: "rgb(253,253,248)",
        borderRadius: "8px 8px 0 0",
        padding: "16px 20px",
      }}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#16140f]/8 bg-white shadow-sm">
        <span className="font-['Outfit',sans-serif] text-[18px] font-bold text-[#ff6600]">
          {company.name.charAt(0)}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3
            className="font-['Outfit',sans-serif] text-[#16140f] transition-colors group-hover:text-[#ff6600]"
            style={{ fontSize: "18px", fontWeight: 500 }}
          >
            {company.name}
          </h3>
          <span className="font-['Outfit',sans-serif] text-[13px] font-normal text-[#16140f]/50">
            {company.batch}
          </span>
          {company.isTopCompany && (
            <span className="shrink-0 text-[12px]" title="Top Company">💎</span>
          )}
        </div>
        <p className="mt-0.5 line-clamp-1 font-['Outfit',sans-serif] text-[13px] font-light leading-relaxed text-[#16140f]/60">
          {company.oneLiner}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {company.industry.map((tag) => (
            <span key={tag} className="rounded-full bg-[#16140f]/5 px-2 py-0.5 font-['Outfit',sans-serif] text-[11px] font-normal text-[#16140f]/60">
              {tag}
            </span>
          ))}
          {company.isHiring && (
            <span className="rounded-full bg-green-100 px-2 py-0.5 font-['Outfit',sans-serif] text-[11px] font-medium text-green-700">
              Hiring
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function FilterCheckbox({
  label,
  checked,
  onChange,
  small = false,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  small?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1.5 transition-colors hover:bg-[#16140f]/3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 cursor-pointer rounded border-[#16140f]/20 text-[#ff6600] accent-[#ff6600] focus:ring-[#ff6600]/30"
      />
      <span className={`font-['Outfit',sans-serif] font-normal text-[#16140f]/80 ${small ? "text-[13px]" : "text-[14px]"}`}>
        {label}
      </span>
    </label>
  );
}

function FilterSection({
  title,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="py-1">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-1 py-1.5 font-['Outfit',sans-serif] text-[13px] font-semibold tracking-wide text-[#16140f]/70 uppercase transition-colors hover:text-[#16140f]"
      >
        {title}
        <svg className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="mt-1 max-h-[240px] space-y-0 overflow-y-auto pl-1">
          {children}
        </div>
      )}
    </div>
  );
}

function Divider() {
  return <div className="my-3 h-px bg-[#16140f]/8" />;
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#16140f]/15 py-20">
      <svg className="mb-4 h-12 w-12 text-[#16140f]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <p className="font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/50">
        No companies match your search.
      </p>
    </div>
  );
}
