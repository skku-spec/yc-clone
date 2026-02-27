/* ─── Company detail types and data (Single Source of Truth) ─── */

export interface Founder {
  name: string;
  title: string;
  linkedIn: string;
  twitter?: string;
}

export interface Job {
  title: string;
  location: string;
  experience: string;
}

export interface NewsItem {
  title: string;
  url: string;
  date: string;
}

export interface CompanyDetail {
  name: string;
  slug: string;
  oneLiner: string;
  batch: string;
  batchSeason: string;
  status: "Active" | "Acquired" | "Inactive" | "Public";
  industries: string[];
  location: string;
  founded: number;
  teamSize: string;
  website: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  description: string;
  founders: Founder[];
  jobs: Job[];
  news: NewsItem[];
  logoUrl: string | null;
  isHiring: boolean;
  isTopCompany: boolean;
}

export const COMPANY_DATA: Record<string, CompanyDetail> = {
  linkit: {
    name: "LINKIT",
    slug: "linkit",
    oneLiner: "대학생 커리어 네트워킹 및 연결 플랫폼",
    batch: "1기",
    batchSeason: "1기",
    status: "Active",
    industries: ["커리어", "네트워킹"],
    location: "서울",
    founded: 2024,
    teamSize: "3명",
    website: "#",
    description:
      "LINKIT은 대학생들이 선배, 멘토, 동료와 연결되어 커리어를 탐색하고 인턴십 기회를 발견할 수 있도록 돕는 네트워킹 플랫폼이다. 학과와 관심 분야를 기반으로 유의미한 연결을 만들어주며, 실질적인 커리어 정보를 교환할 수 있는 환경을 제공한다. SPEC 1기에서 시작된 프로젝트로, 대학생 취업 준비 과정의 정보 비대칭 문제를 해결하고자 한다.",
    founders: [
      { name: "윤채빈", title: "대표", linkedIn: "#" },
      { name: "장지민", title: "기획", linkedIn: "#" },
      { name: "전도현", title: "개발", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: null,
    isHiring: false,
    isTopCompany: false,
  },
  "on-the-record": {
    name: "On The Record",
    slug: "on-the-record",
    oneLiner: "음악 기반 소셜 미디어 플랫폼",
    batch: "1기",
    batchSeason: "1기",
    status: "Active",
    industries: ["음악", "소셜미디어"],
    location: "서울",
    founded: 2024,
    teamSize: "5명",
    website: "#",
    description:
      "On The Record는 음악 취향을 기반으로 사람들을 연결하는 소셜 미디어 플랫폼이다. 사용자는 자신이 좋아하는 음악을 공유하고, 플레이리스트를 만들며, 비슷한 취향을 가진 사람들과 소통할 수 있다. SPEC 1기 프로젝트로 출발하여, 음악이라는 공통 관심사를 통해 새로운 형태의 소셜 네트워크를 만들어가고 있다.",
    founders: [
      { name: "석채은", title: "대표", linkedIn: "#" },
      { name: "임시우", title: "기획", linkedIn: "#" },
      { name: "장진우", title: "개발", linkedIn: "#" },
      { name: "황정민", title: "디자인", linkedIn: "#" },
      { name: "이송목", title: "마케팅", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: null,
    isHiring: false,
    isTopCompany: false,
  },
  "k-hi": {
    name: "K-HI",
    slug: "k-hi",
    oneLiner: "어르신을 위한 지도 서비스와 위급상황 감지 위치 추적 시스템",
    batch: "2기",
    batchSeason: "2기",
    status: "Active",
    industries: ["시니어케어", "IoT"],
    location: "서울",
    founded: 2025,
    teamSize: "4명",
    website: "#",
    description:
      "K-HI는 디지털 기기 사용이 어려운 어르신들을 위해 직관적인 지도 서비스를 제공하고, 위급상황 발생 시 자동으로 보호자에게 알림을 보내는 위치 추적 시스템이다. 큰 글씨와 간단한 인터페이스로 시니어 사용자의 접근성을 높였으며, IoT 센서를 활용한 낙상 감지 기능도 함께 개발하고 있다. SPEC 2기 프로젝트로, 고령화 사회에서 어르신의 안전한 외출을 지원하는 것을 목표로 한다.",
    founders: [
      { name: "강하빈", title: "대표", linkedIn: "#" },
      { name: "김주현", title: "개발", linkedIn: "#" },
      { name: "한소윤", title: "기획", linkedIn: "#" },
      { name: "홍경의", title: "디자인", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: "/logos/teams/돋보길.png",
    isHiring: false,
    isTopCompany: false,
  },
  byorbit: {
    name: "ByOrbit",
    slug: "byorbit",
    oneLiner: "농산물 부산물을 활용한 재가공 서비스",
    batch: "2기",
    batchSeason: "2기",
    status: "Active",
    industries: ["농업", "지속가능"],
    location: "서울",
    founded: 2025,
    teamSize: "2명",
    website: "#",
    description:
      "ByOrbit는 수확 후 버려지는 농산물 부산물을 수거하여 새로운 식품이나 원료로 재가공하는 서비스이다. 순환경제 관점에서 농업 폐기물을 줄이고, 농가에는 추가 수입원을 제공한다. SPEC 2기 프로젝트로, 지속가능한 농업 생태계를 만들기 위한 비즈니스 모델을 구축하고 있다.",
    founders: [
      { name: "김동우", title: "대표", linkedIn: "#" },
      { name: "신지은", title: "기획", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: "/logos/teams/바이올빗.jpg",
    isHiring: false,
    isTopCompany: false,
  },
  faxi: {
    name: "FAXI",
    slug: "faxi",
    oneLiner: "트렌디한 포터블 모바일 팩스 서비스",
    batch: "2기",
    batchSeason: "2기",
    status: "Active",
    industries: ["모바일"],
    location: "서울",
    founded: 2025,
    teamSize: "2명",
    website: "#",
    description:
      "FAXI는 스마트폰만으로 팩스를 보내고 받을 수 있는 모바일 팩스 서비스이다. 관공서 서류 제출이나 계약서 전송 등 아직 팩스가 필요한 상황에서, 별도의 팩스 기기 없이 간편하게 이용할 수 있도록 했다. SPEC 2기 프로젝트로, 레거시 통신 수단을 현대적으로 재해석하여 접근성을 높이는 것을 목표로 한다.",
    founders: [
      { name: "서원준", title: "대표", linkedIn: "#" },
      { name: "한지상", title: "개발", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: "/logos/teams/펙시.jpg",
    isHiring: false,
    isTopCompany: false,
  },
  dama: {
    name: "담아",
    slug: "dama",
    oneLiner: "1인가구·여성을 위한 호신용품 패키징 서비스",
    batch: "2기",
    batchSeason: "2기",
    status: "Active",
    industries: ["안전", "라이프스타일"],
    location: "서울",
    founded: 2025,
    teamSize: "3명",
    website: "#",
    description:
      "담아는 1인 가구와 여성을 대상으로 호신용품을 선별하여 패키지 형태로 제공하는 서비스이다. 일상에서 휴대하기 편한 디자인의 호신용품을 큐레이션하고, 안전 관련 정보와 대처법도 함께 안내한다. SPEC 2기 프로젝트로, 개인 안전에 대한 사회적 관심이 높아지는 흐름 속에서 실용적인 솔루션을 제공하고자 한다.",
    founders: [
      { name: "곽재민", title: "대표", linkedIn: "#" },
      { name: "이유정", title: "기획", linkedIn: "#" },
      { name: "전선희", title: "디자인", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: "/logos/teams/담아.png",
    isHiring: false,
    isTopCompany: false,
  },
  sarr: {
    name: "사르르",
    slug: "sarr",
    oneLiner: "노인을 위한 병원 예약 간편화 서비스",
    batch: "3기",
    batchSeason: "3기",
    status: "Active",
    industries: ["시니어케어", "헬스케어"],
    location: "서울",
    founded: 2025,
    teamSize: "4명",
    website: "#",
    description:
      "사르르는 디지털 예약 시스템에 어려움을 느끼는 어르신들이 병원 예약을 쉽게 할 수 있도록 돕는 서비스이다. 복잡한 단계를 최소화하고 큰 글씨와 음성 안내를 적용하여, 보호자 도움 없이도 진료 예약을 완료할 수 있게 했다. SPEC 3기 프로젝트로, 고령 사용자의 의료 접근성 향상에 집중하고 있다.",
    founders: [
      { name: "김혜민", title: "대표", linkedIn: "#" },
      { name: "류영상", title: "개발", linkedIn: "#" },
      { name: "이유민", title: "기획", linkedIn: "#" },
      { name: "이혜원", title: "디자인", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: "/logos/teams/사르르.png",
    isHiring: false,
    isTopCompany: false,
  },
  youth: {
    name: "유스",
    slug: "youth",
    oneLiner: "개인 맞춤형 화장품/미용용품 솔루션",
    batch: "3기",
    batchSeason: "3기",
    status: "Active",
    industries: ["뷰티", "커머스"],
    location: "서울",
    founded: 2025,
    teamSize: "3명",
    website: "#",
    description:
      "유스는 '스킨메이트'라는 서비스명으로, 개인의 피부 타입과 고민을 분석하여 맞춤형 화장품과 미용용품을 추천하는 솔루션이다. 피부 진단 결과를 바탕으로 성분과 제품을 매칭해주며, 사용 후기 데이터를 활용하여 추천 정확도를 높여간다. SPEC 3기 프로젝트로, 화장품 선택에서 발생하는 시행착오를 줄이고자 한다.",
    founders: [
      { name: "권민재", title: "대표", linkedIn: "#" },
      { name: "이연서", title: "기획", linkedIn: "#" },
      { name: "최윤정", title: "마케팅", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: "/logos/teams/유스.png",
    isHiring: false,
    isTopCompany: false,
  },
  areum: {
    name: "아름",
    slug: "areum",
    oneLiner: "공유 옷장 서비스",
    batch: "3기",
    batchSeason: "3기",
    status: "Active",
    industries: ["패션", "공유경제"],
    location: "서울",
    founded: 2025,
    teamSize: "3명",
    website: "#",
    description:
      "아름은 개인 간 옷을 빌리고 빌려주는 공유 옷장 서비스이다. 특별한 행사나 계절이 바뀔 때 새 옷을 사는 대신 이웃의 옷장에서 원하는 옷을 빌릴 수 있어, 패션 소비를 줄이고 지속가능한 의류 문화를 만든다. SPEC 3기 프로젝트로, MZ세대의 합리적 소비 트렌드와 환경 의식에 부합하는 서비스를 지향한다.",
    founders: [
      { name: "김동인", title: "대표", linkedIn: "#" },
      { name: "임영빈", title: "기획", linkedIn: "#" },
      { name: "신지은", title: "디자인", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
    logoUrl: "/logos/teams/아름.jpg",
    isHiring: false,
    isTopCompany: false,
  },
};

/* ─── Detail page helpers ─── */

export function getCompanyDetailBySlug(slug: string): CompanyDetail | undefined {
  return COMPANY_DATA[slug];
}

export function getAllCompanyDetailSlugs(): { slug: string }[] {
  return Object.keys(COMPANY_DATA).map((slug) => ({ slug }));
}

export function getRelatedCompanies(currentSlug: string): CompanyDetail[] {
  return Object.values(COMPANY_DATA)
    .filter((c) => c.slug !== currentSlug)
    .slice(0, 4);
}

/* ─── List page compatible type and helpers ─── */

export interface CompanyListItem {
  name: string;
  slug: string;
  oneLiner: string;
  batch: string;
  industry: string[];
  region: string;
  teamSize: number;
  isHiring: boolean;
  isTopCompany: boolean;
  logoUrl: string | null;
}

export function getCompanyList(): CompanyListItem[] {
  return Object.values(COMPANY_DATA).map((c) => ({
    name: c.name,
    slug: c.slug,
    oneLiner: c.oneLiner,
    batch: c.batch,
    industry: c.industries,
    region: c.location,
    teamSize: parseInt(c.teamSize) || 0,
    isHiring: c.isHiring,
    isTopCompany: c.isTopCompany,
    logoUrl: c.logoUrl,
  }));
}

export const BATCH_OPTIONS = [
  { value: "1기", label: "1기" },
  { value: "2기", label: "2기" },
  { value: "3기", label: "3기" },
];

export const INDUSTRY_OPTIONS: string[] = (() => {
  const set = new Set<string>();
  Object.values(COMPANY_DATA).forEach((c) =>
    c.industries.forEach((i) => set.add(i)),
  );
  return Array.from(set).sort();
})();
