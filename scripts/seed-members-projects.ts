import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface ProjectSeed {
  name: string;
  slug: string;
  one_liner: string;
  batch: string;
  industries: string[];
  region: string;
  status: string;
  logo_url: string | null;
}

interface MemberSeed {
  name: string;
  slug: string;
  student_id: string | null;
  phone: string | null;
  email: string | null;
  major: string | null;
  runner_batch: string;
  preneur_batch: string | null;
  batch_tags?: string[];
  member_type: "러너" | "프러너" | "alumni";
  department: string | null;
  role: string | null;
  parts: string[];
  photo_url: string | null;
  bio: string | null;
  projects: string[];
}

const PROJECTS: ProjectSeed[] = [
  {
    name: "K-HI",
    slug: "k-hi",
    one_liner: "어르신을 위한 지도 서비스와 위급상황 감지 위치 추적 시스템",
    batch: "2기",
    industries: ["시니어케어", "IoT"],
    region: "서울",
    status: "Active",
    logo_url: null,
  },
  {
    name: "ByOrbit",
    slug: "byorbit",
    one_liner: "농산물 부산물을 활용한 재가공 서비스",
    batch: "2기",
    industries: ["농업", "지속가능"],
    region: "서울",
    status: "Active",
    logo_url: null,
  },
  {
    name: "FAXI",
    slug: "faxi",
    one_liner: "트렌디한 포터블 모바일 팩스 서비스",
    batch: "2기",
    industries: ["모바일"],
    region: "서울",
    status: "Active",
    logo_url: null,
  },
  {
    name: "담아",
    slug: "dama",
    one_liner: "1인가구·여성을 위한 호신용품 패키징 서비스",
    batch: "2기",
    industries: ["안전", "라이프스타일"],
    region: "서울",
    status: "Active",
    logo_url: null,
  },
  {
    name: "LINKIT",
    slug: "linkit",
    one_liner: "",
    batch: "1기",
    industries: [],
    region: "서울",
    status: "Active",
    logo_url: null,
  },
  {
    name: "On The Record",
    slug: "on-the-record",
    one_liner: "",
    batch: "1기",
    industries: [],
    region: "서울",
    status: "Active",
    logo_url: null,
  },
];

