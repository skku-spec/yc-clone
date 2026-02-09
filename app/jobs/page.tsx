"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  allJobs,
  roleCategoriesWithCounts,
  locationOptionsWithCounts,
} from "./jobsData";
import type { Job } from "./jobsData";

/* ── Category link tabs (inline with H2, separated by middot) ── */
const categoryLinks = [
  { label: "Design & UI/UX", slug: "designer" },
  { label: "Product", slug: "product-manager" },
  { label: "Recruiting & HR", slug: "recruiting-hr" },
  { label: "Sales", slug: "sales-manager" },
  { label: "Science", slug: "science" },
];

/* ── SEO link data ─────────────────────────────────────────────── */
const seoRoles = roleCategoriesWithCounts.filter((r) => r.slug !== "all");
const seoLocations = locationOptionsWithCounts.filter((l) => l.slug !== "all");

/* ── Job card — vertical stack layout ──────────────────────────── */
function JobCard({ job }: { job: Job }) {
  return (
    <div className="flex flex-col gap-2 border border-[#ccc] bg-[#fdfdf8] p-5">
      {/* Row 1: Logo + Company name + batch tag + one-liner */}
      <div className="flex items-center gap-3">
        {/* Company logo — 64×64 circular */}
        <div
          className="flex shrink-0 items-center justify-center text-base font-bold text-white"
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: job.logoColor,
          }}
        >
          {job.logoLetter}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[16px] font-bold text-black">
              {job.company}
            </span>
            <span className="rounded bg-[#e6e6dd] px-2.5 py-1 text-[10px] text-black">
              {job.tags[0]}
            </span>
          </div>
          <p className="mt-0.5 text-[14px] font-extralight text-black/60">
            {job.tags.join(" · ")}
          </p>
        </div>
      </div>

      {/* Row 2: Job title as blue link */}
      <a
        href="#"
        className="text-[16px] font-semibold"
        style={{ color: "rgb(38,139,210)" }}
      >
        {job.title}
      </a>

      {/* Row 3: Metadata line */}
      <p className="text-[16px] font-extralight text-black">
        Full-time &middot; {job.role} &middot; {job.location}
      </p>

      {/* Apply button */}
      <div className="mt-1">
        <a
          href="#"
          className="inline-block rounded-md border border-[#fdc2a5] bg-[#fb651e] px-4 py-1.5 text-[14px] font-medium text-white"
        >
          Apply
        </a>
      </div>
    </div>
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
    "All Roles";

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="border-b border-[#d4d4cc] bg-[#f5f5ee] px-4 pb-10 pt-12 md:pb-14 md:pt-20">
        <div className="mx-auto max-w-[900px] text-center">
          {/* H1 — 60px / 75px, centered */}
          <h1
            className="mb-6 font-serif font-medium italic tracking-tight text-[#16140f]"
            style={{ fontSize: 60, lineHeight: "75px" }}
          >
            Find the best startup jobs, curated by YC
          </h1>

          {/* Bullet list — 3 items, exact YC copy */}
          <ul
            className="mx-auto mb-8 max-w-[520px] list-disc text-left text-[16px] font-extralight leading-[24px] text-black"
            style={{ paddingLeft: 24 }}
          >
            <li className="mb-2">
              Apply to thousands of startup jobs with a single profile.
            </li>
            <li className="mb-2">
              Let YC founders contact you or browse companies privately.
            </li>
            <li>
              Find the next Airbnb, Instacart or Coinbase — only YC companies.
            </li>
          </ul>

          {/* Orange CTA button */}
          <div>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-[#fb651e] bg-[#fb651e] px-5 text-[18px] font-bold text-white"
            >
              Find a job &rsaquo;
            </a>
          </div>

          {/* Browse privately link — dark, not blue */}
          <p className="mt-3">
            <a
              href="#"
              className="text-[14px] font-extralight text-[#16140f] underline decoration-[#16140f]/40"
            >
              Browse privately
            </a>
          </p>
        </div>
      </section>

      {/* ── Section heading + role filter bar (inline) ──── */}
      <section className="border-b border-[#d4d4cc] bg-white px-4 py-5">
        <div className="mx-auto max-w-[1068px]">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <h2
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 24,
                fontWeight: 200,
              }}
              className="text-black"
            >
              {activeRole !== "all"
                ? `${activeRoleLabel} jobs`
                : "Software Engineer jobs added recently"}
            </h2>

            {/* Role filter links — inline, separated by middot */}
            {categoryLinks.map((cat, i) => (
              <span key={cat.slug} className="flex items-baseline gap-x-1">
                {i === 0 && (
                  <span className="select-none text-[16px] font-extralight text-black/40">
                    &nbsp;
                  </span>
                )}
                <button
                  onClick={() =>
                    setActiveRole(activeRole === cat.slug ? "all" : cat.slug)
                  }
                  className="cursor-pointer border-none bg-transparent p-0 text-[16px] font-extralight"
                  style={{
                    color: "rgb(38,139,210)",
                    textDecoration:
                      activeRole === cat.slug ? "underline" : "none",
                  }}
                >
                  {cat.label}
                </button>
                {i < categoryLinks.length - 1 && (
                  <span className="select-none text-[16px] font-extralight text-black/40">
                    &middot;
                  </span>
                )}
              </span>
            ))}

            {filteredJobs.length > 0 && (
              <span className="text-[14px] font-normal text-black/40">
                {filteredJobs.length} roles
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Job Listings — full-width single column ─────── */}
      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-[1068px]">
          {filteredJobs.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[#d4d4cc] px-8 py-16 text-center">
              <p className="text-lg font-light text-black/50">
                No jobs match your filters.
              </p>
              <button
                onClick={() => setActiveRole("all")}
                className="mt-4 text-sm font-medium hover:underline"
                style={{ color: "rgb(38,139,210)" }}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}

          {/* See more jobs button — orange */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block rounded-md bg-[#fb651e] px-4 py-2 text-[15px] font-medium text-white"
            >
              See more jobs &rsaquo;
            </a>
          </div>

          {/* ── SEO link sections ─────────────────────────── */}
          <div className="mt-16 border-t border-[#d4d4cc] pt-10">
            {/* Jobs by Role */}
            <div className="mb-10">
              <h3 className="mb-4 text-[16px] font-semibold text-black">
                Jobs by Role
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
                {seoRoles.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/jobs/role/${r.slug}`}
                    className="text-[14px] font-light text-black hover:underline"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Jobs by Location */}
            <div className="mb-10">
              <h3 className="mb-4 text-[16px] font-semibold text-black">
                Jobs by Location
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
                {seoLocations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/jobs/location/${l.slug}`}
                    className="text-[14px] font-light text-black hover:underline"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
