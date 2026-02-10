import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Techno-Industrialist RFS | Y Combinator",
  description:
    "A blueprint for America's industrial renaissance. We are looking for founders interested in applying modern software capabilities to the entire stack of industrial production.",
};

export default function TechnoIndustrialistPage() {
  return (
    <>
      <header className="px-4 pt-12 text-center md:pt-16">
        <p className="mb-3 font-['Outfit',sans-serif] text-sm font-medium uppercase tracking-widest text-[#FF6C0F]">
          Requests for Startups
        </p>
        <h1 className="font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f]">
          Techno-Industrialist RFS
        </h1>
        <p className="mx-auto mt-4 max-w-[640px] font-['Outfit',sans-serif] text-base font-light leading-normal text-[#16140f]">
          A blueprint for America&apos;s industrial renaissance.
        </p>
      </header>

      <div className="mx-auto max-w-[800px] px-4 pb-16 pt-8 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f] md:px-8">
        <p className="mb-6">
          In collaboration with the Reindustrialize Summit and New American
          Industrial Alliance, we are releasing a request for startups motivated
          by a simple belief: America needs better physical technology, and
          startups are the best way to build and scale it. We are looking for
          founders interested in applying modern software capabilities to the
          entire stack of industrial production - energy production, materials,
          CAD, manufacturing, and biotech.
        </p>

        <div className="mt-8">
          <Link
            href="/rfs"
            className="inline-flex items-center gap-2 font-['Outfit',sans-serif] text-sm font-medium text-[#FF6C0F] transition-opacity hover:opacity-80"
          >
            View all requests for startups
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
