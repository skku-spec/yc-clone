export interface Company {
  name: string;
  slug: string;
  oneLiner: string;
  batch: string;
  industry: string[];
  region: string;
  teamSize: number;
  isHiring: boolean;
  isNonprofit: boolean;
  isTopCompany: boolean;
  isWomenFounded: boolean;
  logoUrl: string | null;
  category?: "featured" | "breakthrough";
}

export const COMPANIES: Company[] = [
  {
    name: "LINKIT",
    slug: "linkit",
    oneLiner: "",
    batch: "1기",
    industry: [],
    region: "서울",
    teamSize: 3,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: null,
  },
  {
    name: "On The Record",
    slug: "on-the-record",
    oneLiner: "",
    batch: "1기",
    industry: [],
    region: "서울",
    teamSize: 5,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: null,
  },
  {
    name: "K-HI",
    slug: "k-hi",
    oneLiner: "어르신을 위한 지도 서비스와 위급상황 감지 위치 추적 시스템",
    batch: "2기",
    industry: ["시니어케어", "IoT"],
    region: "서울",
    teamSize: 4,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: "/logos/teams/돋보길.png",
  },
  {
    name: "ByOrbit",
    slug: "byorbit",
    oneLiner: "농산물 부산물을 활용한 재가공 서비스",
    batch: "2기",
    industry: ["농업", "지속가능"],
    region: "서울",
    teamSize: 2,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: "/logos/teams/바이올빗.jpg",
  },
  {
    name: "FAXI",
    slug: "faxi",
    oneLiner: "트렌디한 포터블 모바일 팩스 서비스",
    batch: "2기",
    industry: ["모바일"],
    region: "서울",
    teamSize: 2,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: "/logos/teams/펙시.jpg",
  },
  {
    name: "담아",
    slug: "dama",
    oneLiner: "1인가구·여성을 위한 호신용품 패키징 서비스",
    batch: "2기",
    industry: ["안전", "라이프스타일"],
    region: "서울",
    teamSize: 3,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: "/logos/teams/담아.png",
  },
  {
    name: "사르르",
    slug: "sarr",
    oneLiner: "노인을 위한 병원 예약 간편화 서비스",
    batch: "3기",
    industry: ["시니어케어", "헬스케어"],
    region: "서울",
    teamSize: 4,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: "/logos/teams/사르르.png",
  },
  {
    name: "유스",
    slug: "youth",
    oneLiner: "개인 맞춤형 화장품/미용용품 솔루션",
    batch: "3기",
    industry: ["뷰티", "커머스"],
    region: "서울",
    teamSize: 3,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: "/logos/teams/유스.png",
  },
  {
    name: "아름",
    slug: "areum",
    oneLiner: "공유 옷장 서비스",
    batch: "3기",
    industry: ["패션", "공유경제"],
    region: "서울",
    teamSize: 3,
    isHiring: false,
    isNonprofit: false,
    isTopCompany: false,
    isWomenFounded: false,
    logoUrl: "/logos/teams/아름.jpg",
  },
];

export const BATCH_OPTIONS = [
  { value: "1기", label: "1기" },
  { value: "2기", label: "2기" },
  { value: "3기", label: "3기" },
];

export const INDUSTRY_OPTIONS = [
  "시니어케어",
  "IoT",
  "농업",
  "지속가능",
  "모바일",
  "안전",
  "라이프스타일",
  "헬스케어",
  "뷰티",
  "커머스",
  "패션",
  "공유경제",
];

export const REGION_OPTIONS = [
  "서울",
];

export function getTopCompanies(): Company[] {
  return COMPANIES.filter((c) => c.isTopCompany);
}

export function getFeaturedCompanies(): Company[] {
  return COMPANIES.filter((c) => c.isTopCompany && c.category === "featured");
}

export function getBreakthroughCompanies(): Company[] {
  return COMPANIES.filter((c) => c.isTopCompany && c.category === "breakthrough");
}
