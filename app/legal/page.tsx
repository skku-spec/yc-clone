import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal | SPEC",
  description: "SPEC 이용약관 및 개인정보처리방침",
};

export default function LegalPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <div className="mb-8 text-center">
        <h1 className="font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
          Legal
        </h1>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-12 md:flex-row-reverse">
        {/* Sidebar Navigation */}
        <nav className="shrink-0 md:w-[170px]">
          <ul className="sticky top-24 space-y-1 font-['Pretendard',sans-serif] text-sm">
            <li className="mb-2 font-medium text-[#16140f]">목차</li>
            <li>
              <a
                href="#terms"
                className="text-[#FF6C0F] hover:underline"
              >
                이용약관
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="text-[#FF6C0F] hover:underline"
              >
                개인정보처리방침
              </a>
            </li>
            <li>
              <a
                href="#cookies"
                className="text-[#FF6C0F] hover:underline"
              >
                쿠키 정책
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <article className="min-w-0 flex-1 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
          {/* ==================== 이용약관 ==================== */}
          <section id="terms" className="scroll-mt-24">
            <h2 className="mb-2 font-['MaruBuri',serif] text-2xl font-semibold">
              이용약관
            </h2>
            <p className="mb-6 text-sm text-[#16140f]/60">
              최종 수정일: 2025년 2월
            </p>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제1조 (목적)
            </h3>
            <p className="mb-6">
              본 약관은 성균관대학교 창업학회 SPEC(이하
              &ldquo;학회&rdquo;)이 운영하는 웹사이트(이하
              &ldquo;사이트&rdquo;)의 이용과 관련하여 학회와 이용자 간의
              권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
            </p>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제2조 (서비스의 내용)
            </h3>
            <p className="mb-4">
              학회는 다음과 같은 서비스를 제공합니다:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>SPEC 프로그램 안내 및 지원 접수</li>
              <li>학회 활동 및 행사 정보 제공</li>
              <li>Alumni 네트워크 및 커뮤니티 운영</li>
              <li>멘토링, 네트워킹 등 부가 서비스</li>
              <li>창업 관련 리소스 및 콘텐츠 제공</li>
            </ul>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제3조 (이용 조건)
            </h3>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>
                사이트를 이용함으로써 본 약관에 동의한 것으로 간주합니다.
              </li>
              <li>
                이용자는 사이트를 통해 제공받은 정보를 학회의 사전 동의
                없이 상업적 목적으로 이용하거나 제3자에게 제공할 수
                없습니다.
              </li>
              <li>
                이용자는 지원서 작성 시 정확한 정보를 제공해야 하며,
                허위 정보로 인한 불이익은 이용자 본인에게 있습니다.
              </li>
              <li>
                사이트 콘텐츠에 대한 저작권은 학회에 있으며, 무단
                복제·배포를 금지합니다.
              </li>
            </ul>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제4조 (서비스의 변경 및 중단)
            </h3>
            <p className="mb-6">
              학회는 운영상·기술상의 필요에 따라 서비스를 변경하거나
              중단할 수 있으며, 이 경우 사전에 공지합니다. 다만, 불가피한
              사유로 사전 공지가 불가능한 경우 사후에 공지할 수 있습니다.
            </p>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제5조 (면책 사항)
            </h3>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>
                학회는 천재지변, 시스템 장애 등 불가항력적 사유로 인해
                서비스를 제공할 수 없는 경우 책임을 지지 않습니다.
              </li>
              <li>
                이용자가 사이트를 통해 취득한 정보로 인한 손해에 대해
                학회는 책임을 지지 않습니다.
              </li>
              <li>
                외부 링크를 통해 연결된 사이트의 내용에 대해서는 학회가
                책임지지 않습니다.
              </li>
            </ul>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제6조 (준거법 및 분쟁 해결)
            </h3>
            <p className="mb-8">
              본 약관의 해석 및 적용에 관하여는 대한민국 법을 적용하며,
              서비스 이용과 관련하여 발생한 분쟁은 상호 협의 하에 원만히
              해결하는 것을 원칙으로 합니다.
            </p>
          </section>

          {/* ==================== 개인정보처리방침 ==================== */}
          <section id="privacy" className="scroll-mt-24">
            <h2 className="mb-2 font-['MaruBuri',serif] text-2xl font-semibold">
              개인정보처리방침
            </h2>
            <p className="mb-6 text-sm text-[#16140f]/60">
              최종 수정일: 2025년 2월
            </p>

            <p className="mb-6">
              성균관대학교 창업학회 SPEC(이하 &ldquo;학회&rdquo;)은
              이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등
              관련 법령을 준수하고 있습니다. 본 개인정보처리방침은 학회가
              수집하는 개인정보의 항목, 수집 및 이용 목적, 보유 기간 등을
              안내합니다.
            </p>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제1조 (수집하는 개인정보 항목)
            </h3>
            <p className="mb-4">
              학회는 프로그램 운영을 위해 다음의 개인정보를 수집합니다:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>
                <strong>필수 항목:</strong> 이름, 이메일 주소, 학교,
                학년(또는 졸업 여부), 전공
              </li>
              <li>
                <strong>선택 항목:</strong> 전화번호, 자기소개, 관심
                분야, 창업 경험, 포트폴리오 URL, LinkedIn 프로필
              </li>
              <li>
                <strong>자동 수집 항목:</strong> 접속 IP 주소, 방문
                일시, 브라우저 종류, 서비스 이용 기록
              </li>
            </ul>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제2조 (개인정보의 수집 및 이용 목적)
            </h3>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>SPEC 프로그램 지원서 접수 및 심사</li>
              <li>프로그램 운영 및 관리 (일정 안내, 출석 관리 등)</li>
              <li>멘토링 매칭 및 네트워킹 지원</li>
              <li>학회 소식 및 행사 안내</li>
              <li>Alumni 네트워크 운영</li>
              <li>서비스 개선을 위한 통계 분석</li>
            </ul>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제3조 (개인정보의 보유 및 이용 기간)
            </h3>
            <p className="mb-4">
              학회는 개인정보의 수집 및 이용 목적이 달성된 후에는 해당
              정보를 지체 없이 파기합니다. 구체적인 보유 기간은 다음과
              같습니다:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>
                <strong>지원서 정보:</strong> 해당 기수 프로그램 종료
                후 1년
              </li>
              <li>
                <strong>Alumni 정보:</strong> 회원 탈퇴 요청 시까지
                (Alumni 네트워크 운영 목적)
              </li>
              <li>
                <strong>자동 수집 정보:</strong> 수집일로부터 1년
              </li>
            </ul>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제4조 (개인정보의 제3자 제공)
            </h3>
            <p className="mb-4">
              학회는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지
              않습니다. 다만, 다음의 경우에는 예외로 합니다:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>이용자가 사전에 동의한 경우</li>
              <li>
                멘토링 매칭을 위해 멘토에게 이름, 이메일, 관심 분야 등
                제한된 정보를 제공하는 경우 (사전 안내 후)
              </li>
              <li>법령에 의하여 요구되는 경우</li>
            </ul>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제5조 (개인정보의 파기)
            </h3>
            <p className="mb-6">
              학회는 보유 기간이 경과하거나 처리 목적이 달성된
              개인정보는 지체 없이 파기합니다. 전자적 파일 형태의 경우
              복구 및 재생이 불가능한 기술적 방법을 사용하여 삭제하며,
              종이 문서에 기록된 개인정보는 분쇄기로 파쇄하거나
              소각합니다.
            </p>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제6조 (정보주체의 권리)
            </h3>
            <p className="mb-4">
              이용자는 언제든지 다음의 권리를 행사할 수 있습니다:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>개인정보 열람 요청</li>
              <li>오류 등이 있을 경우 정정 요청</li>
              <li>삭제 요청</li>
              <li>처리 정지 요청</li>
            </ul>
            <p className="mb-6">
              위 권리 행사는 아래 담당자에게 이메일로 요청하실 수
              있으며, 학회는 이에 대해 지체 없이 조치하겠습니다.
            </p>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제7조 (개인정보 보호 조치)
            </h3>
            <p className="mb-6">
              학회는 개인정보의 안전성 확보를 위해 다음과 같은 조치를
              취하고 있습니다: 개인정보에 대한 접근 권한 제한, 개인정보의
              암호화, 해킹 등에 대비한 기술적 대책 수립, 개인정보
              취급자의 최소화 및 교육 실시.
            </p>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              제8조 (개인정보 보호 담당자)
            </h3>
            <p className="mb-4">
              개인정보 처리에 관한 문의, 불만, 피해구제 등은 아래
              담당자에게 연락해 주시기 바랍니다:
            </p>
            <div className="mb-8 rounded-lg border border-[#16140f]/10 bg-[#16140f]/[0.03] p-4">
              <p className="mb-1">
                <strong>개인정보 보호 담당자</strong>
              </p>
              <p className="text-sm text-[#16140f]/70">
                이메일:{" "}
                <a
                  href="mailto:privacy@spec-skku.org"
                  className="text-[#FF6C0F] hover:underline"
                >
                  privacy@spec-skku.org
                </a>
              </p>
              <p className="text-sm text-[#16140f]/70">
                소속: SPEC 운영진
              </p>
            </div>
          </section>

          {/* ==================== 쿠키 정책 ==================== */}
          <section id="cookies" className="scroll-mt-24">
            <h2 className="mb-2 font-['MaruBuri',serif] text-2xl font-semibold">
              쿠키 정책
            </h2>
            <p className="mb-6 text-sm text-[#16140f]/60">
              최종 수정일: 2025년 2월
            </p>

            <p className="mb-4">
              본 사이트는 서비스 개선과 이용자 편의를 위해 쿠키를
              사용합니다. 쿠키란 웹사이트가 이용자의 브라우저에 보내는
              소량의 텍스트 파일로, 이용자의 컴퓨터에 저장됩니다.
            </p>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              사용하는 쿠키의 종류
            </h3>
            <ul className="mb-6 list-disc space-y-2 pl-8">
              <li>
                <strong>필수 쿠키:</strong> 사이트의 기본 기능 제공에
                필요한 쿠키 (로그인 상태 유지 등)
              </li>
              <li>
                <strong>분석 쿠키:</strong> 사이트 이용 현황을 파악하여
                서비스를 개선하기 위한 쿠키
              </li>
            </ul>

            <h3 className="mb-3 font-['MaruBuri',serif] text-lg font-semibold">
              쿠키 설정 변경
            </h3>
            <p className="mb-4">
              이용자는 웹 브라우저의 설정을 통해 쿠키 저장을 거부하거나
              삭제할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 사이트의
              일부 기능 이용에 제한이 있을 수 있습니다.
            </p>
            <ul className="mb-6 list-disc space-y-1 pl-8 text-sm">
              <li>
                <a
                  href="https://support.google.com/accounts/answer/61416?hl=ko"
                  className="text-[#FF6C0F] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome 쿠키 설정
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/ko-kr/guide/safari/sfri11471/mac"
                  className="text-[#FF6C0F] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari 쿠키 설정
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/ko/kb/enhanced-tracking-protection-firefox-desktop"
                  className="text-[#FF6C0F] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firefox 쿠키 설정
                </a>
              </li>
            </ul>

            <p className="mb-8 text-sm text-[#16140f]/60">
              본 정책에 대한 문의사항은{" "}
              <a
                href="mailto:privacy@spec-skku.org"
                className="text-[#FF6C0F] hover:underline"
              >
                privacy@spec-skku.org
              </a>
              으로 연락해 주시기 바랍니다.
            </p>
          </section>

          <section className="scroll-mt-24">
            <p className="text-sm text-[#16140f]/50">
              &copy; 2025 SPEC (성균관대학교 창업학회). All rights
              reserved.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
