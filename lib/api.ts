/**
 * Data Access Layer
 *
 * This module provides a unified interface for all data access in the SPEC website.
 * Currently returns mock data from local data files.
 *
 * TO CONNECT A REAL BACKEND:
 * 1. Replace the function implementations below with fetch() calls to your API
 * 2. All functions are already async — no call-site changes needed
 * 3. Types are re-exported so consumers only import from '@/lib/api'
 *
 * Example migration:
 *   // Before (mock)
 *   export async function getCompanies() { return COMPANIES; }
 *
 *   // After (real API)
 *   export async function getCompanies() {
 *     const res = await fetch(`${API_BASE}/companies`);
 *     return res.json() as Promise<Company[]>;
 *   }
 */

// ─── Re-export Types ────────────────────────────────────────────────
export type { RoleCategory, LocationOption } from "../app/jobs/jobsData";
export type {
  LibraryItem,
  ContentType,
  Category,
} from "../app/library/library-data";
export type Launch = Database["public"]["Tables"]["launches"]["Row"];

export interface Company {
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

export interface FounderDirectory {
  id: string;
  name: string;
  slug: string;
  major: string | null;
  runnerBatch: string | null;
  preneurBatch: string | null;
  batchTags: string[];
  memberType: "러너" | "프러너" | "alumni";
  projects: string[];
  photoUrl: string | null;
  bio: string | null;
}

export interface CompanyFounder {
  name: string;
  title: string;
  linkedIn: string;
  twitter?: string;
}

export interface CompanyJob {
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
  status: Database["public"]["Tables"]["projects"]["Row"]["status"];
  industries: string[];
  location: string;
  founded: number;
  teamSize: string;
  website: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  description: string;
  founders: CompanyFounder[];
  jobs: CompanyJob[];
  news: NewsItem[];
  logoUrl: string | null;
  isHiring: boolean;
  isTopCompany: boolean;
}

import { createClient } from "@/lib/supabase/server";
import type { Database, MemberType } from "@/lib/supabase/types";

import {
  roleCategories,
  locationOptions,
  getRoleLabel as _getRoleLabel,
  getLocationLabel as _getLocationLabel,
} from "../app/jobs/jobsData";
type Job = Database["public"]["Tables"]["jobs"]["Row"];
export type MemberRow = Database["public"]["Tables"]["members"]["Row"];
export type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];

import {
  categories as _categories,
} from "../app/library/library-data";
import type { LibraryItem, Category, ContentType } from "../app/library/library-data";

const TEAM_DESCRIPTIONS: TeamDescription[] = [
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
    description: "멤버 간 네트워킹, 알럼나이·동문 모임 운영, 커뮤니티 활성화",
  },
];

const DEFAULT_PERSON_PHOTO =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face";

const FOUNDER_MEMBER_TYPE_OPTIONS: FounderDirectory["memberType"][] = [
  "러너",
  "프러너",
  "alumni",
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorSlug: string;
  date: string;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
  type?: "news" | "blog";
  authorId?: string;
  published?: boolean;
  id?: string;
}

export interface TagInfo {
  slug: string;
  label: string;
}

type PostRow = Database["public"]["Tables"]["posts"]["Row"];
type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];
type TagRow = Database["public"]["Tables"]["tags"]["Row"];

function formatBlogDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
  });
}

async function getTagsByPostIds(
  postIds: string[]
): Promise<Map<string, string[]>> {
  const tagsByPostId = new Map<string, string[]>();

  if (postIds.length === 0) {
    return tagsByPostId;
  }

  const supabase = await createClient();
  const { data: postTags, error: postTagsError } = await supabase
    .from("post_tags")
    .select("post_id, tag_id")
    .in("post_id", postIds);

  if (postTagsError || !postTags || postTags.length === 0) {
    return tagsByPostId;
  }

  const tagIds = [...new Set(postTags.map((postTag) => postTag.tag_id))];
  const { data: tags, error: tagsError } = await supabase
    .from("tags")
    .select("id, slug")
    .in("id", tagIds);

  if (tagsError || !tags) {
    return tagsByPostId;
  }

  const tagSlugById = new Map(tags.map((tag) => [tag.id, tag.slug]));

  for (const postTag of postTags) {
    const slug = tagSlugById.get(postTag.tag_id);
    if (!slug) continue;

    const current = tagsByPostId.get(postTag.post_id) ?? [];
    current.push(slug);
    tagsByPostId.set(postTag.post_id, current);
  }

  return tagsByPostId;
}

