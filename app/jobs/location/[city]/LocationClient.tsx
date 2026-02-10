"use client";

import { useState, useMemo, use } from "react";
import Link from "next/link";
import {
  allJobs,
  roleCategoriesWithCounts,
  locationOptionsWithCounts,
  getLocationLabel,
} from "../../jobsData";
import type { Job } from "../../jobsData";

function JobCard({ job }: { job: Job }) {
  return (
    <div className="group flex items-start gap-4 rounded-lg border border-[#d4d4cc] bg-white px-5 py-4 transition-all hover:border-[#FF6C0F]/30 hover:shadow-md sm:items-center sm:px-6 sm:py-5">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base"
        style={{ backgroundColor: job.logoColor }}
      >
        {job.logoLetter}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <h3 className="truncate font-sans text-[15px] font-semibold leading-tight text-[#16140f] sm:text-base">
            {job.title}
          </h3>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[13px] font-light text-[#16140f]/60">
          <span className="font-medium text-[#16140f]/80">{job.company}</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>{job.location}</span>
          <span className="hidden sm:inline">&middot;</span>
          <span className="text-[#16140f]/50">{job.salary}</span>
        </div>
        <div className="mt-2 hidden flex-wrap gap-1.5 sm:flex">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f5f5ee] px-2.5 py-0.5 font-sans text-[11px] font-normal text-[#16140f]/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="shrink-0 self-center">
        <span className="inline-flex items-center rounded-md border border-[#d4d4cc] px-3 py-1.5 font-sans text-xs font-medium text-[#16140f] transition-colors group-hover:border-[#FF6C0F] group-hover:bg-[#FF6C0F] group-hover:text-white">
          View
        </span>
      </div>
    </div>
  );
}

export default function LocationClient({ params }: { params: Promise<{ city: string }> }) {
  const { city } = use(params);
  const locationLabel = getLocationLabel(city);

  const [activeRole, setActiveRole] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesLocation = job.locationSlug === city;
      const matchesRole =
        activeRole === "all" || job.roleSlug === activeRole;
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesLocation && matchesRole && matchesSearch;
    });
  }, [city, activeRole, searchQuery]);

  const roleCounts = useMemo(() => {
    const cityJobs = allJobs.filter((j) => j.locationSlug === city);
    return roleCategoriesWithCounts.map((r) => ({
      ...r,
      count:
        r.slug === "all"
          ? cityJobs.length
          : cityJobs.filter((j) => j.roleSlug === r.slug).length,
    }));
  }, [city]);

  return (
    <div className="min-h-screen">
      <section className="border-b border-[#d4d4cc] bg-[#f5f5ee] px-4 pb-8 pt-12 md:pb-10 md:pt-16">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-3 font-sans text-sm font-light text-[#16140f]/50">
            <Link href="/jobs" className="hover:text-[#FF6C0F]">
              Jobs
            </Link>{" "}
            <span className="mx-1">&rsaquo;</span> {locationLabel}
          </div>
          <h1 className="mb-3 font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f]">
            Startup Jobs in {locationLabel}
          </h1>
          <p className="max-w-[520px] font-sans text-base font-light leading-relaxed text-[#16140f]/70">
            {filteredJobs.length} open positions at YC startups in {locationLabel}.
          </p>

          <div className="mx-auto mt-6 max-w-[540px]">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#16140f]/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={`Search jobs in ${locationLabel}\u2026`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[#d4d4cc] bg-white py-3 pl-11 pr-4 font-sans text-sm font-light text-[#16140f] shadow-sm outline-none transition-shadow placeholder:text-[#16140f]/35 focus:border-[#FF6C0F]/40 focus:shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d4d4cc] bg-white">
        <div className="scrollbar-none mx-auto flex max-w-[1100px] gap-0 overflow-x-auto px-4">
          {locationOptionsWithCounts
            .filter((l) => l.slug !== "all")
            .map((loc) => (
              <Link
                key={loc.slug}
                href={`/jobs/location/${loc.slug}`}
                className={`group relative shrink-0 px-4 py-3.5 font-sans text-[13px] font-medium transition-colors ${
                  city === loc.slug
                    ? "text-[#FF6C0F]"
                    : "text-[#16140f]/60 hover:text-[#16140f]"
                }`}
              >
                {loc.label}
                {city === loc.slug && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#FF6C0F]" />
                )}
              </Link>
            ))}
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            <aside className="shrink-0 lg:w-[220px]">
              <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#16140f]/40">
                Filter by Role
              </h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
                {roleCounts.map((r) => (
                  <button
                    key={r.slug}
                    onClick={() => setActiveRole(r.slug)}
                    className={`rounded-md px-3 py-1.5 text-left font-sans text-[13px] transition-colors lg:rounded-none lg:border-l-2 lg:py-2 ${
                      activeRole === r.slug
                        ? "border-[#FF6C0F] bg-[#FF6C0F]/5 font-medium text-[#FF6C0F]"
                        : "border-transparent font-light text-[#16140f]/70 hover:bg-[#16140f]/5 hover:text-[#16140f]"
                    }`}
                  >
                    {r.label}
                    <span className="ml-1 text-[11px] opacity-50">
                      {r.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 hidden border-t border-[#d4d4cc] pt-4 lg:block">
                <Link
                  href="/jobs"
                  className="font-sans text-[13px] font-medium text-[#FF6C0F] hover:underline"
                >
                  &larr; All Jobs
                </Link>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-serif text-xl font-medium italic text-[#16140f] md:text-2xl">
                  {activeRole !== "all"
                    ? `${roleCategoriesWithCounts.find((r) => r.slug === activeRole)?.label} jobs in ${locationLabel}`
                    : `All jobs in ${locationLabel}`}
                  <span className="ml-2 font-sans text-sm font-normal not-italic text-[#16140f]/40">
                    {filteredJobs.length} roles
                  </span>
                </h2>
              </div>

              {filteredJobs.length === 0 ? (
                <div className="rounded-lg border border-dashed border-[#d4d4cc] px-8 py-16 text-center">
                  <p className="font-sans text-lg font-light text-[#16140f]/50">
                    No jobs in {locationLabel} match your filters.
                  </p>
                  <button
                    onClick={() => {
                      setActiveRole("all");
                      setSearchQuery("");
                    }}
                    className="mt-4 font-sans text-sm font-medium text-[#FF6C0F] hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
