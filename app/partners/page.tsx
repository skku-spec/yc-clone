import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "멘토진 | SPEC — 성균관대 창업학회",
  description:
    "카카오모빌리티, 맥킨지, 알토스벤처스 등 주요 기업 출신 현직자들이 SPEC 멤버들을 직접 지도합니다.",
};

const placeholderMentors = Array.from({ length: 6 }, (_, i) => i);

export default function PartnersPage() {
  return (
    <div className="px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[1000px]">
        <PageHeader
          title="Mentors"
          subtitle="카카오모빌리티, 맥킨지, 알토스벤처스 등 주요 기업 출신 현직자들이 SPEC 멤버들을 직접 지도합니다."
        />

        <div className="mb-16 flex flex-wrap items-center justify-center gap-4 rounded-xl border border-[#FF6C0F]/20 bg-[#FF6C0F]/[0.03] px-6 py-10">
          <Image src="/logos/rise.png" alt="RISE 사업단" width={240} height={84} className="h-20 w-auto object-contain" />
          <span className="font-['Pretendard',sans-serif] text-[13px] text-[#16140f]/30">×</span>
          <Image src="/logos/kakao.svg" alt="Kakao Mobility" width={100} height={28} className="h-7 w-auto object-contain" />

        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderMentors.map((i) => (
            <div key={i} className="select-none rounded-xl p-5">
              <div className="mb-4 aspect-square w-full rounded-lg bg-[#e8e8df]" />
              <div className="mb-2 space-y-2">
                <div className="h-5 w-28 rounded bg-[#e8e8df]" />
                <div className="h-4 w-36 rounded bg-[#e8e8df]/70" />
                <div className="h-3.5 w-24 rounded bg-[#e8e8df]/50" />
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-3 w-full rounded bg-[#e8e8df]/40" />
                <div className="h-3 w-4/5 rounded bg-[#e8e8df]/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