async function mapRowsToBlogPosts(rows: PostRow[]): Promise<BlogPost[]> {
  if (rows.length === 0) {
    return [];
  }

  const supabase = await createClient();
  const authorIds = [...new Set(rows.map((row) => row.author_id))];

  const [{ data: profiles }, tagsByPostId] = await Promise.all([
    supabase.from("profiles").select("id, name, slug").in("id", authorIds),
    getTagsByPostIds(rows.map((row) => row.id)),
  ]);

  const profileById = new Map<string, Pick<ProfileRow, "name" | "slug">>(
    (profiles ?? []).map((profile) => [profile.id, profile])
  );

  return rows.map((row) => {
    const profile = profileById.get(row.author_id);
    return {
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      author: profile?.name ?? "",
      authorSlug: profile?.slug ?? "",
      date: formatBlogDate(row.created_at),
      tags: tagsByPostId.get(row.id) ?? [],
      featured: row.featured,
      imageUrl: row.image_url,
      type: row.type,
      authorId: row.author_id,
      published: row.published,
      id: row.id,
    };
  });
}

// ─── Companies ──────────────────────────────────────────────────────

export async function getCompanies(filters?: {
  industry?: string;
  batch?: string;
  region?: string;
  query?: string;
  isHiring?: boolean;
}): Promise<Company[]> {
  const projects = await getProjects({
    batch: filters?.batch,
    query: filters?.query,
  });

  let companies = projects.map((project) => ({
    name: project.name,
    slug: project.slug,
    oneLiner: project.one_liner ?? "",
    batch: project.batch ?? "미정",
    industry: project.industries ?? [],
    region: project.region ?? "미정",
    teamSize: project.team_size ?? 0,
    isHiring: project.is_hiring,
    isTopCompany: project.is_top_company,
    logoUrl: project.logo_url,
  }));

  if (filters?.industry) {
    companies = companies.filter((company) =>
      company.industry.includes(filters.industry as string),
    );
  }

  if (filters?.region) {
    companies = companies.filter((company) => company.region === filters.region);
  }

  if (filters?.isHiring) {
    companies = companies.filter((company) => company.isHiring);
  }

  return companies;
}

export async function getCompanyBySlug(
  slug: string
): Promise<Company | undefined> {
  const project = await getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }

  return {
    name: project.name,
    slug: project.slug,
    oneLiner: project.one_liner ?? "",
    batch: project.batch ?? "미정",
    industry: project.industries ?? [],
    region: project.region ?? "미정",
    teamSize: project.team_size ?? 0,
    isHiring: project.is_hiring,
    isTopCompany: project.is_top_company,
    logoUrl: project.logo_url,
  };
}

export async function getTopCompanies(): Promise<Company[]> {
  const companies = await getCompanies();
  return companies.filter((company) => company.isTopCompany);
}

export async function getFeaturedCompanies(): Promise<Company[]> {
  return getTopCompanies();
}

export async function getBreakthroughCompanies(): Promise<Company[]> {
  return getTopCompanies();
}

export async function getCompanyFilterOptions() {
  const supabase = await createClient();
  const { data: projectRows } = await supabase
    .from("projects")
    .select("batch, industries, region");

  const batches = Array.from(
    new Set(
      (projectRows ?? [])
        .map((project) => project.batch)
        .filter((batch): batch is string => Boolean(batch)),
    ),
  )
    .sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10))
    .map((batch) => ({ value: batch, label: batch }));

  const industries = Array.from(
    new Set((projectRows ?? []).flatMap((project) => project.industries ?? [])),
  ).sort((a, b) => a.localeCompare(b, "ko"));

  const regions = Array.from(
    new Set(
      (projectRows ?? [])
        .map((project) => project.region)
        .filter((region): region is string => Boolean(region)),
    ),
  ).sort((a, b) => a.localeCompare(b, "ko"));

  return {
    batches,
    industries,
    regions,
  };
}

// ─── People ─────────────────────────────────────────────────────────

function isManagingLeadMember(member: Pick<MemberRow, "name" | "batch_tags">): boolean {
  if (member.name === "전도현" || member.name === "한지상") {
    return true;
  }

  return (member.batch_tags ?? []).some(
    (tag) => tag.includes("4기 회장") || tag.includes("4기 부회장"),
  );
}

