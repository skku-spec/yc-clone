import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Bio & Healthcare | SPEC",
  description:
    "SPEC 바이오/헬스케어 분야 창업 지원",
};

export default function BiotechPage() {
  return (
    <>
      <div className="pt-14 md:pt-20">
        <PageHeader title="Bio &amp; Healthcare" align="center" />
      </div>

      <div className="mx-auto flex max-w-[1100px] gap-12 px-4 pb-24 pt-8 md:px-8">
        <article className="min-w-0 max-w-[720px] flex-1 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
          <p className="mb-6">
            SPEC은 바이오/헬스케어 분야의 창업팀을 적극적으로 지원합니다. 성균관대학교의 강력한 연구 인프라와 함께, 실험실의 기술을 시장으로 연결하는 것이 우리의 목표입니다. 기술 창업의 새로운 가능성을 여는 팀과 함께하고 싶습니다.
          </p>

          <h3
            id="whoapply"
            className="mb-4 mt-10 font-['MaruBuri',serif] text-2xl font-normal text-[#16140f]"
          >
            지원 대상
          </h3>

          <p className="mb-6">
            바이오/헬스케어 분야는 지금 큰 변화를 맞이하고 있습니다. 기술 개발 비용과 시간이 크게 줄어들면서, 스타트업도 혁신적인 연구를 현실로 만들 수 있게 되었습니다.
          </p>

          <p className="mb-6">
            SPEC은 초기 단계의 프로젝트를 환영합니다. 연구실에서 막 나온 아이디어, 대학 연구를 사업화하려는 팀, 기술을 시장으로 가져가려는 모든 창업자를 지원합니다.
          </p>

          <p className="mb-6">
            우리가 관심 있는 분야는 다양합니다: 디지털 헬스, 의료 AI, 진단 기기, 바이오마커, 헬스테크 플랫폼, 맞춤형 치료제, 예방 의학 등. 기술로 건강 문제를 해결하는 모든 접근을 환영합니다.
          </p>

          <h3
            id="whatwedo"
            className="mb-4 mt-10 font-['MaruBuri',serif] text-2xl font-normal text-[#16140f]"
          >
            SPEC의 지원
          </h3>

          <p className="mb-6">
            모든 바이오/헬스케어 스타트업은 고유한 어려움을 가지고 있습니다. SPEC은 획일적인 프로그램 대신, 각 팀의 현재 과제에 맞춘 맞춤형 지원을 제공합니다.
          </p>

          <p className="mb-6">
            우리가 도울 수 있는 영역: 규제 승인 및 임상 계획, 특허 및 지식재산권 보호, 수익 모델 개발, 기술이전 협상, 초기 고객 발굴, 투자 유치 준비. 과학적 기술에 대한 깊이 있는 논의도 함께합니다.
          </p>

          <p className="mb-6">
            바이오/헬스케어 스타트업은 여전히 초기 자본이 많이 필요합니다. SPEC은 팀이 투자를 성공적으로 유치할 수 있도록 준비시키는 데 집중합니다. 사업 계획, 피칭, 투자자 네트워크 연결까지 전 과정을 지원합니다.
          </p>

          <p className="mb-6">
            SPEC의 가장 큰 자산은 네트워크입니다. 성균관대학교의 약학대학, 의과대학, 생명과학과와의 긴밀한 협력, 그리고 바이오 업계 출신 멘토진이 함께합니다. 서로 돕고 성장하는 커뮤니티가 여기 있습니다.
          </p>

          <ul className="mb-6 list-disc space-y-1 pl-6">
             <li>
               <span className="font-normal text-[#16140f]">성균관대 약학대학</span>{" "}
               — 신약 개발 및 제약 산업 전문 지원
             </li>
             <li>
               <span className="font-normal text-[#16140f]">성균관대 의과대학</span>{" "}
               — 임상 연구 및 의료 기기 개발 협력
             </li>
             <li>
               <span className="font-normal text-[#16140f]">생명과학과 연구실</span>{" "}
               — 바이오마커 및 진단 기술 공동 연구
             </li>
             <li>
               <span className="font-normal text-[#16140f]">바이오 업계 멘토진</span>{" "}
               — 제약사, 병원, 헬스테크 기업 출신 전문가
             </li>
             <li>
               <span className="font-normal text-[#16140f]">규제 전문가 네트워크</span>{" "}
               — 식약처 승인 및 임상 시험 가이드
             </li>
          </ul>

          <p className="mb-6">
            <strong className="font-normal">"실험실에서 시장으로"</strong> — SPEC은 대학 연구를 사업으로 연결하는 것을 돕습니다. 성균관대 캠퍼스 내 연구 시설 접근, 외부 랩 공간 연결, 장비 및 시약 지원까지, 연구 환경이 필요한 모든 부분을 지원합니다.
          </p>

          <h3
            id="alumni"
            className="mb-4 mt-10 font-['MaruBuri',serif] text-2xl font-normal text-[#16140f]"
          >
            성공 사례
          </h3>

          <p className="mb-4">
            SPEC에서 지원하고 성장한 바이오/헬스케어 팀들:
          </p>

          <ul className="mb-6 list-disc space-y-1 pl-6">
             <li>
               <span className="font-normal text-[#16140f]">헬스케어 AI 스타트업 A</span>{" "}
               — 의료 영상 분석 AI로 조기 진단 시스템 개발
             </li>
             <li>
               <span className="font-normal text-[#16140f]">디지털 헬스 플랫폼 B</span>{" "}
               — 만성질환 관리를 위한 모바일 헬스케어 서비스
             </li>
             <li>
               <span className="font-normal text-[#16140f]">바이오마커 진단 C</span>{" "}
               — 혈액 기반 암 조기 진단 키트 개발
             </li>
             <li>
               <span className="font-normal text-[#16140f]">의료기기 스타트업 D</span>{" "}
               — 비침습 혈당 측정 웨어러블 기기
             </li>
             <li>
               <span className="font-normal text-[#16140f]">신약 개발 팀 E</span>{" "}
               — AI 기반 신약 후보 물질 발굴 플랫폼
             </li>
             <li>
               <span className="font-normal text-[#16140f]">원격의료 서비스 F</span>{" "}
               — 환자-의료진 연결 텔레헬스 플랫폼
             </li>
          </ul>

          <p className="mb-6">
            <Link
              href="/companies?industry=Healthcare"
              className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
            >
              전체 헬스케어 스타트업 목록 보기
            </Link>
          </p>

          <h3
            id="blogposts"
            className="mb-4 mt-10 font-['MaruBuri',serif] text-2xl font-normal text-[#16140f]"
          >
            관련 자료
          </h3>

          <p className="mb-4">
            바이오/헬스케어 스타트업에 대해 우리가 공유한 글들:
          </p>

          <ul className="mb-6 list-disc space-y-1 pl-6">
             <li>
               <span className="text-[#16140f]">
                 대학 연구를 스타트업으로: 기술이전 가이드
               </span>
             </li>
             <li>
               <span className="text-[#16140f]">
                 바이오 스타트업의 투자 유치 전략
               </span>
             </li>
             <li>
               <span className="text-[#16140f]">
                 헬스케어 규제 환경 이해하기
               </span>
             </li>
             <li>
               <span className="text-[#16140f]">
                 디지털 헬스케어의 미래
               </span>
             </li>
          </ul>

          <h3
            id="quotes"
            className="mb-4 mt-10 font-['MaruBuri',serif] text-2xl font-normal text-[#16140f]"
          >
            창업자 후기
          </h3>

          <blockquote className="mb-2 border-l-4 border-[#FF6C0F] pl-6 not-italic text-[#16140f]/80">
            <p>
              SPEC에서의 3개월은 제 연구를 완전히 다른 시각으로 보게 만들었습니다. 실험실에서는 몰랐던 시장의 언어를 배웠고, 기술을 제품으로 만드는 과정을 경험했습니다. 멘토들의 실전 경험과 조언이 정말 큰 도움이 되었습니다.
            </p>
          </blockquote>
          <p className="mb-8 text-sm text-[#16140f]/60">
            – 김○○, 의료 AI 스타트업 대표
          </p>

          <blockquote className="mb-2 border-l-4 border-[#FF6C0F] pl-6 not-italic text-[#16140f]/80">
            <p>
              처음에는 기술만 있으면 창업할 수 있다고 생각했습니다. SPEC을 통해 비즈니스 모델, 고객 개발, 투자 유치까지 배우면서 진짜 '스타트업'이 무엇인지 알게 되었습니다. 성균관대의 네트워크도 큰 자산이었습니다.
            </p>
          </blockquote>
          <p className="mb-8 text-sm text-[#16140f]/60">
            – 이○○, 바이오마커 진단 팀 창업자
          </p>
        </article>

        <nav className="sticky top-24 hidden h-fit w-[170px] shrink-0 font-['Pretendard',sans-serif] text-sm lg:block">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
                목차
              </p>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="#whoapply"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    지원 대상
                  </a>
                </li>
                <li>
                  <a
                    href="#whatwedo"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    SPEC의 지원
                  </a>
                </li>
                <li>
                  <a
                    href="#alumni"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    성공 사례
                  </a>
                </li>
                <li>
                  <a
                    href="#quotes"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    창업자 후기
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
                더 알아보기
              </p>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/about"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    SPEC 소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    자주 묻는 질문
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
