"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
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
  const [womenFoundedOnly, setWomenFoundedOnly] = useState(false);
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
      if (womenFoundedOnly && !c.isWomenFounded) return false;
      if (selectedBatches.length > 0 && !selectedBatches.includes(c.batch)) return false;
      if (selectedIndustries.length > 0 && !c.industry.some((ind) => selectedIndustries.includes(ind))) return false;
      if (selectedRegions.length > 0 && !selectedRegions.includes(c.region)) return false;
      return true;
    });

    if (sortBy === "launch") {
      return [...filtered].sort((a, b) => {
        const batchOrder = BATCH_OPTIONS.map((o) => o.value);
        return batchOrder.indexOf(a.batch) - batchOrder.indexOf(b.batch);
      });
    }

    return filtered;
  }, [
    searchQuery, topCompaniesOnly, isHiringOnly, nonprofitOnly,
    womenFoundedOnly, selectedBatches, selectedIndustries, selectedRegions, sortBy,
  ]);

  const displayedCompanies = filteredCompanies.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCompanies.length;

  return (
    <div className="min-h-screen px-4 pb-24 pt-14 md:px-8 md:pt-20">
      <div className="mx-auto max-w-[1200px]">
        <PageHeader title="SPEC Projects" align="center" />
        <p className="mx-auto mb-8 max-w-[640px] text-center font-['Pretendard',sans-serif] text-[15px] font-normal leading-relaxed text-black/60">
          SPEC 1~2기에서 탄생한 프로젝트들입니다. 매주 챌린지를 거쳐 실제 사업으로
          성장한 팀들을 만나보세요.
        </p>
      </div>

      <div className="mx-auto flex max-w-[1200px] gap-8">
        <aside className="hidden w-[240px] shrink-0 lg:block">
          <div className="sticky top-24 space-y-5 overflow-y-auto rounded-lg border border-[#c6c6c6] bg-[#fdfdf8] p-5" style={{ maxHeight: "calc(100vh - 120px)" }}>
             <div>
               <FilterCheckbox label="Top 기업" checked={topCompaniesOnly} onChange={() => setTopCompaniesOnly(!topCompaniesOnly)} />
               <FilterCheckbox label="채용 중" checked={isHiringOnly} onChange={() => setIsHiringOnly(!isHiringOnly)} />
             </div>

            <Divider />

            <FilterSection title="기수" expanded={batchExpanded} onToggle={() => setBatchExpanded(!batchExpanded)}>
              {BATCH_OPTIONS.map((batch) => (
                <FilterCheckbox key={batch.value} label={batch.label} checked={selectedBatches.includes(batch.value)} onChange={() => setSelectedBatches(toggleArrayItem(selectedBatches, batch.value))} small />
              ))}
            </FilterSection>

            <FilterSection title="분야" expanded={industryExpanded} onToggle={() => setIndustryExpanded(!industryExpanded)}>
              {INDUSTRY_OPTIONS.map((ind) => (
                <FilterCheckbox key={ind} label={ind} checked={selectedIndustries.includes(ind)} onChange={() => setSelectedIndustries(toggleArrayItem(selectedIndustries, ind))} small />
              ))}
            </FilterSection>

            <FilterSection title="지역" expanded={regionExpanded} onToggle={() => setRegionExpanded(!regionExpanded)}>
              {REGION_OPTIONS.map((region) => (
                <FilterCheckbox key={region} label={region} checked={selectedRegions.includes(region)} onChange={() => setSelectedRegions(toggleArrayItem(selectedRegions, region))} small />
              ))}
            </FilterSection>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
           <div className="mb-6">
              <input
                type="text"
                placeholder="프로젝트 검색..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                className="w-full rounded border-none font-['Pretendard',sans-serif] text-[13px] font-normal text-black outline-none transition-all placeholder:text-black/40 focus:ring-1 focus:ring-[#FF6C0F]/10"
                style={{ height: 36, padding: "6px 12px", background: "rgb(239,239,232)" }}
              />
            </div>

           <div className="mb-4 flex items-center justify-between">
            <p className="font-['Pretendard',sans-serif] text-[14px] font-normal text-black/60">
              {filteredCompanies.length}개 프로젝트
            </p>
            <div className="flex items-center gap-2">
              <span className="font-['Pretendard',sans-serif] text-[13px] font-normal text-black/50">
                정렬:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "default" | "launch")}
                className="rounded-lg border border-[#c6c6c6] bg-[#fdfdf8]/50 px-3 py-2 font-['Pretendard',sans-serif] text-[13px] font-normal text-black/80 outline-none transition-all focus:border-[#FF6C0F]/30 focus:ring-1 focus:ring-[#FF6C0F]/10"
              >
                <option value="default">기본</option>
                <option value="launch">기수순</option>
              </select>
            </div>
          </div>

          {displayedCompanies.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="overflow-hidden rounded-lg border border-[#c6c6c6]">
               {displayedCompanies.map((company, index) => (
                 <CompanyCard
                   key={company.slug}
                   company={company}
                   isFirst={index === 0}
                   isLast={index === displayedCompanies.length - 1}
                 />
               ))}
             </div>
          )}

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="rounded-lg border border-black/10 bg-black/3 px-8 py-2.5 font-['Pretendard',sans-serif] text-[13px] font-medium text-black/60 transition-all hover:bg-black/5 hover:text-black"
              >
                더 보기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CompanyCard({ company, isFirst = false, isLast = false }: { company: Company; isFirst?: boolean; isLast?: boolean }) {
  const roundingClass = isFirst && isLast
    ? "rounded-lg"
    : isFirst
      ? "rounded-t-lg"
      : isLast
        ? "rounded-b-lg"
        : "";

  return (
    <Link
      href={`/companies/${company.slug}`}
      className={`group flex items-center gap-4 bg-[#fdfdf8] px-5 py-4 transition-colors hover:bg-[#f5f5ee] ${!isLast ? "border-b border-[#c6c6c6]" : ""} ${roundingClass}`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#efefe8]">
        {company.logoUrl ? (
          <Image src={company.logoUrl} alt={company.name} width={56} height={56} className="h-full w-full object-cover" />
        ) : (
          <span className="font-['Pretendard',sans-serif] text-[18px] font-bold text-[#FF6C0F]">
            {company.name.charAt(0)}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-['Pretendard',sans-serif] text-[18px] font-semibold text-black transition-colors group-hover:text-[#FF6C0F]">
            {company.name}
          </span>
          <span className="font-['Pretendard',sans-serif] text-[15px] font-normal text-black/70">
            {company.batch}
          </span>
          {company.isTopCompany && (
            <span className="rounded bg-[#FF6C0F]/10 px-2 py-0.5 font-['Pretendard',sans-serif] text-[10px] font-semibold text-[#FF6C0F]">
              주요
            </span>
          )}
        </div>
        <p className="mt-1 truncate font-['Pretendard',sans-serif] text-[13px] font-normal text-black/50">
          {company.oneLiner}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {company.industry.map((tag) => (
            <span key={tag} className="rounded bg-[#e6e6dd] px-2.5 py-1 font-['Pretendard',sans-serif] text-[10px] font-medium text-[#333]">
              {tag}
            </span>
          ))}
          {company.isHiring && (
            <span className="rounded bg-green-100 px-2.5 py-1 font-['Pretendard',sans-serif] text-[10px] font-medium text-green-700">
              채용 중
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
    <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1.5 transition-colors hover:bg-black/3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 cursor-pointer rounded border-black/20 text-[#FF6C0F] accent-[#FF6C0F] focus:ring-[#FF6C0F]/30"
      />
      <span className={`font-['Pretendard',sans-serif] font-normal text-black/80 ${small ? "text-[13px]" : "text-[14px]"}`}>
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
        className="flex w-full items-center justify-between px-1 py-1.5 font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#333] transition-colors hover:text-black"
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
  return <div className="h-px bg-[#c6c6c6]" />;
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[#c6c6c6] py-20">
      <svg className="mb-4 h-12 w-12 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <p className="font-['Pretendard',sans-serif] text-[15px] font-normal text-black/50">
        검색 결과가 없습니다.
      </p>
    </div>
  );
}
