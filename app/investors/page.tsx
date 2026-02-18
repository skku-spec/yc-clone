import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Investors | SPEC",
  description:
    "SPEC 후원사 및 파트너 안내",
};

export default function InvestorsPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <PageHeader title="Investors & Partners" align="center" />

      <article className="mx-auto max-w-[720px]">
        <div className="mb-10">
          <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
            SPEC은 성균관대학교의 대표 창업학회로, 매 학기 선발된 스타트업 팀들에게 30주간의 집중 프로그램을 제공합니다. 
            우리는 학생 창업가들이 실제로 고객의 문제를 해결하고, 제품을 만들고, 성장시킬 수 있도록 돕습니다.
          </p>
          <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
            SPEC은 아직 투자 유치 실적은 없지만, 매 학기 우수한 팀들을 배출하고 있으며 장기적으로 
            한국의 스타트업 생태계에 기여하는 것을 목표로 합니다.
          </p>
          <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
            The full directory of SPEC-backed companies is{" "}
            <Link
              href="/companies"
              className="text-[#16140f] underline hover:opacity-70"
            >
              여기에서
            </Link>{" "}
            확인하실 수 있습니다.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-3 font-['MaruBuri',serif] text-[22px] font-medium leading-[28px] text-[#16140f]">
            Demo Day 참관
          </h2>
          <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
            매 학기 말, SPEC은 데모데이를 개최하여 각 팀이 그동안의 성과를 발표합니다. 
            투자자, 기업 파트너, 멘토, 그리고 성균관대 구성원들을 초대합니다. 
            참관을 희망하시는 분은{" "}
            <Link
              href="/demoday"
              className="text-[#16140f] underline hover:opacity-70"
            >
              여기를 클릭
            </Link>
            해주세요.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-3 font-['MaruBuri',serif] text-[22px] font-medium leading-[28px] text-[#16140f]">
            스폰서십 & 파트너십
          </h2>
          <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
            SPEC 프로그램을 후원하거나 파트너십을 맺고 싶으신 기업이나 기관은{" "}
            <Link
              href="/partnerships"
              className="text-[#16140f] underline hover:opacity-70"
            >
              여기에서
            </Link>{" "}
            자세한 내용을 확인하실 수 있습니다. 
            크레딧 제공, 멘토링, 공간 지원 등 다양한 협력 방식이 가능합니다.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-3 font-['MaruBuri',serif] text-[22px] font-medium leading-[28px] text-[#16140f]">
            투자 문의
          </h2>
           <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
             If you&apos;re interested in investing in SPEC-backed companies, reach out at <span className="font-medium">invest@spec-skku.org</span>. 
             연락주시기 바랍니다. SPEC은 아직 초기 단계이지만, 
             잠재력 있는 학생 창업가들과의 연결을 도와드리겠습니다. 
             현재는 투자유치보다는 멘토링과 교육에 집중하고 있습니다.
           </p>
        </div>

        <div>
          <h2 className="mb-3 font-['MaruBuri',serif] text-[22px] font-medium leading-[28px] text-[#16140f]">
            멘토 지원
          </h2>
          <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
            스타트업 경험이 있으신 분, 또는 특정 도메인의 전문가시라면 
            SPEC 팀들의 멘토로 참여하실 수 있습니다. 
            멘토링은 온라인 또는 오프라인으로 진행되며, 
            학생 창업가들에게 실질적인 조언을 제공하실 수 있습니다. 
            자세한 내용은 <span className="font-medium">mentor@spec-skku.org</span>로 문의해주세요.
          </p>
        </div>
      </article>
    </div>
  );
}
