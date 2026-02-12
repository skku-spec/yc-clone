'use client';

import { useEffect, useRef, useState } from 'react';

/* ───────────────────────────────────────────
 *  DATA — Edit these arrays to update content
 * ─────────────────────────────────────────── */

const stats = [
  { number: '3', label: '기수', subtext: 'Cohorts Completed' },
  { number: '120+', label: '멤버', subtext: 'Total Alumni' },
  { number: '30+', label: '팀', subtext: 'Teams Launched' },
  { number: '8+', label: '수상', subtext: 'Competition Wins' },
];

const newsItems = [
  {
    date: '2026.02',
    tag: '모집',
    title: 'SPEC 4기 파운더 모집 시작',
    desc: '30주 실전 창업 프로그램, 4기 파운더를 모집합니다.',
  },
  {
    date: '2025.12',
    tag: '데모데이',
    title: '3기 데모데이 성공적 개최',
    desc: '8개 팀이 투자자와 멘토 앞에서 최종 발표를 진행했습니다.',
  },
  {
    date: '2025.11',
    tag: '수상',
    title: 'K-스타트업 챌린지 대상 수상',
    desc: 'SPEC 3기 \u2018팀 노바\u2019 가 중소벤처기업부 주관 대회에서 대상을 수상했습니다.',
  },
  {
    date: '2025.09',
    tag: '파트너십',
    title: '카카오모빌리티 멘토링 MOU 체결',
    desc: '카카오모빌리티와 장기 멘토링 협약을 맺었습니다.',
  },
  {
    date: '2025.06',
    tag: '런칭',
    title: '3기 팀 프로젝트 5개 정식 런칭',
    desc: '3기 팀들이 만든 서비스 5개가 실제 사용자를 확보하며 런칭했습니다.',
  },
];

/* ───────────────────────────────────────────
 *  TAG COLOUR MAP
 * ─────────────────────────────────────────── */

const tagColors: Record<string, { bg: string; text: string }> = {
   '모집':    { bg: 'bg-white/5', text: 'text-white/60' },
   '데모데이': { bg: 'bg-white/5',   text: 'text-white/60' },
   '수상':    { bg: 'bg-white/5',  text: 'text-white/60' },
   '파트너십': { bg: 'bg-white/5', text: 'text-white/60' },
   '런칭':    { bg: 'bg-white/5', text: 'text-white/60' },
};

function getTagStyle(tag: string) {
  return tagColors[tag] ?? { bg: 'bg-white/10', text: 'text-white/70' };
}

/* ───────────────────────────────────────────
 *  INTERSECTION OBSERVER HOOK
 * ─────────────────────────────────────────── */

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
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

/* ───────────────────────────────────────────
 *  COMPONENT
 * ─────────────────────────────────────────── */

export default function Achievements() {
  const statsReveal = useReveal(0.2);
  const feedReveal = useReveal(0.1);

  return (
    <section className="relative w-full py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-6">

        {/* ── Header ────────────────────────── */}
        <div className="mb-16">
           <span
             className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/50"
             style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
           >
             Track Record
           </span>
           <h2
             className="text-5xl font-black uppercase text-white lg:text-6xl"
             style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}
           >
             NUMBERS SPEAK.
           </h2>
           <p
            className="mt-4 text-xl font-normal text-white/70"
            style={{ fontFamily: 'var(--font-korean-sans)' }}
          >
            3기까지의 누적 성과
          </p>
        </div>

         {/* ── Quick Stats Bar ───────────────── */}
         <div ref={statsReveal.ref} className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
           {stats.map((stat, i) => (
             <div
               key={stat.label}
               className={`
                 relative rounded-lg border border-white/8
                 bg-transparent p-6 text-center
                 transition-all duration-700 ease-out
                 ${statsReveal.visible
                   ? 'translate-y-0 opacity-100'
                   : 'translate-y-10 opacity-0'}
               `}
               style={{ transitionDuration: '0.5s' }}
             >

              <div
                className="relative text-5xl font-black text-white lg:text-6xl"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {stat.number}
              </div>
               <div
                 className="relative mt-2 text-base font-bold uppercase text-white/90"
                 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.06em' }}
               >
                 {stat.label}
               </div>
              <div
                className="relative mt-1 text-sm font-normal text-white/60"
                style={{ fontFamily: 'var(--font-korean-sans)' }}
              >
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* ── News Feed ─────────────────────── */}
        <div ref={feedReveal.ref} className="mt-20">
           <p
             className="mb-6 text-base font-bold uppercase text-white/60"
             style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.06em' }}
           >
             최근 소식
           </p>

           <div className="divide-y divide-white/5">
             {newsItems.map((item, i) => {
               const tag = getTagStyle(item.tag);
               return (
                 <div
                   key={`${item.date}-${item.title}`}
                   className={`
                     group flex items-start gap-5 rounded-lg py-5 px-3
                     transition-all duration-500 ease-out
                     hover:bg-white/[0.02]
                     ${feedReveal.visible
                       ? 'translate-x-0 opacity-100'
                       : 'translate-x-0 opacity-0'}
                   `}
                   style={{ transitionDuration: '0.5s' }}
                 >
                  {/* date column */}
                  <span
                     className="w-20 shrink-0 pt-0.5 text-sm tabular-nums text-white/40"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {item.date}
                  </span>

                  {/* content */}
                  <div className="min-w-0 flex-1">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-sm font-medium ${tag.bg} ${tag.text}`}
                      style={{ fontFamily: 'var(--font-korean-sans)' }}
                    >
                      {item.tag}
                    </span>
                    <h4
                      className="mt-1.5 text-lg font-semibold text-white"
                      style={{ fontFamily: 'var(--font-korean-sans)' }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="mt-1 text-base font-normal leading-relaxed text-white/70"
                      style={{ fontFamily: 'var(--font-korean-sans)' }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* hover arrow hint */}
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-white/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/30"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          {/* ── View All Link ───────────────── */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-base font-medium text-white/60 transition-colors duration-300 hover:text-[#FF6C0F]"
              style={{ fontFamily: 'var(--font-korean-sans)' }}
            >
              모든 소식 보기
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