function mapMemberToPerson(
  member: Pick<
    MemberRow,
    "name" | "slug" | "role" | "bio" | "photo_url" | "batch_tags" | "linkedin_url"
  >,
): Person {
  const isLead = isManagingLeadMember(member);
  return {
    name: member.name,
    slug: member.slug,
    title: member.role?.trim() || (isLead ? "Managing Lead" : "Preneur"),
    bio: member.bio ?? "",
    photo: member.photo_url ?? DEFAULT_PERSON_PHOTO,
    isLead,
    linkedin: member.linkedin_url ?? undefined,
  };
}

export async function getManagingLeads(): Promise<Person[]> {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("members")
    .select("name, slug, role, bio, photo_url, batch_tags, linkedin_url")
    .eq("preneur_batch", "4기")
    .order("name", { ascending: true });

  return (members ?? [])
    .filter((member) => isManagingLeadMember(member))
    .map((member) => mapMemberToPerson(member));
}

export async function getPreneurs(): Promise<Person[]> {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("members")
    .select("name, slug, role, bio, photo_url, batch_tags, linkedin_url")
    .eq("preneur_batch", "4기")
    .order("name", { ascending: true });

  return (members ?? [])
    .filter((member) => !isManagingLeadMember(member))
    .map((member) => mapMemberToPerson(member));
}

export async function getTeamDescriptions() {
  return TEAM_DESCRIPTIONS;
}

export async function getPersonBySlug(
  slug: string
): Promise<Person | undefined> {
  const member = await getMemberBySlug(slug);
  if (!member) {
    return undefined;
  }

  return mapMemberToPerson(member);
}

export async function getAllPersonSlugs(): Promise<string[]> {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("members")
    .select("slug")
    .eq("preneur_batch", "4기")
    .order("name", { ascending: true });

  return (members ?? []).map((member) => member.slug);
}

// ─── Blog ───────────────────────────────────────────────────────────

export async function getBlogPosts(
  tag?: string,
  type?: "news" | "blog"
): Promise<BlogPost[]> {
  const supabase = await createClient();

  let postIdsByTag: string[] | null = null;
  if (tag) {
    const { data: tagRow } = await supabase
      .from("tags")
      .select("id")
      .eq("slug", tag)
      .maybeSingle();

    if (!tagRow) {
      return [];
    }

    const { data: postTags } = await supabase
      .from("post_tags")
      .select("post_id")
      .eq("tag_id", tagRow.id);

    postIdsByTag = [...new Set((postTags ?? []).map((postTag) => postTag.post_id))];
    if (postIdsByTag.length === 0) {
      return [];
    }
  }

  let query = supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (type) {
    query = query.eq("type", type);
  }

  if (postIdsByTag) {
    query = query.in("id", postIdsByTag);
  }

  const { data: rows } = await query;

  return mapRowsToBlogPosts(rows ?? []);
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const supabase = await createClient();
  const { data: row } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (!row) {
    return undefined;
  }

  const [mapped] = await mapRowsToBlogPosts([row]);
  return mapped;
}

export async function getBlogTags(): Promise<TagInfo[]> {
  const supabase = await createClient();
  const { data } = await supabase.from("tags").select("slug, label");

  return (data ?? []).map((tag: Pick<TagRow, "slug" | "label">) => ({
    slug: tag.slug,
    label: tag.label,
  }));
}

export async function getTagLabel(slug: string): Promise<string> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("tags")
    .select("label")
    .eq("slug", slug)
    .maybeSingle();

  return data?.label ?? slug;
}

export async function getRelatedPosts(
  currentSlug: string,
  limit?: number
): Promise<BlogPost[]> {
  const supabase = await createClient();
  const cappedLimit = limit ?? 3;

  const { data: currentPost } = await supabase
    .from("posts")
    .select("id")
    .eq("slug", currentSlug)
    .maybeSingle();

  if (!currentPost) {
    return [];
  }

  const { data: currentPostTags } = await supabase
    .from("post_tags")
    .select("tag_id")
    .eq("post_id", currentPost.id);

  const tagIds = [...new Set((currentPostTags ?? []).map((postTag) => postTag.tag_id))];
  if (tagIds.length === 0) {
    return [];
  }

  const { data: relatedPostTags } = await supabase
    .from("post_tags")
    .select("post_id")
    .in("tag_id", tagIds);

  const relatedPostIds = [...new Set((relatedPostTags ?? []).map((postTag) => postTag.post_id))]
    .filter((postId) => postId !== currentPost.id);

  if (relatedPostIds.length === 0) {
    return [];
  }

  const { data: rows } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .neq("slug", currentSlug)
    .in("id", relatedPostIds)
    .order("created_at", { ascending: false })
    .limit(cappedLimit);

  return mapRowsToBlogPosts(rows ?? []);
}

