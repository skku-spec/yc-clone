import type { Metadata } from "next";
import Link from "next/link";
import { partners } from "@/lib/people-data";

export const metadata: Metadata = {
  title: "YC General Partners | Y Combinator",
  description:
    "Meet the partners at Y Combinator who work with founders to build great companies.",
};

export default function PartnersPage() {
  return (
    <div className="px-4 pb-16 pt-12 md:pt-16">
      <div className="mx-auto max-w-[1000px]">
        <h1 className="mb-3 font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f]">
          YC General Partners
        </h1>
        <p className="mb-12 max-w-[640px] font-['Outfit',sans-serif] text-[1.125rem] font-light leading-relaxed text-[#16140f]/70 md:mb-16">
          Our partners have founded and scaled some of the most successful
          startups in the world. They work closely with YC founders during the
          batch and beyond.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((person) => (
            <Link
              key={person.slug}
              href={`/people/${person.slug}`}
              className="group block rounded-xl p-5 transition-all duration-200 hover:bg-[#eceadf] hover:shadow-sm"
            >
              <figure className="mb-4 aspect-square w-full overflow-hidden rounded-lg bg-[#e8e8df]">
                <img
                  src={person.photo}
                  alt={person.name}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </figure>
              <div className="mb-2">
                <h3 className="font-['Source_Serif_4',serif] text-[1.25rem] font-semibold leading-tight text-[#16140f]">
                  {person.name}
                </h3>
                <p className="font-['Outfit',sans-serif] text-[0.875rem] font-normal text-[#FF6C0F]">
                  {person.title}
                </p>
                {person.ycCompany && (
                  <p className="mt-0.5 font-['Outfit',sans-serif] text-[0.8125rem] font-light text-[#16140f]/50">
                    {person.ycCompany}
                    {person.ycBatch ? ` (${person.ycBatch})` : ""}
                  </p>
                )}
              </div>
              <p className="line-clamp-3 font-['Outfit',sans-serif] text-[0.8125rem] font-light leading-relaxed text-[#16140f]/60">
                {person.bio}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
