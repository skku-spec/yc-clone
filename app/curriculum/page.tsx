'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

/* ──────────────────────────────────────────────
   PRENEUR TRACK DATA
   ────────────────────────────────────────────── */

const preneurAreas = [
  {
    num: '01',
    title: '조직 운영 & 스케일업',
    subtitle: 'Operations & Scale-up',
    description:
      'SPEC 자체를 스타트업처럼 운영합니다. 내부 프로세스를 설계하고, 기수 운영을 체계화하며, SPEC만의 문화를 구축합니다. 조직이 성장하려면 시스템이 먼저 성장해야 합니다.',
    activities: [
      'SPEC 내부 운영 프로세스 설계 및 최적화',
      '기수별 온보딩/오프보딩 체계 구축',
      '조직 문화 정의 — 행동 강령, 의사결정 구조 수립',
      'OKR 기반 분기별 목표 설정 및 트래킹',
      '운영 매뉴얼 작성 — 후속 기수를 위한 레거시 구축',
    ],
  },
  {
    num: '02',
    title: '투자사 IR & 파트너십',
    subtitle: 'Investor Relations & Partnerships',
    description:
      'SPEC의 자원을 확대합니다. 투자사와 기업을 대상으로 IR을 진행하고, 전략적 파트너십을 발굴하며, 후원과 협업을 유치합니다. SPEC이 지속 가능하려면 외부 자원이 흘러들어와야 합니다.',
    activities: [
      '투자사/기업 대상 SPEC IR 덱 작성 및 피칭',
      '전략적 파트너십 발굴 — 기업, 대학, 정부 기관',
      '후원 유치 전략 수립 및 실행',
      '외부 협업 프로그램 기획 (해커톤, 공동 세션 등)',
      'SPEC 브랜드 가치 제안 정리 및 커뮤니케이션',
    ],
  },
  {
    num: '03',
    title: 'Learner 서포트 & 멘토링',
    subtitle: 'Learner Support & Mentoring',
    description:
      'Learner 팀이 최대한 빠르게 성장하도록 돕습니다. 오피스아워를 운영하고, 팀별 코칭을 진행하며, 성장 지표를 트래킹합니다. Learner의 성공이 곧 SPEC의 성공입니다.',
    activities: [
      'Learner 팀 주간 코칭 세션 운영',
      '오피스아워 — 1:1 멘토링 및 문제 해결',
      'Learner 성장 지표 대시보드 관리 및 분석',
      '외부 멘토 네트워크 연결 — 현직 창업가, VC, 전문가',
      '데모데이 준비 서포트 — 피치 리허설, 자료 검토',
    ],
  },
  {
    num: '04',
    title: '커뮤니티 빌딩',
    subtitle: 'Community Building',
    description:
      'SPEC의 영향력을 확장합니다. 알럼나이 네트워크를 관리하고, 외부 행사를 기획하며, SPEC 브랜드를 한국 창업 생태계에 각인시킵니다.',
    activities: [
      '알럼나이 네트워크 활성화 — 월간 동문 모임, 뉴스레터',
      '외부 행사 기획 및 운영 — 밋업, 네트워킹 이벤트',
      'SPEC 브랜드 관리 — SNS, 콘텐츠 전략',
      '타 창업 커뮤니티와의 교류 및 협업',
      '차기 기수 리쿠르팅 전략 수립 및 실행',
    ],
  },
];

const preneurMilestones = [
  { month: '3월', label: '기수 온보딩 & 조직 셋업' },
  { month: '5월', label: '중간 IR & 파트너 리뷰' },
  { month: '8월', label: 'Learner 데모데이 서포트' },
  { month: '11월', label: '기수 마무리 & 회고' },
];

/* ──────────────────────────────────────────────
   LEARNER TRACK DATA (16 weeks)
   ────────────────────────────────────────────── */