// ─── Jobs ───────────────────────────────────────────────────────────

export async function getJobs(filters?: {
  role?: string;
  location?: string;
  query?: string;
}): Promise<Job[]> {
  const supabase = await createClient();

  let query = supabase.from("jobs").select("*").eq("active", true);

  if (filters?.role && filters.role !== "all") {
    query = query.eq("role_slug", filters.role);
  }

  if (filters?.location && filters.location !== "all") {
    query = query.eq("location_slug", filters.location);
  }

  if (filters?.query) {
    const q = filters.query.trim();
    if (q) {
      query = query.or(`title.ilike.%${q}%,company.ilike.%${q}%`);
    }
  }

  const { data: rows } = await query;

  return rows ?? [];
}

export async function getRoleCategories() {
  return roleCategories;
}

export async function getLocationOptions() {
  return locationOptions;
}

export async function getRoleLabel(slug: string): Promise<string> {
  return _getRoleLabel(slug);
}

export async function getLocationLabel(slug: string): Promise<string> {
  return _getLocationLabel(slug);
}

// ─── Library ────────────────────────────────────────────────────────

export async function getLibraryItems(filters?: {
  category?: Category;
  type?: string;
  query?: string;
}): Promise<LibraryItem[]> {
  const supabase = await createClient();
  let query = supabase.from("library_items").select("*");

  if (filters?.category) {
    query = query.contains("categories", [filters.category]);
  }

  if (filters?.type) {
    query = query.eq("type", filters.type);
  }

  if (filters?.query) {
    const q = filters.query.trim();
    if (q) {
      query = query.or(`title.ilike.%${q}%,description.ilike.%${q}%`);
    }
  }

  const { data: rows } = await query;

  return (rows ?? []).map((row) => ({
    slug: row.slug,
    title: row.title,
    author: row.author,
    authorRole: row.author_role,
    type: row.type as ContentType,
    categories: row.categories as Category[],
    description: row.description,
    body: row.body,
    date: row.date,
    views: String(row.views),
    duration: row.duration,
    youtubeId: row.youtube_id,
    featured: row.featured,
    thumbnailColor: row.thumbnail_color,
  }));
}

export async function getLibraryItemBySlug(
  slug: string
): Promise<LibraryItem | undefined> {
  const supabase = await createClient();
  const { data: row } = await supabase.from("library_items").select("*").eq("slug", slug).maybeSingle();

  if (!row) {
    return undefined;
  }

  return {
    slug: row.slug,
    title: row.title,
    author: row.author,
    authorRole: row.author_role,
    type: row.type as ContentType,
    categories: row.categories as Category[],
    description: row.description,
    body: row.body,
    date: row.date,
    views: String(row.views),
    duration: row.duration,
    youtubeId: row.youtube_id,
    featured: row.featured,
    thumbnailColor: row.thumbnail_color,
  };
}

export async function getLibraryCategories(): Promise<Category[]> {
  return _categories;
}

// ─── Member Directory ───────────────────────────────────────────────

