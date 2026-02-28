'use client';

import { startTransition, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface TrackCard {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  cta: { href: string; text: string };
  variant: 'preneur' | 'learner';
}

const tracks: TrackCard[] = [
  {
    emoji: '\uD83D\uDE80',
    title: 'PRENEUR',
    subtitle: '조직 리더십 트랙 · 3월–11월',
    description:
      'SPEC을 하나의 스타트업처럼 운영하고 스케일업합니다. IR로 펀딩과 파트너십을 확장하고, Learner 팀을 멘토링하며, 대한민국을 먹을 액셀러레이팅 동아리를 만들어갑니다.',
    bullets: [
      'SPEC 조직 운영 & 스케일업',
      '투자사 IR & 파트너십 확장',
      'Learner 팀 멘토링 & 서포트',
      '대한민국 최고의 액셀러레이팅 동아리 구축',
    ],
    cta: { href: '/curriculum?track=preneur', text: 'Preneur 커리큘럼 보기 →' },
    variant: 'preneur',
  },
  {
    emoji: '\uD83D\uDD25',
    title: 'LEARNER',
    subtitle: '실전 창업 트랙 · 3월–11월',
    description:
      '이론이 아니라 실행으로 배웁니다. ₩10만원부터 매출을 만들고, 몸으로 부딪히며 성장합니다. 한 기수 안에 수억 매출을 달성하는 팀도 나옵니다.',
    bullets: [
      '₩10만원부터 시작하는 매출 챌린지',
      '이론 NO, 실행 YES — 몸으로 부딪히며 배우기',
      '한 기수 안에 수억 매출 달성 가능',
      '체계적 커리큘럼으로 단계별 성장',
    ],
    cta: { href: '/curriculum?track=learner', text: 'Learner 커리큘럼 보기 →' },
    variant: 'learner',
  },
];

/* ── Shared card renderer ── */
function TrackCardView({ track, isVisible }: { track: TrackCard; isVisible: boolean }) {
  const isPreneur = track.variant === 'preneur';

  return (
    <div
      className={`flex h-full flex-col rounded-xl border p-5 pb-8 sm:p-8 sm:pb-10 ${
        isPreneur
          ? 'border-[#FF6C0F]/25 bg-[#FF6C0F]/[0.03]'
          : 'border-white/10 bg-white/[0.02]'
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <h3
        className="text-2xl font-black uppercase tracking-wide text-white sm:text-4xl"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        {track.title}
      </h3>

      <p
        className="mt-1 text-xs font-medium text-white/60 sm:text-sm"
        style={{ fontFamily: "'Pretendard', sans-serif" }}
      >
        {track.subtitle}
      </p>

      <p
        className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base"
        style={{ fontFamily: "'MaruBuri', serif" }}
      >
        {track.description}
      </p>

      <ul className="mt-4 space-y-2">
        {track.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-xs text-white/70 sm:gap-2.5 sm:text-sm"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6C0F]/60" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="min-h-6 flex-1" />
      <Link
        href={track.cta.href}
        className={`flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 sm:h-12 ${
          isPreneur
            ? 'bg-[#FF6C0F] text-white hover:brightness-110'
            : 'border border-white/20 bg-transparent text-white hover:bg-white/[0.06]'
        }`}
        style={{ fontFamily: "'Pretendard', sans-serif" }}
      >
        {track.cta.text}
      </Link>
    </div>
  );
}

export default function TwoTracks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTransition(() => {
            setIsVisible(true);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Duplicate cards for seamless marquee loop */
  const marqueeCards = [...tracks, ...tracks];

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-transparent">
      <div ref={sectionRef} className="mx-auto max-w-[1100px] px-6">
        <span
          className="mb-4 block text-center text-sm font-bold uppercase tracking-[0.2em] text-white/50"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Two Tracks
        </span>

        <h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white lg:text-6xl"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}
        >
          TWO TRACKS.
          <br />
          <span className="text-[#FF6C0F]">ONE MISSION.</span>
        </h2>

        <p
          className="mt-4 mb-12 text-center text-base sm:text-lg md:text-xl font-normal text-white/50"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          Preneur는 SPEC을 성장시키고, Learner는 매출을 만듭니다.
        </p>

        {/* ── Desktop: 2-col grid (sm+) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-5">
          {tracks.map((track) => (
            <TrackCardView key={track.title} track={track} isVisible={isVisible} />
          ))}
        </div>
      </div>

      {/* ── Mobile: infinite marquee (<sm) ── */}
      <div className="sm:hidden overflow-hidden">
        <div
          className="flex"
          style={{
            animation: isVisible ? 'two-tracks-marquee 20s linear infinite' : 'none',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          {marqueeCards.map((track, i) => (
            <div
              key={`${track.title}-${i}`}
              className="w-[82vw] shrink-0 pr-4"
              style={{ marginLeft: i === 0 ? '24px' : 0 }}
            >
              <TrackCardView track={track} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes two-tracks-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
