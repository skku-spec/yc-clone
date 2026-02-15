"use client";

import { useState } from "react";
import Link from "next/link";

interface RFSEntry {
  id: string;
  title: string;
  author: string;
  authorHref: string;
  description: string[];
}

interface Batch {
  name: string;
  intro: string;
  entries: RFSEntry[];
}

const batches: Batch[] = [
  {
    name: "2026 상반기",
    intro:
      "SPEC은 다양한 분야의 혁신적인 창업팀을 찾고 있습니다. AI부터 헬스케어, 커머스, 핀테크까지 — 기술로 문제를 해결하고 새로운 가치를 만드는 모든 팀을 환영합니다. 우리가 상상하지 못한 아이디어도 좋습니다.",
    entries: [
      {
        id: "ai-innovation",
        title: "AI / 인공지능",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "AI로 기존 산업을 혁신하는 팀을 찾습니다. 단순히 AI를 활용하는 것이 아니라, AI를 통해 근본적으로 새로운 가치를 만드는 서비스를 원합니다.",
          "관심 분야: AI 에이전트, 생성형 AI 활용 서비스, AI 기반 자동화 도구, 산업 특화 AI 솔루션, 개발자 도구.",
          "예시: 특정 직무를 완전히 자동화하는 AI 에이전트, AI 기반 콘텐츠 생성 플랫폼, 업무 생산성을 10배 높이는 도구.",
        ],
      },
      {
        id: "edutech",
        title: "에듀테크",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "교육의 미래를 만드는 팀을 찾습니다. 온라인/오프라인을 넘나들며 더 효과적이고 접근성 높은 교육 경험을 만드는 서비스에 관심이 있습니다.",
          "관심 분야: AI 기반 개인화 학습, 직무 교육 플랫폼, 어학/코딩 교육, 입시/취업 준비, 평생 교육.",
          "예시: 1:1 AI 튜터 서비스, 실전형 부트캠프 플랫폼, 직무별 맞춤 교육 콘텐츠, 학습 효과를 극대화하는 새로운 방법론.",
        ],
      },
      {
        id: "commerce",
        title: "커머스",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "새로운 쇼핑 경험을 만드는 팀을 찾습니다. 단순히 물건을 파는 것이 아니라, 발견-구매-경험의 전 과정을 혁신하는 서비스에 관심이 있습니다.",
          "관심 분야: 라이브커머스, 소셜커머스, D2C 브랜드, 구독 서비스, 중고거래, 로컬커머스.",
          "예시: 새로운 형태의 큐레이션 커머스, AI 기반 개인화 쇼핑, 크리에이터 커머스 플랫폼, 특정 카테고리의 수직 통합 커머스.",
        ],
      },
      {
        id: "healthcare",
        title: "헬스케어",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "건강 문제를 기술로 해결하는 팀을 찾습니다. 예방, 진단, 치료, 관리의 전 과정에서 더 나은 경험을 만드는 서비스에 관심이 있습니다.",
          "관심 분야: 디지털 헬스, 의료 AI, 원격 진료, 건강 관리 플랫폼, 의료기기, 바이오마커 진단.",
          "예시: AI 기반 질병 조기 진단, 만성질환 관리 앱, 환자-의료진 연결 플랫폼, 정신건강 케어 서비스.",
        ],
      },
      {
        id: "fintech",
        title: "핀테크",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "금융을 더 쉽고 접근 가능하게 만드는 팀을 찾습니다. 송금, 결제, 투자, 대출 등 금융의 모든 영역에서 더 나은 경험을 만드는 서비스에 관심이 있습니다.",
          "관심 분야: 간편 결제, 자산 관리, P2P 금융, 임베디드 파이낸스, 크립토, 보험테크.",
          "예시: 새로운 형태의 자산 관리 서비스, 쉬운 투자 플랫폼, 중소기업을 위한 금융 솔루션, 금융 데이터 활용 서비스.",
        ],
      },
      {
        id: "content-media",
        title: "콘텐츠/미디어",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "새로운 콘텐츠 경험을 만드는 팀을 찾습니다. 영상, 오디오, 텍스트, 게임 등 모든 형태의 콘텐츠에서 창작-유통-소비의 혁신에 관심이 있습니다.",
          "관심 분야: 숏폼 콘텐츠, 크리에이터 이코노미, AI 콘텐츠 생성, 새로운 플랫폼, IP 비즈니스.",
          "예시: 새로운 형태의 콘텐츠 플랫폼, 크리에이터 수익화 도구, AI 기반 콘텐츠 제작 도구, 특정 장르/타겟의 버티컬 플랫폼.",
        ],
      },
      {
        id: "social-impact",
        title: "소셜임팩트",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "세상을 더 나은 곳으로 만드는 팀을 찾습니다. 환경, 사회, 접근성 등 우리가 직면한 문제를 기술로 해결하는 서비스에 관심이 있습니다.",
          "관심 분야: 기후테크, 지속가능성, 사회문제 해결, 접근성 개선, 공정무역, 윤리적 소비.",
          "예시: 탄소 배출 감축 솔루션, 자원 재활용 플랫폼, 취약계층 지원 서비스, 지속가능한 소비 플랫폼.",
        ],
      },
      {
        id: "open-ideas",
        title: "기타 (우리가 상상하지 못한 분야)",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "위 분야에 해당하지 않아도 괜찮습니다. SPEC은 혁신적인 아이디어라면 어떤 분야든 환영합니다.",
          "중요한 것은 '어떤 문제를 해결하는가', '왜 지금인가', '왜 당신인가'입니다. 기존 틀에 얽매이지 말고, 당신이 가장 잘 만들 수 있는 것, 세상이 필요로 하는 것을 만들어주세요.",
          "예시: 새로운 카테고리를 만드는 서비스, 기존 산업의 구조를 바꾸는 플랫폼, 완전히 새로운 경험을 제공하는 제품.",
        ],
      },
    ],
  },
  {
    name: "2025 하반기",
    intro:
      "지난 기수에서 지원한 분야들입니다. 이전 기수의 내용도 참고하시되, 언제든 새로운 아이디어를 환영합니다.",
    entries: [
      {
        id: "previous-ai",
        title: "AI 인프라 & 툴",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "AI 개발을 더 쉽게 만드는 도구, AI 에이전트를 위한 인프라, 특화된 AI 모델 등에 관심이 있었습니다.",
        ],
      },
      {
        id: "previous-b2b",
        title: "B2B SaaS",
        author: "SPEC",
        authorHref: "/about",
        description: [
          "기업의 생산성을 높이는 도구, 업무 자동화, 팀 협업 도구 등 B2B 소프트웨어에 관심이 있었습니다.",
        ],
      },
    ],
  },
];

