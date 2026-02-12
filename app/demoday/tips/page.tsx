import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Day Tips | SPEC",
  description:
    "SPEC 데모데이에 참석하는 스타트업팀을 위한 발표 팁과 조언.",
};

interface Tip {
  id: string;
  title: string;
  description: React.ReactNode;
}

const TIPS: Tip[] = [
  {
    id: "q1",
    title: "발표 시간 관리",
    description:
      "5분(3분 발표 + 2분 Q&A)은 매우 짧습니다. 핵심 메시지에 집중하고, 시간을 엄수하세요. 미리 여러 번 연습하며 타이밍을 맞추세요.",
  },
  {
    id: "q2",
    title: "슬라이드 구성",
    description:
      "문제 → 솔루션 → 시장 → 견인력(Traction) → 팀 → Ask 순서로 구성하세요. 각 슬라이드는 명확하고 읽기 쉽도록 만들고, 복잡한 기술 설명은 피하세요.",
  },
  {
    id: "q3",
    title: "핵심 메시지 전달",
    description:
      "청중이 기억해야 할 핵심은 '왜 이 팀이, 왜 지금, 왜 이 문제인지'입니다. 이 세 가지를 명확하게 전달하면 나머지 세부 사항은 투자자들이 개별 미팅에서 물어볼 것입니다.",
  },
  {
    id: "q4",
    title: "숫자로 증명하기",
    description:
      "월활성사용자(MAU), 매출, 성장률 등 구체적인 숫자를 제시하세요. 추상적인 설명보다는 데이터가 훨씬 설득력이 있습니다. 작은 숫자라도 실제 수치를 공개하는 것이 좋습니다.",
  },
  {
    id: "q5",
    title: "연습이 최고의 준비",
    description:
      "최소 10번 이상 리허설하세요. 멘토, 동료, 가족 앞에서 여러 번 발표하며 피드백을 받고 개선하세요. 거울 앞에서 혼자 연습하는 것도 도움이 됩니다.",
  },
  {
    id: "q6",
    title: "피해야 할 것들",
    description:
      "기술 깊이에 매몰되지 마세요 - 투자자들은 엔지니어가 아닙니다. 시장 크기를 나열하기만 해서도 안 됩니다. 대신 이 문제가 왜 해결되어야 하는지, 당신들이 왜 해결할 수 있는지를 보여주세요.",
  },
  {
    id: "q7",
    title: "Q&A 준비",
    description:
      "까다로운 질문들을 예상하고 답변을 준비하세요. 모르는 질문에는 '모른다'고 솔직하게 답하는 것이 좋습니다. 시간 부족으로 다 설명하지 못했다면, 이것도 Q&A 시간에 덧붙일 수 있습니다.",
  },
];

export default function DemoDayTipsPage() {
  return (
    <div className="flex-1 px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="mb-10 text-center font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
           Demo Day Tips
         </h1>

        <div className="flex flex-col gap-12 md:flex-row">
          <nav className="shrink-0 md:sticky md:top-24 md:w-[170px] md:self-start">
             <h3 className="mb-3 font-['Pretendard',sans-serif] text-[12px] font-semibold uppercase tracking-[0.08em] text-[#16140f]/50">
               발표 준비
             </h3>
            <ul className="space-y-1">
              {TIPS.map((tip) => (
                <li key={tip.id}>
                   <a
                     href={`#${tip.id}`}
                     className="block rounded-md px-3 py-2 font-['Pretendard',sans-serif] text-[13px] font-normal text-[#16140f]/60 transition-colors hover:bg-[#16140f]/5 hover:text-[#16140f]"
                   >
                     {tip.title}
                   </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="min-w-0 flex-1">
             <h2 className="mb-8 font-[system-ui] text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-[#16140f]">
               발표 준비
             </h2>

            <dl className="space-y-8">
              {TIPS.map((tip) => (
                <div
                  key={tip.id}
                  id={tip.id}
                  className="border-b border-[#16140f]/8 pb-8 last:border-0"
                >
                   <dt className="mb-3 font-[system-ui] text-[16px] font-bold leading-snug text-[#16140f]">
                     {tip.title}
                   </dt>
                   <dd className="font-['MaruBuri',serif] text-[15px] font-normal leading-[1.7] text-[#16140f]/80">
                     {tip.description}
                   </dd>
                </div>
              ))}
            </dl>

             <div className="mt-12 rounded-lg border border-[#FF6C0F]/20 bg-[#FF6C0F]/5 p-6">
               <p className="mb-3 font-[system-ui] text-[15px] font-bold text-[#16140f]">
                 더 알아보기
               </p>
               <p className="font-['Pretendard',sans-serif] text-[14px] font-normal leading-relaxed text-[#16140f]/70">
                 데모데이에 관한 일반적인 질문들에 대한 답변은 {" "}
                 <Link
                   href="/demoday/faq"
                   className="font-medium text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 transition-all hover:decoration-[#FF6C0F]"
                 >
                   Demo Day FAQ
                 </Link>
                 에서 확인하세요.
               </p>
             </div>
          </article>
        </div>
      </div>
    </div>
  );
}
