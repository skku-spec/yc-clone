'use client';

import { useEffect, useRef, useState } from 'react';

const speakerCards = [
  { name: "김태호", company: "카카오모빌리티 CTO" },
  { name: "이수진", company: "전 토스 VP of Product" },
  { name: "박영훈", company: "스파크랩 파트너" },
  { name: "최서영", company: "쿠팡 시니어 PM" },
  { name: "정현수", company: "연쇄 창업가 (3x Exit)" },
  { name: "한지원", company: "삼성전자 신사업개발" },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function InTheRoom() {
  const speakers = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 px-6 bg-transparent">
      <div ref={speakers.ref} className="mx-auto max-w-[1100px]">
        <span
          className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/50"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          Guest Speakers
        </span>
        <h2
          className="text-5xl font-black uppercase text-white lg:text-6xl"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "-0.02em" }}
        >
          IN THE <span className="text-[#FF6C0F]">ROOM.</span>
        </h2>
        <p
          className="text-white/50 text-xl mt-4 mb-12 font-normal"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          업계 리더들이 직접 방문해 이야기합니다
        </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakerCards.map((speaker) => (
              <div
                key={speaker.name}
                className="rounded-xl border border-white/8 bg-white/[0.02] p-5"
                style={{
                  opacity: speakers.isVisible ? 1 : 0,
                  transform: speakers.isVisible
                    ? "translateY(0)"
                    : "translateY(32px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <p className="font-['Pretendard',sans-serif] text-lg font-semibold text-white">
                  {speaker.name}
                </p>
                <p className="mt-1 font-['Pretendard',sans-serif] text-sm text-white/60">
                  {speaker.company}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
