'use client';

import { startTransition, useEffect, useRef, useState } from 'react';

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTransition(() => {
            setVisible(true);
          });
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-transparent">
      <div
        ref={ref}
        className="mx-auto max-w-[540px] px-6 transition-opacity duration-700 ease-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className="text-center text-[1.1rem] sm:text-[1.25rem] leading-[1.85] text-white/80 md:text-[1.375rem]"
          style={{ fontFamily: "'MaruBuri', serif" }}
        >
          <p>
            <span
              className="text-[4.5rem] font-black leading-[0.8] text-[#FF6C0F]"
              style={{ fontFamily: "'MaruBuri', serif" }}
            >
              S
            </span>
            PEC은 성균관대학교에서 시작된 창업 학회입니다. 우리는
            &lsquo;실행&rsquo;만을 믿습니다. 강의실에서 이론을 배우는 대신,
            첫 주부터 직접 돈을 벌고, 팀을 만들고, 제품을 런칭합니다.
          </p>

          <p className="mt-8">
            30주 동안 매주 매출 챌린지를 수행하며, 10만원에서 시작해
            1억을 향해 달립니다. 카카오모빌리티와 함께 멘토링을 받고,
            RISE 사업단의 VCC 미니 MBA를 병행하며, 데모데이에서 투자자
            앞에 섭니다.
          </p>

          <p className="mt-8">
            SPEC은 데모데이에서 끝나지 않습니다. 알럼나이 네트워크를 통해
            창업 여정을 계속 함께합니다. 우리의 목표는 하나&nbsp;&mdash;&nbsp;
            <span className="font-semibold text-white">
              성균관대의 창업자들이 대한민국을, 세계를 집어삼키는 것.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
