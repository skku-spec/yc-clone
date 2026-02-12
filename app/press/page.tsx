import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Press | SPEC",
  description: "SPEC 보도자료 및 미디어 정보",
};

const pClass =
  "mb-6 font-['Pretendard',sans-serif] font-normal text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

const h3Class =
  "mb-3 font-['MaruBuri',serif] text-[1.75rem] font-medium italic leading-tight text-[#16140f] md:text-[1.4rem]";

const sectionClass = "mb-10";

const linkClass =
  "text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700";

export default function PressPage() {
  return (
    <main className="flex-1 px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[720px]">
        <PageHeader title="Press" />
      </div>

      <article className="mx-auto max-w-[720px]">
        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>Press &amp; Media</strong>
          </h3>
          <p className={pClass}>
            <a href="mailto:press@spec-skku.org" className={linkClass}>
              press@spec-skku.org
            </a>
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>About SPEC</strong>
          </h3>
          <p className={pClass}>
            SPEC은 성균관대학교 창업학회로, 학생 창업가들을 위한 30주간의 실전 창업 프로그램을 운영합니다.
          </p>
          <p className={pClass}>
            2021년 설립 이래, SPEC은 50개 이상의 창업팀을 배출했으며, 학생들의 혁신적인 아이디어를 현실로 만드는 데 도움을 주고 있습니다. 멘토링, 네트워킹, 실전 교육을 통해 성균관대 학생들의 창업 생태계를 조성하고 있습니다.
          </p>
          <p className={pClass}>
            SPEC은 창업가 정신, 혁신, 그리고 실행력을 중심으로 설계되었으며, 학생 창업가들이 최고의 플랫폼을 통해 자신의 아이디어를 성장시킬 수 있도록 지원합니다. 우리의 프로그램은 연 4회 진행되며, 각 배치에 참여하는 팀들은 집중적인 멘토링과 네트워킹 기회를 제공받습니다.
          </p>
          <ul className="mb-6 space-y-2">
            <li>
              <Link href="/about" className={linkClass}>
                더 알아보기
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClass}>
                최신 소식
              </Link>
            </li>
            <li>
              <Link href="/companies" className={linkClass}>
                SPEC 팀
              </Link>
            </li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>Recent Coverage</strong>
          </h3>
          <ul className="mb-6 list-disc pl-8 font-['Pretendard',sans-serif] text-[18px] font-normal leading-[1.7] text-[#16140f]">
            <li className="mb-2">
              &quot;성균관대 창업학회 SPEC, 4기 모집 시작&quot; — 매일경제
            </li>
            <li className="mb-2">
              &quot;대학 창업 교육의 혁신, SPEC&quot; — 동아일보
            </li>
            <li className="mb-2">
              &quot;SPEC-Backed Startup Raises Series A&quot; — 한국경제
            </li>
            <li className="mb-2">
              &quot;대학생 창업가들의 꿈, SPEC에서 현실이 되다&quot; — 성균관대 뉴스
            </li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>Brand Assets</strong>
          </h3>
          <p className={pClass}>
            SPEC 로고 및 브랜드 자산 요청은{" "}
            <a href="mailto:press@spec-skku.org" className={linkClass}>
              press@spec-skku.org
            </a>
            로 문의해 주시기 바랍니다.
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>Follow SPEC</strong>
          </h3>
          <ul className="space-y-2 font-['Pretendard',sans-serif] text-[18px] font-normal leading-[1.7]">
            <li>
              <a
                href="https://www.instagram.com/spec_skku/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/spec-skku/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/spec.skku"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Facebook
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