export default function RFSPage() {
  const [activeBatch, setActiveBatch] = useState(0);
  const currentBatch = batches[activeBatch];

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 pt-14 sm:pt-16 lg:pt-20 md:pt-20">
      {/* Header */}
      <div className="mb-10 text-center">
         <h1 className="font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
           What We&apos;re Looking For
         </h1>
        <p className="mx-auto mt-5 max-w-[800px] font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]/80 sm:text-lg">
          SPEC이 찾는 분야와 아이디어를 공유합니다. 여기 나열된 분야가 전부는 아닙니다 — 여러분의 독창적인 아이디어가 가장 중요합니다. 이 목록은 참고용으로, 여기 없는 분야라도 얼마든지 지원할 수 있습니다.
        </p>
      </div>

      {/* Batch Tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {batches.map((batch, index) => (
          <button
            key={batch.name}
            onClick={() => setActiveBatch(index)}
            className={`rounded-full px-5 py-2 font-['Pretendard',sans-serif] text-sm font-normal transition-all ${
              activeBatch === index
                ? "bg-[#FF6C0F] text-white"
                : "bg-[#e8e8e0] text-[#16140f] hover:bg-[#ddddd3]"
            }`}
          >
            {batch.name}
          </button>
        ))}
      </div>

      {/* Batch Content */}
      <div className="mb-12">
        <h2 className="font-['MaruBuri',serif] text-3xl font-normal text-[#16140f]">
          {currentBatch.name}
        </h2>
        <p className="mt-4 max-w-[800px] font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]/80">
          {currentBatch.intro}
        </p>
      </div>

      {/* RFS Entries */}
      <div className="space-y-16">
        {currentBatch.entries.map((entry) => (
          <article
            key={entry.id}
            id={entry.id}
            className="border-t border-[#d9d9d0] pt-10"
          >
            <div className="mb-6">
              <h3 className="group font-['MaruBuri',serif] text-2xl font-normal text-[#16140f] sm:text-[28px]">
                {entry.title}
                <Link
                  href={`#${entry.id}`}
                  className="ml-2 text-[#16140f]/30 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  #
                </Link>
              </h3>
              <Link
                href={entry.authorHref}
                className="mt-2 inline-block font-['Pretendard',sans-serif] text-sm font-normal text-[#FF6C0F] hover:underline"
              >
                {entry.author}
              </Link>
            </div>
            <div className="max-w-[800px] space-y-4">
              {entry.description.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-['Pretendard',sans-serif] text-[15px] font-normal leading-[1.75] text-[#16140f]/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
