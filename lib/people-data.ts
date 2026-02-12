export interface Person {
  name: string;
  slug: string;
  title: string;
  bio: string;
  photo: string;
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

// Placeholder photos — 실제 사진으로 교체 필요
const photos: Record<string, string> = {
  "peter-kim":
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
  "sarah-lee":
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  "david-park":
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  "jimin-choi":
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  "minsoo-jung":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  "yujin-han":
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  "junghoon-lee":
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  "soojin-kim":
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  "hyunwoo-park":
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
  "minji-yoon":
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
  "taehyun-oh":
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
  "haeun-choi":
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
  "siwoo-jang":
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
  "yuna-song":
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
  "dongwoo-kim":
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face",
  "jieun-park":
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face",
};

const getPhoto = (slug: string) =>
  photos[slug] || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face";

export const partners: Person[] = [
  {
    name: "Peter Kim",
    slug: "peter-kim",
    title: "전략 멘토",
    bio: "맥킨지에서 10년간 전략 컨설팅을 수행한 후 스타트업 생태계로 전환. 현재 다수의 초기 스타트업에 전략 자문을 제공하고 있습니다. SPEC 멤버들에게 비즈니스 모델 설계와 시장 진입 전략을 지도합니다.",
    photo: getPhoto("peter-kim"),
    isMentor: true,
    company: "前 McKinsey",
  },
  {
    name: "Sarah Lee",
    slug: "sarah-lee",
    title: "투자 멘토",
    bio: "알토스벤처스에서 시드~시리즈A 투자심사를 담당했습니다. 50개 이상의 스타트업 심사 경험을 바탕으로 IR 전략과 투자 유치 노하우를 전수합니다.",
    photo: getPhoto("sarah-lee"),
    isMentor: true,
    company: "前 알토스벤처스",
  },
  {
    name: "David Park",
    slug: "david-park",
    title: "창업 멘토",
    bio: "2번의 성공적인 엑싯을 경험한 연쇄 창업가. 제품 개발부터 팀 빌딩, 스케일링까지 실전 경험을 SPEC 멤버들과 공유합니다.",
    photo: getPhoto("david-park"),
    isMentor: true,
    company: "2x Exit Founder",
  },
  {
    name: "Jimin Choi",
    slug: "jimin-choi",
    title: "그로스 멘토",
    bio: "카카오모빌리티 그로스팀 출신. 데이터 기반 의사결정과 그로스 해킹 전략의 전문가입니다. SPEC에서 마케팅과 성장 전략을 지도합니다.",
    photo: getPhoto("jimin-choi"),
    isMentor: true,
    company: "前 카카오모빌리티",
  },
  {
    name: "정민수",
    slug: "minsoo-jung",
    title: "기술 멘토",
    bio: "네이버 출신 시니어 엔지니어. AI/ML 기반 프로덕트 개발 전문가로, SPEC 멤버들의 MVP 빌딩과 기술 아키텍처를 자문합니다.",
    photo: getPhoto("minsoo-jung"),
    isMentor: true,
    company: "前 네이버",
  },
  {
    name: "한유진",
    slug: "yujin-han",
    title: "디자인 멘토",
    bio: "토스 프로덕트 디자인팀 출신. UX/UI 설계와 브랜딩 전략 전문가입니다. 사용자 중심 사고와 빠른 프로토타이핑을 지도합니다.",
    photo: getPhoto("yujin-han"),
    isMentor: true,
    company: "前 토스",
  },
];

export const founders: Person[] = [
  {
    name: "이정훈",
    slug: "junghoon-lee",
    title: "SPEC 창립자 · 회장",
    bio: "성균관대학교에서 SPEC을 창립. '실행이 전부다'라는 철학으로 대학 창업 교육의 새로운 모델을 만들어가고 있습니다.",
    photo: getPhoto("junghoon-lee"),
  },
];

export const staffSections: PeopleSection[] = [
  {
    title: "4기 운영진",
    people: [
      { name: "김수진", slug: "soojin-kim", title: "부회장 · 프로그램 총괄", bio: "3기 수료. 커리큘럼 설계와 멘토링 세션 운영을 담당합니다.", photo: getPhoto("soojin-kim") },
      { name: "박현우", slug: "hyunwoo-park", title: "매출 챌린지 리드", bio: "2기 수료. 매주 매출 보드 관리와 챌린지 설계를 담당합니다.", photo: getPhoto("hyunwoo-park") },
      { name: "윤민지", slug: "minji-yoon", title: "VCC 코디네이터", bio: "3기 수료. RISE 사업단과의 협업 및 VCC 커리큘럼 운영을 담당합니다.", photo: getPhoto("minji-yoon") },
      { name: "오태현", slug: "taehyun-oh", title: "커뮤니티 매니저", bio: "2기 수료. 알럼나이 네트워크와 동문 모임을 운영합니다.", photo: getPhoto("taehyun-oh") },
    ],
  },
  {
    title: "미디어 & 브랜딩",
    people: [
      { name: "최하은", slug: "haeun-choi", title: "브랜드 디렉터", bio: "SPEC 브랜딩, SNS 채널 운영, 대외 커뮤니케이션을 담당합니다.", photo: getPhoto("haeun-choi") },
      { name: "장시우", slug: "siwoo-jang", title: "콘텐츠 크리에이터", bio: "활동 영상 촬영/편집, 데모데이 기록, 웹사이트 관리를 담당합니다.", photo: getPhoto("siwoo-jang") },
    ],
  },
  {
    title: "파트너십 & 대외협력",
    people: [
      { name: "송유나", slug: "yuna-song", title: "파트너십 매니저", bio: "기업 멘토 연결, 스폰서 관리, 외부 행사 협업을 담당합니다.", photo: getPhoto("yuna-song") },
      { name: "김동우", slug: "dongwoo-kim", title: "이벤트 매니저", bio: "Ideathon, 해커톤, 데모데이 등 주요 행사 기획/운영을 담당합니다.", photo: getPhoto("dongwoo-kim") },
      { name: "박지은", slug: "jieun-park", title: "리크루팅 매니저", bio: "신규 기수 모집, 서류/면접 심사 프로세스를 설계하고 운영합니다.", photo: getPhoto("jieun-park") },
    ],
  },
];

export function getPersonBySlug(slug: string): Person | undefined {
  const allPeople = [
    ...partners,
    ...founders,
    ...staffSections.flatMap((s) => s.people),
  ];
  return allPeople.find((p) => p.slug === slug);
}

export function getAllPartnerSlugs(): string[] {
  return partners.map((p) => p.slug);
}
