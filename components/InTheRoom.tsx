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

export default function InTheRoom() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-transparent">
      <div ref={sectionRef} className="mx-auto max-w-[1100px]">
        <span
          className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/50"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          Guest Speakers
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white lg:text-6xl"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "-0.02em" }}
        >
          IN THE <span className="text-[#FF6C0F]">ROOM.</span>
        </h2>
        <p
          className="text-white/50 text-base sm:text-lg md:text-xl mt-4 mb-12 font-normal"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          업계 리더들이 직접 방문해 이야기합니다
        </p>

         <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {speakerCards.map((speaker) => (
              <div
                key={speaker.name}
                className="rounded-xl border border-white/8 bg-white/[0.02] p-3 sm:p-5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : "translateY(32px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <p className="font-['Pretendard',sans-serif] text-sm font-semibold text-white sm:text-lg">
                  {speaker.name}
                </p>
                <p className="mt-0.5 font-['Pretendard',sans-serif] text-xs text-white/60 sm:mt-1 sm:text-sm">
                  {speaker.company}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
