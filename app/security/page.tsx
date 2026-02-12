import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security | SPEC",
  description: "SPEC 개인정보 보호 및 보안 정책",
};

export default function SecurityPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <h1 className="mb-8 text-center font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        Security
      </h1>

      <div className="mx-auto max-w-[720px]">
        <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
          SPEC은 지원자 및 참여 팀의 개인정보와 사업 정보를 안전하게
          보호하는 것을 최우선으로 생각합니다. 본 페이지에서는 SPEC의
          개인정보 보호 및 보안 정책을 안내합니다.
        </p>

        <h4 className="mb-3 mt-8 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
          개인정보 수집 항목 및 목적
        </h4>
        <p className="mb-3 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
          SPEC은 다음의 개인정보를 수집하며, 명시된 목적 외에는 사용하지
          않습니다:
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
          <li>
            <strong>성명, 연락처, 이메일:</strong> 지원 접수 및 선발 결과
            안내, 프로그램 운영 관련 연락
          </li>
          <li>
            <strong>학교, 학과, 학번:</strong> 지원 자격 확인 및 팀 구성
            파악
          </li>
          <li>
            <strong>사업 아이디어 및 계획서:</strong> 심사 및 멘토링 목적
          </li>
          <li>
            <strong>포트폴리오, 경력 사항:</strong> 팀 역량 평가
          </li>
        </ul>

        <h4 className="mb-3 mt-8 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
          정보 보관 기간
        </h4>
        <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
          수집된 개인정보는 해당 기수 프로그램 종료 후 1년간 보관되며,
          이후 안전하게 파기됩니다. 단, 법령에 의해 보관이 필요한 경우
          해당 기간 동안 보관합니다. 지원자가 정보 삭제를 요청할 경우,
          특별한 사유가 없는 한 30일 이내에 처리합니다.
        </p>

        <h4 className="mb-3 mt-8 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
          제3자 제공 여부
        </h4>
        <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
          SPEC은 지원자의 개인정보를 원칙적으로 제3자에게 제공하지
          않습니다. 다만 멘토링 프로그램 운영을 위해 선발된 팀의 사업
          정보가 멘토에게 공유될 수 있으며, 이 경우 사전에 해당 팀의
          동의를 받습니다. 멘토에게는 별도의 NDA(비밀유지 합의서)
          서명을 요청합니다.
        </p>

        <h4 className="mb-3 mt-8 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
          지원자 정보 보호
        </h4>
        <p className="mb-3 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
          SPEC은 지원자 정보를 보호하기 위해 다음과 같은 조치를
          시행합니다:
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
          <li>
            지원서 데이터는 접근 권한이 부여된 운영진만 열람 가능
          </li>
          <li>
            심사 과정에서의 논의 내용은 외부에 공개하지 않음
          </li>
          <li>
            탈락한 지원서의 사업 아이디어는 어떤 형태로도 활용하지 않음
          </li>
          <li>
            온라인 시스템은 암호화된 연결(HTTPS)을 통해 운영
          </li>
          <li>
            정기적인 접근 권한 검토 및 불필요한 데이터 삭제 시행
          </li>
        </ul>

        <h4 className="mb-3 mt-8 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
          보안 문의
        </h4>
        <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
          개인정보 보호 또는 보안 관련 문의사항이 있으시면{" "}
          <a
            href="mailto:security@spec-skku.org"
            className="text-[#FF6C0F] underline hover:opacity-70"
          >
            security@spec-skku.org
          </a>
          로 연락해 주세요. 접수된 문의는 영업일 기준 3일 이내에 답변
          드리겠습니다. 개인정보 열람, 정정, 삭제 요청 역시 동일한
          이메일을 통해 접수 가능합니다.
        </p>
      </div>
    </section>
  );
}
