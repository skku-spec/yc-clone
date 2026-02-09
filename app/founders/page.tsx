"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Founder,
  FOUNDERS,
  BATCH_OPTIONS,
  INDUSTRY_OPTIONS,
} from "@/lib/founders-data";

const ROLE_OPTIONS = ["CEO", "CTO", "Founder", "COO", "Co-founder"];

export default function FoundersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [topFoundersOnly, setTopFoundersOnly] = useState(false);

  const filtered = useMemo(() => {
    return FOUNDERS.filter((f) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          f.name.toLowerCase().includes(q) ||
          f.company.toLowerCase().includes(q) ||
          f.oneLiner.toLowerCase().includes(q) ||
          f.batch.toLowerCase().includes(q) ||
          f.industry.toLowerCase().includes(q);
        if (!match) return false;
      }

      if (selectedBatch && f.batch !== selectedBatch) return false;
      if (selectedIndustry && f.industry !== selectedIndustry) return false;
      if (selectedRole) {
        const roleLower = selectedRole.toLowerCase();
        if (!f.oneLiner.toLowerCase().includes(roleLower)) return false;
      }
      if (topFoundersOnly && !f.isTopCompanyFounder) return false;

      return true;
    });
  }, [searchQuery, selectedBatch, selectedIndustry, selectedRole, topFoundersOnly]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBatch("");
    setSelectedIndustry("");
    setSelectedRole("");
    setTopFoundersOnly(false);
  };

  const hasActiveFilters =
    selectedBatch || selectedIndustry || selectedRole || topFoundersOnly;

  const totalFounders = 1000;

  return (
    <div className="min-h-screen px-4 pb-16 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8">
          <h1
            className="mb-3 font-['Source_Serif_4',serif] font-medium italic tracking-tight text-[#16140f]"
            style={{ fontSize: 60, lineHeight: "75px" }}
          >
            Founder Directory
          </h1>
          <p className="max-w-[640px] font-['Outfit',sans-serif] text-[17px] font-light leading-relaxed text-[#16140f]/70">
            Since 2005, we have invested in over 9,000 founders. Discover YC
            founders by batch, industry, region, and background.
          </p>
        </div>

        <div className="flex gap-8">
          <aside className="hidden w-[260px] shrink-0 lg:block">
            <div className="sticky top-24 space-y-5 rounded-xl border border-[#16140f]/8 bg-white p-5 shadow-sm">
              <div>
                <input
                  type="text"
                  placeholder="Search for a title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full font-['Outfit',sans-serif] text-[#16140f] outline-none transition-all placeholder:text-[#16140f]/40 focus:ring-1 focus:ring-[#ff6600]/10"
                  style={{
                    height: 30.5,
                    borderRadius: 4,
                    fontSize: 13,
                    padding: "6px 10px",
                    background: "rgb(239,239,232)",
                    border: "none",
                  }}
                />
              </div>

              <div className="h-px bg-[#16140f]/8" />

              <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1.5 transition-colors hover:bg-[#16140f]/3">
                <input
                  type="checkbox"
                  checked={topFoundersOnly}
                  onChange={() => setTopFoundersOnly(!topFoundersOnly)}
                  className="h-4 w-4 shrink-0 cursor-pointer rounded border-[#16140f]/20 text-[#ff6600] accent-[#ff6600] focus:ring-[#ff6600]/30"
                />
                <span className="font-['Outfit',sans-serif] text-[14px] font-normal text-[#16140f]/80">
                  Top Company Founder
                </span>
              </label>

              <div className="h-px bg-[#16140f]/8" />

              <FilterSelect
                label="Batch"
                value={selectedBatch}
                onChange={setSelectedBatch}
                options={BATCH_OPTIONS}
                placeholder="All batches"
              />

              <FilterSelect
                label="Industry"
                value={selectedIndustry}
                onChange={setSelectedIndustry}
                options={INDUSTRY_OPTIONS}
                placeholder="All industries"
              />

              <FilterSelect
                label="YC Company Role"
                value={selectedRole}
                onChange={setSelectedRole}
                options={ROLE_OPTIONS}
                placeholder="All roles"
              />

              {hasActiveFilters && (
                <>
                  <div className="h-px bg-[#16140f]/8" />
                  <button
                    onClick={clearFilters}
                    className="w-full rounded-lg border border-[#16140f]/10 bg-[#16140f]/3 py-2 font-['Outfit',sans-serif] text-[13px] font-medium text-[#16140f]/60 transition-all hover:bg-[#16140f]/5 hover:text-[#16140f]"
                  >
                    Clear all filters
                  </button>
                </>
              )}
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-3 lg:hidden">
              <input
                type="text"
                placeholder="Search for a title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full font-['Outfit',sans-serif] text-[#16140f] outline-none placeholder:text-[#16140f]/40"
                style={{
                  height: 30.5,
                  borderRadius: 4,
                  fontSize: 13,
                  padding: "6px 10px",
                  background: "rgb(239,239,232)",
                  border: "none",
                }}
              />
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#16140f]/10 bg-white px-3 py-2 transition-colors hover:border-[#ff6600]/30">
                <input
                  type="checkbox"
                  checked={topFoundersOnly}
                  onChange={() => setTopFoundersOnly(!topFoundersOnly)}
                  className="h-3.5 w-3.5 cursor-pointer rounded border-[#16140f]/20 accent-[#ff6600]"
                />
                <span className="font-['Outfit',sans-serif] text-[12px] font-medium text-[#16140f]/70">
                  Top
                </span>
              </label>
              <MobileFilterSelect
                value={selectedBatch}
                onChange={setSelectedBatch}
                options={BATCH_OPTIONS}
                placeholder="Batch"
              />
              <MobileFilterSelect
                value={selectedIndustry}
                onChange={setSelectedIndustry}
                options={INDUSTRY_OPTIONS}
                placeholder="Industry"
              />
              <MobileFilterSelect
                value={selectedRole}
                onChange={setSelectedRole}
                options={ROLE_OPTIONS}
                placeholder="Role"
              />
            </div>

            <p className="mb-4 font-['Outfit',sans-serif] text-[14px] font-normal text-[#16140f]/60">
              Showing {filtered.length} of {totalFounders.toLocaleString()}+ founders
            </p>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#16140f]/15 py-20">
                <svg
                  className="mb-4 h-12 w-12 text-[#16140f]/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                <p className="font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/50">
                  No founders match your search.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((founder) => (
                  <FounderCard key={founder.id} founder={founder} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  const roleText = extractRole(founder.oneLiner);

  return (
    <Link
      href={`/people/${founder.slug}`}
      className="group flex gap-4 rounded-xl border border-[#16140f]/6 bg-white p-4 shadow-sm transition-all hover:border-[#ff6600]/20 hover:shadow-md"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6600]/15 to-[#ff6600]/5 ring-1 ring-[#ff6600]/10">
        <span className="font-['Outfit',sans-serif] text-[14px] font-bold text-[#ff6600]">
          {founder.photoPlaceholder}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2">
          <h3
            className="font-['Outfit',sans-serif] text-[#16140f] transition-colors group-hover:text-[#ff6600]"
            style={{ fontSize: 18, fontWeight: 200 }}
          >
            {founder.name}
          </h3>
          {founder.isTopCompanyFounder && (
            <span className="mt-0.5 shrink-0 text-[12px]" title="Top Company Founder">
              💎
            </span>
          )}
        </div>
        <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
          <span
            className="font-['Outfit',sans-serif] text-[#16140f]/70"
            style={{ fontSize: 13, fontWeight: 200 }}
          >
            {roleText} at {founder.company}
          </span>
          <span className="text-[#16140f]/25">·</span>
          <span
            className="font-['Outfit',sans-serif] text-[#16140f]/60"
            style={{ fontSize: 13, fontWeight: 200 }}
          >
            {founder.batch}
          </span>
        </div>
        <p
          className="mt-1.5 line-clamp-2 font-['Outfit',sans-serif] leading-relaxed text-[#16140f]/55"
          style={{ fontSize: 12, fontWeight: 200 }}
        >
          {founder.oneLiner}
        </p>
      </div>
    </Link>
  );
}

function extractRole(oneLiner: string): string {
  const lower = oneLiner.toLowerCase();
  if (lower.includes("ceo")) return "CEO";
  if (lower.includes("cto")) return "CTO";
  if (lower.includes("coo")) return "COO";
  if (lower.includes("president")) return "President";
  if (lower.includes("co-founder")) return "Co-founder";
  if (lower.includes("founder")) return "Founder";
  return "Founder";
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      <h4
        className="mb-2 font-['Outfit',sans-serif] text-[#333]"
        style={{ fontSize: 14, fontWeight: 600 }}
      >
        {label}
      </h4>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[#16140f]/10 bg-[#f5f5ee]/50 px-3 py-2 font-['Outfit',sans-serif] text-[13px] font-normal text-[#16140f]/80 outline-none transition-all focus:border-[#ff6600]/30 focus:ring-1 focus:ring-[#ff6600]/10"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function MobileFilterSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-[#16140f]/10 bg-white px-3 py-2 font-['Outfit',sans-serif] text-[12px] font-medium text-[#16140f]/70 outline-none transition-all focus:border-[#ff6600]/30"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
