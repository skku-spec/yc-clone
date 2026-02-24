"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import {
  Member,
  MEMBERS,
  BATCH_OPTIONS,
  MEMBER_TYPE_OPTIONS,
  PROJECT_OPTIONS,
} from "@/lib/founders-data";

const PROJECT_LABEL_MAP: Record<string, string> = Object.fromEntries(
  PROJECT_OPTIONS.map((p) => [p.value, p.label])
);

export default function FoundersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedMemberType, setSelectedMemberType] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const filtered = useMemo(() => {
    return MEMBERS.filter((m) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          m.name.toLowerCase().includes(q) ||
          (m.major?.toLowerCase().includes(q) ?? false) ||
          m.batchTags.some((t) => t.toLowerCase().includes(q)) ||
          m.projects.some((p) => (PROJECT_LABEL_MAP[p] ?? p).toLowerCase().includes(q));
        if (!match) return false;
      }

      if (selectedBatch && !m.batchTags.some((t) => t.startsWith(selectedBatch))) return false;
      if (selectedMemberType && m.memberType !== selectedMemberType) return false;
      if (selectedProject && !m.projects.includes(selectedProject)) return false;

      return true;
    });
  }, [searchQuery, selectedBatch, selectedMemberType, selectedProject]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBatch("");
    setSelectedMemberType("");
    setSelectedProject("");
  };

  const hasActiveFilters =
    selectedBatch || selectedMemberType || selectedProject;

  return (
    <div className="min-h-screen px-4 pb-24 pt-14 md:px-8 md:pt-20">
      <div className="mx-auto max-w-[1068px]">
        <div className="mb-10 text-center">
          <PageHeader title="Members" subtitle="SPEC 1~4기 멤버 디렉토리입니다." align="center" className="mb-0 md:mb-0" />
          <p className="mx-auto mt-6 font-['Pretendard',sans-serif] text-[15px] font-normal text-black/60">
            SPEC 알럼나이를 찾고 계신가요?{" "}
            <Link href="/login" className="underline text-[#FF6C0F] hover:text-[#e55c00]">
              로그인
            </Link>
            하여 확인하세요.
          </p>
        </div>

        <div className="flex gap-8">
          <aside className="hidden w-[240px] shrink-0 lg:block">
            <div className="sticky top-24 space-y-5 rounded-lg border border-[#c6c6c6] bg-[#fdfdf8] p-5">
              <div>
                <input
                  type="text"
                  placeholder="멤버 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full font-['Pretendard',sans-serif] text-black outline-none transition-all placeholder:text-black/40 focus:ring-1 focus:ring-[#FF6C0F]/10"
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

              <FilterSelect
                label="구분"
                value={selectedMemberType}
                onChange={setSelectedMemberType}
                options={MEMBER_TYPE_OPTIONS}
                placeholder="전체"
              />

              <FilterSelect
                label="기수"
                value={selectedBatch}
                onChange={setSelectedBatch}
                options={BATCH_OPTIONS}
                placeholder="전체 기수"
              />

              <FilterSelect
                label="프로젝트"
                value={selectedProject}
                onChange={setSelectedProject}
                options={PROJECT_OPTIONS}
                placeholder="전체 프로젝트"
              />

              {hasActiveFilters && (
                <>
                  <div className="h-px bg-[#c6c6c6]" />
                  <button
                    onClick={clearFilters}
                    className="w-full rounded-lg border border-black/10 bg-black/3 py-2 font-['Pretendard',sans-serif] text-[13px] font-medium text-black/60 transition-all hover:bg-black/5 hover:text-black"
                  >
                    필터 초기화
                  </button>
                </>
              )}
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-3 lg:hidden">
              <input
                type="text"
                placeholder="멤버 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full font-['Pretendard',sans-serif] text-black outline-none placeholder:text-black/40"
                style={{
                  height: 30.5,
                  borderRadius: 4,
                  fontSize: 13,
                  padding: "6px 10px",
                  background: "rgb(239,239,232)",
                  border: "none",
                }}
              />
              <MobileFilterSelect
                value={selectedMemberType}
                onChange={setSelectedMemberType}
                options={MEMBER_TYPE_OPTIONS}
                placeholder="구분"
              />
              <MobileFilterSelect
                value={selectedBatch}
                onChange={setSelectedBatch}
                options={BATCH_OPTIONS}
                placeholder="기수"
              />
              <MobileFilterSelect
                value={selectedProject}
                onChange={setSelectedProject}
                options={PROJECT_OPTIONS}
                placeholder="프로젝트"
              />
            </div>

            <p className="mb-4 font-['Pretendard',sans-serif] text-[14px] font-normal text-black/60">
              {filtered.length}명의 멤버
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
                <p className="font-['Pretendard',sans-serif] text-[15px] font-normal text-black/50">
                  검색 결과가 없습니다.
                </p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-lg border border-[#c6c6c6]">
                {filtered.map((member, index) => (
                  <MemberRow
                    key={member.id}
                    member={member}
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

function MemberRow({
  member,
  isFirst,
  isLast,
}: {
  member: Member;
  isFirst: boolean;
  isLast: boolean;
}) {
  const roundingClass = isFirst && isLast
    ? "rounded-lg"
    : isFirst
      ? "rounded-t-lg"
      : isLast
        ? "rounded-b-lg"
        : "";

  return (
    <Link
      href={`/people/${member.slug}`}
      className={`flex items-center gap-4 bg-[#fdfdf8] px-5 py-4 transition-colors hover:bg-[#f5f5ee] ${!isLast ? "border-b border-[#c6c6c6]" : ""} ${roundingClass}`}
    >
      <div className="relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-full bg-[#efefe8]">
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt={member.name}
            fill
            className="object-cover"
            sizes="78px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-['Pretendard',sans-serif] text-[18px] font-bold text-[#8a8575]">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-['Pretendard',sans-serif] text-[18px] font-semibold text-black">
            {member.name}
          </span>
          <span className="font-['Pretendard',sans-serif] text-[14px] font-normal text-black/50">
            {member.major ?? "전공 미정"}
          </span>
          <MemberTypeBadge type={member.memberType} />
        </div>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          {member.batchTags.map((tag) => (
            <span key={tag} className="rounded bg-[#e6e6dd] px-2 py-0.5 font-['Pretendard',sans-serif] text-[10px] font-medium text-[#333]">
              {tag}
            </span>
          ))}
          {member.projects.length > 0 && (
            <>
              <span className="mx-1 text-black/20">·</span>
              <span className="font-['Pretendard',sans-serif] text-[12px] font-normal text-black/40">
                {member.projects.map((s) => PROJECT_LABEL_MAP[s] ?? s).join(", ")}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

type FilterOption = string | { value: string; label: string };

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
  options: FilterOption[];
  placeholder: string;
}) {
  return (
    <div>
      <h4
        className="mb-2 font-['Pretendard',sans-serif] text-[#333]"
        style={{ fontSize: 14, fontWeight: 600 }}
      >
        {label}
      </h4>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[#c6c6c6] bg-[#f5f5ee]/50 px-3 py-2 font-['Pretendard',sans-serif] text-[13px] font-normal text-black/80 outline-none transition-all focus:border-[#FF6C0F]/30 focus:ring-1 focus:ring-[#FF6C0F]/10"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => {
          const v = typeof opt === "string" ? opt : opt.value;
          const l = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={v} value={v}>
              {l}
            </option>
          );
        })}
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
  options: FilterOption[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-[#c6c6c6] bg-[#fdfdf8] px-3 py-2 font-['Pretendard',sans-serif] text-[12px] font-medium text-black/70 outline-none transition-all focus:border-[#FF6C0F]/30"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => {
        const v = typeof opt === "string" ? opt : opt.value;
        const l = typeof opt === "string" ? opt : opt.label;
        return (
          <option key={v} value={v}>
            {l}
          </option>
        );
      })}
    </select>
  );
}

const MEMBER_TYPE_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  "러너": { bg: "bg-blue-500/10", text: "text-blue-600", label: "러너" },
  "프러너": { bg: "bg-[#FF6C0F]/10", text: "text-[#FF6C0F]", label: "프러너" },
  alumni: { bg: "bg-emerald-500/10", text: "text-emerald-600", label: "Alumni" },
};

function MemberTypeBadge({ type }: { type: string }) {
  const style = MEMBER_TYPE_STYLES[type];
  if (!style) return null;
  return (
    <span className={`rounded px-2 py-0.5 font-['Pretendard',sans-serif] text-[10px] font-semibold ${style.bg} ${style.text}`}>
      {style.label}
    </span>
  );
}