export async function getFounderDirectory(filters?: {
  batch?: string;
  memberType?: string;
  project?: string;
  query?: string;
}): Promise<FounderDirectory[]> {
  const supabase = await createClient();

  const [{ data: members }, { data: relations }, { data: projects }] = await Promise.all([
    supabase
      .from("members")
      .select(
        "id, name, slug, major, runner_batch, preneur_batch, batch_tags, member_type, photo_url, bio",
      ),
    supabase.from("member_projects").select("member_id, project_id"),
    supabase.from("projects").select("id, slug"),
  ]);

  const projectSlugById = new Map<string, string>(
    (projects ?? []).map((project) => [project.id, project.slug]),
  );

  const projectsByMemberId = new Map<string, string[]>();
  for (const relation of relations ?? []) {
    const projectSlug = projectSlugById.get(relation.project_id);
    if (!projectSlug) {
      continue;
    }

    const currentProjects = projectsByMemberId.get(relation.member_id) ?? [];
    currentProjects.push(projectSlug);
    projectsByMemberId.set(relation.member_id, currentProjects);
  }

  let directory: FounderDirectory[] = (members ?? []).map((member) => {
    const memberType = member.member_type as string;
    return {
      id: member.id,
      name: member.name,
      slug: member.slug,
      major: member.major,
      runnerBatch: member.runner_batch,
      preneurBatch: member.preneur_batch,
      batchTags: member.batch_tags ?? [],
      memberType:
        memberType === "프러너" || memberType === "alumni"
          ? (memberType as FounderDirectory["memberType"])
          : "러너",
      projects: projectsByMemberId.get(member.id) ?? [],
      photoUrl: member.photo_url,
      bio: member.bio,
    };
  });

  if (filters?.batch) {
    directory = directory.filter((member) =>
      member.batchTags.some((tag) => tag.startsWith(filters.batch as string)),
    );
  }

  if (filters?.memberType) {
    directory = directory.filter(
      (member) => member.memberType === filters.memberType,
    );
  }

  if (filters?.project) {
    directory = directory.filter((member) =>
      member.projects.includes(filters.project as string),
    );
  }

  if (filters?.query) {
    const query = filters.query.toLowerCase();
    directory = directory.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        (member.major?.toLowerCase().includes(query) ?? false),
    );
  }

  return directory;
}

export async function getFounderDirectoryFilterOptions() {
  const supabase = await createClient();
  const [{ data: members }, { data: projects }] = await Promise.all([
    supabase.from("members").select("runner_batch, member_type"),
    supabase.from("projects").select("slug, name"),
  ]);

  const batches = Array.from(
    new Set(
      (members ?? [])
        .map((member) => member.runner_batch)
        .filter((batch): batch is string => Boolean(batch)),
    ),
  ).sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10));

  const memberTypes = FOUNDER_MEMBER_TYPE_OPTIONS.filter((memberType) =>
    (members ?? []).some((member) => {
      if (memberType === "러너") {
        return member.member_type === "러너";
      }
      return member.member_type === memberType;
    }),
  );

  const projectOptions = (projects ?? []).map((project) => ({
    value: project.slug,
    label: project.name,
  }));

  return {
    batches,
    memberTypes,
    projects: projectOptions,
  };
}

// ─── Launches ───────────────────────────────────────────────────────

const LAUNCH_CATEGORIES = [
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
] as const;

export async function getLaunches(): Promise<Launch[]> {
  const supabase = await createClient();
  const { data: rows } = await supabase
    .from("launches")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: false });

  return rows ?? [];
}

export async function getLaunchCategories() {
  return LAUNCH_CATEGORIES;
}

// ─── Company Details ────────────────────────────────────────────────

export async function getCompanyDetail(
  slug: string
): Promise<CompanyDetail | undefined> {
  const supabase = await createClient();
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (!project) {
    return undefined;
  }

  const [{ data: relationRows }, { data: newsRows }] = await Promise.all([
    supabase
      .from("member_projects")
      .select("member_id, role")
      .eq("project_id", project.id),
    supabase
      .from("project_news")
      .select("title, url, date")
      .eq("project_id", project.id)
      .order("created_at", { ascending: false }),
  ]);

  const memberIds = (relationRows ?? []).map((relation) => relation.member_id);
  let members: Array<Pick<MemberRow, "id" | "name" | "linkedin_url">> = [];

  if (memberIds.length > 0) {
    const { data: memberRows } = await supabase
      .from("members")
      .select("id, name, linkedin_url")
      .in("id", memberIds);
    members = memberRows ?? [];
  }

  const memberById = new Map<string, Pick<MemberRow, "name" | "linkedin_url">>(
    members.map((member) => [member.id, member]),
  );

  const founders: CompanyFounder[] = (relationRows ?? [])
    .map((relation) => {
      const member = memberById.get(relation.member_id);
      if (!member) {
        return null;
      }

      return {
        name: member.name,
        title: relation.role ?? "팀원",
        linkedIn: member.linkedin_url ?? "#",
      };
    })
    .filter((founder): founder is CompanyFounder => founder !== null);

  const news: NewsItem[] = (newsRows ?? []).map((newsItem) => ({
    title: newsItem.title,
    url: newsItem.url ?? "#",
    date: newsItem.date ?? "",
  }));

  return {
    name: project.name,
    slug: project.slug,
    oneLiner: project.one_liner ?? "",
    batch: project.batch ?? "",
    batchSeason: project.batch ?? "",
    status: project.status,
    industries: project.industries ?? [],
    location: project.region ?? "",
    founded: project.founded_year ?? 0,
    teamSize: project.team_size ? `${project.team_size}명` : "-",
    website: project.website ?? "#",
    linkedIn: project.linkedin_url ?? undefined,
    twitter: project.twitter_url ?? undefined,
    github: project.github_url ?? undefined,
    description: project.description ?? "",
    founders,
    jobs: [],
    news,
    logoUrl: project.logo_url,
    isHiring: project.is_hiring,
    isTopCompany: project.is_top_company,
  };
}

