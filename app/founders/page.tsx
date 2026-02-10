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
      <div className="mx-auto max-w-[1068px]">
        {/* Hero Section — centered */}
        <div className="mb-10 text-center">
          <h1
            className="font-['Source_Serif_4',serif] font-medium italic tracking-tight text-black"
            style={{ fontSize: 60, lineHeight: "75px" }}
          >
            Founder Directory
          </h1>
          <p className="mx-auto mt-6 max-w-[672px] font-['Outfit',sans-serif] text-[18px] font-extralight leading-[32px] text-black">
            Since 2005, we have invested in over 9,000 founders. Discover YC
            founders by batch, industry, region, and background.
          </p>
          <p className="mx-auto mt-4 font-['Outfit',sans-serif] text-[15px] font-extralight text-black/60">
            Do you know a YC founder?{" "}
            <Link href="/login" className="underline text-[#FF6C0F] hover:text-[#e55c00]">
              Sign in
            </Link>{" "}
            to check.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden w-[300px] shrink-0 lg:block">
            <div className="sticky top-24 space-y-5 rounded-lg border border-[#c6c6c6] bg-[#fdfdf8] p-5">
              <div>
                <input
                  type="text"
                  placeholder="Search for a title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full font-['Outfit',sans-serif] text-black outline-none transition-all placeholder:text-black/40 focus:ring-1 focus:ring-[#FF6C0F]/10"
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

              <div className="h-px bg-[#c6c6c6]" />

              <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1.5 transition-colors hover:bg-black/3">
                <input
                  type="checkbox"
                  checked={topFoundersOnly}
                  onChange={() => setTopFoundersOnly(!topFoundersOnly)}
                  className="h-4 w-4 shrink-0 cursor-pointer rounded border-black/20 text-[#FF6C0F] accent-[#FF6C0F] focus:ring-[#FF6C0F]/30"
                />
                <span className="font-['Outfit',sans-serif] text-[14px] font-normal text-black/80">
                  Top Company Founder
                </span>
              </label>

              <div className="h-px bg-[#c6c6c6]" />

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
                  <div className="h-px bg-[#c6c6c6]" />
                  <button
                    onClick={clearFilters}
                    className="w-full rounded-lg border border-black/10 bg-black/3 py-2 font-['Outfit',sans-serif] text-[13px] font-medium text-black/60 transition-all hover:bg-black/5 hover:text-black"
                  >
                    Clear all filters
                  </button>
                </>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters */}
            <div className="mb-4 flex flex-wrap items-center gap-3 lg:hidden">
              <input
                type="text"
                placeholder="Search for a title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full font-['Outfit',sans-serif] text-black outline-none placeholder:text-black/40"
                style={{
                  height: 30.5,
                  borderRadius: 4,
                  fontSize: 13,
                  padding: "6px 10px",
                  background: "rgb(239,239,232)",
                  border: "none",
                }}
              />
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#c6c6c6] bg-[#fdfdf8] px-3 py-2 transition-colors hover:border-[#FF6C0F]/30">
                <input
                  type="checkbox"
                  checked={topFoundersOnly}
                  onChange={() => setTopFoundersOnly(!topFoundersOnly)}
                  className="h-3.5 w-3.5 cursor-pointer rounded border-black/20 accent-[#FF6C0F]"
                />
                <span className="font-['Outfit',sans-serif] text-[12px] font-medium text-black/70">
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

            <p className="mb-4 font-['Outfit',sans-serif] text-[14px] font-normal text-black/60">
              Showing {filtered.length} of {totalFounders.toLocaleString()}+ founders
            </p>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[#c6c6c6] py-20">
                <svg
                  className="mb-4 h-12 w-12 text-black/20"
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
                <p className="font-['Outfit',sans-serif] text-[15px] font-light text-black/50">
                  No founders match your search.
                </p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-lg border border-[#c6c6c6]">
                {filtered.map((founder, index) => (
                  <FounderRow
                    key={founder.id}
                    founder={founder}
                    isFirst={index === 0}
                    isLast={index === filtered.length - 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FounderRow({
  founder,
  isFirst,
  isLast,
}: {
  founder: Founder;
  isFirst: boolean;
  isLast: boolean;
}) {
  const roleText = extractRole(founder.oneLiner);

  const roundingClass = isFirst && isLast
    ? "rounded-lg"
    : isFirst
      ? "rounded-t-lg"
      : isLast
        ? "rounded-b-lg"
        : "";

  return (
    <Link
      href={`/people/${founder.slug}`}
      className={`flex items-center gap-4 bg-[#fdfdf8] px-5 py-4 ${!isLast ? "border-b border-[#c6c6c6]" : ""} ${roundingClass}`}
    >
      {/* Avatar */}
      <div className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full bg-[#efefe8]">
        <span className="font-['Outfit',sans-serif] text-[18px] font-bold text-[#8a8575]">
          {founder.photoPlaceholder}
        </span>
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-['Outfit',sans-serif] text-[18px] font-extralight text-black">
            {founder.name}
          </span>
          <span className="font-['Outfit',sans-serif] text-[18px] font-extralight text-black">
            {roleText} at {founder.company}
          </span>
          <span className="rounded bg-[#e6e6dd] px-2.5 py-1 font-['Outfit',sans-serif] text-[10px] font-medium text-[#333]">
            {founder.batch}
          </span>
        </div>
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
        className="w-full rounded-lg border border-[#c6c6c6] bg-[#f5f5ee]/50 px-3 py-2 font-['Outfit',sans-serif] text-[13px] font-normal text-black/80 outline-none transition-all focus:border-[#FF6C0F]/30 focus:ring-1 focus:ring-[#FF6C0F]/10"
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
      className="rounded-lg border border-[#c6c6c6] bg-[#fdfdf8] px-3 py-2 font-['Outfit',sans-serif] text-[12px] font-medium text-black/70 outline-none transition-all focus:border-[#FF6C0F]/30"
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
