"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  allJobs,
  roleCategoriesWithCounts,
  locationOptionsWithCounts,
} from "./jobsData";
import type { Job } from "./jobsData";

/* ── Category link tabs (blue text, no counts) ─────────────── */
const categoryLinks = [
  { label: "Design & UI/UX", slug: "designer" },
  { label: "Product", slug: "product-manager" },
  { label: "Recruiting & HR", slug: "recruiting-hr" },
  { label: "Sales", slug: "sales-manager" },
  { label: "Science", slug: "science" },
];

/* ── Job card ─────────────────────────────────────────────── */
function JobCard({ job }: { job: Job }) {
  return (
    <div
      className="flex items-center gap-4"
      style={{
        padding: "12px 20px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "rgb(253,253,248)",
      }}
    >
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

      {/* Job info */}
      <div className="min-w-0 flex-1">
        <p
          className="font-sans text-[14px] font-medium"
          style={{ color: "#16140f" }}
        >
          {job.company}
        </p>
        <p
          className="font-sans text-[15px] font-semibold leading-tight"
          style={{ color: "#16140f" }}
        >
          {job.title}
        </p>
        <p
          className="mt-0.5 font-sans text-[13px]"
          style={{ color: "rgba(22,20,15,0.55)" }}
        >
          Full-time &bull; {job.role} &bull; Full stack &bull; {job.salary} &bull;{" "}
          {job.location}
        </p>
      </div>

      {/* Apply button — orange */}
      <button
        className="shrink-0 font-sans text-[14px] font-bold text-white"
        style={{
          backgroundColor: "rgb(251,101,30)",
          borderRadius: 6,
          padding: "6px 16px",
        }}
      >
        Apply
      </button>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function JobsPage() {
  const [activeRole, setActiveRole] = useState("all");
  const [activeLocation, setActiveLocation] = useState("all");

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesRole = activeRole === "all" || job.roleSlug === activeRole;
      const matchesLocation =
        activeLocation === "all" || job.locationSlug === activeLocation;
      return matchesRole && matchesLocation;
    });
  }, [activeRole, activeLocation]);

  const activeRoleLabel =
    roleCategoriesWithCounts.find((r) => r.slug === activeRole)?.label ??
    "All Roles";
  const activeLocationLabel =
    locationOptionsWithCounts.find((l) => l.slug === activeLocation)?.label ??
    "All Locations";

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="border-b border-[#d4d4cc] bg-[#f5f5ee] px-4 pb-10 pt-12 md:pb-14 md:pt-20">
        <div className="mx-auto max-w-[900px]" style={{ textAlign: "center" }}>
          {/* H1 — 60px / 75px, centered */}
          <h1
            className="mb-6 font-serif font-medium italic tracking-tight text-[#16140f]"
            style={{ fontSize: 60, lineHeight: "75px", textAlign: "center" }}
          >
            Find the best startup jobs, curated by YC
          </h1>

          {/* Bullet list — 3 items */}
          <ul
            className="mx-auto mb-8 max-w-[520px] list-disc text-left font-sans text-[17px] font-light leading-relaxed text-[#16140f]/70"
            style={{ paddingLeft: 24 }}
          >
            <li className="mb-1">
              Apply to thousands of startup jobs with one profile.
            </li>
            <li className="mb-1">
              Let YC founders contact you about their top jobs.
            </li>
            <li>Find the next Airbnb, Stripe, and DoorDash.</li>
          </ul>

          {/* Orange CTA button */}
          <div>
            <button
              className="font-sans text-white"
              style={{
                fontSize: 18,
                fontWeight: 700,
                backgroundColor: "rgb(251,101,30)",
                borderRadius: 6,
                padding: "8px 16px",
              }}
            >
              Find a job &rsaquo;
            </button>
          </div>

          {/* Browse privately link */}
          <p className="mt-3">
            <a
              href="#"
              className="font-sans text-[14px] font-light underline"
              style={{ color: "rgb(38,139,210)" }}
            >
              Browse privately
            </a>
          </p>
        </div>
      </section>

      {/* ── Section heading + category links ─────────────── */}
      <section className="border-b border-[#d4d4cc] bg-white px-4 py-5">
        <div className="mx-auto max-w-[1100px]">
          <h2
            className="mb-3"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 24,
              fontWeight: 200,
              color: "#16140f",
            }}
          >
            Software Engineer jobs added recently
          </h2>

          {/* Blue text links — no counts, no tabs */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {categoryLinks.map((cat) => (
              <button
                key={cat.slug}
                onClick={() =>
                  setActiveRole(activeRole === cat.slug ? "all" : cat.slug)
                }
                style={{
                  color: "rgb(38,139,210)",
                  fontSize: 16,
                  fontWeight: 200,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textDecoration:
                    activeRole === cat.slug ? "underline" : "none",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Sidebar — Location Filters */}
            <aside className="shrink-0 lg:w-[220px]">
              <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#16140f]/40">
                Location
              </h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
                {locationOptionsWithCounts.map((loc) => (
                  <button
                    key={loc.slug}
                    onClick={() => setActiveLocation(loc.slug)}
                    className={`rounded-md px-3 py-1.5 text-left font-sans text-[13px] transition-colors lg:rounded-none lg:border-l-2 lg:py-2 ${
                      activeLocation === loc.slug
                        ? "border-[#ff6600] bg-[#ff6600]/5 font-medium text-[#ff6600]"
                        : "border-transparent font-light text-[#16140f]/70 hover:bg-[#16140f]/5 hover:text-[#16140f]"
                    }`}
                  >
                    {loc.label}
                    <span className="ml-1 text-[11px] opacity-50">
                      {loc.count}
                    </span>
                  </button>
                ))}

                <div className="mt-4 hidden border-t border-[#d4d4cc] pt-4 lg:block">
                  <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-[#16140f]/40">
                    Browse by Role
                  </h3>
                  {roleCategoriesWithCounts
                    .filter((r) => r.slug !== "all")
                    .map((r) => (
                      <Link
                        key={r.slug}
                        href={`/jobs/role/${r.slug}`}
                        className="block py-1.5 font-sans text-[13px] font-light transition-colors"
                        style={{ color: "rgb(38,139,210)" }}
                      >
                        {r.label} &rarr;
                      </Link>
                    ))}
                </div>

                <div className="mt-4 hidden border-t border-[#d4d4cc] pt-4 lg:block">
                  <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-[#16140f]/40">
                    Browse by City
                  </h3>
                  {locationOptionsWithCounts
                    .filter((l) => l.slug !== "all")
                    .map((l) => (
                      <Link
                        key={l.slug}
                        href={`/jobs/location/${l.slug}`}
                        className="block py-1.5 font-sans text-[13px] font-light transition-colors"
                        style={{ color: "rgb(38,139,210)" }}
                      >
                        {l.label} &rarr;
                      </Link>
                    ))}
                </div>
              </div>
            </aside>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: 24,
                    fontWeight: 200,
                    color: "#16140f",
                  }}
                >
                  {activeRole !== "all"
                    ? `${activeRoleLabel} jobs`
                    : activeLocation !== "all"
                      ? `Jobs in ${activeLocationLabel}`
                      : "Software Engineer jobs added recently"}
                  <span className="ml-2 font-sans text-sm font-normal text-[#16140f]/40">
                    {filteredJobs.length} roles
                  </span>
                </h2>
              </div>

              {filteredJobs.length === 0 ? (
                <div className="rounded-lg border border-dashed border-[#d4d4cc] px-8 py-16 text-center">
                  <p className="font-sans text-lg font-light text-[#16140f]/50">
                    No jobs match your filters.
                  </p>
                  <button
                    onClick={() => {
                      setActiveRole("all");
                      setActiveLocation("all");
                    }}
                    className="mt-4 font-sans text-sm font-medium hover:underline"
                    style={{ color: "rgb(38,139,210)" }}
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div>
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Read More link — BLUE */}
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="font-sans text-[15px] font-medium"
                  style={{ color: "rgb(38,139,210)" }}
                >
                  Read More &rarr;
                </a>
              </div>

              {/* Recently added section */}
              {activeRole === "all" && activeLocation === "all" && (
                <div className="mt-12">
                  <h2
                    className="mb-6"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 24,
                      fontWeight: 200,
                      color: "#16140f",
                    }}
                  >
                    Software Engineer jobs added recently
                  </h2>
                  <div>
                    {allJobs
                      .filter((j) => j.roleSlug === "software-engineer")
                      .slice(0, 5)
                      .map((job) => (
                        <JobCard key={`recent-${job.id}`} job={job} />
                      ))}
                  </div>
                  {/* Read More — BLUE */}
                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="font-sans text-[15px] font-medium"
                      style={{ color: "rgb(38,139,210)" }}
                    >
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
