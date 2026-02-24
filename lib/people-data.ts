export interface Person {
  name: string;
  slug: string;
  title: string;
  bio: string;
  photo: string;
  isLead?: boolean;
  isPartner?: boolean;
  isMentor?: boolean;
  twitter?: string;
  linkedin?: string;
  website?: string;
  company?: string;
  batch?: string;
}

export interface PeopleSection {
  title: string;
  people: Person[];
}

export interface TeamDescription {
  name: string;
  description: string;
}

// Placeholder photos — 실제 사진으로 교체 필요
const photos: Record<string, string> = {
  "dohyun-jeon":
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
  "jisang-han":
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  "yunjung-choi":
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  "youngsang-ryu":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  "dongin-kim":
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face",
  "wonjun-seo":
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  "minjae-kwon":
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
  "songmok-lee":
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
  "youngbin-im":
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
  "yeonseo-lee":
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
  "jieun-shin":
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
};

const getPhoto = (slug: string) =>
  photos[slug] ||
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face";

/* ────────────────────────────────────────────
 * Managing Lead
 * ──────────────────────────────────────────── */
export const managingLeads: Person[] = [
  {
    name: "전도현",
    slug: "dohyun-jeon",
    title: "Managing Lead | Operations · Engineering · Partnerships",
    bio: "SPEC 4기 Managing Lead.\nOperations, Engineering, Partnerships 팀에서 활동하며 학회 전반의 운영과 전략을 총괄합니다.",
    photo: getPhoto("dohyun-jeon"),
    isLead: true,
  },
  {
    name: "한지상",
    slug: "jisang-han",
    title: "Managing Lead | Engineering · Contents",
    bio: "SPEC 4기 Managing Lead.\nEngineering과 Contents 팀에서 활동하며 기술 및 콘텐츠 방향을 이끕니다.",
    photo: getPhoto("jisang-han"),
    isLead: true,
  },
];

/* ────────────────────────────────────────────
 * Preneur (플래트닝된 멤버 목록)
 * ──────────────────────────────────────────── */
export const preneurs: Person[] = [
  // ── Leads (가나다순) ──
  {
    name: "권민재",
    slug: "minjae-kwon",
    title: "Contents Lead | Operations · Engineering · Partnerships",
    bio: "SPEC 4기 Contents Lead.\nOperations, Engineering, Partnerships 팀에서도 활동하며 다방면에서 기여합니다.",
    photo: getPhoto("minjae-kwon"),
    isLead: true,
  },
  {
    name: "김동인",
    slug: "dongin-kim",
    title: "Partnerships Lead | Operations",
    bio: "SPEC 4기 Partnerships Lead.\nOperations 팀에서도 활동하며 대외 협력과 운영을 담당합니다.",
    photo: getPhoto("dongin-kim"),
    isLead: true,
  },
  {
    name: "류영상",
    slug: "youngsang-ryu",
    title: "Engineering Lead | Design",
    bio: "SPEC 4기 Engineering Lead.\nDesign 팀에서도 활동하며 기술 개발과 디자인을 병행합니다.",
    photo: getPhoto("youngsang-ryu"),
    isLead: true,
  },
  {
    name: "서원준",
    slug: "wonjun-seo",
    title: "Design Lead | Engineering",
    bio: "SPEC 4기 Design Lead.\nEngineering 팀에서도 활동하며 브랜드 디자인과 개발을 병행합니다.",
    photo: getPhoto("wonjun-seo"),
    isLead: true,
  },
  {
    name: "이송목",
    slug: "songmok-lee",
    title: "Community Lead",
    bio: "SPEC 4기 Community Lead.\n멤버 간 네트워킹과 커뮤니티 활성화를 담당합니다.",
    photo: getPhoto("songmok-lee"),
    isLead: true,
  },
  {
    name: "최윤정",
    slug: "yunjung-choi",
    title: "Operations Lead",
    bio: "SPEC 4기 Operations Lead.\n프로그램 전체 운영과 데모데이 기획을 담당합니다.",
    photo: getPhoto("yunjung-choi"),
    isLead: true,
  },
  // ── 일반 프러너 (가나다순) ──
  {
    name: "신지은",
    slug: "jieun-shin",
    title: "Design | Contents",
    bio: "SPEC 4기 Preneur.\nDesign과 Contents 팀에서 활동하며 시각 디자인과 콘텐츠 제작을 담당합니다.",
    photo: getPhoto("jieun-shin"),
  },
  {
    name: "이연서",
    slug: "yeonseo-lee",
    title: "Operations",
    bio: "SPEC 4기 Preneur.\nOperations 팀에서 프로그램 운영을 지원합니다.",
    photo: getPhoto("yeonseo-lee"),
  },
  {
    name: "임영빈",
    slug: "youngbin-im",
    title: "Operations | Engineering | Partnerships",
    bio: "SPEC 4기 Preneur.\nOperations, Engineering, Partnerships 세 팀에서 활동합니다.",
    photo: getPhoto("youngbin-im"),
  },
];

/* ────────────────────────────────────────────
 * 팀별 역할 설명
 * ──────────────────────────────────────────── */
export const teamDescriptions: TeamDescription[] = [
  {
    name: "Contents",
    description:
      "창업가 인터뷰 영상 기획·제작, 알럼나이 성공 사례 콘텐츠화, 릴스·숏폼 제작, 유튜브·인스타그램 운영",
  },
  {
    name: "Partnerships",
    description:
      "VC 네트워킹, IR 지원, 창업 멘토 섭외, 데모데이 심사위원·연사 섭외, 기관 협업",
  },
  {
    name: "Engineering",
    description:
      "내부 소프트웨어 개발, 멘토링 신청·과제 관리·KPI 트래킹 시스템 구축, 운영 업무 자동화",
  },
  {
    name: "Design",
    description:
      "포스터·카드뉴스 디자인, 브랜드 아이덴티티 관리, 홍보물 제작, SNS 콘텐츠 디자인",
  },
  {
    name: "Community",
    description:
      "멤버 간 네트워킹, 알럼나이·동문 모임 운영, 커뮤니티 활성화",
  },
];

/* ────────────────────────────────────────────
 * Utility
 * ──────────────────────────────────────────── */
export function getPersonBySlug(slug: string): Person | undefined {
  const allPeople = [...managingLeads, ...preneurs];
  return allPeople.find((p) => p.slug === slug);
}

export function getAllPersonSlugs(): string[] {
  return [...managingLeads, ...preneurs].map((p) => p.slug);
}
