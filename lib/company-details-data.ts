/* ─── Company detail types and data ─── */

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
}

export const COMPANY_DATA: Record<string, CompanyDetail> = {
  millimeter: {
    name: "밀리미터",
    slug: "millimeter",
    oneLiner: "AI 기반 패션 커머스 플랫폼",
    batch: "1기",
    batchSeason: "2022 Spring",
    status: "Active",
    industries: ["AI", "커머스", "패션"],
    location: "서울",
    founded: 2022,
    teamSize: "5-10명",
    website: "https://millimeter.kr",
    linkedIn: "https://www.linkedin.com/company/millimeter/",
    description:
      "밀리미터는 AI 기반 패션 추천 시스템을 통해 개인 맞춤형 쇼핑 경험을 제공하는 커머스 플랫폼입니다. 성균관대 창업학회 1기 출신 창업자들이 설립한 밀리미터는 사용자의 체형, 취향, 구매 이력을 분석하여 최적의 의류를 추천합니다. 2022년 시드 투자 유치 이후 빠르게 성장하며 현재 월 거래액 50억 원을 달성했으며, Z세대를 중심으로 높은 재구매율을 기록하고 있습니다.",
    founders: [
      {
        name: "김서연",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/seoyeon-kim-millimeter/",
      },
      {
        name: "박준혁",
        title: "공동창업자/CTO",
        linkedIn: "https://www.linkedin.com/in/junhyuk-park-millimeter/",
      },
    ],
    jobs: [
      { title: "AI 엔지니어", location: "서울", experience: "3년 이상" },
      { title: "프로덕트 디자이너", location: "서울", experience: "2년 이상" },
    ],
    news: [
      { title: "밀리미터, 시리즈 A 70억 투자 유치", url: "https://news.spec.kr/millimeter-series-a", date: "2024년 1월 15일" },
      { title: "AI 패션 추천 정확도 85% 돌파", url: "https://news.spec.kr/millimeter-ai", date: "2023년 9월 10일" },
    ],
  },
  tabling: {
    name: "테이블링",
    slug: "tabling",
    oneLiner: "식당 예약 및 대기 관리 플랫폼",
    batch: "1기",
    batchSeason: "2022 Spring",
    status: "Active",
    industries: ["SaaS", "외식", "모바일"],
    location: "서울",
    founded: 2022,
    teamSize: "10-20명",
    website: "https://tabling.kr",
    linkedIn: "https://www.linkedin.com/company/tabling-kr/",
    description:
      "테이블링은 식당의 예약 및 대기 관리를 디지털화하여 고객과 식당 모두에게 편리한 경험을 제공하는 플랫폼입니다. 줄 서서 기다리는 시간을 없애고, 실시간 대기 현황과 예상 시간을 알려주며, 식당은 효율적인 테이블 관리로 매출을 증대시킬 수 있습니다. 현재 전국 3,000개 이상의 식당이 사용 중이며, 월 활성 사용자 100만 명을 돌파했습니다.",
    founders: [
      {
        name: "이민재",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/minjae-lee-tabling/",
      },
      {
        name: "최유진",
        title: "공동창업자/CPO",
        linkedIn: "https://www.linkedin.com/in/yujin-choi-tabling/",
      },
      {
        name: "강태우",
        title: "공동창업자/CTO",
        linkedIn: "https://www.linkedin.com/in/taewoo-kang-tabling/",
      },
    ],
    jobs: [
      { title: "백엔드 개발자", location: "서울", experience: "3년 이상" },
    ],
    news: [
      { title: "테이블링, 전국 3천 식당 돌파", url: "https://news.spec.kr/tabling-3000", date: "2024년 2월 1일" },
    ],
  },
  classfit: {
    name: "클래스핏",
    slug: "classfit",
    oneLiner: "피트니스 구독 서비스",
    batch: "2기",
    batchSeason: "2023 Spring",
    status: "Active",
    industries: ["헬스케어", "구독", "모바일"],
    location: "판교",
    founded: 2023,
    teamSize: "5-10명",
    website: "https://classfit.kr",
    linkedIn: "https://www.linkedin.com/company/classfit/",
    description:
      "클래스핏은 월 구독료로 다양한 헬스장과 요가, 필라테스 등의 피트니스 센터를 자유롭게 이용할 수 있는 구독 서비스입니다. 넷플릭스처럼 유연한 운동 라이프를 제공하며, 사용자는 집 근처, 회사 근처 등 위치에 구애받지 않고 운동할 수 있습니다. 현재 서울·경기 지역 200개 이상의 센터와 제휴하고 있으며, 회원 2만 명을 확보했습니다.",
    founders: [
      {
        name: "정현우",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/hyunwoo-jung-classfit/",
      },
      {
        name: "한수민",
        title: "공동창업자/COO",
        linkedIn: "https://www.linkedin.com/in/sumin-han-classfit/",
      },
    ],
    jobs: [
      { title: "파트너십 매니저", location: "판교", experience: "2년 이상" },
      { title: "모바일 앱 개발자", location: "판교 / 재택", experience: "3년 이상" },
    ],
    news: [
      { title: "클래스핏, 시드 투자 30억 유치", url: "https://news.spec.kr/classfit-seed", date: "2023년 6월 20일" },
    ],
  },
  campusnote: {
    name: "캠퍼스노트",
    slug: "campusnote",
    oneLiner: "대학생 학습 및 정보 공유 플랫폼",
    batch: "2기",
    batchSeason: "2023 Spring",
    status: "Active",
    industries: ["에듀테크", "커뮤니티", "모바일"],
    location: "서울",
    founded: 2023,
    teamSize: "5-10명",
    website: "https://campusnote.kr",
    linkedIn: "https://www.linkedin.com/company/campusnote/",
    description:
      "캠퍼스노트는 대학생들이 강의 노트, 족보, 과제 자료를 공유하고 함께 학습할 수 있는 플랫폼입니다. 같은 수업을 듣는 학생들끼리 질문하고 답변하며, AI 기반 학습 도우미가 개념 정리와 문제 풀이를 지원합니다. 성균관대를 시작으로 현재 전국 30개 대학, 10만 명 이상의 학생이 사용하고 있으며, 학습 커뮤니티로서 빠르게 성장하고 있습니다.",
    founders: [
      {
        name: "송민석",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/minseok-song-campusnote/",
      },
      {
        name: "윤지혜",
        title: "공동창업자/CPO",
        linkedIn: "https://www.linkedin.com/in/jihye-yoon-campusnote/",
      },
    ],
    jobs: [
      { title: "풀스택 개발자", location: "서울", experience: "2년 이상" },
    ],
    news: [
      { title: "캠퍼스노트, 전국 30개 대학 확대", url: "https://news.spec.kr/campusnote-expansion", date: "2024년 3월 5일" },
    ],
  },
  snapfood: {
    name: "스냅푸드",
    slug: "snapfood",
    oneLiner: "AI 식단 분석 및 관리 앱",
    batch: "2기",
    batchSeason: "2023 Spring",
    status: "Active",
    industries: ["헬스케어", "AI", "모바일"],
    location: "서울",
    founded: 2023,
    teamSize: "2-5명",
    website: "https://snapfood.kr",
    linkedIn: "https://www.linkedin.com/company/snapfood/",
    description:
      "스냅푸드는 음식 사진을 찍기만 하면 AI가 자동으로 칼로리와 영양소를 분석해주는 식단 관리 앱입니다. 개인 맞춤형 식단 추천과 건강 목표 달성을 위한 코칭을 제공하며, 다이어트와 체중 관리를 쉽고 재미있게 만듭니다. 출시 6개월 만에 다운로드 50만 건을 돌파하며 헬스케어 앱 시장에서 주목받고 있습니다.",
    founders: [
      {
        name: "오지훈",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/jihoon-oh-snapfood/",
      },
      {
        name: "김예림",
        title: "공동창업자/AI Lead",
        linkedIn: "https://www.linkedin.com/in/yerim-kim-snapfood/",
      },
    ],
    jobs: [
      { title: "AI 연구원", location: "서울", experience: "2년 이상" },
    ],
    news: [
      { title: "스냅푸드, 다운로드 50만 돌파", url: "https://news.spec.kr/snapfood-500k", date: "2023년 12월 10일" },
    ],
  },
  flowchain: {
    name: "플로우체인",
    slug: "flowchain",
    oneLiner: "물류 최적화 솔루션",
    batch: "2기",
    batchSeason: "2023 Spring",
    status: "Active",
    industries: ["물류", "B2B", "SaaS"],
    location: "판교",
    founded: 2023,
    teamSize: "5-10명",
    website: "https://flowchain.kr",
    linkedIn: "https://www.linkedin.com/company/flowchain/",
    description:
      "플로우체인은 중소 물류 기업을 위한 배송 경로 최적화 및 재고 관리 솔루션을 제공합니다. AI 알고리즘을 통해 배송 시간을 단축하고 비용을 절감하며, 실시간 물류 추적으로 고객 만족도를 높입니다. 현재 50개 이상의 물류 기업이 사용 중이며, 평균 배송 비용 20% 절감 효과를 입증했습니다.",
    founders: [
      {
        name: "임성준",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/sungjun-lim-flowchain/",
      },
      {
        name: "조아영",
        title: "공동창업자/CTO",
        linkedIn: "https://www.linkedin.com/in/ahyoung-cho-flowchain/",
      },
    ],
    jobs: [],
    news: [
      { title: "플로우체인, 배송 비용 20% 절감 입증", url: "https://news.spec.kr/flowchain-efficiency", date: "2023년 11월 25일" },
    ],
  },
  nextq: {
    name: "넥스트큐",
    slug: "nextq",
    oneLiner: "AI 면접 연습 플랫폼",
    batch: "3기",
    batchSeason: "2024 Spring",
    status: "Active",
    industries: ["HR Tech", "AI", "에듀테크"],
    location: "서울",
    founded: 2024,
    teamSize: "2-5명",
    website: "https://nextq.kr",
    linkedIn: "https://www.linkedin.com/company/nextq/",
    description:
      "넥스트큐는 AI 면접관과 실전처럼 연습하고 피드백을 받을 수 있는 면접 준비 플랫폼입니다. 음성 인식과 자연어 처리 기술로 답변을 분석하고, 표정과 목소리까지 평가하여 개선점을 제시합니다. 취업 준비생들에게 실전 경험을 제공하며, 출시 3개월 만에 사용자 3만 명을 확보했습니다.",
    founders: [
      {
        name: "박세진",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/sejin-park-nextq/",
      },
      {
        name: "최민규",
        title: "공동창업자/CTO",
        linkedIn: "https://www.linkedin.com/in/mingyu-choi-nextq/",
      },
    ],
    jobs: [
      { title: "NLP 엔지니어", location: "서울 / 재택", experience: "2년 이상" },
      { title: "프론트엔드 개발자", location: "서울", experience: "2년 이상" },
    ],
    news: [
      { title: "넥스트큐, 사용자 3만 명 돌파", url: "https://news.spec.kr/nextq-30k", date: "2024년 4월 12일" },
    ],
  },
  lunchbox: {
    name: "런치박스",
    slug: "lunchbox",
    oneLiner: "기업 점심 배달 서비스",
    batch: "3기",
    batchSeason: "2024 Spring",
    status: "Active",
    industries: ["푸드테크", "B2B", "배달"],
    location: "서울",
    founded: 2024,
    teamSize: "5-10명",
    website: "https://lunchbox.kr",
    linkedIn: "https://www.linkedin.com/company/lunchbox-kr/",
    description:
      "런치박스는 기업 단위로 점심 식사를 대량 배달하는 B2B 푸드테크 서비스입니다. 직원들은 앱에서 메뉴를 선택하고, 회사는 한 번에 결제하여 복리후생을 제공할 수 있습니다. 신선한 재료로 만든 건강한 도시락을 정해진 시간에 배달하며, 현재 강남·판교 지역 100개 기업이 이용 중입니다.",
    founders: [
      {
        name: "김도현",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/dohyun-kim-lunchbox/",
      },
      {
        name: "이수빈",
        title: "공동창업자/COO",
        linkedIn: "https://www.linkedin.com/in/subin-lee-lunchbox/",
      },
    ],
    jobs: [
      { title: "B2B 영업 매니저", location: "서울", experience: "1년 이상" },
    ],
    news: [
      { title: "런치박스, 100개 기업 파트너 확보", url: "https://news.spec.kr/lunchbox-100", date: "2024년 5월 8일" },
    ],
  },
  medifocus: {
    name: "메디포커스",
    slug: "medifocus",
    oneLiner: "디지털 헬스케어 진단 플랫폼",
    batch: "3기",
    batchSeason: "2024 Spring",
    status: "Active",
    industries: ["헬스케어", "의료", "AI"],
    location: "서울",
    founded: 2024,
    teamSize: "5-10명",
    website: "https://medifocus.kr",
    linkedIn: "https://www.linkedin.com/company/medifocus/",
    description:
      "메디포커스는 AI 기반 증상 분석과 원격 진료를 연결하는 디지털 헬스케어 플랫폼입니다. 사용자는 증상을 입력하면 AI가 가능한 질병을 예측하고, 필요시 의료진과 화상 상담을 진행할 수 있습니다. 의료 접근성을 높이고 조기 진단을 돕는 것을 목표로 하며, 현재 30개 병원과 제휴하여 서비스를 확대하고 있습니다.",
    founders: [
      {
        name: "홍지수",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/jisoo-hong-medifocus/",
      },
      {
        name: "안준호",
        title: "공동창업자/CMO",
        linkedIn: "https://www.linkedin.com/in/junho-ahn-medifocus/",
      },
    ],
    jobs: [
      { title: "헬스케어 데이터 분석가", location: "서울", experience: "3년 이상" },
    ],
    news: [
      { title: "메디포커스, 30개 병원 제휴 완료", url: "https://news.spec.kr/medifocus-partners", date: "2024년 6월 3일" },
    ],
  },
  ideabridge: {
    name: "아이디어브릿지",
    slug: "ideabridge",
    oneLiner: "창업 교육 플랫폼",
    batch: "1기",
    batchSeason: "2022 Spring",
    status: "Inactive",
    industries: ["에듀테크", "창업", "커뮤니티"],
    location: "서울",
    founded: 2022,
    teamSize: "2-5명",
    website: "https://ideabridge.kr",
    description:
      "아이디어브릿지는 예비 창업자들을 위한 온라인 교육 플랫폼으로, 창업 아이디어 검증부터 사업 계획 수립, 투자 유치까지 전 과정을 학습할 수 있습니다. 멘토링과 네트워킹 기회도 제공하며, 수강생 중 50여 팀이 실제 창업에 성공했습니다. 2024년 초 서비스를 종료했지만, 창업 생태계에 기여한 플랫폼으로 평가받고 있습니다.",
    founders: [
      {
        name: "서준영",
        title: "대표이사/CEO",
        linkedIn: "https://www.linkedin.com/in/junyoung-seo-ideabridge/",
      },
      {
        name: "강유나",
        title: "공동창업자/Content Lead",
        linkedIn: "https://www.linkedin.com/in/yuna-kang-ideabridge/",
      },
    ],
    jobs: [],
    news: [
      { title: "아이디어브릿지, 50개 스타트업 배출", url: "https://news.spec.kr/ideabridge-50", date: "2023년 8월 15일" },
    ],
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
    description: "K-HI는 어르신을 위한 지도 서비스와 위급상황 감지 위치 추적 시스템을 개발하는 SPEC 2기 프로젝트입니다.",
    founders: [
      { name: "강하빈", title: "팀원", linkedIn: "#" },
      { name: "김주현", title: "팀원", linkedIn: "#" },
      { name: "한소윤", title: "팀원", linkedIn: "#" },
      { name: "홍경의", title: "팀원", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
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
    description: "ByOrbit는 농산물 부산물을 활용한 재가공 서비스를 개발하는 SPEC 2기 프로젝트입니다.",
    founders: [
      { name: "김동우", title: "팀원", linkedIn: "#" },
      { name: "신지은", title: "팀원", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
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
    description: "FAXI는 트렌디한 포터블 모바일 팩스 서비스를 개발하는 SPEC 2기 프로젝트입니다.",
    founders: [
      { name: "서원준", title: "팀원", linkedIn: "#" },
      { name: "한지상", title: "팀원", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
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
    description: "담아는 1인가구·여성을 위한 호신용품 패키징 서비스를 개발하는 SPEC 2기 프로젝트입니다.",
    founders: [
      { name: "곽재민", title: "팀원", linkedIn: "#" },
      { name: "이유정", title: "팀원", linkedIn: "#" },
      { name: "전선희", title: "팀원", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
  },
  linkit: {
    name: "LINKIT",
    slug: "linkit",
    oneLiner: "",
    batch: "1기",
    batchSeason: "1기",
    status: "Active",
    industries: [],
    location: "서울",
    founded: 2024,
    teamSize: "3명",
    website: "#",
    description: "LINKIT은 SPEC 1기 프로젝트입니다.",
    founders: [
      { name: "윤채빈", title: "팀원", linkedIn: "#" },
      { name: "장지민", title: "팀원", linkedIn: "#" },
      { name: "전도현", title: "팀원", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
  },
  "on-the-record": {
    name: "On The Record",
    slug: "on-the-record",
    oneLiner: "",
    batch: "1기",
    batchSeason: "1기",
    status: "Active",
    industries: [],
    location: "서울",
    founded: 2024,
    teamSize: "5명",
    website: "#",
    description: "On The Record는 SPEC 1기 프로젝트입니다.",
    founders: [
      { name: "석채은", title: "팀원", linkedIn: "#" },
      { name: "임시우", title: "팀원", linkedIn: "#" },
      { name: "장진우", title: "팀원", linkedIn: "#" },
      { name: "황정민", title: "팀원", linkedIn: "#" },
      { name: "이송목", title: "팀원", linkedIn: "#" },
    ],
    jobs: [],
    news: [],
  },
};

/**
 * Get company details by slug
 * Used by the page component and generateMetadata
 */
export function getCompanyDetailBySlug(slug: string): CompanyDetail | undefined {
  return COMPANY_DATA[slug];
}

/**
 * Get all company slugs for generateStaticParams
 */
export function getAllCompanyDetailSlugs(): { slug: string }[] {
  return Object.keys(COMPANY_DATA).map((slug) => ({ slug }));
}

/**
 * Get related companies (excluding current company)
 */
export function getRelatedCompanies(currentSlug: string): CompanyDetail[] {
  return Object.values(COMPANY_DATA)
    .filter((c) => c.slug !== currentSlug)
    .slice(0, 4);
}
