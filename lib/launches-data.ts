export interface Launch {
  id: number;
  company: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  batch: string;
  votes: number;
  datePosted: string;
  daysAgo: number;
}

export const LAUNCHES: Launch[] = [
  {
    id: 1,
    company: "플레이트잇",
    slug: "plateit",
    tagline: "대학가 최초 공유주방 플랫폼 런칭",
    description:
      "대학교 인근 유휴 주방 공간을 활용해 학생 창업자들이 외식 사업을 시작할 수 있는 공유주방 플랫폼입니다. 초기 비용 없이 시간 단위로 주방을 예약하고, 배달앱 연동까지 원스톱으로 지원합니다.",
    category: "푸드테크",
    batch: "1기",
    votes: 482,
    datePosted: "2025-09-10",
    daysAgo: 2,
  },
  {
    id: 2,
    company: "스터디메이트",
    slug: "studymate",
    tagline: "AI가 강의 녹음을 노트로 바꿔줍니다",
    description:
      "강의실에서 녹음 버튼 하나만 누르면, AI가 실시간으로 핵심 내용을 정리하고 구조화된 노트를 생성합니다. 수업 후 복습 시간을 절반으로 줄여주는 대학생 필수 앱입니다.",
    category: "에듀테크",
    batch: "1기",
    votes: 437,
    datePosted: "2025-09-08",
    daysAgo: 4,
  },
  {
    id: 3,
    company: "캠퍼스커넥트",
    slug: "campusconnect",
    tagline: "대학생 네트워킹, 이제 앱 하나로",
    description:
      "같은 관심사를 가진 캠퍼스 내 학생들을 연결해주는 소셜 플랫폼입니다. 스터디 그룹, 동아리, 사이드 팀원을 한 곳에서 찾고 교류할 수 있습니다.",
    category: "소셜",
    batch: "1기",
    votes: 356,
    datePosted: "2025-09-05",
    daysAgo: 7,
  },
  {
    id: 4,
    company: "틈새마켓",
    slug: "teumse-market",
    tagline: "캠퍼스 중고거래, 5분 안에 완료",
    description:
      "대학교 캠퍼스 내 중고 물품 거래에 특화된 마켓플레이스입니다. 교재, 전자기기, 생활용품을 같은 학교 학생끼리 안전하게 거래하고, 캠퍼스 내 직거래로 배송비 걱정도 없습니다.",
    category: "커머스",
    batch: "1기",
    votes: 312,
    datePosted: "2025-09-03",
    daysAgo: 9,
  },
  {
    id: 5,
    company: "머니버디",
    slug: "moneybuddy",
    tagline: "대학생 재테크, 첫걸음부터 함께",
    description:
      "용돈 관리부터 소액 투자, 장학금 정보까지 대학생 맞춤 금융 서비스를 제공합니다. 게임처럼 재미있는 금융 교육 콘텐츠로 2030 세대의 금융 문해력을 높입니다.",
    category: "핀테크",
    batch: "1기",
    votes: 289,
    datePosted: "2025-09-01",
    daysAgo: 11,
  },
  {
    id: 6,
    company: "그린바이트",
    slug: "greenbite",
    tagline: "친환경 밀키트, 대학생 맞춤 가격으로",
    description:
      "로컬 농가에서 직송한 친환경 식재료로 만든 대학생 전용 밀키트입니다. 1인분 단위 포장으로 음식물 쓰레기를 줄이고, 구독 모델로 한 끼 3,900원부터 시작합니다.",
    category: "푸드테크",
    batch: "2기",
    votes: 398,
    datePosted: "2026-01-15",
    daysAgo: 1,
  },
  {
    id: 7,
    company: "펫닥터",
    slug: "petdoctor",
    tagline: "우리 강아지 건강을 한 눈에",
    description:
      "반려동물의 건강 데이터를 기록하고, AI 기반 이상 징후 감지 알림을 제공하는 펫케어 플랫폼입니다. 인근 동물병원 예약과 수의사 온라인 상담까지 한 앱에서 해결합니다.",
    category: "헬스케어",
    batch: "2기",
    votes: 367,
    datePosted: "2026-01-12",
    daysAgo: 3,
  },
  {
    id: 8,
    company: "잡브릿지",
    slug: "jobbridge",
    tagline: "대학생 인턴, AI가 매칭해드립니다",
    description:
      "이력서와 포트폴리오를 분석해 학생에게 최적의 인턴십을 추천하는 AI 채용 매칭 플랫폼입니다. 기업 측에서도 원하는 역량의 학생을 빠르게 찾을 수 있어 양측 만족도가 높습니다.",
    category: "AI/ML",
    batch: "2기",
    votes: 345,
    datePosted: "2026-01-10",
    daysAgo: 5,
  },
  {
    id: 9,
    company: "룸메이트",
    slug: "roommate",
    tagline: "대학가 원룸 찾기의 새로운 기준",
    description:
      "대학교 주변 원룸, 하숙, 쉐어하우스 정보를 한곳에 모은 주거 플랫폼입니다. 실거주 학생 리뷰와 AI 추천으로 나에게 딱 맞는 방을 찾을 수 있습니다.",
    category: "커머스",
    batch: "2기",
    votes: 278,
    datePosted: "2026-01-08",
    daysAgo: 7,
  },
  {
    id: 10,
    company: "헬스메이트",
    slug: "healthmate",
    tagline: "습관부터 바꾸는 맞춤 건강관리",
    description:
      "수면, 운동, 식단 데이터를 통합 분석해 개인 맞춤 건강 루틴을 제안합니다. 대학생 생활 패턴에 최적화된 코칭으로 불규칙한 생활습관을 체계적으로 개선합니다.",
    category: "헬스케어",
    batch: "2기",
    votes: 256,
    datePosted: "2026-01-05",
    daysAgo: 10,
  },
  {
    id: 11,
    company: "노트잇",
    slug: "noteit",
    tagline: "강의 노트 자동 요약, 시험기간 필수 앱",
    description:
      "PDF, 사진, 필기 노트를 업로드하면 AI가 핵심 키워드를 추출하고 시험 대비 요약본을 자동 생성합니다. 플래시카드와 퀴즈 모드로 효율적인 암기 학습까지 지원합니다.",
    category: "에듀테크",
    batch: "3기",
    votes: 456,
    datePosted: "2026-02-10",
    daysAgo: 1,
  },
  {
    id: 12,
    company: "팜잇",
    slug: "farmit",
    tagline: "스마트팜 데이터, 한 곳에서 관리하세요",
    description:
      "온실 온도, 습도, 토양 상태 등 스마트팜 센서 데이터를 실시간으로 모니터링하고 분석하는 SaaS 플랫폼입니다. 작물별 최적 생육 조건을 AI가 추천해 수확량을 극대화합니다.",
    category: "SaaS",
    batch: "3기",
    votes: 389,
    datePosted: "2026-02-08",
    daysAgo: 3,
  },
  {
    id: 13,
    company: "배달의신입생",
    slug: "baedal-freshman",
    tagline: "신입생 맞춤 캠퍼스 배달 서비스",
    description:
      "캠퍼스 내 카페, 편의점, 학식당 메뉴를 통합해 교내 배달하는 서비스입니다. 같은 건물 학생끼리 공동 주문으로 배달비를 나누고, 학생 배달원이 직접 전달합니다.",
    category: "물류",
    batch: "3기",
    votes: 334,
    datePosted: "2026-02-06",
    daysAgo: 5,
  },
  {
    id: 14,
    company: "코드버디",
    slug: "codebuddy",
    tagline: "코딩 과제, 혼자 고민하지 마세요",
    description:
      "프로그래밍 과제에서 막힐 때 AI 튜터가 힌트를 단계적으로 제공하는 코딩 학습 도우미입니다. 답을 알려주는 게 아니라 스스로 풀 수 있도록 사고 과정을 안내합니다.",
    category: "에듀테크",
    batch: "3기",
    votes: 301,
    datePosted: "2026-02-04",
    daysAgo: 7,
  },
  {
    id: 15,
    company: "클린런드리",
    slug: "cleanlaundry",
    tagline: "세탁물 수거부터 배달까지 반나절",
    description:
      "기숙사와 자취방 학생을 위한 세탁 O2O 서비스입니다. 앱으로 수거 예약하면 반나절 안에 세탁 완료된 옷을 문 앞에 배달합니다. 월 구독 시 세탁비 30% 할인 혜택도 제공합니다.",
    category: "물류",
    batch: "3기",
    votes: 267,
    datePosted: "2026-02-02",
    daysAgo: 9,
  },
  {
    id: 16,
    company: "튜터링크",
    slug: "tutorlink",
    tagline: "선배에게 배우는 1:1 과외 매칭",
    description:
      "같은 학교 선배와 후배를 1:1 과외로 연결하는 피어 튜터링 플랫폼입니다. 실제 수강 경험이 있는 선배의 노하우를 합리적인 가격에 전수받을 수 있습니다.",
    category: "에듀테크",
    batch: "2기",
    votes: 223,
    datePosted: "2026-01-03",
    daysAgo: 12,
  },
  {
    id: 17,
    company: "트래블메이트",
    slug: "travelmate",
    tagline: "대학생 배낭여행, 같이 갈 사람 모집",
    description:
      "방학 여행 동행자를 찾고, 일정과 경비를 함께 관리하는 여행 소셜 플랫폼입니다. 관심 지역과 여행 스타일 기반 매칭으로 안전하고 즐거운 동행을 만들어줍니다.",
    category: "소셜",
    batch: "3기",
    votes: 198,
    datePosted: "2026-01-30",
    daysAgo: 12,
  },
  {
    id: 18,
    company: "스펙업",
    slug: "specup",
    tagline: "대외활동 정보, 놓치지 않도록",
    description:
      "공모전, 대외활동, 봉사활동 정보를 큐레이션해 맞춤 추천하는 서비스입니다. 마감일 알림과 지원서 작성 가이드까지 제공해 관리를 체계적으로 도와줍니다.",
    category: "SaaS",
    batch: "1기",
    votes: 245,
    datePosted: "2025-08-28",
    daysAgo: 14,
  },
  {
    id: 19,
    company: "프레시박스",
    slug: "freshbox",
    tagline: "자취생 냉장고를 채워드립니다",
    description:
      "근거리 마트와 제휴해 신선식품 소량 묶음 배송을 제공합니다. 1인 가구에 최적화된 소포장 채소, 과일, 반찬을 당일 배송으로 받아보세요.",
    category: "커머스",
    batch: "3기",
    votes: 178,
    datePosted: "2026-01-28",
    daysAgo: 14,
  },
  {
    id: 20,
    company: "마인드풀",
    slug: "mindful",
    tagline: "대학생 멘탈케어, 가볍게 시작하세요",
    description:
      "스트레스, 불안, 번아웃을 느끼는 대학생을 위한 심리 상담 및 셀프케어 앱입니다. 익명 커뮤니티와 전문 상담사 연결, 명상 가이드까지 한 앱에서 제공합니다.",
    category: "헬스케어",
    batch: "1기",
    votes: 203,
    datePosted: "2025-08-25",
    daysAgo: 17,
  },
];

export const CATEGORIES = [
  { emoji: "all", label: "전체" },
  { emoji: "📚", label: "에듀테크" },
  { emoji: "🍽️", label: "푸드테크" },
  { emoji: "🏥", label: "헬스케어" },
  { emoji: "💰", label: "핀테크" },
  { emoji: "🛒", label: "커머스" },
  { emoji: "💬", label: "소셜" },
  { emoji: "🖥️", label: "SaaS" },
  { emoji: "🚚", label: "물류" },
  { emoji: "🤖", label: "AI/ML" },
  { emoji: "📦", label: "기타" },
];
