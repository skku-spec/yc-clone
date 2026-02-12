import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Demo Day | SPEC",
  description:
    "SPEC 데모데이 — 30주간의 여정을 투자자와 업계 리더 앞에서 선보이는 날",
};

const pClass =
  "mb-6 font-['Pretendard',sans-serif] font-normal text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

const linkClass =
  "text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700";

export default function DemoDayPage() {
  return (
    <main className="flex-1 px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[720px]">
        <PageHeader title="Demo Day" />
      </div>

      <article className="mx-auto max-w-[720px]">
        <section className="mb-10">
          <p className={pClass}>
            SPEC 데모데이는 매 기수 마지막에 개최되는 행사로, 각 팀이 30주간 만든 프로덕트와 성과를 투자자, 멘토, 업계 관계자 앞에서 선보입니다. 더 자세히 알고 싶으신 분들은{" "}
            <Link href="/demoday/faq" className={linkClass}>
              데모데이 FAQ
            </Link>
            를 참고해주세요.
          </p>
          <p className={pClass}>
            매 기수마다 다양한 분야의 투자자와 업계 전문가들이 참석하며, SPEC 팀의 성장 과정과 혁신적인 아이디어를 직접 경험할 수 있습니다.
          </p>
          <p className={pClass}>
            발표 형식은 팀당 5분의 프레젠테이션과 질의응답 시간으로 진행되며, 이를 통해 팀들은 투자자와의 직접적인 네트워킹 기회를 갖게 됩니다.
          </p>
        </section>
      </article>
    </main>
  );
}
