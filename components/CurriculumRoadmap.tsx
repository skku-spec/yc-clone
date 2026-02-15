'use client';

import { useEffect, useRef, useState } from 'react';

const phases = [
  {
    num: '01',
    weeks: 'W1 – W10',
    motto: '팔아라. 만들지 마라.',
    mottoEn: 'SELL FIRST. BUILD NEVER.',
    subtitle: '돈 버는 감각 익히기',
    description:
      '매주 팀을 셔플하며 10만원부터 시작. 아이디어가 아닌 실제 매출로 증명하는 10주.',
    items: [
      '매출 챌린지: ₩10만 → ₩200만',
      '매주 팀 셔플 — 공동창업자 찾기',
      'Mom Test, Pre-selling, Pivot 훈련',
      '아이디에이션 (1박2일) → 팀 확정',
    ],
    kpi: '₩100K → ₩2M',
  },
  {
    num: '02',
    weeks: 'W11 – W28',
    motto: '숫자는 거짓말하지 않는다.',
    mottoEn: "NUMBERS DON'T LIE.",
    subtitle: '실제 스타트업 운영',
    description:
      '확정된 팀으로 MVP 빌드 → 런칭 → 매출 → IR. 매주 매출 보드 공개. 숫자가 곧 실력.',
    items: [
      'BUILD (W11-13): MVP → 3주 안에 런칭',
      'REVENUE (W14-20): PMF → 반복 매출 → 성장',
      'SCALE (W21-28): 스케일링 → 법인/팀 → IR 준비 → 데모데이',
      '매주 공개 매출 보드 + 격주 도전 과제',
    ],
    kpi: '₩1M → ₩90M+',
  },
  {
    num: '03',
    weeks: 'W29 – W30',
    motto: '네트워크가 곧 프로덕트다.',
    mottoEn: 'THE NETWORK IS THE PRODUCT.',
    subtitle: '회고와 연결',
    description:
      '데모데이 이후 알럼나이 네트워크 합류. 후배 멘토링, 월간 동문 모임으로 영원히 연결.',
    items: [
      '최종 데모데이 발표',
      '회고 & 축하',
      '알럼나이 네트워크 합류',
      '평생 파운더 커뮤니티',
    ],
    kpi: 'Demo Day → Alumni',
  },
];

const specialEvents = [
  { name: 'IDEATHON', tag: '1박2일', desc: 'Team formation' },
  { name: 'MVP HACKATHON', tag: '1박2일', desc: 'Build sprint' },
  { name: 'DEMO EVE', tag: '밤샘', desc: 'Pitch rehearsal' },
  { name: 'FINAL HACKATHON', tag: '1박2일', desc: 'Final push' },
];

function useSectionVisible(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function CurriculumRoadmap() {
  const { ref, visible } = useSectionVisible(0.08);

  return (
    <section
      ref={ref}
      className="relative w-full py-24 lg:py-36"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }}
    >
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-white/60">
            Curriculum
          </span>

          <h2 className="mt-5 font-['Outfit',sans-serif] text-5xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            30 WEEKS.
            <br className="md:hidden" />{' '}
            <span className="text-[#FF6C0F]">ZERO EXCUSES.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-['Pretendard',sans-serif] text-lg leading-relaxed text-white/50 lg:text-xl">
            3단계 커리큘럼 — 매주 매출로 증명하는 30주
          </p>

          {/* Week count strip */}
          <div className="mx-auto mt-8 grid max-w-md grid-cols-3 divide-x divide-white/10 rounded-full border border-white/10 bg-white/[0.02]">
            {[
              { label: 'W1–10', text: 'Sell' },
              { label: 'W11–28', text: 'Build & Scale' },
              { label: 'W29–30', text: 'Connect' },
            ].map((seg) => (
              <div key={seg.label} className="flex flex-col items-center justify-center py-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                  {seg.label}
                </span>
                <span className="mt-0.5 text-xs text-white/45">
                  {seg.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Phases */}
        <div className="relative">
          {phases.map((phase, i) => (
            <div key={phase.num} className="relative flex gap-6 pb-16 last:pb-0 md:gap-10">
              {/* Timeline spine */}
                <div className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/20 md:h-16 md:w-16">
                  <span className="font-['Outfit',sans-serif] text-base font-black tracking-tight text-white/70 md:text-lg">
                    {phase.num}
                  </span>
                </div>
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 bg-white/10" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 rounded-lg border border-white/8 bg-transparent p-6 md:p-8">
                <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/60">
                  {phase.weeks}
                </span>

                <h3 className="mt-3 font-['Outfit',sans-serif] text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-3xl">
                  {phase.mottoEn}
                </h3>
                <p className="mt-1.5 font-['Pretendard',sans-serif] text-sm font-semibold text-white/40">
                  {phase.motto}
                </p>

                <p className="mt-1.5 font-['Pretendard',sans-serif] text-base font-semibold text-white/70">
                  {phase.subtitle}
                </p>

                <p className="mt-3 font-['Pretendard',sans-serif] text-base leading-relaxed text-white/70">
                  {phase.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 font-['Pretendard',sans-serif] text-base text-white/70">
                      <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 text-sm font-semibold text-white/50">
                  {phase.kpi}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Events */}
        <div className="mt-20">
          <p className="mb-6 text-center font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Special Events
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {specialEvents.map((event) => (
              <div
                key={event.name}
                className="rounded-lg border border-white/8 bg-transparent p-4 text-center md:p-5"
              >
                <h4 className="font-['Outfit',sans-serif] text-sm font-black uppercase tracking-wide text-white md:text-base">
                  {event.name}
                </h4>
                <span className="mt-1.5 inline-block rounded-full bg-white/5 px-2.5 py-0.5 font-['Pretendard',sans-serif] text-xs font-medium text-white/60">
                  {event.tag}
                </span>
                <p className="mt-2 text-sm text-white/60">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
