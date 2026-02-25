export interface Member {
  id: number;
  name: string;
  slug: string;
  major: string | null;
  runnerBatch: string;
  preneurBatch: string | null;
  batchTags: string[];
  memberType: "러너" | "프러너" | "alumni";
  projects: string[];
  photoUrl: string | null;
  bio: string | null;
}

export const MEMBERS: Member[] = [
  { id: 1, name: "석채은", slug: "seok-chaeeun", major: "기계공학과", runnerBatch: "1기", preneurBatch: null, batchTags: ["1기 러너"], memberType: "alumni", projects: ["on-the-record"], photoUrl: null, bio: null },
  { id: 2, name: "윤채빈", slug: "yun-chaebin", major: "경영학과", runnerBatch: "1기", preneurBatch: null, batchTags: ["1기 러너"], memberType: "alumni", projects: ["linkit"], photoUrl: null, bio: null },
  { id: 3, name: "임시우", slug: "lim-siwoo", major: "글로벌경제학과", runnerBatch: "1기", preneurBatch: null, batchTags: ["1기 러너"], memberType: "alumni", projects: ["on-the-record"], photoUrl: null, bio: null },
  { id: 4, name: "장진우", slug: "jang-jinwoo", major: "소프트웨어학과", runnerBatch: "1기", preneurBatch: null, batchTags: ["1기 러너"], memberType: "alumni", projects: ["on-the-record"], photoUrl: null, bio: null },
  { id: 5, name: "황정민", slug: "hwang-jungmin", major: "글로벌바이오메디컬공학과", runnerBatch: "1기", preneurBatch: null, batchTags: ["1기 러너"], memberType: "alumni", projects: ["on-the-record"], photoUrl: null, bio: null },
  { id: 6, name: "이송목", slug: "lee-songmok", major: "소프트웨어학과", runnerBatch: "1기", preneurBatch: "4기", batchTags: ["1기 회장", "2기 회장", "3기 프러너 회장", "4기 프러너"], memberType: "프러너", projects: ["on-the-record"], photoUrl: null, bio: null },
  { id: 7, name: "임은빈", slug: "lim-eunbin", major: "경제학과", runnerBatch: "1기", preneurBatch: "3기", batchTags: ["1기 러너", "2기 러너", "3기 프러너"], memberType: "alumni", projects: ["linkit", "k-hi"], photoUrl: null, bio: null },
  { id: 8, name: "장지민", slug: "jang-jimin", major: "프랑스어문학과", runnerBatch: "1기", preneurBatch: null, batchTags: ["1기 러너", "2기 러너"], memberType: "alumni", projects: ["linkit"], photoUrl: null, bio: null },
  { id: 9, name: "전도현", slug: "jeon-dohyun", major: "물리학과", runnerBatch: "1기", preneurBatch: "4기", batchTags: ["1기 러너", "2기 부회장", "3기 회장", "4기 회장"], memberType: "프러너", projects: ["linkit"], photoUrl: null, bio: null },
  { id: 10, name: "강하빈", slug: "kang-habin", major: "컴퓨터교육과", runnerBatch: "2기", preneurBatch: null, batchTags: ["2기 러너"], memberType: "alumni", projects: ["k-hi"], photoUrl: null, bio: null },
  { id: 11, name: "곽재민", slug: "kwak-jaemin", major: "전자전기공학부", runnerBatch: "2기", preneurBatch: null, batchTags: ["2기 러너"], memberType: "alumni", projects: ["dama"], photoUrl: null, bio: null },
  { id: 12, name: "김동우", slug: "kim-dongwoo", major: "아동청소년학과", runnerBatch: "2기", preneurBatch: null, batchTags: ["2기 러너"], memberType: "alumni", projects: ["byorbit"], photoUrl: null, bio: null },
  { id: 13, name: "김주현", slug: "kim-juhyun", major: "소프트웨어학과", runnerBatch: "2기", preneurBatch: null, batchTags: ["2기 러너"], memberType: "alumni", projects: ["k-hi"], photoUrl: null, bio: null },
  { id: 14, name: "서원준", slug: "seo-wonjun", major: "시스템경영학과", runnerBatch: "2기", preneurBatch: "4기", batchTags: ["2기 러너", "4기 프러너"], memberType: "프러너", projects: ["faxi"], photoUrl: null, bio: null },
  { id: 15, name: "신지은", slug: "shin-jieun", major: "영어영문학과", runnerBatch: "2기", preneurBatch: "4기", batchTags: ["2기 러너", "3기 러너", "3기 프러너", "4기 프러너"], memberType: "프러너", projects: ["byorbit", "areum"], photoUrl: null, bio: null },
  { id: 16, name: "이유정", slug: "lee-yujeong", major: "스포츠과학과", runnerBatch: "2기", preneurBatch: null, batchTags: ["2기 러너"], memberType: "alumni", projects: ["dama"], photoUrl: null, bio: null },
  { id: 17, name: "전선희", slug: "jeon-sunhee", major: "컴퓨터교육과", runnerBatch: "2기", preneurBatch: null, batchTags: ["2기 러너"], memberType: "alumni", projects: ["dama"], photoUrl: null, bio: null },
  { id: 18, name: "한소윤", slug: "han-soyun", major: "글로벌경영학과", runnerBatch: "2기", preneurBatch: null, batchTags: ["2기 러너"], memberType: "alumni", projects: ["k-hi"], photoUrl: null, bio: null },
  { id: 19, name: "한지상", slug: "han-jisang", major: "전자전기공학부", runnerBatch: "2기", preneurBatch: "4기", batchTags: ["2기 러너", "3기 프러너", "4기 프러너"], memberType: "프러너", projects: ["faxi"], photoUrl: null, bio: null },
  { id: 20, name: "홍경의", slug: "hong-gyeongui", major: "컴퓨터교육과", runnerBatch: "2기", preneurBatch: null, batchTags: ["2기 러너"], memberType: "alumni", projects: ["k-hi"], photoUrl: null, bio: null },
  { id: 21, name: "권민재", slug: "kwon-minjae", major: "시스템경영학과", runnerBatch: "3기", preneurBatch: "4기", batchTags: ["3기 러너", "4기 프러너"], memberType: "프러너", projects: ["youth"], photoUrl: null, bio: null },
  { id: 22, name: "김동인", slug: "kim-dongin", major: "미디어커뮤니케이션학과", runnerBatch: "3기", preneurBatch: "4기", batchTags: ["3기 러너", "4기 프러너"], memberType: "프러너", projects: ["areum"], photoUrl: null, bio: null },
  { id: 23, name: "김혜민", slug: "kim-hyemin", major: "경제학과", runnerBatch: "3기", preneurBatch: "4기", batchTags: ["3기 러너", "4기 프러너"], memberType: "프러너", projects: ["sarr"], photoUrl: null, bio: null },
  { id: 24, name: "류영상", slug: "ryu-yeongsang", major: "자유전공계열", runnerBatch: "3기", preneurBatch: "4기", batchTags: ["3기 러너", "3기 프러너", "4기 프러너"], memberType: "프러너", projects: ["sarr"], photoUrl: null, bio: null },
  { id: 25, name: "이연서", slug: "lee-yeonseo", major: "에너지학과", runnerBatch: "3기", preneurBatch: "4기", batchTags: ["3기 러너", "4기 프러너"], memberType: "프러너", projects: ["youth"], photoUrl: null, bio: null },
  { id: 26, name: "이유민", slug: "lee-yumin", major: "소프트웨어학과", runnerBatch: "3기", preneurBatch: null, batchTags: ["3기 러너"], memberType: "러너", projects: ["sarr"], photoUrl: null, bio: null },
  { id: 27, name: "이혜원", slug: "lee-hyewon", major: "공학계열", runnerBatch: "3기", preneurBatch: null, batchTags: ["3기 러너"], memberType: "러너", projects: ["sarr"], photoUrl: null, bio: null },
  { id: 28, name: "임영빈", slug: "lim-yeongbin", major: "러시아어문학과", runnerBatch: "3기", preneurBatch: "4기", batchTags: ["3기 러너", "4기 프러너"], memberType: "프러너", projects: ["areum"], photoUrl: null, bio: null },
  { id: 29, name: "최윤정", slug: "choi-yunjeong", major: "융합생명공학과", runnerBatch: "3기", preneurBatch: "4기", batchTags: ["3기 러너", "4기 프러너"], memberType: "프러너", projects: ["youth"], photoUrl: null, bio: null },
];

export const BATCH_OPTIONS = ["1기", "2기", "3기"];

export const MEMBER_TYPE_OPTIONS = ["러너", "프러너", "alumni"];

export const PROJECT_OPTIONS = [
  { value: "k-hi", label: "K-HI" },
  { value: "byorbit", label: "ByOrbit" },
  { value: "faxi", label: "FAXI" },
  { value: "dama", label: "담아" },
  { value: "linkit", label: "LINKIT" },
  { value: "on-the-record", label: "On The Record" },
  { value: "sarr", label: "사르르" },
  { value: "youth", label: "유스" },
  { value: "areum", label: "아름" },
];
