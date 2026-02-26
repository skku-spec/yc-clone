'use client';

import Image from 'next/image';
import { startTransition, useCallback, useEffect, useRef, useState } from 'react';

const alumni = [
  { name: '이송목', batch: 'SPEC 창립자, 초대 회장', photo: '/member/이송목.png', quote: 'SPEC에서 처음으로 내 힘으로 돈을 벌어봤다.' },
  { name: '장지민', batch: '2기', photo: '/member/장지민.png', quote: '사업계획서 100장보다 고객 한 명이 더 무섭다는 걸 배웠다.' },
  { name: '전도현', batch: '3, 4기 회장', photo: '/member/전도현.png', quote: '30주 동안 실패를 두려워하지 않는 법을 배웠다.' },
  { name: '김주현', batch: '2기', photo: '/member/김주현.png', quote: '매주 매출 보드 앞에 서는 게 제일 성장시켜줬다.' },
  { name: '서원준', batch: '2기', photo: '/member/서원준.png', quote: '불편함이 성장의 연료라는 말, SPEC에서 체감했다.' },
  { name: '신지은', batch: '2, 3기', photo: '/member/신지은.png', quote: '팀 셔플 덕분에 진짜 공동창업자를 찾았다.' },
  { name: '전선희', batch: '2기', photo: '/member/전선희.png', quote: 'SPEC 없었으면 창업은 평생 \'언젠가\'로 남았을 거다.' },
  { name: '김동인', batch: '3기', photo: '/member/김동인.png', quote: '데모데이 날, 내가 만든 서비스에 투자하겠다는 말을 들었다.' },
  { name: '최윤정', batch: '3기', photo: '/member/최윤정.png', quote: 'Revenue is truth. 이 한마디가 내 사업관을 바꿨다.' },
];

export default function AlumniGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const autoScrollTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const userInteracted = useRef(false);

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

  const startAutoScroll = useCallback(() => {
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    const container = scrollRef.current;
    if (!container) return;

    autoScrollTimer.current = setInterval(() => {
      if (userInteracted.current || window.innerWidth >= 768) return;
      const card = container.querySelector('div') as HTMLElement;
      if (!card) return;
      const cardWidth = card.offsetWidth + 16; // card width + gap
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 2) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3000);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleInteraction = () => {
      userInteracted.current = true;
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
        autoScrollTimer.current = null;
      }
      // 5초 후 자동 슬라이드 재개
      setTimeout(() => {
        userInteracted.current = false;
        startAutoScroll();
      }, 5000);
    };

    container.addEventListener('touchstart', handleInteraction, { passive: true });
    container.addEventListener('pointerdown', handleInteraction);

    if (isVisible) startAutoScroll();

    return () => {
      container.removeEventListener('touchstart', handleInteraction);
      container.removeEventListener('pointerdown', handleInteraction);
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, [isVisible, startAutoScroll]);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-transparent">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span
            className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/50"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Alumni
          </span>

          <h2
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white lg:text-6xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}
          >
            WE ARE SPEC.
          </h2>

          <p
            className="text-xl text-white/50"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            이전 기수들이 만들어온 이야기
          </p>
        </div>

        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3">
          {alumni.map((person, i) => (
            <div
              key={`${person.name}-${person.batch}`}
              className="group relative min-w-[220px] w-[65vw] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/[0.08] md:min-w-0 md:w-auto md:max-w-none md:shrink"
              style={{
                aspectRatio: '3 / 4',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`,
              }}
            >
              <Image
                src={person.photo}
                alt={person.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 65vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p
                  className="text-sm font-bold text-white md:text-base"
                  style={{ fontFamily: "'Pretendard', sans-serif" }}
                >
                  {person.name}
                </p>
                <p
                  className="mt-0.5 text-xs text-white/50 md:text-sm"
                  style={{ fontFamily: "'Pretendard', sans-serif" }}
                >
                  {person.batch}
                </p>
                <p
                  className="mt-2 line-clamp-2 text-xs italic leading-snug text-white/60 md:hidden"
                  style={{ fontFamily: "'MaruBuri', serif" }}
                >
                  &ldquo;{person.quote}&rdquo;
                </p>
              </div>

              <div className="absolute inset-0 hidden items-center justify-center bg-black/60 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                <p
                  className="text-center text-base italic leading-relaxed text-white/90 lg:text-lg"
                  style={{ fontFamily: "'MaruBuri', serif" }}
                >
                  &ldquo;{person.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
