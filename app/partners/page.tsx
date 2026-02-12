import type { Metadata } from "next";
import Link from "next/link";
import { partners } from "@/lib/people-data";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "멘토진 | SPEC — 성균관대 창업학회",
  description:
    "카카오모빌리티, 맥킨지, 알토스벤처스 등 주요 기업 출신 현직자들이 SPEC 멤버들을 직접 지도합니다.",
};

export default function PartnersPage() {
  return (
    <div className="px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[1000px]">
        <PageHeader 
          title="Mentors" 
          subtitle="카카오모빌리티, 맥킨지, 알토스벤처스 등 주요 기업 출신 현직자들이 SPEC 멤버들을 직접 지도합니다."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                   className="h-full w-full object-cover transition-none"
                   loading="lazy"
                 />
               </figure>
               <div className="mb-2">
                 <h3 className="font-['MaruBuri',serif] text-[1.25rem] font-semibold leading-tight text-[#16140f]">
                   {person.name}
                 </h3>
                 <p className="font-['Pretendard',sans-serif] text-[0.875rem] font-normal text-[#FF6C0F]">
                   {person.title}
                 </p>
                 {person.company && (
                   <p className="mt-0.5 font-['Pretendard',sans-serif] text-[0.8125rem] font-normal text-[#16140f]/50">
                     {person.company}
                   </p>
                 )}
               </div>
               <p className="line-clamp-3 font-['MaruBuri',serif] text-[0.8125rem] font-normal leading-relaxed text-[#16140f]/60">
                 {person.bio}
               </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