const MEMBERS: MemberSeed[] = [
  // ─── 1기 only (alumni) ─────────────────────────────────
  {
    name: "석채은",
    slug: "seok-chaeeun",
    student_id: "2021311862",
    phone: "010-8713-5295",
    email: "tjrcodms87@g.skku.edu",
    major: "기계공학과",
    runner_batch: "1기",
    preneur_batch: null,
    member_type: "alumni",
    department: "대외홍보부",
    role: "부장",
    parts: [],
    photo_url: null,
    bio: null,
    projects: ["on-the-record"],
  },
  {
    name: "윤채빈",
    slug: "yun-chaebin",
    student_id: null,
    phone: "010-8469-8242",
    email: null,
    major: "경영학과",
    runner_batch: "1기",
    preneur_batch: null,
    member_type: "alumni",
    department: null,
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: ["linkit"],
  },
  {
    name: "임시우",
    slug: "lim-siwoo",
    student_id: "2023312253",
    phone: "010-2093-7882",
    email: "limsiwoo1221@g.skku.edu",
    major: "글로벌경제학과",
    runner_batch: "1기",
    preneur_batch: null,
    member_type: "alumni",
    department: "학술전략부",
    role: "부장",
    parts: [],
    photo_url: null,
    bio: null,
    projects: ["on-the-record"],
  },
  {
    name: "장진우",
    slug: "jang-jinwoo",
    student_id: "2019312286",
    phone: "010-6395-2121",
    email: "jinustar19@gmail.com",
    major: "소프트웨어학과",
    runner_batch: "1기",
    preneur_batch: null,
    member_type: "alumni",
    department: "기획운영부",
    role: "부장",
    parts: [],
    photo_url: null,
    bio: null,
    projects: ["on-the-record"],
  },
  {
    name: "황정민",
    slug: "hwang-jungmin",
    student_id: "2022310584",
    phone: "010-7523-8391",
    email: "hji7523@naver.com",
    major: "글로벌바이오메디컬공학과",
    runner_batch: "1기",
    preneur_batch: null,
    member_type: "alumni",
    department: null,
    role: "부회장",
    parts: [],
    photo_url: null,
    bio: null,
    projects: ["on-the-record"],
  },

  // ─── 1기 + 2기 (deduplicated) ────────────────────────
  {
    name: "이송목",
    slug: "lee-songmok",
    student_id: "2020314777",
    phone: "010-8335-8632",
    email: "lsm3645@g.skku.edu",
    major: "소프트웨어학과",
    runner_batch: "1기",
    preneur_batch: "4기",
    batch_tags: ["1기 러너", "2기 러너", "3기 프러너 회장", "4기 프러너"],
    member_type: "프러너",
    department: "대외홍보부",
    role: "회장",
    parts: ["기획", "개발"],
    photo_url: null,
    bio: null,
    projects: ["on-the-record"],
  },
  {
    name: "임은빈",
    slug: "lim-eunbin",
    student_id: "2023311229",
    phone: "010-9114-8664",
    email: "evy.y.eunbin@gmail.com",
    major: "경제학과",
    runner_batch: "1기",
    preneur_batch: "3기",
    batch_tags: ["1기 러너", "2기 러너", "3기 프러너"],
    member_type: "alumni",
    department: "학술전략부",
    role: "부장",
    parts: ["기획", "마케팅"],
    photo_url: null,
    bio: null,
    projects: ["linkit", "k-hi"],
  },
  {
    name: "장지민",
    slug: "jang-jimin",
    student_id: "2024314391",
    phone: "010-3084-6632",
    email: "snoopycoffee22@gmail.com",
    major: "프랑스어문학과",
    runner_batch: "1기",
    preneur_batch: null,
    batch_tags: ["1기 러너", "2기 러너"],
    member_type: "alumni",
    department: "대외홍보부",
    role: "부장",
    parts: ["기획", "마케팅"],
    photo_url: null,
    bio: null,
    projects: ["linkit"],
  },
  {
    name: "전도현",
    slug: "jeon-dohyun",
    student_id: "2024315370",
    phone: "010-9445-0964",
    email: "cosmosjeon1108@gmail.com",
    major: "물리학과",
    runner_batch: "1기",
    preneur_batch: "4기",
    batch_tags: ["1기 러너", "2기 부회장", "3기 회장", "4기 회장"],
    member_type: "프러너",
    department: "기획운영부",
    role: "부회장",
    parts: ["기획", "마케팅"],
    photo_url: null,
    bio: null,
    projects: ["linkit"],
  },

  // ─── 2기 only ────────────────────────────────────────
  {
    name: "강하빈",
    slug: "kang-habin",
    student_id: "2022316055",
    phone: "010-9409-6758",
    email: "habinkang@naver.com",
    major: "컴퓨터교육과",
    runner_batch: "2기",
    preneur_batch: null,
    member_type: "alumni",
    department: "대외홍보부",
    role: "부원",
    parts: ["기획"],
    photo_url: null,
    bio: null,
    projects: ["k-hi"],
  },
  {
    name: "곽재민",
    slug: "kwak-jaemin",
    student_id: "2021310957",
    phone: "010-9465-7864",
    email: "rhkrwoals02@gmail.com",
    major: "전자전기공학부",
    runner_batch: "2기",
    preneur_batch: null,
    member_type: "alumni",
    department: "기획운영부",
    role: "부원",
    parts: ["기획", "제작"],
    photo_url: null,
    bio: null,
    projects: ["dama"],
  },
  {
    name: "김동우",
    slug: "kim-dongwoo",
    student_id: "2025310242",
    phone: "010-3912-2678",
    email: "kdongw16@naver.com",
    major: "아동청소년학과",
    runner_batch: "2기",
    preneur_batch: null,
    member_type: "alumni",
    department: "학술전략부",
    role: "부원",
    parts: ["기획", "마케팅"],
    photo_url: null,
    bio: null,
    projects: ["byorbit"],
  },
  {
    name: "김주현",
    slug: "kim-juhyun",
    student_id: "2019314455",
    phone: "010-7477-9915",
    email: "juhy0987@naver.com",
    major: "소프트웨어학과",
    runner_batch: "2기",
    preneur_batch: null,
    member_type: "alumni",
    department: "학술전략부",
    role: "부원",
    parts: ["개발"],
    photo_url: null,
    bio: null,
    projects: ["k-hi"],
  },
  {
    name: "서원준",
    slug: "seo-wonjun",
    student_id: "2024315332",
    phone: "010-5756-1299",
    email: "kk01057561299@gmail.com",
    major: "시스템경영학과",
    runner_batch: "2기",
    preneur_batch: "4기",
    member_type: "프러너",
    department: "기획운영부",
    role: "부원",
    parts: ["기획", "마케팅"],
    photo_url: null,
    bio: null,
    projects: ["faxi"],
  },
  {
    name: "신지은",
    slug: "shin-jieun",
    student_id: "2021312422",
    phone: "010-3282-7311",
    email: "ellieshin2@naver.com",
    major: "영어영문학과",
    runner_batch: "2기",
    preneur_batch: "4기",
    batch_tags: ["2기 러너", "3기 프러너", "4기 프러너"],
    member_type: "프러너",
    department: "기획운영부",
    role: "부원",
    parts: ["기획"],
    photo_url: null,
    bio: null,
    projects: ["byorbit"],
  },
  {
    name: "이유정",
    slug: "lee-yujeong",
    student_id: "2020311269",
    phone: "010-6653-7623",
    email: "leelee7623@naver.com",
    major: "스포츠과학과",
    runner_batch: "2기",
    preneur_batch: null,
    member_type: "alumni",
    department: "기획운영부",
    role: "부장",
    parts: ["기획", "마케팅"],
    photo_url: null,
    bio: null,
    projects: ["dama"],
  },
  {
    name: "전선희",
    slug: "jeon-sunhee",
    student_id: "2023315916",
    phone: "010-2622-6414",
    email: "qws6414@naver.com",
    major: "컴퓨터교육과",
    runner_batch: "2기",
    preneur_batch: null,
    member_type: "alumni",
    department: "대외홍보부",
    role: "부원",
    parts: ["기획", "제작"],
    photo_url: null,
    bio: null,
    projects: ["dama"],
  },
  {
    name: "한소윤",
    slug: "han-soyun",
    student_id: "2023312351",
    phone: "010-5661-7159",
    email: "happysoyun1@naver.com",
    major: "글로벌경영학과",
    runner_batch: "2기",
    preneur_batch: null,
    member_type: "alumni",
    department: "학술전략부",
    role: "부원",
    parts: ["기획"],
    photo_url: null,
    bio: null,
    projects: ["k-hi"],
  },
  {
    name: "한지상",
    slug: "han-jisang",
    student_id: "2025313212",
    phone: "010-8262-8143",
    email: "hanjisang0914@gmail.com",
    major: "전자전기공학부",
    runner_batch: "2기",
    preneur_batch: "4기",
    batch_tags: ["2기 러너", "3기 프러너", "4기 프러너"],
    member_type: "프러너",
    department: "대외홍보부",
    role: "부원",
    parts: ["기획", "개발"],
    photo_url: null,
    bio: null,
    projects: ["faxi"],
  },
  {
    name: "홍경의",
    slug: "hong-gyeongui",
    student_id: "2020315813",
    phone: "010-3223-7946",
    email: "hongke108@naver.com",
    major: "컴퓨터교육과",
    runner_batch: "2기",
    preneur_batch: null,
    member_type: "alumni",
    department: "기획운영부",
    role: "부원",
    parts: ["기획", "개발"],
    photo_url: null,
    bio: null,
    projects: ["k-hi"],
  },

  // ─── 3기 only ────────────────────────────────────────
  {
    name: "권민재",
    slug: "kwon-minjae",
    student_id: "202431619",
    phone: "010-9973-3661",
    email: "minjaekwon@g.skku.edu",
    major: "시스템경영학과",
    runner_batch: "3기",
    preneur_batch: "4기",
    member_type: "프러너",
    department: "기획운영부",
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
  {
    name: "김동인",
    slug: "kim-dongin",
    student_id: "2022315147",
    phone: "010-3089-0086",
    email: "kdidongin@naver.com",
    major: "미디어커뮤니케이션학과",
    runner_batch: "3기",
    preneur_batch: "4기",
    member_type: "프러너",
    department: "학술전략부",
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
  {
    name: "김혜민",
    slug: "kim-hyemin",
    student_id: "2024312493",
    phone: "010-8236-4596",
    email: "hyeminlalala@gmail.com",
    major: "경제학과",
    runner_batch: "3기",
    preneur_batch: "4기",
    member_type: "프러너",
    department: "기획운영부",
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
  {
    name: "류영상",
    slug: "ryu-yeongsang",
    student_id: "2025315338",
    phone: "010-8460-0913",
    email: "sjhbread@g.skku.edu",
    major: "자유전공계열",
    runner_batch: "3기",
    preneur_batch: "4기",
    member_type: "프러너",
    department: "대외홍보부",
    role: "부장",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
  {
    name: "이연서",
    slug: "lee-yeonseo",
    student_id: "2025311826",
    phone: "010-7273-3671",
    email: "yeansealee@gmail.com",
    major: "에너지학과",
    runner_batch: "3기",
    preneur_batch: "4기",
    member_type: "프러너",
    department: "기획운영부",
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
  {
    name: "이유민",
    slug: "lee-yumin",
    student_id: "2024315333",
    phone: "010-4831-2910",
    email: "lsypml@naver.com",
    major: "소프트웨어학과",
    runner_batch: "3기",
    preneur_batch: null,
    member_type: "러너",
    department: "기획운영부",
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
  {
    name: "이혜원",
    slug: "lee-hyewon",
    student_id: "2025311639",
    phone: "01033449359",
    email: "leehyewon0301@gmail.com",
    major: "공학계열",
    runner_batch: "3기",
    preneur_batch: null,
    member_type: "러너",
    department: "대외홍보부",
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
  {
    name: "임영빈",
    slug: "lim-yeongbin",
    student_id: "2022312634",
    phone: "01090172970",
    email: "dladudqls001@naver.com",
    major: "러시아어문학과",
    runner_batch: "3기",
    preneur_batch: "4기",
    member_type: "프러너",
    department: "학술전략부",
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
  {
    name: "최윤정",
    slug: "choi-yunjeong",
    student_id: "2024312991",
    phone: "010-9612-6448",
    email: "yun0106448@naver.com",
    major: "융합생명공학과",
    runner_batch: "3기",
    preneur_batch: "4기",
    member_type: "프러너",
    department: "대외홍보부",
    role: "부원",
    parts: [],
    photo_url: null,
    bio: null,
    projects: [],
  },
];

async function seed() {
  console.log("Seeding projects...");
  const { data: insertedProjects, error: projectError } = await supabase
    .from("projects")
    .upsert(
      PROJECTS.map((p) => ({
        name: p.name,
        slug: p.slug,
        one_liner: p.one_liner || null,
        batch: p.batch,
        industries: p.industries,
        region: p.region,
        status: p.status,
        logo_url: p.logo_url,
      })),
      { onConflict: "slug" }
    )
    .select("id, slug");

  if (projectError) {
    console.error("Failed to seed projects:", projectError);
    process.exit(1);
  }

  const projectIdBySlug = new Map(
    (insertedProjects ?? []).map((p) => [p.slug, p.id])
  );
  console.log(`  ${insertedProjects?.length ?? 0} projects seeded`);

  console.log("Seeding members...");
  const memberProjectLinks: { memberSlug: string; projectSlug: string }[] = [];

  const { data: insertedMembers, error: memberError } = await supabase
    .from("members")
    .upsert(
      MEMBERS.map((m) => {
        for (const pSlug of m.projects) {
          memberProjectLinks.push({
            memberSlug: m.slug,
            projectSlug: pSlug,
          });
        }
        return {
          name: m.name,
          slug: m.slug,
          student_id: m.student_id,
          phone: m.phone,
          email: m.email,
          major: m.major,
          runner_batch: m.runner_batch,
          preneur_batch: m.preneur_batch,
          batch_tags: m.batch_tags ?? [
            `${m.runner_batch} 러너`,
            ...(m.preneur_batch ? [`${m.preneur_batch} 프러너`] : []),
          ],
          member_type: m.member_type,
          department: null,
          role: null,
          parts: m.parts,
          photo_url: m.photo_url,
          bio: m.bio,
          notes: m.notes ?? null,
        };
      }),
      { onConflict: "slug" }
    )
    .select("id, slug");

  if (memberError) {
    console.error("Failed to seed members:", memberError);
    process.exit(1);
  }

  const memberIdBySlug = new Map(
    (insertedMembers ?? []).map((m) => [m.slug, m.id])
  );
  console.log(`  ${insertedMembers?.length ?? 0} members seeded`);

  console.log("Seeding member-project links...");
  const linkRows = memberProjectLinks
    .map((link) => {
      const memberId = memberIdBySlug.get(link.memberSlug);
      const projectId = projectIdBySlug.get(link.projectSlug);
      if (!memberId || !projectId) {
        console.warn(
          `  Skipping link: ${link.memberSlug} -> ${link.projectSlug} (ID not found)`
        );
        return null;
      }
      return { member_id: memberId, project_id: projectId };
    })
    .filter(Boolean);

  if (linkRows.length > 0) {
    const { error: linkError } = await supabase
      .from("member_projects")
      .upsert(linkRows as { member_id: string; project_id: string }[], {
        onConflict: "member_id,project_id",
      });

    if (linkError) {
      console.error("Failed to seed member_projects:", linkError);
      process.exit(1);
    }
  }
  console.log(`  ${linkRows.length} member-project links seeded`);

  console.log("Seed complete.");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
