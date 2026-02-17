'use client';

import { useEffect, useRef, useState } from 'react';
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
    subtitle: '\uC870\uC9C1 \uB9AC\uB354\uC2ED \uD2B8\uB799 \u00B7 3\uC6D4\u201311\uC6D4',
    description:
      'SPEC\uC744 \uD558\uB098\uC758 \uC2A4\uD0C0\uD2B8\uC5C5\uCC98\uB7FC \uC6B4\uC601\uD558\uACE0 \uC2A4\uCF00\uC77C\uC5C5\uD569\uB2C8\uB2E4. IR\uB85C \uD380\uB529\uACFC \uD30C\uD2B8\uB108\uC2ED\uC744 \uD655\uC7A5\uD558\uACE0, Learner \uD300\uC744 \uBA58\uD1A0\uB9C1\uD558\uBA70, \uB300\uD55C\uBBFC\uAD6D\uC744 \uBA39\uC744 \uC561\uC140\uB7EC\uB808\uC774\uD305 \uB3D9\uC544\uB9AC\uB97C \uB9CC\uB4E4\uC5B4\uAC11\uB2C8\uB2E4.',
    bullets: [
      'SPEC \uC870\uC9C1 \uC6B4\uC601 & \uC2A4\uCF00\uC77C\uC5C5',
      '\uD22C\uC790\uC0AC IR & \uD30C\uD2B8\uB108\uC2ED \uD655\uC7A5',
      'Learner \uD300 \uBA58\uD1A0\uB9C1 & \uC11C\uD3EC\uD2B8',
      '\uB300\uD55C\uBBFC\uAD6D \uCD5C\uACE0\uC758 \uC561\uC140\uB7EC\uB808\uC774\uD305 \uB3D9\uC544\uB9AC \uAD6C\uCD95',
    ],
    cta: { href: '/curriculum?track=preneur', text: 'Preneur \uCEE4\uB9AC\uD050\uB7FC \uBCF4\uAE30 \u2192' },
    variant: 'preneur',
  },
  {
    emoji: '\uD83D\uDD25',
    title: 'LEARNER',
    subtitle: '\uC2E4\uC804 \uCC3D\uC5C5 \uD2B8\uB799 \u00B7 3\uC6D4\u201311\uC6D4',
    description:
      '\uC774\uB860\uC774 \uC544\uB2C8\uB77C \uC2E4\uD589\uC73C\uB85C \uBC30\uC6C1\uB2C8\uB2E4. \u20A910\uB9CC\uC6D0\uBD80\uD130 \uB9E4\uCD9C\uC744 \uB9CC\uB4E4\uACE0, \uBAB8\uC73C\uB85C \uBD80\uB52A\uD788\uBA70 \uC131\uC7A5\uD569\uB2C8\uB2E4. \uD55C \uAE30\uC218 \uC548\uC5D0 \uC218\uC5B5 \uB9E4\uCD9C\uC744 \uB2EC\uC131\uD558\uB294 \uD300\uB3C4 \uB098\uC635\uB2C8\uB2E4.',
    bullets: [
      '\u20A910\uB9CC\uC6D0\uBD80\uD130 \uC2DC\uC791\uD558\uB294 \uB9E4\uCD9C \uCC4C\uB9B0\uC9C0',
      '\uC774\uB860 NO, \uC2E4\uD589 YES \u2014 \uBAB8\uC73C\uB85C \uBD80\uB52A\uD788\uBA70 \uBC30\uC6B0\uAE30',
      '\uD55C \uAE30\uC218 \uC548\uC5D0 \uC218\uC5B5 \uB9E4\uCD9C \uB2EC\uC131 \uAC00\uB2A5',
      '\uCCB4\uACC4\uC801 \uCEE4\uB9AC\uD050\uB7FC\uC73C\uB85C \uB2E8\uACC4\uBCC4 \uC131\uC7A5',
    ],
    cta: { href: '/curriculum?track=learner', text: 'Learner \uCEE4\uB9AC\uD050\uB7FC \uBCF4\uAE30 \u2192' },
    variant: 'learner',
  },
];

export default function TwoTracks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-transparent">
      <div ref={sectionRef} className="mx-auto max-w-[1100px] px-6">
        <span
          className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/50"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Two Tracks
        </span>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white lg:text-6xl"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}
        >
          TWO TRACKS.
          <br />
          <span className="text-[#FF6C0F]">ONE MISSION.</span>
        </h2>

        <p
          className="mt-4 mb-12 text-base sm:text-lg md:text-xl font-normal text-white/50"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          Preneur는 SPEC을 성장시키고, Learner는 매출을 만듭니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tracks.map((track, i) => {
            const isPreneur = track.variant === 'preneur';
            const isExpanded = expandedTrack === i;
            return (
              <div
                key={track.title}
                className={`flex flex-col rounded-xl border p-5 sm:p-8 ${
                  isPreneur
                    ? 'border-[#FF6C0F]/25 bg-[#FF6C0F]/[0.03]'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                  transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
                }}
              >
                <span className="text-3xl sm:text-4xl">{track.emoji}</span>

                <h3
                  className="mt-3 text-xl font-black uppercase tracking-wide text-white sm:mt-4 sm:text-2xl"
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

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out sm:!max-h-none sm:!opacity-100 ${
                    isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
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
                </div>

                <button
                  type="button"
                  className="mt-3 self-start text-xs font-medium text-white/40 transition-colors hover:text-white/60 sm:hidden"
                  onClick={() => setExpandedTrack(isExpanded ? null : i)}
                >
                  {isExpanded ? '접기 ↑' : '자세히 보기 ↓'}
                </button>

                <Link
                  href={track.cta.href}
                  className={`mt-auto block pt-4 text-center rounded-lg py-3 text-sm font-semibold transition-all duration-200 sm:pt-6 ${
                    isPreneur
                      ? 'bg-[#FF6C0F] text-white hover:brightness-110'
                      : 'border border-white/15 bg-transparent text-white hover:bg-white/[0.04]'
                  }`}
                  style={{ fontFamily: "'Pretendard', sans-serif" }}
                >
                  {track.cta.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
