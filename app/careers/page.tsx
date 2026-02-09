import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at Y Combinator | Y Combinator",
  description:
    "Join the team at Y Combinator. See open positions across software, investment and operations.",
};

const jobListings = [
  {
    department: "Software Engineering",
    roles: [
      { title: "Full-Stack Product Engineer", location: "San Francisco, CA" },
      { title: "Senior Software Engineer", location: "San Francisco, CA" },
    ],
  },
  {
    department: "Investment",
    roles: [
      { title: "Visiting Group Partner", location: "San Francisco, CA" },
    ],
  },
  {
    department: "Operations",
    roles: [
      { title: "Operations Associate", location: "San Francisco, CA" },
      { title: "Events Coordinator", location: "San Francisco, CA" },
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24">
      <h1 className="mb-8 font-sans text-[32px] font-bold leading-[48px] text-[#16140f]">
        Careers at Y Combinator
      </h1>

      <div className="mb-12 max-w-[800px]">
        <p className="mb-6 font-sans text-[22px] font-extralight leading-[32px] text-[#16140f]">
          Working at Y Combinator is a unique opportunity to help founders build
          their companies at all stages, and offers unprecedented insight into
          the greater startup ecosystem. See open positions below across our
          software, investment and operations teams.
        </p>
        <p className="mb-6 font-sans text-[22px] font-extralight leading-[32px] text-[#16140f]">
          If you&apos;d prefer to work at a startup, you can find thousands of
          roles at YC startups in engineering, design, recruiting and more at{" "}
          <Link
            href="/jobs"
            className="text-[#16140f] underline hover:opacity-70"
          >
            ycombinator.com/jobs
          </Link>
          .
        </p>
      </div>

      <div className="space-y-10">
        {jobListings.map((dept) => (
          <div key={dept.department}>
            <h2 className="mb-4 font-sans text-xl font-semibold text-[#16140f]">
              {dept.department}
            </h2>
            <div className="space-y-3">
              {dept.roles.map((role) => (
                <div
                  key={role.title}
                  className="flex items-center justify-between rounded-lg border border-[#d4d4cc] bg-white px-6 py-5 transition-shadow hover:shadow-md"
                >
                  <div>
                    <h3 className="font-sans text-lg font-medium text-[#16140f]">
                      {role.title}
                    </h3>
                    <p className="font-sans text-sm font-light text-[#16140f]/60">
                      {role.location}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 text-[#16140f]/40"
                  >
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="font-sans text-lg font-light text-[#16140f]">
          Interested in working on YC&apos;s software?{" "}
          <Link
            href="/software"
            className="text-[#16140f] underline hover:opacity-70"
          >
            Learn more about Software at YC
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
