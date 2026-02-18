'use client';

import { useEffect, useRef, useState } from 'react';

const alumni = [
  { name: '김민수', batch: '1기', quote: 'SPEC에서 처음으로 내 힘으로 돈을 벌어봤다.', gradient: 'from-orange-900/60 to-stone-900' },
  { name: '이서윤', batch: '1기', quote: '사업계획서 100장보다 고객 한 명이 더 무섭다는 걸 배웠다.', gradient: 'from-amber-900/60 to-neutral-900' },
  { name: '박준혁', batch: '2기', quote: '매주 매출 보드 앞에 서는 게 제일 성장시켜줬다.', gradient: 'from-stone-800 to-zinc-900' },
  { name: '최예린', batch: '2기', quote: '불편함이 성장의 연료라는 말, SPEC에서 체감했다.', gradient: 'from-zinc-800 to-stone-900' },
  { name: '정우성', batch: '2기', quote: '30주 동안 실패를 두려워하지 않는 법을 배웠다.', gradient: 'from-neutral-800 to-zinc-900' },
  { name: '한소희', batch: '3기', quote: '팀 셔플 덕분에 진짜 공동창업자를 찾았다.', gradient: 'from-orange-900/40 to-stone-900' },
  { name: '김도현', batch: '3기', quote: '데모데이 날, 내가 만든 서비스에 투자하겠다는 말을 들었다.', gradient: 'from-amber-900/40 to-neutral-900' },
  { name: '이지은', batch: '3기', quote: 'SPEC 없었으면 창업은 평생 \'언젠가\'로 남았을 거다.', gradient: 'from-stone-900 to-zinc-900' },
  { name: '윤재호', batch: '3기', quote: 'Revenue is truth. 이 한마디가 내 사업관을 바꿨다.', gradient: 'from-zinc-900 to-neutral-900' },
];

export default function AlumniGrid() {
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
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3">
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
              <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient}`} />

              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="select-none text-[6rem] font-black leading-none text-white/[0.06] md:text-[8rem]"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {person.name.charAt(0)}
                </span>
              </div>

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