const learnerWeeks = [
  {
    week: 1,
    topic: '첫 매출 만들기 (1)',
    objectives: '어떤 수단이든 좋다 — 오늘 당장 ₩1이라도 벌어 온다',
    assignment: '₩10만원 매출 달성 (인증 필수)',
    notes: '실행 Day 1',
  },
  {
    week: 2,
    topic: '첫 매출 만들기 (2)',
    objectives: '첫 매출 복기, 재현 가능성 검증, 고객 반응 분석',
    assignment: '₩10만원 추가 매출 + 고객 후기 3건 확보',
    notes: '₩20만 누적',
  },
  {
    week: 3,
    topic: '고객 발굴 & 반복 매출 (1)',
    objectives: '타겟 고객 세그먼트 정의, 직접 발로 뛰어 고객 확보',
    assignment: '신규 고객 10명 확보 & 반복 구매 유도',
    notes: '',
  },
  {
    week: 4,
    topic: '고객 발굴 & 반복 매출 (2)',
    objectives: '재구매율 측정, 입소문 전략 실행, 고객 충성도 구축',
    assignment: '₩50만원 누적 매출 달성 + 재구매 고객 3명',
    notes: '₩50만 돌파',
  },
  {
    week: 5,
    topic: '비즈니스 모델 설계 & 검증 (1)',
    objectives: '지금까지의 매출을 비즈니스로 전환 — 수익 구조 설계',
    assignment: '수익 모델 캔버스 작성 + 가격 전략 테스트',
    notes: '',
  },
  {
    week: 6,
    topic: '비즈니스 모델 설계 & 검증 (2)',
    objectives: '유닛 이코노믹스 계산, 마진율 최적화, 스케일 가능성 검증',
    assignment: '₩100만원 누적 매출 + 수익 구조 발표',
    notes: '₩100만 돌파',
  },
  {
    week: 7,
    topic: 'MVP 빌드 & 런칭 (1)',
    objectives: '매출로 검증된 아이템을 제품화 — 최소 기능 제품 빌드',
    assignment: 'MVP 1주 스프린트 — 런칭 준비 완료',
    notes: '',
  },
  {
    week: 8,
    topic: 'MVP 빌드 & 런칭 (2)',
    objectives: 'MVP 런칭 & 초기 사용자 피드백 수집, 빠른 이터레이션',
    assignment: 'MVP 런칭 완료 + 사용자 20명 확보',
    notes: '런칭 주간',
  },
  {
    week: 9,
    topic: '마케팅 & 그로스 해킹 (1)',
    objectives: '저비용 고효율 마케팅 채널 발굴, CAC/LTV 최적화',
    assignment: '마케팅 실험 3개 실행 + 전환율 측정',
    notes: '',
  },
  {
    week: 10,
    topic: '마케팅 & 그로스 해킹 (2)',
    objectives: '바이럴 루프 설계, 레퍼럴 프로그램, 유료 광고 테스트',
    assignment: '₩500만원 누적 매출 + 그로스 리포트 제출',
    notes: '₩500만 돌파',
  },
  {
    week: 11,
    topic: '스케일링 & 팀 빌딩 (1)',
    objectives: '혼자 감당 못하는 규모가 됐다 — 팀 구성과 역할 분담',
    assignment: '팀 운영 계획서 + 업무 위임 구조 설계',
    notes: '',
  },
  {
    week: 12,
    topic: '스케일링 & 팀 빌딩 (2)',
    objectives: '운영 자동화, 외주/협업 전략, 조직 문화 초기 설계',
    assignment: '자동화 파이프라인 1개 구축 + 팀 합류자 확보',
    notes: '스케일 주간',
  },
  {
    week: 13,
    topic: '재무 & 법률 기초 (1)',
    objectives: '법인 설립, 세금, 계약서 — 사업자로서 알아야 할 최소한',
    assignment: '사업자 등록 + 재무 스프레드시트 작성',
    notes: '',
  },
  {
    week: 14,
    topic: '재무 & 법률 기초 (2)',
    objectives: '투자 유치 구조 이해, 지분 설계, 재무 예측 모델링',
    assignment: '3개월 재무 예측 + 지분 구조 초안',
    notes: '게스트: 스타트업 변호사',
  },
  {
    week: 15,
    topic: 'IR 피치 & 데모데이 준비 (1)',
    objectives: '투자자 앞에 서는 연습 — 피치덱 작성, 스토리텔링',
    assignment: '피치덱 10장 완성 + 5분 피치 리허설',
    notes: '',
  },
  {
    week: 16,
    topic: 'IR 피치 & 데모데이 (2)',
    objectives: '최종 데모데이 발표, 전체 여정 회고, 다음 스텝 설계',
    assignment: '데모데이 발표 + 회고록 작성',
    notes: '데모데이',
  },
];

