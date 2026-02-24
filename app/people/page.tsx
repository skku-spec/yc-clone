import type { Metadata } from "next";
import Link from "next/link";
import { partners, founders, staffSections } from "@/lib/people-data";
import type { Person } from "@/lib/people-data";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "멤버 | SPEC — 성균관대 창업학회",
  description: "SPEC 창업학회의 창립자, 멘토, 운영진을 만나보세요.",
};

function PartnerCard({ person }: { person: Person }) {
  const inner = (
    <li className="flex gap-5 py-6">
      <figure className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-full bg-[#e8e8df]">
        <img
          src={person.photo}
          alt={person.name}
          width={100}
          height={100}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>
      <div className="flex flex-col">
        <div className="mb-1">
          <div className="font-['MaruBuri',serif] text-[1.125rem] font-semibold leading-tight text-[#16140f]">
            {person.name}
          </div>
          <div className="font-['Pretendard',sans-serif] text-[0.875rem] font-normal text-[#16140f]/70">
            {person.title}
          </div>
          {person.company && (
            <div className="text-[0.875rem] font-normal text-[#FF6C0F]">
              {person.company}
            </div>
          )}
        </div>
        {person.bio && (
          <p className="font-['MaruBuri',serif] text-[0.875rem] font-normal leading-relaxed text-[#16140f]/80">
            {person.bio}
          </p>
        )}
      </div>
    </li>
  );

  if (person.slug) {
    return (
      <Link
        href={`/people/${person.slug}`}
        className="block transition-colors hover:bg-[#eceadf] -mx-4 px-4 rounded-lg"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}

function StaffCard({ person }: { person: Person }) {
  return (
    <li className="flex items-center gap-3 py-3">
      <figure className="h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full bg-[#e8e8df]">
        <img
          src={person.photo}
          alt={person.name}
          width={56}
          height={56}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>
      <div>
        <div className="font-['MaruBuri',serif] text-[0.9375rem] font-semibold leading-tight text-[#16140f]">
          {person.name}
        </div>
        <div className="font-['Pretendard',sans-serif] text-[0.8125rem] font-normal text-[#16140f]/60">
          {person.title}
        </div>
      </div>
    </li>
  );
}

export default function PeoplePage() {
  return (
    <div className="px-4 pb-24 pt-14 md:pt-20">
        <div className="mx-auto max-w-[1100px]">
        <PageHeader title="People" />

        <section className="mb-12">
          <h2 className="mb-2 border-b border-[#16140f]/10 pb-3 font-['Pretendard',sans-serif] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#16140f]/50">
            Founder
          </h2>
          <ul>
            {founders.map((person) => (
              <PartnerCard key={person.slug} person={person} />
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-2 border-b border-[#16140f]/10 pb-3 font-['Pretendard',sans-serif] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#16140f]/50">
            Mentors
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partners.map((person) => (
              <PartnerCard key={person.slug} person={person} />
            ))}
          </ul>
        </section>

        {staffSections.map((section) => (
          <section key={section.title} className="mb-12">
            <h2 className="mb-2 border-b border-[#16140f]/10 pb-3 font-['Pretendard',sans-serif] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#16140f]/50">
              {section.title}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {section.people.map((person) => (
                <StaffCard key={person.name} person={person} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
