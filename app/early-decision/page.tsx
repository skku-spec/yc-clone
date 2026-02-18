import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Early Decision | SPEC",
  description:
    "SPEC 조기 지원 안내",
};

export default function EarlyDecisionPage() {
  return (
    <main className="px-4 pb-24 pt-14 md:pt-20">
      <header className="mx-auto max-w-[800px] text-center">
        <h1 className="font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
          Early Decision
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] font-['Pretendard',sans-serif] text-lg font-normal leading-relaxed text-[#16140f]/80">
          일반 모집보다 2주 먼저 지원하여 빠른 심사를 받으세요. 
          이미 MVP가 있거나 팀이 구성된 경우 조기 지원을 추천합니다.
        </p>
      </header>

      <article className="mx-auto mt-12 max-w-[720px] font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
        <img
          src="https://bookface-static.ycombinator.com/assets/ycdc/early-decision-hero-b6b5f7dbcfc11aed4bf60a7d32c0b1c89b57a14b41d03c3d4c2b4d3e1e7b9a4c.jpg"
          alt="Early Decision"
          className="mb-8 w-full rounded-xl object-cover"
          loading="lazy"
        />

        <p className="mb-8">
          조기 지원(Early Decision)은 일반 지원자보다 먼저 심사를 받아 
          빠르게 합격 여부를 확인할 수 있는 제도입니다. 
          이미 프로토타입을 만들었거나 팀 구성이 완료된 경우, 
          조기 지원을 통해 멘토와의 매칭을 우선적으로 받을 수 있습니다.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 font-['MaruBuri',serif] text-3xl font-medium text-[#16140f]">
            조기 지원 방식
          </h2>
          <p className="mb-6">
            조기 지원은 일반 모집 마감일보다 2주 먼저 지원서를 제출하는 방식입니다. 
            일반 지원과 동일한 지원서를 작성하지만, 심사 결과를 더 빨리 받을 수 있으며 
            합격 시 멘토와의 매칭이 우선적으로 이루어집니다.
          </p>

          <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-medium text-[#16140f]">
            누가 지원해야 하나요?
          </h3>
          <p className="mb-6">
            이미 MVP(최소 기능 제품)를 만든 팀, 팀 구성이 완료된 경우, 
            또는 빠르게 시작하고 싶은 경우 조기 지원을 추천합니다. 
            아직 확실하지 않더라도 지원해볼 수 있습니다. 손해볼 것은 없습니다.
          </p>
          <p className="mb-6">
            조기 지원은 학부생, 대학원생, 휴학생 모두 가능합니다. 
            현재 학기를 마치고 다음 학기에 본격적으로 시작하고 싶은 분들께 적합합니다.
          </p>

          <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-medium text-[#16140f]">
            일정
          </h3>
          <p className="mb-6">
            조기 지원 마감일은 일반 모집 마감일 2주 전입니다. 
            지원서를 제출한 후 1주일 이내에 1차 심사 결과를 받을 수 있으며, 
            면접에 초대되면 그로부터 3일 이내에 면접을 진행합니다. 
            최종 합격 통보는 면접 후 2-3일 내에 이루어집니다.
          </p>

          <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-medium text-[#16140f]">
            지원 방법
          </h3>
          <p className="mb-6">
             지원서를 작성할 때 &quot;조기 지원&quot; 옵션을 선택하면 됩니다.
            지원서 내용은 일반 지원과 동일하지만, 
            이미 만든 프로토타입이나 MVP가 있다면 반드시 링크를 포함해주세요. 
            팀 구성 현황과 각자의 역할도 명확히 기재해주세요.
          </p>

          <h3 className="mb-3 mt-8 font-['MaruBuri',serif] text-xl font-medium text-[#16140f]">
            조기 지원의 장점
          </h3>
          <p className="mb-6">
            빠른 합격 통보를 받을 수 있고, 멘토 매칭이 우선적으로 이루어집니다. 
            또한 프로그램 시작 전에 멘토와 미리 소통하여 
            30주 프로그램을 더 효과적으로 준비할 수 있습니다. 
            일반 지원자들보다 먼저 시작할 수 있다는 심리적 여유도 큰 장점입니다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-['MaruBuri',serif] text-3xl font-medium text-[#16140f]">
            영상: 지금이 창업하기 좋은 시기인 이유
          </h2>
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/0TNTlMZFTWw"
              title="지금이 창업하기 좋은 시기인 이유"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </section>

        <section className="rounded-2xl bg-[#FF6C0F] px-8 py-10 text-center text-white">
          <p className="mb-4 font-['Pretendard',sans-serif] text-lg font-normal">
            지금 조기 지원하여 SPEC의 자리를 확보하세요.
          </p>
          <a
            href="https://apply.ycombinator.com/home"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 font-['Pretendard',sans-serif] text-base font-medium text-[#FF6C0F] transition-opacity hover:opacity-90"
          >
            조기 지원하기
          </a>
        </section>
      </article>
    </main>
  );
}