export async function getAllCompanyDetailSlugs(): Promise<{ slug: string }[]> {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select("slug");
  return (projects ?? []).map((project) => ({ slug: project.slug }));
}

export async function getRelatedCompanies(
  currentSlug: string
): Promise<CompanyDetail[]> {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .neq("slug", currentSlug)
    .order("created_at", { ascending: false })
    .limit(4);

  return (projects ?? []).map((project) => ({
    name: project.name,
    slug: project.slug,
    oneLiner: project.one_liner ?? "",
    batch: project.batch ?? "",
    batchSeason: project.batch ?? "",
    status: project.status,
    industries: project.industries ?? [],
    location: project.region ?? "",
    founded: project.founded_year ?? 0,
    teamSize: project.team_size ? `${project.team_size}명` : "-",
    website: project.website ?? "#",
    linkedIn: project.linkedin_url ?? undefined,
    twitter: project.twitter_url ?? undefined,
    github: project.github_url ?? undefined,
    description: project.description ?? "",
    founders: [],
    jobs: [],
    news: [],
    logoUrl: project.logo_url,
    isHiring: project.is_hiring,
    isTopCompany: project.is_top_company,
  }));
}

// ─── Members ────────────────────────────────────────────────────────

export async function getMembers(filters?: {
  batch?: string;
  memberType?: MemberType;
  query?: string;
}): Promise<MemberRow[]> {
  const supabase = await createClient();

  let query = supabase.from("members").select("*");

  if (filters?.batch) {
    query = query.or(`runner_batch.eq.${filters.batch},preneur_batch.eq.${filters.batch}`);
  }

  if (filters?.memberType) {
    query = query.eq("member_type", filters.memberType);
  }

  if (filters?.query) {
    const q = filters.query.trim();
    if (q) {
      query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%`);
    }
  }

  const { data: rows } = await query;

  return rows ?? [];
}

export async function getMemberBySlug(slug: string): Promise<MemberRow | undefined> {
  const supabase = await createClient();
  const { data: row } = await supabase
    .from("members")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  return row ?? undefined;
}

// ─── Projects ───────────────────────────────────────────────────────

export async function getProjects(filters?: {
  batch?: string;
  query?: string;
}): Promise<ProjectRow[]> {
  const supabase = await createClient();

  let query = supabase.from("projects").select("*");

  if (filters?.batch) {
    query = query.eq("batch", filters.batch);
  }

  if (filters?.query) {
    const q = filters.query.trim();
    if (q) {
      query = query.or(`name.ilike.%${q}%,one_liner.ilike.%${q}%`);
    }
  }

  const { data: rows } = await query;

  return rows ?? [];
}

export async function getProjectBySlug(slug: string): Promise<ProjectRow | undefined> {
  const supabase = await createClient();
  const { data: row } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  return row ?? undefined;
}

export async function getMembersByProject(projectId: string): Promise<MemberRow[]> {
  const supabase = await createClient();

  const { data: memberProjects } = await supabase
    .from("member_projects")
    .select("member_id")
    .eq("project_id", projectId);

  if (!memberProjects || memberProjects.length === 0) {
    return [];
  }

  const memberIds = memberProjects.map((mp) => mp.member_id);
  const { data: members } = await supabase
    .from("members")
    .select("*")
    .in("id", memberIds);

  return members ?? [];
}