const vccModules = [
  {
    num: '01',
    title: '문제 정의 & 기회 탐색',
    subtitle: 'Problem Definition & Opportunity Discovery',
    description:
      '모빌리티·물류·라이프스타일 영역에서 실제 고객의 불편을 발굴합니다. 카카오모빌리티 현업 데이터를 활용해 시장 기회를 검증합니다.',
    partner: 'Kakao Mobility',
    activities: [
      '카카오모빌리티 현업 세션 — 모빌리티 산업 인사이트',
      '고객 인터뷰 워크숍 (20명 이상 직접 인터뷰)',
      'Pain Point 매핑 & 기회 영역 도출',
      '시장 규모 추정 (TAM/SAM/SOM) 실습',
    ],
  },
  {
    num: '02',
    title: '솔루션 설계 & 프로토타이핑',
    subtitle: 'Solution Design & Rapid Prototyping',
    description:
      '검증된 문제에 대한 솔루션을 설계하고, 빠르게 프로토타입을 만듭니다. RISE 사업단의 기술 멘토링을 통해 실현 가능성을 높입니다.',
    partner: 'RISE 사업단',
    activities: [
      '린 캔버스 & 비즈니스 모델 캔버스 작성',
      'No-code / Low-code 프로토타이핑 스프린트',
      'RISE 사업단 기술 멘토 1:1 코칭',
      '사용자 테스트 — 최소 30명 피드백 수집',
    ],
  },
  {
    num: '03',
    title: 'MVP 개발 & 시장 검증',
    subtitle: 'MVP Development & Market Validation',
    description:
      '프로토타입을 실제 MVP로 발전시키고, 초기 사용자를 확보합니다. 실제 매출이나 사전 예약을 통해 시장 수요를 증명합니다.',
    partner: 'SPEC',
    activities: [
      'MVP 4주 집중 개발 스프린트',
      '얼리 어답터 100명 확보 캠페인',
      'SPEC Learner 트랙과 합동 그로스 해킹 세션',
      '유닛 이코노믹스 분석 & 가격 전략 수립',
    ],
  },
  {
    num: '04',
    title: 'IR 피칭 & 데모데이',
    subtitle: 'Investor Pitch & Demo Day',
    description:
      '투자자 앞에서 사업을 증명합니다. RISE 사업단 네트워크와 카카오모빌리티 임원진 앞에서 최종 피칭을 진행합니다.',
    partner: 'RISE × Kakao × SPEC',
    activities: [
      '피치덱 작성 & 스토리텔링 워크숍',
      'VC / 엔젤 투자자 모의 IR 세션',
      '합동 데모데이 — RISE·카카오모빌리티·SPEC 공동 개최',
      '후속 투자 연결 & 액셀러레이팅 프로그램 추천',
    ],
  },
];

const vccTimeline = [
  { month: '4월', label: '문제 정의 & 팀 빌딩' },
  { month: '6월', label: '프로토타입 완성' },
  { month: '9월', label: 'MVP & 시장 검증' },
  { month: '11월', label: '합동 데모데이' },
];

type Track = 'preneur' | 'learner' | 'vcc';

