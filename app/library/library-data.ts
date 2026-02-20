export type ContentType = "Video" | "Essay" | "Podcast" | "Guide";

export type Category =
  | "창업-기초"
  | "매출-성장"
  | "IR-투자"
  | "팀빌딩"
  | "VCC"
  | "알럼나이"
  | "기술-MVP";

export interface LibraryItem {
  slug: string;
  title: string;
  author: string;
  authorRole?: string;
  type: ContentType;
  categories: Category[];
  description: string;
  body: string;
  date: string;
  views?: string;
  duration?: string;
  youtubeId?: string;
  featured?: boolean;
  thumbnailColor: string;
}

export const categories: Category[] = [
  "창업-기초",
  "IR-투자",
  "VCC",
  "매출-성장",
  "팀빌딩",
  "기술-MVP",
  "알럼나이",
];

export const libraryItems: LibraryItem[] = [
  {
    slug: "revenue-challenge-phase1",
    title: "매출 챌린지 전략 — Phase 1 특강",
    author: "Peter Kim",
    authorRole: "SPEC 창립자",
    type: "Video",
    categories: ["매출-성장", "VCC"],
    description:
      "VCC Phase 1의 핵심, 매출 챌린지. 첫 매출을 만드는 구체적인 전략과 실행 프레임워크를 공유합니다.",
    body: `VCC Phase 1에서 가장 중요한 것은 '일단 팔아보는 것'입니다. 아이디어 단계에서 매출까지의 거리를 최대한 줄이는 것이 이 Phase의 목표입니다.

매출 챌린지는 단순히 돈을 버는 것이 아닙니다. 고객이 실제로 지갑을 열 만큼의 가치를 전달할 수 있는지를 검증하는 과정입니다. 이 과정에서 여러분은 자연스럽게 Product-Market Fit의 초기 신호를 감지하게 됩니다.

이 특강에서는 매출 챌린지를 시작하기 전에 세워야 할 가설, 첫 고객을 찾는 방법, 그리고 실패했을 때 빠르게 피벗하는 프레임워크를 다룹니다. SPEC 17기부터 21기까지의 실제 매출 챌린지 사례를 분석하며, 성공한 팀과 실패한 팀의 차이를 구체적으로 보여드립니다.

핵심 메시지: 완벽한 제품을 만들기 전에, 불완전한 것이라도 팔아보세요. 그 과정에서 얻는 인사이트가 진짜 제품을 만들어줍니다.`,
    date: "January 2025",
    duration: "42:15",
    youtubeId: "CBYhVcO4WgI",
    views: "3200",
    thumbnailColor: "#e8e4dc",
  },
  {
    slug: "ir-pitch-deck-masterclass",
    title: "IR 피치덱 작성법 완전 정복",
    author: "Sarah Lee",
    authorRole: "투자 멘토, SPEC",
    type: "Video",
    categories: ["IR-투자"],
    description:
      "투자자의 마음을 움직이는 피치덱, 어떻게 만들까요? 슬라이드 구성부터 스토리텔링까지 완벽 가이드.",
    body: `IR 피치덱은 단순한 발표 자료가 아닙니다. 여러분의 비전을 투자자의 언어로 번역하는 작업입니다.

좋은 피치덱의 구조는 명확합니다: 문제 → 솔루션 → 시장 → 비즈니스 모델 → 트랙션 → 팀 → Ask. 하지만 이 구조를 아는 것과 설득력 있게 채우는 것은 완전히 다른 이야기입니다.

이 특강에서는 실제 투자 유치에 성공한 SPEC 알럼나이 팀들의 피치덱을 함께 분석합니다. 각 슬라이드에서 투자자가 실제로 보는 포인트, 흔히 하는 실수, 그리고 '아, 이 팀은 다르다'라고 느끼게 만드는 요소들을 하나하나 짚어봅니다.

특히 초기 스타트업에서 트랙션이 부족할 때 이를 보완하는 방법, 시장 규모를 TAM-SAM-SOM으로 설득력 있게 제시하는 법, 그리고 데모데이 현장에서의 발표 테크닉까지 다룹니다.`,
    date: "December 2024",
    duration: "38:20",
    youtubeId: "MT4Ig2uqjTc",
    views: "2800",
    thumbnailColor: "#dce8dc",
  },
  {
    slug: "why-sell-first-strategy",
    title: "왜 '일단 팔아라'가 맞는 전략인가",
    author: "이정훈",
    authorRole: "전략 멘토, SPEC",
    type: "Essay",
    categories: ["매출-성장"],
    description:
      "완벽한 제품을 만들기 전에 먼저 팔아야 하는 이유. 대학생 창업에서 가장 흔한 함정을 피하는 법.",
    body: `대학생 창업자들이 가장 많이 빠지는 함정이 있습니다. '제품이 완성되면 그때 팔겠다'는 생각입니다. 이 함정에 빠지면 6개월을 개발에 쏟고, 런칭했을 때 아무도 원하지 않는 제품을 만들었다는 사실을 알게 됩니다.

'일단 팔아라'는 무책임한 조언이 아닙니다. 이것은 가장 효율적인 시장 검증 방법입니다. 제품이 없어도 팔 수 있습니다. 프리셀링, 크라우드펀딩, 컨시어지 MVP 등 다양한 방법이 있죠.

SPEC에서 매출 챌린지를 경험한 팀들의 데이터를 보면, 첫 2주 안에 매출을 만든 팀의 최종 프로그램 생존율이 그렇지 않은 팀의 3배에 달합니다. 이것은 제품의 완성도 때문이 아니라, '팔 수 있는 것을 만들겠다'는 마인드셋의 차이 때문입니다.

여러분의 아이디어가 정말 가치 있는지 알고 싶다면, 누군가에게 돈을 내라고 해보세요. 그 반응이 진짜 피드백입니다.`,
    date: "November 2024",
    thumbnailColor: "#dce0e8",
  },
  {
    slug: "vibe-coding-mvp-guide",
    title: "바이브코딩으로 MVP 빌딩하기",
    author: "정민수",
    authorRole: "기술 멘토, SPEC",
    type: "Guide",
    categories: ["기술-MVP", "VCC"],
    description:
      "코딩 경험이 없어도 AI 도구로 작동하는 MVP를 만들 수 있습니다. 바이브코딩 실전 가이드.",
    body: `바이브코딩이란 AI 코딩 도구(Cursor, Replit Agent, Claude 등)를 활용해 자연어로 소프트웨어를 만드는 방법입니다. 코딩을 몰라도 됩니다. 중요한 것은 무엇을 만들고 싶은지 명확히 아는 것입니다.

이 가이드에서는 비개발자 창업자가 바이브코딩으로 실제 작동하는 MVP를 만드는 전 과정을 다룹니다. 프롬프트 작성법, 에러 대처법, 그리고 '이건 AI로 되고 이건 안 된다'의 경계를 실전 경험을 바탕으로 알려드립니다.

Step 1: 문제 정의와 기능 목록 작성 — AI에게 시키기 전에 인간이 먼저 명확히 정의해야 합니다.
Step 2: 기술 스택 선택 — Next.js + Supabase 조합이 비개발자에게 가장 접근하기 쉽습니다.
Step 3: AI와 함께 빌딩 — 한 번에 전체를 만들려 하지 마세요. 기능 하나씩 붙여가세요.
Step 4: 배포와 피드백 — Vercel 배포 후 실제 유저에게 테스트하세요.

SPEC 20기에서 바이브코딩으로 MVP를 만든 3개 팀의 사례를 상세히 분석합니다.`,
    date: "October 2024",
    thumbnailColor: "#dcdce8",
  },
  {
    slug: "kakao-mobility-growth-talk",
    title: "카카오모빌리티 그로스 전략 특강",
    author: "Jimin Choi",
    authorRole: "그로스 멘토, SPEC",
    type: "Video",
    categories: ["매출-성장"],
    description:
      "카카오모빌리티의 초기 성장 전략을 해부합니다. 로컬 시장에서의 그로스 해킹 실전 사례.",
    body: `카카오모빌리티가 카카오택시에서 시작해 종합 모빌리티 플랫폼으로 성장한 과정은 한국 스타트업 그로스의 교과서입니다.

이 특강에서는 카카오모빌리티의 초기 성장 전략을 세 가지 축으로 분석합니다. 첫째, 택시 기사 확보를 위한 오프라인 영업 전략. 둘째, 이용자 리텐션을 높이기 위한 UX 최적화. 셋째, 네트워크 효과가 작동하기 시작한 티핑 포인트 분석.

특히 대학생 창업자들이 배울 수 있는 점은 '로컬 퍼스트' 전략입니다. 전국 단위로 시작하지 않고, 강남 3구에서 시작해 밀도를 높인 후 확장한 전략은 자원이 제한된 초기 스타트업에게 중요한 인사이트를 줍니다.

Q&A 세션에서는 SPEC 팀들의 실제 그로스 고민에 대한 1:1 피드백도 진행합니다.`,
    date: "September 2024",
    duration: "55:30",
    youtubeId: "1hHMwLxN6EM",
    views: "1850",
    thumbnailColor: "#e8dce0",
  },
  {
    slug: "why-start-now-in-college",
    title: "대학생 창업, 지금 시작해야 하는 이유",
    author: "David Park",
    authorRole: "SPEC 공동창립자",
    type: "Essay",
    categories: ["알럼나이"],
    description:
      "대학 시절이 창업에 가장 유리한 시기인 이유. 실패 비용이 가장 낮을 때 시작하라.",
    body: `'졸업하고 경력 쌓은 뒤에 창업해도 늦지 않다'는 말을 자주 듣습니다. 물론 맞는 말입니다. 하지만 대학 시절에만 가능한 창업의 이점을 무시하는 것이기도 합니다.

첫째, 실패 비용이 인생에서 가장 낮습니다. 가족 부양 의무도, 월세 걱정도, 기회비용으로 잃을 연봉도 크지 않습니다. 이 시기에 실패하는 것은 '학습'이지 '실패'가 아닙니다.

둘째, 캠퍼스는 최고의 코파운더 풀입니다. 다양한 전공의 뛰어난 동료들이 한 곳에 모여 있는 환경은 졸업 후에는 쉽게 찾을 수 없습니다. SPEC에서 만난 팀 중 가장 강한 팀들은 대부분 서로 다른 학과의 멤버들로 구성되어 있었습니다.

셋째, 대학은 안전한 실험장입니다. 교수님의 피드백, 학교의 인프라, 동기들의 응원 — 이런 자원을 활용할 수 있는 시기는 제한적입니다.

SPEC은 이 황금기를 최대한 활용할 수 있도록 설계된 프로그램입니다. 지금이 시작하기 가장 좋은 때입니다.`,
    date: "August 2024",
    thumbnailColor: "#e0e8dc",
  },
  {
    slug: "lean-canvas-writing-guide",
    title: "린 캔버스 작성 가이드",
    author: "Peter Kim",
    authorRole: "SPEC 창립자",
    type: "Guide",
    categories: ["VCC"],
    description:
      "린 캔버스 한 장으로 비즈니스 모델을 명확하게 정리하는 방법. VCC 지원자 필독.",
    body: `린 캔버스는 비즈니스 모델 캔버스를 스타트업에 맞게 변형한 도구입니다. 9개의 칸에 비즈니스의 핵심을 압축하는 연습은 창업의 첫 단계에서 반드시 거쳐야 합니다.

많은 팀이 린 캔버스를 '한 번 쓰고 끝'으로 생각합니다. 하지만 린 캔버스는 살아있는 문서여야 합니다. 고객 인터뷰를 할 때마다, 매출 챌린지 결과가 나올 때마다 업데이트해야 합니다.

이 가이드에서는 각 칸을 채우는 실전 팁을 제공합니다:
- 문제: 고객이 실제로 '돈을 내서라도 해결하고 싶은' 문제인가?
- 고객 세그먼트: '모든 대학생'이 아닌, 구체적인 얼리 어답터는 누구인가?
- 고유한 가치 제안: 한 문장으로 왜 당신의 솔루션이어야 하는지 설명할 수 있는가?
- 수익 모델: 첫 날부터 매출이 가능한 구조인가?

VCC 지원 시 린 캔버스를 기반으로 비즈니스 모델을 설명하면 합격 확률이 크게 올라갑니다. SPEC 내부 데이터에 따르면 린 캔버스를 체계적으로 작성한 팀의 Phase 1 통과율이 2배 높았습니다.`,
    date: "July 2024",
    thumbnailColor: "#e4dce8",
  },
  {
    slug: "alumni-talk-lessons-from-failure",
    title: "SPEC 알럼나이 대담 — 실패에서 배운 것들",
    author: "한유진",
    authorRole: "프로그램 디렉터, SPEC",
    type: "Podcast",
    categories: ["알럼나이"],
    description:
      "SPEC 12기~18기 알럼나이 4명이 들려주는 솔직한 실패담. 실패는 끝이 아니라 데이터다.",
    body: `이 에피소드에서는 SPEC을 거친 알럼나이 4명이 모여 각자의 실패 경험을 솔직하게 나눕니다.

참여자:
- 김도현 (15기) — 에듀테크 스타트업 창업 후 1년 만에 피벗, 현재 네이버 PM
- 박서연 (12기) — 커머스 플랫폼 운영 중 공동창업자와의 갈등으로 해산
- 이준영 (18기) — B2B SaaS 개발 중 기술적 한계로 중단, 현재 카카오 개발자
- 최수민 (16기) — 소셜 임팩트 스타트업 운영 후 지속가능성 문제로 전환

각자의 실패에서 공통적으로 발견되는 패턴이 있습니다: 시장 검증 없이 빌딩에 몰두한 것, 팀 내 역할 분담의 불명확함, 그리고 '이쯤이면 되겠지'라는 낙관적 사고.

하지만 네 명 모두 SPEC에서의 경험이 현재 커리어에 결정적 영향을 미쳤다고 말합니다. 스타트업을 직접 하지 않더라도, 창업 경험에서 얻은 문제 해결 능력과 실행력은 어디에서든 빛을 발합니다.`,
    date: "June 2024",
    duration: "68:00",
    views: "1420",
    thumbnailColor: "#dce8e4",
  },
  {
    slug: "yc-lecture5-competition-is-for-losers",
    title: "경쟁은 패자의 게임이다 — Competition is for Losers",
    author: "Peter Thiel",
    authorRole: "PayPal, Palantir 창업자",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 5. PayPal 창업자 Peter Thiel이 경쟁을 피하고 독점을 만드는 비즈니스 전략을 설명합니다.",
    body: `Peter Thiel이 '경쟁은 패자의 게임'이라는 도발적인 주제로 비즈니스 전략과 독점 이론을 풀어냅니다.\n\n핵심 내용:\n- 완전 경쟁 시장에서는 아무도 돈을 벌지 못한다. 독점을 목표로 하라.\n- 독점 기업은 자신이 독점이 아닌 척하고, 경쟁 기업은 독점인 척한다.\n- 작은 시장에서 시작해 지배적 점유율을 확보한 뒤, 동심원 모양으로 확장하라.\n- '경쟁'에 집착하는 것은 가치 창출이 아닌 가치 파괴로 이어진다.\n\nPeter Thiel은 성공적인 스타트업은 '다른 누구도 하지 않는 것'을 해야 한다고 강조합니다. 구글이 검색 시장을, 페이스북이 소셜 네트워크를 만든 것처럼, 기존 시장에서 경쟁하는 것이 아니라 새로운 카테고리를 만들어야 합니다.\n\n이 강의는 스타트업 전략뿐만 아니라 커리어와 인생 전반에 적용할 수 있는 사고 프레임워크를 제공합니다.`,
    date: "October 2014",
    duration: "50:27",
    youtubeId: "5_0dVHMpJlo",
    views: "957378",
    thumbnailColor: "#e8e0dc",
  },
  {
    slug: "demo-day-preparation-checklist",
    title: "데모데이 발표 준비 체크리스트",
    author: "Peter Kim",
    authorRole: "SPEC 창립자",
    type: "Guide",
    categories: ["IR-투자", "VCC"],
    description:
      "SPEC 데모데이에서 임팩트 있는 발표를 위한 완벽 체크리스트. 발표 2주 전부터의 준비 로드맵.",
    body: `데모데이는 VCC 프로그램의 하이라이트입니다. 6개월간의 여정을 3분으로 압축해야 하는 순간, 준비가 결과를 결정합니다.

D-14: 스토리 설계
- 핵심 메시지 하나를 정하세요. '우리는 X 문제를 Y 방식으로 해결하고, Z 만큼의 트랙션을 만들었다.'
- 감정적 오프닝을 준비하세요. 문제의 심각성을 청중이 체감할 수 있는 스토리로 시작하세요.

D-7: 슬라이드 완성
- 슬라이드는 최대 10장. 각 슬라이드에 하나의 메시지만 담으세요.
- 숫자가 말하게 하세요. 매출, 사용자 수, 성장률 — 구체적인 트랙션 데이터.
- 라이브 데모를 포함할 경우, 반드시 백업 영상을 준비하세요.

D-3: 리허설
- 최소 10회 이상 전체 발표를 연습하세요.
- 타이머를 켜고 연습하세요. 3분은 생각보다 짧습니다.
- SPEC 멘토에게 피드백을 받으세요.

D-Day: 현장
- 30분 전 도착. 장비 테스트 필수.
- 청중과 눈을 맞추세요. 슬라이드를 읽지 마세요.
- Q&A에서는 솔직하게. 모르면 모른다고 하세요.`,
    date: "April 2024",
    thumbnailColor: "#dce4e8",
  },
  {
    slug: "vcc-phase2-growth-metrics",
    title: "VCC Phase 2 — 성장 지표 설정과 추적",
    author: "Jimin Choi",
    authorRole: "그로스 멘토, SPEC",
    type: "Video",
    categories: ["VCC", "매출-성장"],
    description:
      "Phase 2에서 추적해야 할 핵심 지표와 주간 성장률 관리법. 데이터 기반 의사결정의 시작.",
    body: `VCC Phase 2는 '성장'에 집중하는 단계입니다. Phase 1에서 첫 매출을 만들었다면, Phase 2에서는 그 매출을 체계적으로 키워야 합니다.

가장 먼저 할 일은 '북극성 지표(North Star Metric)'를 정하는 것입니다. 모든 팀원이 하나의 숫자에 집중해야 합니다. 커머스라면 GMV, SaaS라면 MRR, 플랫폼이라면 WAU가 될 수 있습니다.

주간 성장률 5~7%를 목표로 설정하세요. 이것은 연간 12~33배 성장에 해당합니다. 비현실적으로 보일 수 있지만, 초기 스타트업에서 이 정도의 성장률은 가능하고 또 필요합니다.

이 특강에서는 실제 SPEC 팀들의 대시보드를 함께 보며, 어떤 지표를 어떻게 추적하고 있는지, 그리고 지표가 떨어졌을 때 어떻게 진단하고 대응하는지를 실전 중심으로 다룹니다. Google Sheets와 Mixpanel을 활용한 간단한 대시보드 구축 방법도 포함됩니다.`,
    date: "March 2024",
    duration: "45:10",
    youtubeId: "hyYCn_kAngI",
    views: "1680",
    thumbnailColor: "#e0dce8",
  },
  {
    slug: "yc-lecture2-team-and-execution",
    title: "팀 구성과 실행 — Team and Execution",
    author: "Sam Altman",
    authorRole: "Y Combinator",
    type: "Video",
    categories: ["팀빌딩", "창업-기초"],
    description:
      "YC How to Start a Startup Lecture 2. 공동창업자 선택, 채용, 그리고 스타트업 실행력에 대한 핵심 조언.",
    body: `Sam Altman이 스타트업의 4대 핵심 요소 중 나머지 두 가지 — 팀과 실행 — 을 다룹니다.\n\n팀에 대해:\n- 공동창업자는 제임스 본드 같아야 한다: 강인하고, 결단력 있고, 끝없이 자원을 발굴하는 사람.\n- 최적의 공동창업자 수는 2~3명. 혼자는 힘들고, 너무 많으면 복잡해진다.\n- 초기에는 채용을 최소화하라. 적은 인원으로 이룰 수 있는 것에 자부심을 가져라.\n\n실행에 대해:\n- CEO의 핵심 역할: 비전 설정, 자금 조달, 전도, 채용/관리, 그리고 실행 기준 설정.\n- 실행은 두 가지 질문: '무엇을 해야 하는지 파악할 수 있는가?'와 '해낼 수 있는가?'\n- 집중과 강도. 매일 하나의 가장 중요한 일을 정하고, 거기에 몰입하라.\n- 모멘텀을 유지하라. 성장하는 회사는 이긴다.`,
    date: "September 2014",
    duration: "28:53",
    youtubeId: "CVfnkM44Urs",
    views: "996040",
    thumbnailColor: "#e8e4dc",
  },
  {
    slug: "startup-legal-basics",
    title: "대학생 창업자를 위한 법률 기초",
    author: "김수진",
    authorRole: "법률 자문, SPEC",
    type: "Guide",
    categories: ["IR-투자"],
    description:
      "법인 설립, 주주간 계약, 지식재산권 — 대학생 창업자가 반드시 알아야 할 법률 기초.",
    body: `대학생 창업자들이 법률 문제를 간과하는 경우가 많습니다. 하지만 초기에 제대로 된 법률적 기반을 갖추지 않으면 나중에 큰 문제가 될 수 있습니다.

법인 설립의 타이밍:
팀이 구성되고, 첫 매출이 발생하거나 외부 투자를 받기로 했을 때가 법인 설립의 적절한 시점입니다. 너무 빨리 설립하면 유지 비용만 발생하고, 너무 늦으면 지분 구조가 복잡해집니다.

주주간 계약 (SHA):
공동창업자 간의 지분 배분, 베스팅 조건, 탈퇴 시 처리 방법을 명문화해야 합니다. '우리는 친구니까 괜찮아'라는 생각이 가장 위험합니다. 현재 SPEC에서는 표준 SHA 템플릿을 제공하고 있습니다.

지식재산권:
개발한 코드, 디자인, 브랜드의 소유권을 명확히 해야 합니다. 특히 학교 프로젝트에서 시작한 경우, 학교의 IP 정책을 반드시 확인하세요.

이 가이드는 법률 자문을 대체하는 것이 아닙니다. 하지만 변호사를 만나기 전에 기본적인 개념을 이해하고 있으면 상담의 효율이 크게 올라갑니다.`,
    date: "January 2024",
    thumbnailColor: "#e0e4e8",
  },
  {
    slug: "product-market-fit-korean-market",
    title: "한국 시장에서 PMF 찾기",
    author: "이정훈",
    authorRole: "전략 멘토, SPEC",
    type: "Essay",
    categories: ["매출-성장"],
    description:
      "Product-Market Fit의 한국적 특수성. 빠른 트렌드 변화와 높은 기대치의 시장에서 PMF를 찾는 법.",
    body: `한국 시장은 독특합니다. 소비자들의 기대치가 매우 높고, 트렌드 변화가 빠르며, 입소문의 영향력이 큽니다. 실리콘밸리의 PMF 프레임워크를 그대로 적용하면 맞지 않는 부분이 있습니다.

한국 시장 PMF의 특징:
1. '써볼게' vs '쓸게' — 한국 소비자는 시도는 빠르지만, 정착도 빠르게 판단합니다. 온보딩 경험이 매우 중요합니다.
2. 카카오톡 효과 — 주변 사람들이 쓰지 않으면 아무리 좋은 서비스도 확산이 어렵습니다. 네트워크 효과를 고려한 설계가 필요합니다.
3. 리뷰 문화 — 네이버 블로그, 유튜브 리뷰가 초기 성장에 결정적 역할을 합니다. 리뷰 가능한 '이야기'를 만드세요.

SPEC 팀들의 PMF 탐색 사례를 분석하면, 성공한 팀들은 대부분 '하나의 커뮤니티'에서 시작했습니다. 성균관대 학생, 특정 동아리, 특정 지역 — 작은 시장에서 완벽한 PMF를 만들고, 그 다음에 확장하는 전략이 효과적이었습니다.`,
    date: "December 2023",
    thumbnailColor: "#dce0e4",
  },
  {
    slug: "investor-relations-101",
    title: "투자자와의 관계 구축 — IR 101",
    author: "Sarah Lee",
    authorRole: "투자 멘토, SPEC",
    type: "Video",
    categories: ["IR-투자"],
    description:
      "투자 유치는 관계에서 시작됩니다. 투자자를 만나기 전, 만난 후, 투자 받은 후의 관계 관리법.",
    body: `많은 창업자들이 투자를 '거래'로 생각합니다. 하지만 좋은 투자 관계는 '파트너십'입니다.

투자자를 만나기 전:
- 타겟 투자자 리스트를 만드세요. 당신의 분야에 투자 이력이 있는 투자자를 찾으세요.
- 콜드 이메일보다 소개가 효과적입니다. SPEC 네트워크를 활용하세요.
- 투자가 필요하기 6개월 전부터 관계를 시작하세요.

투자자를 만난 후:
- 미팅 후 24시간 내 감사 이메일을 보내세요.
- 약속한 후속 자료를 반드시 보내세요.
- 투자를 받지 못하더라도 관계를 유지하세요. 다음 라운드에서 만날 수 있습니다.

투자를 받은 후:
- 월간 투자자 업데이트를 보내세요. 좋은 소식과 나쁜 소식 모두 포함하세요.
- 도움을 구체적으로 요청하세요. '도움이 필요합니다'보다 'A 회사의 B 담당자를 소개받고 싶습니다'가 효과적입니다.
- 중요한 결정 전에 투자자의 의견을 구하세요. 그들은 경험이 풍부합니다.`,
    date: "November 2023",
    duration: "28:50",
    youtubeId: "17XZGUX_9iM",
    views: "980",
    thumbnailColor: "#e4e0e8",
  },
  {
    slug: "yc-lecture3-before-the-startup",
    title: "창업 전에 알아야 할 것들 — Before the Startup",
    author: "Paul Graham",
    authorRole: "Y Combinator 공동창립자",
    type: "Video",
    categories: ["VCC", "창업-기초"],
    description:
      "YC 공동창립자 Paul Graham이 전하는 반직관적인 창업 조언. 스타트업을 시작하기 전에 반드시 알아야 할 것들.",
    body: `Paul Graham이 스타트업에 대한 반직관적인 진실들을 유머러스하게 풀어냅니다.\n\n핵심 메시지:\n- 스타트업은 반직관적이다. 본능을 믿지 말고, 데이터와 사용자를 믿어라.\n- 스타트업 전문가가 될 필요는 없다. 사용자에 대한 전문가가 되어라.\n- 게임의 법칙(학교에서 만들어진 습관)이 스타트업에서는 통하지 않는다.\n- '좋은 아이디어'를 억지로 떠올리려 하지 마라. 대신 흥미로운 문제에 몰두하라.\n\nPaul Graham은 창업을 결심하기 전에 해야 할 가장 중요한 일은 '무언가에 대해 도메인 전문가가 되는 것'이라고 강조합니다. 아이디어는 전문성에서 자연스럽게 나옵니다.\n\n\"당신의 자녀가 창업을 고려한다면 이 강의를 보여주겠다\"는 것이 Paul Graham의 말입니다.`,
    date: "September 2014",
    duration: "44:31",
    youtubeId: "ii1jcLg-eIQ",
    views: "1044711",
    thumbnailColor: "#dce8e0",
  },
  {
    slug: "pricing-strategy-for-early-startups",
    title: "초기 스타트업 가격 전략 — 얼마를 받을 것인가",
    author: "이정훈",
    authorRole: "전략 멘토, SPEC",
    type: "Video",
    categories: ["매출-성장"],
    description:
      "대부분의 초기 창업자들은 너무 싸게 팝니다. 가격 결정의 원칙과 실전 전략.",
    body: `초기 스타트업에서 가장 어려운 의사결정 중 하나가 가격 책정입니다. 대부분의 대학생 창업자들은 자신감 부족으로 너무 낮은 가격을 책정합니다.

가격 결정의 첫 번째 원칙: 원가 기반이 아닌 가치 기반으로 책정하라. 당신의 제품이 고객에게 10만 원의 가치를 제공한다면, 1만 원은 합리적인 가격입니다. 3천 원이면 너무 쌉니다.

가격 테스트 방법:
1. 높은 가격에서 시작해서 내려오세요. 올리는 것보다 내리는 것이 쉽습니다.
2. 세 가지 가격 옵션을 제시하세요. 기본, 스탠다드, 프리미엄.
3. 아무도 불평하지 않으면, 가격이 너무 낮은 것입니다.
4. 전환율이 너무 높아도(90% 이상) 가격이 낮다는 신호입니다.

SPEC 팀들의 가격 실험 사례:
- A팀: 월 구독료 5,000원에서 시작 → 15,000원으로 올려도 이탈률 변화 없음
- B팀: 건당 3,000원 → 번들 패키지 30,000원 도입으로 객단가 5배 상승
- C팀: 무료에서 유료 전환 시 70% 이탈, 하지만 남은 30%의 LTV가 10배 높음`,
    date: "September 2023",
    duration: "25:30",
    youtubeId: "oQw7LV-YfyU",
    views: "1350",
    thumbnailColor: "#e8dce8",
  },
  {
    slug: "ai-tools-for-student-founders",
    title: "학생 창업자를 위한 AI 도구 총정리",
    author: "정민수",
    authorRole: "기술 멘토, SPEC",
    type: "Guide",
    categories: ["기술-MVP"],
    description:
      "2024년 학생 창업자가 알아야 할 AI 도구 30선. 개발, 디자인, 마케팅, 운영 전 영역.",
    body: `AI 도구의 발전으로 혼자서도 할 수 있는 일의 범위가 극적으로 넓어졌습니다. 이 가이드에서는 학생 창업자가 실제로 활용할 수 있는 AI 도구를 영역별로 정리합니다.

개발:
- Cursor: AI 코드 에디터. 자연어로 코드 작성 가능
- Replit: 브라우저 기반 개발 환경 + AI 에이전트
- v0.dev: 자연어로 UI 컴포넌트 생성
- Supabase: 백엔드 인프라 자동화

디자인:
- Figma AI: 디자인 자동 생성 및 수정
- Midjourney: 마케팅 이미지 생성
- Gamma: AI 기반 프레젠테이션 제작

마케팅:
- ChatGPT: 카피라이팅, 콘텐츠 기획
- Jasper: 마케팅 콘텐츠 대량 생성
- Opus Clip: 긴 영상을 숏폼 콘텐츠로 자동 편집

운영:
- Notion AI: 문서 관리 및 정리
- Zapier AI: 업무 자동화
- Otter.ai: 미팅 녹음 및 요약

각 도구의 무료 티어와 학생 할인 정보도 함께 제공합니다. 대부분의 도구가 학생에게 무료 또는 할인을 제공하고 있으니 적극 활용하세요.`,
    date: "August 2023",
    thumbnailColor: "#e0dce4",
  },
  {
    slug: "growth-hacking-on-campus",
    title: "캠퍼스 안에서 그로스 해킹하기",
    author: "Jimin Choi",
    authorRole: "그로스 멘토, SPEC",
    type: "Video",
    categories: ["매출-성장", "VCC"],
    description:
      "대학 캠퍼스는 최고의 테스트 마켓입니다. 캠퍼스 내 사용자 확보와 바이럴 전략.",
    body: `대학 캠퍼스는 스타트업의 첫 번째 시장으로 이상적인 환경입니다. 밀집된 타겟 유저, 빠른 입소문 구조, 그리고 피드백에 적극적인 사용자 — 이 세 가지가 캠퍼스 마켓의 강점입니다.

캠퍼스 그로스 전략 5가지:

1. 동아리/학회 파트너십
동아리 임원진에게 접근하세요. 그들이 당신의 얼리 어답터이자 바이럴 에이전트가 됩니다.

2. 학식/카페 마케팅
학생들이 매일 지나가는 곳에 노출을 만드세요. QR코드 스티커, 텐트카드 등 저비용 고효율 전략입니다.

3. 수업 활용
교수님과 협력하여 수업 프로젝트로 연결하세요. 실제로 SPEC 여러 팀이 이 방식으로 초기 사용자를 확보했습니다.

4. 에브리타임 활용
대학생들의 핵심 커뮤니티 플랫폼인 에브리타임에서의 마케팅 전략. 광고가 아닌 '가치 있는 콘텐츠'로 접근하세요.

5. 캠퍼스 이벤트
런칭 이벤트, 체험 부스 등을 통해 오프라인에서 첫 사용자를 만나세요. 온라인보다 전환율이 5~10배 높습니다.`,
    date: "July 2023",
    duration: "30:20",
    youtubeId: "PfBqSfVKa2U",
    views: "1560",
    thumbnailColor: "#e4dce0",
  },
  {
    slug: "yc-lecture4-building-product",
    title: "제품 만들기, 사용자와 대화하기, 성장하기",
    author: "Adora Cheung",
    authorRole: "Y Combinator, Homejoy 창업자",
    type: "Video",
    categories: ["창업-기초", "매출-성장"],
    description:
      "YC How to Start a Startup Lecture 4. 아이디어에서 시작해 제품을 만들고, 사용자를 찾고, 성장하는 구체적인 방법론.",
    body: `Homejoy 창업자 Adora Cheung이 아이디어 단계에서 제품을 만들고 사용자를 확보하는 전 과정을 설명합니다.\n\n핵심 프레임워크:\n1. 아이디어 → 제품:\n- 문제를 직접 경험하라. Adora는 직접 청소 서비스를 하며 고객의 고통을 이해했다.\n- MVP를 빠르게 만들어 시장에 내놓아라.\n\n2. 사용자와 대화하기:\n- 사용자가 있는 곳으로 가라. 온라인이든 오프라인이든.\n- 제품에 대해 묻지 말고, 그들의 문제에 대해 물어라.\n\n3. 성장하기:\n- 확장 불가능한 일(Things that Don't Scale)부터 시작하라.\n- 핵심 지표를 정하고 매주 추적하라.\n- 사용자 피드백 → 제품 개선 → 더 많은 사용자의 선순환을 만들어라.\n\n모든 위대한 회사는 소수의 열렬한 팬에서 시작합니다.`,
    date: "October 2014",
    duration: "32:26",
    youtubeId: "yP176MBG9Tk",
    views: "540103",
    thumbnailColor: "#dce4e0",
  },
  {
    slug: "no-code-tools-for-validation",
    title: "노코드로 아이디어 검증하기",
    author: "정민수",
    authorRole: "기술 멘토, SPEC",
    type: "Guide",
    categories: ["기술-MVP", "VCC"],
    description:
      "코딩 없이 48시간 안에 아이디어를 검증하는 방법. 노코드 도구 활용 실전 가이드.",
    body: `아이디어 검증에 개발자는 필요 없습니다. 노코드 도구만으로도 고객의 반응을 확인할 수 있는 MVP를 48시간 안에 만들 수 있습니다.

48시간 아이디어 검증 로드맵:

Hour 0-4: 랜딩 페이지 만들기
- Carrd 또는 Framer로 원페이지 랜딩 페이지를 만드세요.
- 핵심 가치 제안, 가격, 사전 등록 폼만 있으면 됩니다.
- 도메인은 나중에. 먼저 Vercel/Netlify 서브도메인으로 배포하세요.

Hour 4-12: 트래픽 확보
- 인스타그램 스토리, 에브리타임 게시글, 카카오톡 오픈채팅방에 공유하세요.
- 50명에게 직접 DM을 보내세요. 개인적으로 보낸 메시지의 반응률이 5~10배 높습니다.

Hour 12-36: 고객 반응 수집
- 사전 등록 전환율을 측정하세요. 5% 이상이면 긍정적 신호입니다.
- 등록한 사람들에게 10분 인터뷰를 요청하세요. 최소 5명.

Hour 36-48: 의사결정
- 데이터를 분석하고, 진행할지 피벗할지 결정하세요.
- '좋다'는 말이 아닌 '돈을 내겠다'는 반응이 진짜 검증입니다.

이 방법론은 SPEC VCC Phase 1의 첫 주에 모든 팀이 실행하는 표준 프로세스입니다.`,
    date: "May 2023",
    thumbnailColor: "#e8e0e4",
  },
  {
    slug: "mentor-session-mental-health",
    title: "창업자 멘탈 관리 — 번아웃 없이 달리기",
    author: "김수진",
    authorRole: "법률 자문, SPEC",
    type: "Podcast",
    categories: ["팀빌딩", "알럼나이"],
    description:
      "창업은 마라톤입니다. 학업과 창업을 병행하는 대학생 창업자의 멘탈 관리 전략.",
    body: `이 팟캐스트에서는 대학생 창업자들이 겪는 정신적 어려움과 그 대처법을 다룹니다.

대학생 창업자의 3중고:
1. 학업 — 학점을 포기할 수 없습니다
2. 창업 — 팀과 제품에 대한 책임감
3. 사회적 관계 — 친구들과 점점 달라지는 생활 패턴

이 세 가지를 동시에 감당하려다 번아웃에 빠지는 학생들이 매 기수마다 있습니다.

멘탈 관리의 핵심 원칙:
- 완벽주의를 버리세요. '충분히 좋은' 상태로 전진하는 것이 멈추는 것보다 낫습니다.
- 주당 최소 하루는 완전히 쉬세요. 생산성은 쉼에서 나옵니다.
- 비교하지 마세요. 다른 팀의 성과는 당신의 여정과 관련 없습니다.
- 도움을 요청하세요. SPEC 멘토진은 사업 조언뿐 아니라 개인적 고민도 함께 나눌 준비가 되어 있습니다.

알럼나이 세 명이 각자 번아웃을 경험하고 극복한 이야기를 솔직하게 나눕니다.`,
    date: "April 2023",
    duration: "55:00",
    views: "890",
    thumbnailColor: "#dce0e8",
  },
  {
    slug: "competitive-analysis-framework",
    title: "경쟁사 분석 프레임워크",
    author: "David Park",
    authorRole: "SPEC 공동창립자",
    type: "Essay",
    categories: ["IR-투자"],
    description:
      "경쟁사가 없다고 말하지 마세요. 경쟁 환경을 체계적으로 분석하고 차별화 포인트를 찾는 방법.",
    body: `'경쟁사가 없습니다'라는 말은 두 가지를 의미합니다: 시장이 없거나, 분석을 안 했거나. 투자자가 이 말을 들으면 둘 다 나쁜 신호로 받아들입니다.

경쟁사 분석의 목적은 경쟁사를 이기는 것이 아닙니다. 시장을 이해하고, 당신의 차별화 포인트를 명확히 하는 것입니다.

경쟁사 분석 프레임워크:

1단계: 경쟁 범위 정의
- 직접 경쟁: 같은 문제를 같은 방식으로 해결하는 서비스
- 간접 경쟁: 같은 문제를 다른 방식으로 해결하는 서비스
- 대안재: 고객이 현재 이 문제를 어떻게 해결하고 있는가 (엑셀, 수작업 등)

2단계: 기능 비교 매트릭스
각 경쟁사의 핵심 기능, 가격, 타겟 고객을 표로 정리하세요.

3단계: 차별화 포인트 도출
'모든 면에서 더 좋다'는 것은 차별화가 아닙니다. 하나의 축에서 압도적으로 다른 것이 진짜 차별화입니다.

4단계: 포지셔닝 맵
X축과 Y축을 정해 경쟁사와 우리의 위치를 시각화하세요. 비어 있는 영역이 기회입니다.

이 에세이의 마지막에 SPEC 팀들이 실제로 사용한 경쟁사 분석 템플릿을 첨부합니다.`,
    date: "March 2023",
    thumbnailColor: "#e4e8dc",
  },
  {
    slug: "yc-lecture1-how-to-start-a-startup",
    title: "How to Start a Startup — 아이디어, 제품, 팀, 실행",
    author: "Sam Altman, Dustin Moskovitz",
    authorRole: "Y Combinator",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup 첫 번째 강의. 좋은 아이디어를 고르는 법, 훌륭한 제품을 만드는 법, 그리고 왜 창업을 해야 하는지.",
    body: `Y Combinator 사장 Sam Altman과 Facebook 공동창업자 Dustin Moskovitz가 스타트업의 4대 핵심 요소를 다룹니다.\n\n핵심 내용:\n- 좋은 아이디어는 처음에 나빠 보일 수 있다\n- 소수가 열렬히 사랑하는 제품이 다수가 그냥 좋아하는 제품보다 낫다\n- 창업의 이유가 '돈'이나 '멋있어서'라면 다시 생각해보라\n- Dustin Moskovitz가 'Why to Start a Startup'에서 창업의 현실을 설명합니다`,
    date: "September 2014",
    duration: "44:24",
    youtubeId: "CBYhVcO4WgI",
    views: "4860244",
    featured: true,
    thumbnailColor: "#e8e0dc",
  },
  {
    slug: "yc-lecture6-growth",
    title: "성장 전략 — Growth",
    author: "Alex Schultz",
    authorRole: "Facebook VP of Growth",
    type: "Video",
    categories: ["창업-기초", "매출-성장"],
    description:
      "YC How to Start a Startup Lecture 6. Facebook 성장 담당 VP Alex Schultz가 스타트업 성장의 핵심을 이야기합니다.",
    body: `Alex Schultz가 Facebook에서의 경험을 바탕으로 스타트업 성장 전략을 설명합니다.\n\n핵심 내용:\n- 리텐션이 성장의 가장 중요한 요소다. 리텐션 없이는 성장도 없다.\n- 성장은 좋은 아이디어와 Product-Market Fit에서 시작된다.\n- CEO를 포함한 전사가 성장에 집중해야 한다.\n- 초기 스타트업에는 별도의 성장 팀이 필요 없다.\n- 핵심 지표(magic moment)를 정의하고 그것을 최적화하라.`,
    date: "October 2014",
    duration: "46:21",
    youtubeId: "n_yHZ_vKjno",
    views: "562272",
    thumbnailColor: "#dce8e4",
  },
  {
    slug: "yc-lecture7-products-users-love",
    title: "사용자가 사랑하는 제품 만들기",
    author: "Kevin Hale",
    authorRole: "Y Combinator, Wufoo 창업자",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 7. Wufoo 창업자 Kevin Hale이 사용자가 진심으로 사랑하는 제품을 만드는 비결을 공유합니다.",
    body: `Kevin Hale이 Wufoo에서의 경험을 바탕으로 사용자의 마음을 사로잡는 제품을 만드는 방법을 설명합니다.\n\n핵심 내용:\n- 첫인상(첫 사용 경험)이 모든 것을 결정한다.\n- Wufoo에서는 모든 직원이 고객 지원을 했다 — Support-Driven Development.\n- 주목할 만한 제품은 입소문 성장을 만든다.\n- 전환율 최적화는 랜딩 페이지에서 시작한다.\n- 사용자와의 관계를 연애처럼 대하라.`,
    date: "October 2014",
    duration: "38:07",
    youtubeId: "sz_LgBAGYyo",
    views: "396156",
    thumbnailColor: "#e0dce8",
  },
  {
    slug: "yc-lecture8-doing-things-dont-scale",
    title: "확장 불가능한 일 하기, 시작하는 법, PR",
    author: "Stanley Tang, Walker Williams, Justin Kan",
    authorRole: "DoorDash, Teespring, Twitch 창업자",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 8. 세 명의 창업자가 시작하는 법, 스케일하지 않는 일의 중요성, PR 전략을 공유합니다.",
    body: `세 명의 성공한 창업자가 각자의 경험을 나눕니다.\n\nStanley Tang (DoorDash):\n- 처음에는 직접 배달을 했다. 확장 불가능한 일이 핵심 인사이트를 준다.\n\nWalker Williams (Teespring):\n- 유저 한 명 한 명을 직접 확보하라. Do things that don't scale.\n\nJustin Kan (Twitch):\n- PR이 유용한 경우와 그렇지 않은 경우를 구분하라.\n- 언론에 의존하지 말고 제품으로 승부하라.`,
    date: "October 2014",
    duration: "51:26",
    youtubeId: "oQOC-qy-GDY",
    views: "365365",
    thumbnailColor: "#e8dce0",
  },
  {
    slug: "yc-lecture9-how-to-raise-money",
    title: "자금 조달 방법 — How to Raise Money",
    author: "Marc Andreessen, Ron Conway, Parker Conrad",
    authorRole: "a16z, SV Angel, Zenefits",
    type: "Video",
    categories: ["창업-기초", "IR-투자"],
    description:
      "YC How to Start a Startup Lecture 9. 실리콘밸리 최고의 투자자들과 함께하는 자금 조달 Q&A.",
    body: `Sam Altman이 진행하는 패널 Q&A로, 실리콘밸리 최고의 투자자들과 창업자가 참여합니다.\n\n패널:\n- Marc Andreessen (Netscape 창업자, a16z 파트너)\n- Ron Conway (SV Angel 창업자)\n- Parker Conrad (Zenefits 창업자)\n\n핵심 내용:\n- 투자를 받아야 할 때와 받지 말아야 할 때를 구분하라.\n- 리스크를 줄일수록 더 좋은 조건으로 투자 받을 수 있다.\n- 투자자와의 관계는 결혼과 같다 — 신중하게 선택하라.`,
    date: "October 2014",
    duration: "42:38",
    youtubeId: "uFX95HahaUs",
    views: "280851",
    thumbnailColor: "#dce0e8",
  },
  {
    slug: "yc-lecture10-culture",
    title: "기업 문화 만들기 — Culture",
    author: "Brian Chesky, Alfred Lin",
    authorRole: "Airbnb 창업자, Sequoia Capital",
    type: "Video",
    categories: ["창업-기초", "팀빌딩"],
    description:
      "YC How to Start a Startup Lecture 10. Airbnb 창업자 Brian Chesky와 Sequoia Capital의 Alfred Lin이 기업 문화의 중요성을 이야기합니다.",
    body: `Brian Chesky와 Alfred Lin이 위대한 기업 문화를 만드는 방법을 논의합니다.\n\n핵심 내용:\n- 문화는 창업자의 가치관에서 시작된다.\n- 초기 직원이 회사의 DNA를 결정한다.\n- Airbnb에서는 문화 적합성 면접을 별도로 진행한다.\n- Zappos는 문화를 지키기 위해 신입 직원에게 퇴직 보너스를 제안했다.\n- 강한 문화는 의사결정을 빠르게 만든다.`,
    date: "October 2014",
    duration: "50:05",
    youtubeId: "RfWgVWGEuGE",
    views: "302518",
    thumbnailColor: "#e4dce8",
  },
  {
    slug: "yc-lecture11-hiring-culture-part2",
    title: "채용과 문화 Part 2",
    author: "Patrick Collison, John Collison, Ben Silbermann",
    authorRole: "Stripe, Pinterest 창업자",
    type: "Video",
    categories: ["창업-기초", "팀빌딩"],
    description:
      "YC How to Start a Startup Lecture 11. Stripe와 Pinterest 창업자들이 채용과 문화에 대해 Q&A 형식으로 이야기합니다.",
    body: `Stripe와 Pinterest — 강한 문화로 유명한 두 회사의 창업자들이 Q&A 형식으로 채용과 문화를 다룹니다.\n\n핵심 내용:\n- Patrick Collison: 처음 10명의 채용이 회사의 방향을 결정한다.\n- John Collison: 문화는 명문화하지 않으면 자연스럽게 희석된다.\n- Ben Silbermann: Pinterest의 초기 성장은 직접 사용자를 만나는 것에서 시작했다.\n- 채용에서 가장 중요한 것은 기술 능력이 아니라 문화 적합성이다.`,
    date: "October 2014",
    duration: "35:13",
    youtubeId: "H8Dl8rZ6qwE",
    views: "154852",
    thumbnailColor: "#e8e4dc",
  },
  {
    slug: "yc-lecture12-building-for-enterprise",
    title: "엔터프라이즈를 위한 제품 만들기",
    author: "Aaron Levie",
    authorRole: "Box 창업자",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 12. Box 창업자 Aaron Levie가 B2B/엔터프라이즈 시장에서 제품을 만드는 전략을 공유합니다.",
    body: `Aaron Levie가 B2B/엔터프라이즈 시장 공략법을 설명합니다.\n\n핵심 내용:\n- 엔터프라이즈 시장은 거대한 기회다. 기술 변화가 새로운 진입점을 만든다.\n- 기존 워크플로우를 10배 개선하는 제품을 만들어라.\n- 단순함이 핵심이다. 복잡한 제품은 채택되지 않는다.\n- 작은 팀도 엔터프라이즈 시장에서 성공할 수 있다.\n- 모바일, 클라우드 등 기술 트렌드가 새로운 카테고리를 만든다.`,
    date: "October 2014",
    duration: "34:37",
    youtubeId: "tFVDjrvQJdw",
    views: "155576",
    thumbnailColor: "#dce8dc",
  },
  {
    slug: "yc-lecture13-how-to-be-great-founder",
    title: "위대한 창업자가 되는 법",
    author: "Reid Hoffman",
    authorRole: "LinkedIn 창업자, Greylock Partners",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 13. LinkedIn 창업자 Reid Hoffman이 위대한 창업자의 자질과 역할을 설명합니다.",
    body: `Reid Hoffman이 창업자에 대한 흔한 오해를 바로잡고 위대한 창업자의 특성을 설명합니다.\n\n핵심 내용:\n- 위대한 창업자는 모순적인 자질을 동시에 가진다: 비전과 데이터, 리스크와 안전, 고집과 유연성.\n- 혼자 하는 것보다 팀과 네트워크를 활용하는 것이 중요하다.\n- 실리콘밸리의 장점은 네트워크와 인재풀이다.\n- 창업자의 역할은 회사가 성장함에 따라 변화해야 한다.`,
    date: "November 2014",
    duration: "42:14",
    youtubeId: "dQ7ZvO5DpIw",
    views: "218680",
    thumbnailColor: "#e0e8dc",
  },
  {
    slug: "yc-lecture14-how-to-operate",
    title: "운영의 기술 — How to Operate",
    author: "Keith Rabois",
    authorRole: "Khosla Ventures, Square COO",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 14. Square의 전 COO Keith Rabois가 스타트업을 효과적으로 운영하는 방법을 공유합니다.",
    body: `Keith Rabois가 CEO가 매일 해야 할 일과 회사를 올바른 방향으로 이끄는 방법을 설명합니다.\n\n핵심 내용:\n- 회사를 엔진에 비유: 각 부품(팀)이 잘 돌아가는지 확인하라.\n- 편집자처럼 일하라: 불필요한 것을 제거하고 핵심에 집중하라.\n- 지표를 통해 회사의 건강 상태를 진단하라.\n- 위임의 기술: 자신감 * 결과의 중요도로 위임 수준을 결정하라.\n- 배럴(Barrel)과 탄약(Ammunition)의 개념: 배럴이 될 수 있는 사람을 찾아라.`,
    date: "November 2014",
    duration: "44:27",
    youtubeId: "6fQHLK1aIBs",
    views: "290146",
    thumbnailColor: "#dce4e8",
  },
  {
    slug: "yc-lecture15-how-to-manage",
    title: "관리의 기술 — How to Manage",
    author: "Ben Horowitz",
    authorRole: "Andreessen Horowitz 창업자",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 15. a16z 창업자 Ben Horowitz가 창업자가 놓치기 쉬운 경영의 관점을 이야기합니다.",
    body: `Ben Horowitz가 경영에서 가장 중요한 것은 '당신의 결정이 영향을 미치는 사람은 당신만이 아니다'라는 관점을 설명합니다.\n\n핵심 내용:\n- 관리자의 관점에서 생각하라: 당신의 결정이 전체 조직에 미치는 영향을 고려하라.\n- 일대일 미팅의 중요성: 직원의 목소리를 듣는 가장 효과적인 방법.\n- 피드백은 빠르게, 직접적으로 하라.\n- 좋은 제품 관리자 vs 나쁜 제품 관리자의 차이.\n- 어려운 결정을 내리는 용기가 리더십의 핵심이다.`,
    date: "November 2014",
    duration: "37:14",
    youtubeId: "uVhTvQXfibU",
    views: "187355",
    thumbnailColor: "#e8dce4",
  },
  {
    slug: "yc-lecture17-hardware-products",
    title: "하드웨어 제품 디자인하기",
    author: "Hosain Rahman",
    authorRole: "Jawbone CEO",
    type: "Video",
    categories: ["창업-기초", "기술-MVP"],
    description:
      "YC How to Start a Startup Lecture 17. Jawbone CEO Hosain Rahman이 하드웨어 제품의 디자인과 개발 과정을 설명합니다.",
    body: `Hosain Rahman이 Jawbone에서의 경험을 바탕으로 하드웨어 제품을 만드는 과정을 설명합니다.\n\n핵심 내용:\n- 하드웨어 제품은 소프트웨어와 달리 이터레이션 비용이 높다.\n- 디자인은 단순한 외관이 아니라 사용자 경험 전체를 포함한다.\n- 하드웨어와 소프트웨어의 융합이 차세대 제품을 만든다.\n- 제조 파트너와의 관계가 제품 품질을 결정한다.\n- 사용자의 일상에 자연스럽게 녹아드는 제품을 목표로 하라.`,
    date: "November 2014",
    duration: "36:09",
    youtubeId: "9u6-BL-Fskc",
    views: "89000",
    thumbnailColor: "#dce0e4",
  },
  {
    slug: "yc-lecture18-legal-accounting-basics",
    title: "스타트업 법률 & 회계 기초",
    author: "Kirsty Nathoo, Carolynn Levy",
    authorRole: "Y Combinator CFO & 법무",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 18. YC의 CFO와 법무 담당이 스타트업에 필요한 법률과 회계 기초를 설명합니다.",
    body: `Kirsty Nathoo와 Carolynn Levy가 스타트업 창업자가 반드시 알아야 할 법률과 회계 기초를 다룹니다.\n\n핵심 내용:\n- 법인 설립: 델라웨어 C-Corp 설립이 가장 일반적이다.\n- 주식 배분: 공동창업자 간의 지분 배분을 초기에 결정하라.\n- 베스팅(Vesting): 4년 베스팅, 1년 클리프가 표준이다.\n- 83(b) Election: 세금 절약을 위해 반드시 제출하라.\n- 회계 기초: 수입과 비용을 추적하고, 세금 신고를 놓치지 마라.\n- 투자 관련 서류: SAFE, 전환사채 등의 기초 개념.`,
    date: "November 2014",
    duration: "55:34",
    youtubeId: "EHzvmyMJEK4",
    views: "120000",
    thumbnailColor: "#e4e0dc",
  },
  {
    slug: "yc-lecture20-later-stage-advice",
    title: "후기 단계 조언 — Later-stage Advice",
    author: "Sam Altman",
    authorRole: "Y Combinator",
    type: "Video",
    categories: ["창업-기초"],
    description:
      "YC How to Start a Startup Lecture 20. Sam Altman이 시리즈 마지막 강의에서 후기 단계 스타트업을 위한 조언을 전합니다.",
    body: `Sam Altman이 시리즈의 마지막 강의로 성장 이후 단계의 회사 운영에 대한 조언을 전합니다.\n\n핵심 내용:\n- 경영: 회사가 성장하면 창업자의 역할이 변해야 한다.\n- HR: 채용과 해고의 원칙을 명확히 하라.\n- 회사 생산성: 조직이 커질수록 의사소통 비용이 증가한다.\n- 법률 문제: 성장 단계에서 마주치는 법적 이슈들.\n- 경쟁사 대응: 경쟁에 신경 쓰되 집착하지 마라.\n- 수익 모델: 돈을 버는 것에 대해 두려워하지 마라.\n\n이 강의는 전체 How to Start a Startup 시리즈의 마무리 강의입니다.`,
    date: "December 2014",
    duration: "25:35",
    youtubeId: "59ZQ-rf6iIc",
    views: "150000",
    thumbnailColor: "#dce8e0",
  },
];
