import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "SPEC 팀 합류 | SPEC",
  description:
    "SPEC 운영진으로 합류하세요. 운영팀, 콘텐츠팀, 파트너십팀의 다양한 직무를 확인하세요.",
};

const jobListings = [
  {
    department: "운영팀",
    roles: [
      { title: "리드 기획자", location: "서울" },
      { title: "커뮤니티 매니저", location: "서울" },
    ],
  },
  {
    department: "콘텐츠팀",
    roles: [
      { title: "콘텐츠 에디터", location: "서울" },
      { title: "영상 PD", location: "서울" },
    ],
  },
  {
    department: "파트너십팀",
    roles: [
      { title: "파트너십 매니저", location: "서울" },
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <PageHeader 
        title="Join the Team"
        subtitle="SPEC과 함께 성균관대 창업 생태계를 만들어 나갈 팀원을 모집하고 있습니다."
      />

      <div className="mb-12 max-w-[800px]">
        <p className="mb-6 font-['Pretendard',sans-serif] text-[22px] font-normal leading-[32px] text-[#16140f]">
          창업 커뮤니티 운영, 콘텐츠 제작, 파트너십 개발 등 다양한 영역에서
          대학 창업 문화를 선도하는 경험을 해보세요.
        </p>
        <p className="mb-6 font-['Pretendard',sans-serif] text-[22px] font-normal leading-[32px] text-[#16140f]">
          SPEC의 운영진으로 참여하는 것은 성균관대의 스타트업 커뮤니티와
          창업가 생태계를 직접 구성하고 영향을 미칠 수 있는 기회입니다.
          아래의 열린 포지션들을 확인해보세요.
        </p>
      </div>

      <div className="space-y-10">
        {jobListings.map((dept) => (
          <div key={dept.department}>
            <h2 className="mb-4 font-['Pretendard',sans-serif] text-xl font-semibold text-[#16140f]">
              {dept.department}
            </h2>
            <div className="space-y-3">
              {dept.roles.map((role) => (
                <div
                  key={role.title}
                  className="flex items-center justify-between rounded-lg border border-[#d4d4cc] bg-white px-6 py-5 transition-shadow hover:shadow-md"
                >
                  <div>
                    <h3 className="font-['Pretendard',sans-serif] text-lg font-medium text-[#16140f]">
                      {role.title}
                    </h3>
                    <p className="font-['Pretendard',sans-serif] text-sm font-normal text-[#16140f]/60">
                      {role.location}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 text-[#16140f]/40"
                  >
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="font-['Pretendard',sans-serif] text-lg font-normal text-[#16140f]">
          SPEC의 지원이나 협력에 대해 더 알고 싶으신가요?{" "}
          <Link
            href="/contact"
            className="text-[#16140f] underline hover:opacity-70"
          >
            문의하기
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