export default function CurriculumPage() {
  const [activeTrack, setActiveTrack] = useState<Track>('preneur');

  return (
    <main className="flex-1 px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[1100px]">
        <PageHeader
          title="Curriculum"
          subtitle="Preneur · Learner · VCC — SPEC을 이끄는 세 가지 트랙. 3월부터 11월까지."
        />

        {/* ── Track Switcher ── */}
        <div className="mb-14 flex justify-center">
          <div className="inline-flex rounded-full border border-[#d9d9cc] bg-white p-1">
            {([
              { key: 'preneur' as Track, label: 'Preneur Track' },
              { key: 'learner' as Track, label: 'Learner Track' },
              { key: 'vcc' as Track, label: 'VCC' },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTrack(tab.key)}
                className={`rounded-full px-6 py-2.5 font-['Pretendard',sans-serif] text-[15px] font-semibold tracking-tight transition-all ${
                  activeTrack === tab.key
                    ? 'bg-[#16140f] text-[#f5f5ee]'
                    : 'text-[#16140f]/60 hover:text-[#16140f]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTrack === 'preneur' && <PreneurTrack />}
        {activeTrack === 'learner' && <LearnerTrack />}
        {activeTrack === 'vcc' && <VccTrack />}

        {/* ── Bottom CTA ── */}
        <div className="mt-20 flex flex-col items-center gap-4 border-t border-[#d9d9cc] pt-16">
          <p
            className="font-['MaruBuri',serif] text-lg text-[#16140f]/70"
          >
            준비가 되셨다면, 지금 지원하세요.
          </p>
          <Link
            href="/apply"
            className="inline-flex h-[60px] items-center rounded-full bg-[#16140f] px-10 pb-0.5 font-['MaruBuri',serif] text-[22px] italic tracking-[0.01em] text-[#f5f5ee] transition-opacity hover:opacity-80"
          >
            지원하기 &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}

/* ──────────────────────────────────────────────
   PRENEUR TRACK VIEW
   ────────────────────────────────────────────── */

function PreneurTrack() {
  return (
    <div>
      <div className="mb-16 border-l-4 border-[#FF6C0F] pl-6">
        <p
          className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-black uppercase leading-tight tracking-tight text-[#16140f]"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          &ldquo;SPEC 자체가 우리의 스타트업이다&rdquo;
        </p>
        <p className="mt-2 font-['MaruBuri',serif] text-[16px] leading-relaxed text-[#16140f]/60">
          Preneur는 SPEC을 운영하고 성장시키는 리더십 트랙입니다. 조직을 스케일업하고, 파트너십을 확대하고, Learner를 서포트합니다. 3월부터 11월까지.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-4 divide-x divide-[#d9d9cc] rounded-lg border border-[#d9d9cc] bg-[#f5f5ee]">
        {preneurMilestones.map((ms) => (
          <div key={ms.month} className="flex flex-col items-center justify-center px-2 py-4">
            <span
              className="text-sm font-black uppercase tracking-tight text-[#FF6C0F]"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {ms.month}
            </span>
            <span className="mt-1 text-center font-['Pretendard',sans-serif] text-xs text-[#16140f]/50">
              {ms.label}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {preneurAreas.map((area) => (
          <div
            key={area.num}
            className="rounded-lg border border-[#d9d9cc] bg-white p-6 md:p-8"
          >
            <div className="mb-4 flex flex-wrap items-baseline gap-3">
              <span
                className="text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-tighter text-[#16140f]/10"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {area.num}
              </span>
            </div>

            <h3
              className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-black uppercase leading-tight tracking-tight text-[#16140f]"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {area.title}
            </h3>

            <p className="mt-1 font-['Pretendard',sans-serif] text-[15px] font-semibold text-[#FF6C0F]">
              {area.subtitle}
            </p>

            <p className="mt-3 font-['MaruBuri',serif] text-[16px] leading-[1.75] text-[#16140f]/70">
              {area.description}
            </p>

            <ul className="mt-5 space-y-2">
              {area.activities.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2.5 font-['MaruBuri',serif] text-[15px] leading-[1.6] text-[#16140f]/80"
                >
                  <span className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-[#FF6C0F]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <p
          className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-[#16140f]/40"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Preneur Core Values
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            { title: 'OWNERSHIP', desc: 'SPEC은 내 스타트업이다' },
            { title: 'SCALE', desc: '매 기수, 더 크게 성장' },
            { title: 'SUPPORT', desc: 'Learner의 성공이 곧 우리의 성공' },
            { title: 'LEGACY', desc: '다음 세대를 위한 시스템 구축' },
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-[#d9d9cc] bg-[#f5f5ee] p-4 text-center"
            >
              <h4
                className="text-sm font-black uppercase tracking-wide text-[#16140f] md:text-base"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {value.title}
              </h4>
              <p className="mt-2 font-['MaruBuri',serif] text-sm text-[#16140f]/50">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   LEARNER TRACK VIEW
   ────────────────────────────────────────────── */

function VccTrack() {
  return (
    <div>
      <div className="mb-16 border-l-4 border-[#FF6C0F] pl-6">
        <p
          className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-black uppercase leading-tight tracking-tight text-[#16140f]"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          &ldquo;Venture Creation Course&rdquo;
        </p>
        <p className="mt-2 font-['MaruBuri',serif] text-[16px] leading-relaxed text-[#16140f]/60">
          RISE 사업단 &times; 카카오모빌리티 &times; SPEC 합동 프로그램.
          모빌리티·라이프스타일 영역에서 실제 벤처를 만들어 냅니다.
          SPEC 소속이면 누구나 수강 가능합니다.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center gap-4">
        <Image src="/logos/rise.png" alt="RISE 사업단" width={240} height={84} className="h-20 w-auto object-contain" />
        <span className="font-['Pretendard',sans-serif] text-[13px] text-[#16140f]/30">×</span>
        <Image src="/logos/kakao.svg" alt="Kakao Mobility" width={100} height={28} className="h-7 w-auto object-contain" />
        <span className="font-['Pretendard',sans-serif] text-[13px] text-[#16140f]/30">×</span>
        <Image src="/logos/spec.svg" alt="SPEC" width={120} height={42} className="h-10 w-auto object-contain" />
      </div>

      <div className="mb-6 rounded-lg border border-[#FF6C0F]/15 bg-[#FF6C0F]/[0.03] p-5">
        <p className="font-['Pretendard',sans-serif] text-[14px] font-medium leading-relaxed text-[#16140f]/70">
          <span className="font-semibold text-[#FF6C0F]">수강 자격 :</span>{' '}
          SPEC 소속 전원 (Learner · Pre-Learner · Preneur). Learner 트랙
          커리큘럼과 VCC 커리큘럼을 동시에 수강할 수 있습니다.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-4 divide-x divide-[#d9d9cc] rounded-lg border border-[#d9d9cc] bg-[#f5f5ee]">
        {vccTimeline.map((ms) => (
          <div key={ms.month} className="flex flex-col items-center justify-center px-2 py-4">
            <span
              className="text-sm font-black uppercase tracking-tight text-[#FF6C0F]"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {ms.month}
            </span>
            <span className="mt-1 text-center font-['Pretendard',sans-serif] text-xs text-[#16140f]/50">
              {ms.label}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {vccModules.map((mod) => (
          <div
            key={mod.num}
            className="rounded-lg border border-[#d9d9cc] bg-white p-6 md:p-8"
          >
            <div className="mb-4 flex flex-wrap items-baseline gap-3">
              <span
                className="text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-tighter text-[#16140f]/10"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {mod.num}
              </span>
              <span className="rounded-full border border-[#FF6C0F]/20 bg-[#FF6C0F]/5 px-2.5 py-0.5 font-['Pretendard',sans-serif] text-[11px] font-bold text-[#FF6C0F]">
                {mod.partner}
              </span>
            </div>

            <h3
              className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-black uppercase leading-tight tracking-tight text-[#16140f]"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {mod.title}
            </h3>

            <p className="mt-1 font-['Pretendard',sans-serif] text-[15px] font-semibold text-[#FF6C0F]">
              {mod.subtitle}
            </p>

            <p className="mt-3 font-['MaruBuri',serif] text-[16px] leading-[1.75] text-[#16140f]/70">
              {mod.description}
            </p>

            <ul className="mt-5 space-y-2">
              {mod.activities.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2.5 font-['MaruBuri',serif] text-[15px] leading-[1.6] text-[#16140f]/80"
                >
                  <span className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-[#FF6C0F]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <p
          className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-[#16140f]/40"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          VCC Core Values
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            { title: 'CONVERGENCE', desc: '산학 협력으로 실전 벤처 창출' },
            { title: 'MOBILITY', desc: '모빌리티 산업의 미래를 설계' },
            { title: 'VALIDATION', desc: '시장이 인정하는 솔루션만 생존' },
            { title: 'NETWORK', desc: 'RISE · 카카오 · SPEC 삼각 네트워크' },
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-[#d9d9cc] bg-[#f5f5ee] p-4 text-center"
            >
              <h4
                className="text-sm font-black uppercase tracking-wide text-[#16140f] md:text-base"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {value.title}
              </h4>
              <p className="mt-2 font-['MaruBuri',serif] text-sm text-[#16140f]/50">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LearnerTrack() {
  return (
    <div>
      <div className="mb-16 border-l-4 border-[#FF6C0F] pl-6">
        <p
          className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-black uppercase leading-tight tracking-tight text-[#16140f]"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          &ldquo;10만 원부터 시작해서 수억을 만든다&rdquo;
        </p>
        <p className="mt-2 font-['MaruBuri',serif] text-[16px] leading-relaxed text-[#16140f]/60">
          교실이 아닌 현장에서 배운다. 기어서라도 매출을 만들고, 실행으로 증명한다. 16주 동안 ₩10만 원에서 시작해 수억을 향해 달린다.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {[
          { label: 'W1-2', text: '첫 매출 만들기' },
          { label: 'W3-4', text: '고객 발굴 & 반복 매출' },
          { label: 'W5-6', text: '비즈니스 모델 검증' },
          { label: 'W7-8', text: 'MVP 빌드 & 런칭' },
          { label: 'W9-10', text: '마케팅 & 그로스 해킹' },
          { label: 'W11-12', text: '스케일링 & 팀 빌딩' },
          { label: 'W13-14', text: '재무 & 법률 기초' },
          { label: 'W15-16', text: 'IR 피치 & 데모데이' },
        ].map((chip) => (
          <div
            key={chip.label}
            className="flex items-center gap-1.5 rounded-full border border-[#d9d9cc] bg-white px-3 py-1"
          >
            <span className="font-['Pretendard',sans-serif] text-[11px] font-bold uppercase tracking-wider text-[#FF6C0F]">
              {chip.label}
            </span>
            <span className="font-['Pretendard',sans-serif] text-[13px] text-[#16140f]/60">
              {chip.text}
            </span>
          </div>
        ))}
      </div>

      <div
        className="overflow-x-auto rounded-lg border border-[#d9d9cc] bg-white"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <table className="w-full min-w-[720px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="bg-[#16140f]">
              <th className="sticky left-0 z-10 w-[72px] bg-[#16140f] px-4 py-3 text-left font-['Pretendard',sans-serif] text-[13px] font-bold uppercase tracking-wider text-[#f5f5ee]/70">
                주차
              </th>
              <th className="w-[160px] px-4 py-3 text-left font-['Pretendard',sans-serif] text-[13px] font-bold uppercase tracking-wider text-[#f5f5ee]/70">
                주제
              </th>
              <th className="px-4 py-3 text-left font-['Pretendard',sans-serif] text-[13px] font-bold uppercase tracking-wider text-[#f5f5ee]/70">
                실행 목표
              </th>
              <th className="w-[220px] px-4 py-3 text-left font-['Pretendard',sans-serif] text-[13px] font-bold uppercase tracking-wider text-[#f5f5ee]/70">
                과제
              </th>
              <th className="w-[120px] px-4 py-3 text-left font-['Pretendard',sans-serif] text-[13px] font-bold uppercase tracking-wider text-[#f5f5ee]/70">
                마일스톤
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {learnerWeeks.map((row, i) => {
              const isNewSection = i % 2 === 0 && i > 0;
              return (
                <tr
                  key={row.week}
                  className={`border-t transition-colors hover:bg-[#FF6C0F]/[0.03] ${
                    isNewSection ? 'border-t-[#d9d9cc]' : 'border-t-[#d9d9cc]/50'
                  } ${i % 2 === 0 ? 'bg-white' : 'bg-[#f5f5ee]/50'}`}
                >
                  {/* Week number — sticky on mobile */}
                  <td
                    className={`sticky left-0 z-10 px-4 py-3.5 font-['Pretendard',sans-serif] text-[14px] font-bold tabular-nums text-[#16140f] ${
                      i % 2 === 0 ? 'bg-white' : 'bg-[#f5f5ee]/50'
                    }`}
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#16140f]/5 text-[12px] font-bold">
                      {row.week}
                    </span>
                  </td>

                  {/* Topic */}
                  <td className="px-4 py-3.5 font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
                    {row.topic}
                  </td>

                  {/* Learning Objectives */}
                  <td className="px-4 py-3.5 font-['MaruBuri',serif] text-[14px] leading-[1.6] text-[#16140f]/70">
                    {row.objectives}
                  </td>

                  {/* Assignment */}
                  <td className="px-4 py-3.5 font-['MaruBuri',serif] text-[14px] leading-[1.6] text-[#16140f]/70">
                    {row.assignment}
                  </td>

                  {/* Notes */}
                  <td className="px-4 py-3.5 font-['Pretendard',sans-serif] text-[13px] text-[#16140f]/40">
                    {row.notes ? (
                      <span className="inline-block rounded bg-[#FF6C0F]/8 px-2 py-0.5 text-[12px] font-medium text-[#FF6C0F]">
                        {row.notes}
                      </span>
                    ) : (
                      <span className="text-[#d9d9cc]">&mdash;</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between px-1">
        <p className="font-['Pretendard',sans-serif] text-[13px] text-[#16140f]/30">
          총 {learnerWeeks.length}주 실전 커리큘럼 &middot; 3월–11월 코호트
        </p>
        <p className="font-['Pretendard',sans-serif] text-[13px] text-[#16140f]/30">
          * 매출 목표는 팀별로 조정될 수 있습니다
        </p>
      </div>
    </div>
  );
}
