// ─── Types ─────────────────────────────────────────────
export interface Job {
  id: number;
  company: string;
  companySlug: string;
  description: string;
  logoColor: string;
  logoLetter: string;
  title: string;
  role: string;
  roleSlug: string;
  location: string;
  locationSlug: string;
  salary: string;
  posted: string;
  tags: string[];
  remote?: boolean;
}

export interface RoleCategory {
  label: string;
  slug: string;
  count: number;
}

export interface LocationOption {
  label: string;
  slug: string;
  count: number;
}

// ─── Role categories ───────────────────────────────────
export const roleCategories: RoleCategory[] = [
  { label: "전체 포지션", slug: "all", count: 0 },
  { label: "개발", slug: "software-engineer", count: 0 },
  { label: "기획", slug: "product-manager", count: 0 },
  { label: "디자인", slug: "designer", count: 0 },
  { label: "마케팅", slug: "marketing", count: 0 },
  { label: "운영", slug: "operations", count: 0 },
];

// ─── Location options ──────────────────────────────────
export const locationOptions: LocationOption[] = [
  { label: "전체 지역", slug: "all", count: 0 },
  { label: "서울", slug: "seoul", count: 0 },
  { label: "판교", slug: "pangyo", count: 0 },
  { label: "부산", slug: "busan", count: 0 },
  { label: "Remote", slug: "remote", count: 0 },
];

