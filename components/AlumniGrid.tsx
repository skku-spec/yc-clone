'use client';

import Image from 'next/image';
import { startTransition, useCallback, useEffect, useRef, useState } from 'react';

const alumni = [
  {
    name: '이송목', batch: 'SPEC 창립자, 초대 회장', photo: '/member/이송목.png',
    quote: 'SPEC에서 처음으로 내 힘으로 돈을 벌어봤다.',
    shortQuote: 'SPEC에서 처음으로 내 힘으로 돈을 벌어봤다.',
    longQuote: 'SPEC은 단순한 창업 동아리가 아니었다. 아이디어를 실제 매출로 연결하는 30주의 여정이었고, 그 과정에서 나는 처음으로 내 힘으로 돈을 버는 경험을 했다. 그게 모든 것을 바꿨다.',
  },
  {
    name: '장지민', batch: '2기', photo: '/member/장지민.png',
    quote: '사업계획서 100장보다 고객 한 명이 더 무섭다는 걸 배웠다.',
    shortQuote: '사업계획서 100장보다 고객 한 명이 더 무섭다는 걸 배웠다.',
    longQuote: '완벽한 사업계획서를 쓰는 데 몇 주를 썼다. 그런데 첫 고객 미팅 10분 만에 모든 가정이 틀렸다는 걸 알았다. SPEC은 그 불편한 진실을 빠르게 마주하게 해줬다.',
  },
  {
    name: '전도현', batch: '3, 4기 회장', photo: '/member/전도현.png',
    quote: '30주 동안 실패를 두려워하지 않는 법을 배웠다.',
    shortQuote: '30주 동안 실패를 두려워하지 않는 법을 배웠다.',
    longQuote: '회장으로서 두 기수를 이끌며 깨달은 건, 실패는 피하는 게 아니라 빠르게 통과하는 것이라는 점이다. SPEC의 매주 데모는 그 훈련장이었다.',
  },
  {
    name: '김주현', batch: '2기', photo: '/member/김주현.png',
    quote: '매주 매출 보드 앞에 서는 게 제일 성장시켜줬다.',
    shortQuote: '매주 매출 보드 앞에 서는 게 제일 성장시켜줬다.',
    longQuote: '숫자는 거짓말을 하지 않는다. 매주 팀 앞에서 매출을 공개하는 그 순간이 가장 두렵고, 가장 성장하는 순간이었다. 그 압박이 나를 실행하는 사람으로 만들었다.',
  },
  {
    name: '서원준', batch: '2기', photo: '/member/서원준.png',
    quote: '불편함이 성장의 연료라는 말, SPEC에서 체감했다.',
    shortQuote: '불편함이 성장의 연료라는 말, SPEC에서 체감했다.',
    longQuote: '편한 팀원, 편한 아이디어만 고르다가는 아무것도 못 만든다. SPEC의 팀 셔플과 피드백 문화는 나를 계속 불편한 상황에 밀어 넣었고, 그게 진짜 성장이었다.',
  },
  {
    name: '신지은', batch: '2, 3기', photo: '/member/신지은.png',
    quote: '팀 셔플 덕분에 진짜 공동창업자를 찾았다.',
    shortQuote: '팀 셔플 덕분에 진짜 공동창업자를 찾았다.',
    longQuote: '처음엔 팀이 바뀌는 게 싫었다. 그런데 셔플 후 만난 팀원이 지금의 공동창업자다. SPEC이 아니었다면 절대 만나지 못했을 사람과 함께 회사를 만들고 있다.',
  },
  {
    name: '전선희', batch: '2기', photo: '/member/전선희.png',
    quote: 'SPEC 없었으면 창업은 평생 \'언젠가\'로 남았을 거다.',
    shortQuote: 'SPEC 없었으면 창업은 평생 \'언젠가\'로 남았을 거다.',
    longQuote: '\'언젠가 창업해야지\'라는 말을 몇 년째 했다. SPEC은 그 언젠가를 지금으로 당겨줬다. 30주가 지나고 나서야 나는 창업자가 되어 있었다.',
  },
  {
    name: '김동인', batch: '3기', photo: '/member/김동인.png',
    quote: '데모데이 날, 내가 만든 서비스에 투자하겠다는 말을 들었다.',
    shortQuote: '데모데이 날, 내가 만든 서비스에 투자하겠다는 말을 들었다.',
    longQuote: '데모데이 발표를 마치고 투자 의향을 받았을 때, 그게 진짜인지 실감이 안 났다. SPEC에서 만든 서비스가 실제 시장에서 가치를 인정받는 순간이었다.',
  },
  {
    name: '최윤정', batch: '3기', photo: '/member/최윤정.png',
    quote: 'Revenue is truth. 이 한마디가 내 사업관을 바꿨다.',
    shortQuote: 'Revenue is truth. 이 한마디가 내 사업관을 바꿨다.',
    longQuote: '\'Revenue is truth\'라는 말을 처음 들었을 때는 너무 단순하다고 생각했다. 그런데 30주를 보내고 나니 이게 창업의 전부라는 걸 알았다. 매출이 없으면 아무것도 없다.',
  },
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
              {/* 배경 이미지 */}
              <Image
                src={person.photo}
                alt={person.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 65vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* 기본 그라데이션 오버레이 (인덱스별 어두움) */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: `linear-gradient(to top, rgba(0,0,0,${Math.min(0.6 + i * 0.05, 1)}) 0%, rgba(0,0,0,${Math.min(0.1 + i * 0.03, 0.6)}) 50%, transparent 100%)`,
                }}
              />

              {/* 호버 시 추가 어두움 */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              />

              {/* 하단 텍스트 영역 (항상 보임, 호버 시 사라짐) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transition-opacity duration-300 group-hover:opacity-0">
                <p
                  className="text-2xl font-black text-white md:text-3xl"
                  style={{ fontFamily: "'Pretendard', sans-serif" }}
                >
                  {person.name}
                </p>
                <p
                  className="mt-1 text-base text-white/60 md:text-lg"
                  style={{ fontFamily: "'Pretendard', sans-serif" }}
                >
                  {person.batch}
                </p>
                <p
                  className="mt-2 text-sm italic leading-snug text-white/70 line-clamp-2 md:line-clamp-1 md:text-base"
                  style={{ fontFamily: "'MaruBuri', serif" }}
                >
                  &ldquo;{person.shortQuote}&rdquo;
                </p>
              </div>

              {/* 호버 시 longQuote (데스크탑) */}
              <div className="absolute inset-0 hidden items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex">
                <p
                  className="text-center text-base italic leading-relaxed text-white/90 md:text-lg lg:text-xl"
                  style={{ fontFamily: "'MaruBuri', serif" }}
                >
                  &ldquo;{person.longQuote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
