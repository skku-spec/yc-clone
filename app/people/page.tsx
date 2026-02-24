import type { Metadata } from "next";
import { managingLeads, preneurs, teamDescriptions } from "@/lib/people-data";
import type { Person, TeamDescription } from "@/lib/people-data";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "멤버 | SPEC — 성균관대 창업학회",
  description: "SPEC 창업학회의 Managing Lead, Preneur, Learner를 만나보세요.",
};

function LeadCard({ person }: { person: Person }) {
  return (
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
            {(() => {
              if (!person.isLead) return person.title;
              const parts = person.title.split(" | ");
              return parts.length > 1 ? (
                <><span className="text-[#FF6C0F]">{parts[0]}</span>{" | "}{parts.slice(1).join(" | ")}</>
              ) : (
                <span className="text-[#FF6C0F]">{person.title}</span>
              );
            })()}
          </div>
        </div>
        {person.bio && (
          <p className="whitespace-pre-line font-['MaruBuri',serif] text-[0.875rem] font-normal leading-relaxed text-[#16140f]/80">
            {person.bio}
          </p>
        )}
      </div>
    </li>
  );
}

function PreneurCard({ person }: { person: Person }) {
  return (
    <li className="flex items-start gap-3 py-3">
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
          {(() => {
            if (!person.isLead) return person.title;
            const parts = person.title.split(" | ");
            return parts.length > 1 ? (
              <><span className="text-[#FF6C0F]">{parts[0]}</span>{" | "}{parts.slice(1).join(" | ")}</>
            ) : (
              <span className="text-[#FF6C0F]">{person.title}</span>
            );
          })()}
        </div>
        {person.bio && (
          <p className="mt-1 whitespace-pre-line font-['MaruBuri',serif] text-[0.8125rem] font-normal leading-relaxed text-[#16140f]/60">
            {person.bio}
          </p>
        )}
      </div>
    </li>
  );
}

function TeamDescriptionBlock({ team }: { team: TeamDescription }) {
  return (
    <div className="py-2">
      <span className="font-['Pretendard',sans-serif] text-[0.875rem] font-semibold text-[#16140f]">
        {team.name}
      </span>
      <span className="font-['Pretendard',sans-serif] text-[0.875rem] font-normal text-[#16140f]/60">
        {" — "}
        {team.description}
      </span>
    </div>
  );
}

export default function PeoplePage() {
  return (
    <div className="px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[1100px]">
        <PageHeader title="People" />

        {/* ── Managing Lead ── */}
        <section className="mb-12">
          <h2 className="mb-2 border-b border-[#16140f]/10 pb-3 font-['Pretendard',sans-serif] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#16140f]/50">
            Managing Lead
          </h2>
          <ul>
            {managingLeads.map((person) => (
              <LeadCard key={person.slug} person={person} />
            ))}
          </ul>
        </section>

        {/* ── Preneur ── */}
        <section className="mb-12">
          <h2 className="mb-2 border-b border-[#16140f]/10 pb-3 font-['Pretendard',sans-serif] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#16140f]/50">
            Preneur
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {preneurs.map((person) => (
              <PreneurCard key={person.slug} person={person} />
            ))}
          </ul>

          {/* 팀별 역할 설명 */}
          <div className="mt-8 border-t border-[#16140f]/10 pt-6">
            <h3 className="mb-3 font-['Pretendard',sans-serif] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#16140f]/50">
              Teams
            </h3>
            <div className="space-y-1">
              {teamDescriptions.map((team) => (
                <TeamDescriptionBlock key={team.name} team={team} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Learner ── */}
        <section className="mb-12">
          <h2 className="mb-2 border-b border-[#16140f]/10 pb-3 font-['Pretendard',sans-serif] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#16140f]/50">
            Learner
          </h2>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="font-['MaruBuri',serif] text-[1.125rem] font-semibold text-[#16140f]/40">
              아직 없음
            </p>
            <p className="mt-1 font-['Pretendard',sans-serif] text-[0.875rem] font-normal text-[#16140f]/30">
              모집 중
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