// ─── SPEC-backed companies job listings ───────────────────────────
export const allJobs: Job[] = [
  // 개발
  { id: 1, company: "밀리미터", companySlug: "millimeter", description: "AI 기반 공간 측정 솔루션", logoColor: "#635BFF", logoLetter: "밀", title: "프론트엔드 개발자", role: "개발", roleSlug: "software-engineer", location: "서울", locationSlug: "seoul", salary: "5,000만~7,000만원", posted: "2025.02.10", tags: ["1기", "AI", "React"] },
  { id: 2, company: "테이블링", companySlug: "tabling", description: "레스토랑 예약 및 웨이팅 플랫폼", logoColor: "#FF5A5F", logoLetter: "T", title: "백엔드 개발자", role: "개발", roleSlug: "software-engineer", location: "판교", locationSlug: "pangyo", salary: "6,000만~8,000만원", posted: "2025.02.09", tags: ["2기", "커머스", "Node.js"] },
  { id: 3, company: "클래스핏", companySlug: "classfit", description: "피트니스 스튜디오 관리 소프트웨어", logoColor: "#FF3008", logoLetter: "클", title: "풀스택 개발자", role: "개발", roleSlug: "software-engineer", location: "서울", locationSlug: "seoul", salary: "5,500만~7,500만원", posted: "2025.02.08", tags: ["1기", "에듀테크", "TypeScript"] },
  { id: 4, company: "아이디어브릿지", companySlug: "ideabridge", description: "기업 간 협업 플랫폼", logoColor: "#43B02A", logoLetter: "I", title: "iOS 개발자", role: "개발", roleSlug: "software-engineer", location: "Remote", locationSlug: "remote", salary: "5,000만~6,500만원", posted: "2025.02.07", tags: ["2기", "플랫폼", "Swift"], remote: true },
  { id: 5, company: "캠퍼스노트", companySlug: "campusnote", description: "대학생 학습 커뮤니티", logoColor: "#1A1A1A", logoLetter: "캠", title: "안드로이드 개발자", role: "개발", roleSlug: "software-engineer", location: "서울", locationSlug: "seoul", salary: "4,800만~6,200만원", posted: "2025.02.06", tags: ["1기", "교육", "Kotlin"] },
  { id: 6, company: "스냅푸드", companySlug: "snapfood", description: "AI 식품 인식 및 영양 분석", logoColor: "#6C5CE7", logoLetter: "S", title: "데이터 엔지니어", role: "개발", roleSlug: "software-engineer", location: "판교", locationSlug: "pangyo", salary: "6,500만~8,500만원", posted: "2025.02.05", tags: ["3기", "푸드테크", "Python"] },
  { id: 7, company: "플로우체인", companySlug: "flowchain", description: "블록체인 결제 인프라", logoColor: "#3D53F5", logoLetter: "플", title: "블록체인 개발자", role: "개발", roleSlug: "software-engineer", location: "부산", locationSlug: "busan", salary: "7,000만~9,000만원", posted: "2025.02.04", tags: ["2기", "블록체인", "Solidity"] },

  // 기획
  { id: 8, company: "넥스트큐", companySlug: "nextq", description: "B2B SaaS 고객 관리 솔루션", logoColor: "#0052FF", logoLetter: "N", title: "PM (프로덕트 매니저)", role: "기획", roleSlug: "product-manager", location: "서울", locationSlug: "seoul", salary: "5,500만~7,500만원", posted: "2025.02.03", tags: ["1기", "SaaS", "B2B"] },
  { id: 9, company: "런치박스", companySlug: "lunchbox", description: "직장인 점심 구독 서비스", logoColor: "#0061FF", logoLetter: "런", title: "서비스 기획자", role: "기획", roleSlug: "product-manager", location: "판교", locationSlug: "pangyo", salary: "4,500만~6,000만원", posted: "2025.02.02", tags: ["2기", "커머스", "모바일"] },
  { id: 10, company: "메디포커스", companySlug: "medifocus", description: "만성질환 관리 디지털 치료제", logoColor: "#F45D48", logoLetter: "M", title: "프로덕트 오너", role: "기획", roleSlug: "product-manager", location: "서울", locationSlug: "seoul", salary: "6,000만~8,000만원", posted: "2025.02.01", tags: ["3기", "헬스케어", "B2C"] },

  // 디자인
  { id: 11, company: "디자인스튜디오", companySlug: "designstudio", description: "노코드 디자인 툴", logoColor: "#A259FF", logoLetter: "디", title: "UX 디자이너", role: "디자인", roleSlug: "designer", location: "서울", locationSlug: "seoul", salary: "4,500만~6,000만원", posted: "2025.01.31", tags: ["1기", "디자인", "Figma"] },
  { id: 12, company: "브랜드웨이브", companySlug: "brandwave", description: "브랜드 마케팅 자동화 플랫폼", logoColor: "#5E6AD2", logoLetter: "브", title: "그래픽 디자이너", role: "디자인", roleSlug: "designer", location: "Remote", locationSlug: "remote", salary: "4,000만~5,500만원", posted: "2025.01.30", tags: ["2기", "브랜딩", "일러스트"], remote: true },

  // 마케팅
  { id: 13, company: "그로스랩", companySlug: "growthlab", description: "스타트업 그로스 해킹 에이전시", logoColor: "#FF4A00", logoLetter: "그", title: "퍼포먼스 마케터", role: "마케팅", roleSlug: "marketing", location: "서울", locationSlug: "seoul", salary: "4,000만~5,500만원", posted: "2025.01.29", tags: ["1기", "마케팅", "광고"] },
  { id: 14, company: "소셜미디어랩", companySlug: "socialmedialab", description: "소셜미디어 분석 및 관리 도구", logoColor: "#4353FF", logoLetter: "소", title: "콘텐츠 마케터", role: "마케팅", roleSlug: "marketing", location: "판교", locationSlug: "pangyo", salary: "3,800만~5,000만원", posted: "2025.01.28", tags: ["2기", "콘텐츠", "SNS"] },

  // 운영
  { id: 15, company: "오퍼레이션스", companySlug: "operations", description: "물류 최적화 소프트웨어", logoColor: "#004E42", logoLetter: "오", title: "COO (최고운영책임자)", role: "운영", roleSlug: "operations", location: "서울", locationSlug: "seoul", salary: "7,000만~10,000만원", posted: "2025.01.27", tags: ["3기", "운영", "물류"] },
];

// ─── Computed counts ───────────────────────────────────
function computeCounts(): { roles: RoleCategory[]; locations: LocationOption[] } {
  const roles = roleCategories.map((r) => ({
    ...r,
    count: r.slug === "all" ? allJobs.length : allJobs.filter((j) => j.roleSlug === r.slug).length,
  }));
  const locations = locationOptions.map((l) => ({
    ...l,
    count: l.slug === "all" ? allJobs.length : allJobs.filter((j) => j.locationSlug === l.slug).length,
  }));
  return { roles, locations };
}

const computed = computeCounts();
export const roleCategoriesWithCounts = computed.roles;
export const locationOptionsWithCounts = computed.locations;

// ─── Static params helpers ─────────────────────────────
export const roleParams = roleCategories
  .filter((r) => r.slug !== "all")
  .map((r) => ({ role: r.slug }));

export const locationParams = locationOptions
  .filter((l) => l.slug !== "all")
  .map((l) => ({ city: l.slug }));

// ─── Role label helper ─────────────────────────────────
export function getRoleLabel(slug: string): string {
  return roleCategories.find((r) => r.slug === slug)?.label ?? slug;
}

export function getLocationLabel(slug: string): string {
  return locationOptions.find((l) => l.slug === slug)?.label ?? slug;
}
