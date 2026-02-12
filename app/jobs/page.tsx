"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  allJobs,
  roleCategoriesWithCounts,
  locationOptionsWithCounts,
} from "./jobsData";
import type { Job } from "./jobsData";

/* ── Category link tabs (inline with H2, separated by border-r) ── */
const categoryLinks = [
  { label: "디자인", slug: "designer" },
  { label: "기획", slug: "product-manager" },
  { label: "마케팅", slug: "marketing" },
  { label: "운영", slug: "operations" },
];

/* ── SEO link data ─────────────────────────────────────────────── */
const seoRoles = roleCategoriesWithCounts.filter((r) => r.slug !== "all");
const seoLocations = locationOptionsWithCounts.filter((l) => l.slug !== "all");

/* ── Relative time helper ─────────────────────────────────────── */
function getTimeAgo(dateStr: string): string {
  const posted = new Date(dateStr.replace(/\./g, "-"));
  const now = new Date();
  const diffMs = now.getTime() - posted.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "오늘";
  if (diffDays === 1) return "1일 전";
  if (diffDays < 7) return `${diffDays}일 전`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}개월 전`;
  return `${Math.floor(diffDays / 365)}년 전`;
}

/* ── Job card — exact YC layout ────────────────────────────────── */
function JobCard({ job }: { job: Job }) {
  return (
    <li className="my-2 flex h-auto w-full flex-col flex-nowrap rounded border border-[#ccc] bg-[#faf9f5] px-5 py-3">
      {/* Top row: logo + company info + apply button */}
      <div className="flex items-start gap-3">
        {/* Company logo — circular, 64×64 desktop / 32×32 mobile */}
        <div
          className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white md:flex"
          style={{ backgroundColor: job.logoColor }}
        >
          {job.logoLetter}
        </div>
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white md:hidden"
          style={{ backgroundColor: job.logoColor }}
        >
          {job.logoLetter}
        </div>

        {/* Company info + job details */}
        <div className="min-w-0 flex-1">
          {/* Company name · description · time ago */}
          <div className="flex flex-wrap items-center gap-x-1 font-['Pretendard',sans-serif] text-sm">
            <span className="font-bold text-[#16140f]">{job.company}</span>
            <span className="text-gray-400">&bull;</span>
            <span className="text-gray-500">{job.description}</span>
            <span className="text-gray-400">&bull;</span>
            <span className="text-gray-400">{getTimeAgo(job.posted)}</span>
          </div>

          {/* Job title — linkColor */}
          <a
            href="#"
            className="mt-1 inline-block font-['Pretendard',sans-serif] text-base font-semibold hover:underline"
            style={{ color: "rgb(38,139,210)" }}
          >
            {job.title}
          </a>

          {/* Job metadata: Full-time | location | salary | remote */}
          <div className="mt-1 flex flex-wrap items-center gap-x-1 font-['Pretendard',sans-serif] text-sm text-gray-500">
            <span>Full-time</span>
            <span className="text-gray-300">|</span>
            <span>{job.location}</span>
            <span className="text-gray-300">|</span>
            <span>{job.salary}</span>
            {job.remote && job.location !== "Remote" && (
              <>
                <span className="text-gray-300">|</span>
                <span>Remote</span>
              </>
            )}
          </div>
        </div>

        {/* Apply button — right side on desktop */}
        <div className="hidden shrink-0 items-start pt-4 md:flex">
          <a
            href="#"
            className="rounded-md bg-[#fb651e] px-3 py-2 font-['Pretendard',sans-serif] text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            지원하기
          </a>
        </div>
      </div>

      {/* Mobile apply button */}
      <div className="mt-3 flex md:hidden">
        <a
          href="#"
          className="rounded-md bg-[#fb651e] px-3 py-2 font-['Pretendard',sans-serif] text-sm font-medium text-white"
        >
          지원하기
        </a>
      </div>
    </li>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function JobsPage() {
  const [activeRole, setActiveRole] = useState("all");

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      return activeRole === "all" || job.roleSlug === activeRole;
    });
  }, [activeRole]);

  const activeRoleLabel =
    roleCategoriesWithCounts.find((r) => r.slug === activeRole)?.label ??
    "전체 포지션";

  return (
    <div className="min-h-screen bg-[#f5f5ee]">
      {/* ── Hero Section — centered, YC-style ────────────── */}
      <section className="flex flex-col items-center px-4 pb-10 pt-16 text-center">
        <div className="mx-auto max-w-[1100px]">
          <h1
            className="text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Find the best startup jobs,
            <br />
            curated by SPEC
          </h1>

          <ul className="mx-auto mt-6 max-w-[600px] list-disc pl-6 text-left font-['Pretendard',sans-serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            <li>수천 개의 스타트업 채용 공고에 한 번에 지원하세요.</li>
            <li>
              SPEC 파운더가 직접 연락하거나, 비공개로 회사를 탐색하세요.
            </li>
            <li>SPEC이 선별한 스타트업에서 일하세요.</li>
          </ul>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block rounded-md bg-[#fb651e] px-3 py-2 font-['Pretendard',sans-serif] text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              지원하기
            </a>
          </div>
        </div>
      </section>

      {/* ── Job Listings Section ─────────────────────────── */}
      <section className="px-4">
        <div className="mx-auto max-w-[1100px]">
          {/* Section header row */}
          <div className="flex flex-col justify-between leading-loose md:flex-row">
            <h2
              className="text-center font-['Pretendard',sans-serif] text-2xl font-light text-[#16140f] md:text-left"
            >
              {activeRole === "all"
                ? "개발 직군 최근 등록 공고"
                : `${activeRoleLabel} 최근 등록 공고`}
            </h2>

            {/* Role filter links — inline, separated by border-r */}
            <ul className="mt-2 flex list-none items-center justify-center p-0 md:mt-0 md:justify-end">
              {categoryLinks.map((cat, i) => (
                <li
                  key={cat.slug}
                  className={`inline px-2 ${
                    i < categoryLinks.length - 1
                      ? "border-r border-gray-300"
                      : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveRole(
                        activeRole === cat.slug ? "all" : cat.slug
                      )
                    }
                    className="cursor-pointer border-none bg-transparent p-0 font-['Pretendard',sans-serif] text-sm"
                    style={{
                      color: "rgb(38,139,210)",
                      fontWeight: activeRole === cat.slug ? 600 : 400,
                      textDecoration:
                        activeRole === cat.slug ? "underline" : "none",
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Job cards list */}
          {filteredJobs.length === 0 ? (
            <div className="mt-4 rounded-lg border border-dashed border-[#ccc] px-8 py-16 text-center">
              <p className="font-['Pretendard',sans-serif] text-lg font-normal text-gray-500">
                검색 결과가 없습니다.
              </p>
              <button
                onClick={() => setActiveRole("all")}
                className="mt-4 cursor-pointer border-none bg-transparent font-['Pretendard',sans-serif] text-sm font-medium hover:underline"
                style={{ color: "rgb(38,139,210)" }}
              >
                필터 초기화
              </button>
            </div>
          ) : (
            <ol className="mt-4 list-none p-0">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </ol>
          )}
        </div>
      </section>

      {/* ── SEO Links Section ────────────────────────────── */}
      <section className="px-4 pb-24 pt-16">
        <div className="mx-auto max-w-[1100px]">
          {/* Jobs by Role */}
          <div className="mb-10">
            <h3 className="mb-4 font-['Pretendard',sans-serif] text-base font-semibold text-[#16140f]">
              포지션별 채용
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 md:grid-cols-3">
              {seoRoles.map((r) => (
                <Link
                  key={r.slug}
                  href={`/jobs/role/${r.slug}`}
                  className="font-['Pretendard',sans-serif] text-sm font-normal text-[#16140f] hover:underline"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Jobs by Location */}
          <div className="mb-10">
            <h3 className="mb-4 font-['Pretendard',sans-serif] text-base font-semibold text-[#16140f]">
              지역별 채용
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 md:grid-cols-3">
              {seoLocations.map((l) => (
                <Link
                  key={l.slug}
                  href={`/jobs/location/${l.slug}`}
                  className="font-['Pretendard',sans-serif] text-sm font-normal text-[#16140f] hover:underline"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
