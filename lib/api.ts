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
export type { Company } from "./companies-data";
export type { Person, PeopleSection } from "./people-data";
export type { RoleCategory, LocationOption } from "../app/jobs/jobsData";
export type {
  LibraryItem,
  ContentType,
  Category,
} from "../app/library/library-data";
export type { Founder as FounderDirectory } from "./founders-data";
export type { Launch } from "./launches-data";
export type {
  CompanyDetail,
  Founder as CompanyFounder,
  Job as CompanyJob,
  NewsItem,
} from "./company-details-data";

// ─── Internal Imports (mock data sources) ───────────────────────────
import {
  COMPANIES,
  BATCH_OPTIONS,
  INDUSTRY_OPTIONS,
  REGION_OPTIONS,
  getTopCompanies as _getTopCompanies,
  getFeaturedCompanies as _getFeaturedCompanies,
  getBreakthroughCompanies as _getBreakthroughCompanies,
} from "./companies-data";
import type { Company } from "./companies-data";

import {
  partners as _partners,
  founders as _founders,
  staffSections as _staffSections,
  getPersonBySlug as _getPersonBySlug,
  getAllPartnerSlugs as _getAllPartnerSlugs,
} from "./people-data";
import type { Person } from "./people-data";

import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

import {
  roleCategories,
  locationOptions,
  getRoleLabel as _getRoleLabel,
  getLocationLabel as _getLocationLabel,
} from "../app/jobs/jobsData";
type Job = Database["public"]["Tables"]["jobs"]["Row"];

import {
  categories as _categories,
} from "../app/library/library-data";
import type { LibraryItem, Category, ContentType } from "../app/library/library-data";

import {
  FOUNDERS as _FOUNDERS,
  BATCH_OPTIONS as _FOUNDER_BATCH_OPTIONS,
  INDUSTRY_OPTIONS as _FOUNDER_INDUSTRY_OPTIONS,
  LOCATION_OPTIONS as _FOUNDER_LOCATION_OPTIONS,
} from "./founders-data";
import type { Founder as FounderDirectory } from "./founders-data";

import {
  CATEGORIES as _LAUNCH_CATEGORIES,
} from "./launches-data";
import type { Launch } from "./launches-data";

import {
  COMPANY_DATA,
  getCompanyDetailBySlug as _getCompanyDetailBySlug,
  getAllCompanyDetailSlugs as _getAllCompanyDetailSlugs,
  getRelatedCompanies as _getRelatedCompanies,
} from "./company-details-data";
import type { CompanyDetail } from "./company-details-data";

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
  let result = [...COMPANIES];
  if (filters?.industry) {
    result = result.filter((c) => c.industry.includes(filters.industry!));
  }
  if (filters?.batch) {
    result = result.filter((c) => c.batch === filters.batch);
  }
  if (filters?.region) {
    result = result.filter((c) => c.region === filters.region);
  }
  if (filters?.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.oneLiner.toLowerCase().includes(q)
    );
  }
  if (filters?.isHiring) {
    result = result.filter((c) => c.isHiring);
  }
  return result;
}

export async function getCompanyBySlug(
  slug: string
): Promise<Company | undefined> {
  return COMPANIES.find((c) => c.slug === slug);
}

export async function getTopCompanies(): Promise<Company[]> {
  return _getTopCompanies();
}

export async function getFeaturedCompanies(): Promise<Company[]> {
  return _getFeaturedCompanies();
}

export async function getBreakthroughCompanies(): Promise<Company[]> {
  return _getBreakthroughCompanies();
}

export async function getCompanyFilterOptions() {
  return {
    batches: BATCH_OPTIONS,
    industries: INDUSTRY_OPTIONS,
    regions: REGION_OPTIONS,
  };
}

// ─── People ─────────────────────────────────────────────────────────

export async function getPartners(): Promise<Person[]> {
  return _partners;
}

export async function getFounders(): Promise<Person[]> {
  return _founders;
}

export async function getStaffSections() {
  return _staffSections;
}

export async function getPersonBySlug(
  slug: string
): Promise<Person | undefined> {
  return _getPersonBySlug(slug);
}

export async function getAllPartnerSlugs(): Promise<string[]> {
  return _getAllPartnerSlugs();
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

// ─── Founder Directory ──────────────────────────────────────────────

export async function getFounderDirectory(filters?: {
  batch?: string;
  industry?: string;
  location?: string;
  query?: string;
}): Promise<FounderDirectory[]> {
  let result = [..._FOUNDERS];
  if (filters?.batch) {
    result = result.filter((f) => f.batch === filters.batch);
  }
  if (filters?.industry) {
    result = result.filter((f) => f.industry === filters.industry);
  }
  if (filters?.location) {
    result = result.filter((f) => f.location === filters.location);
  }
  if (filters?.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.company.toLowerCase().includes(q)
    );
  }
  return result;
}

export async function getFounderDirectoryFilterOptions() {
  return {
    batches: _FOUNDER_BATCH_OPTIONS,
    industries: _FOUNDER_INDUSTRY_OPTIONS,
    locations: _FOUNDER_LOCATION_OPTIONS,
  };
}

// ─── Launches ───────────────────────────────────────────────────────

export async function getLaunches(): Promise<Launch[]> {
  const supabase = await createClient();
  const { data: rows } = await supabase.from("launches").select("*").order("votes", { ascending: false });

  return (rows ?? []).map((row, index) => {
    const createdAtTime = new Date(row.created_at).getTime();
    const daysAgo = Number.isNaN(createdAtTime)
      ? 0
      : Math.floor((Date.now() - createdAtTime) / 86400000);

    return {
      id: index + 1,
      company: row.company,
      slug: row.slug,
      tagline: row.tagline,
      description: row.description,
      category: row.category,
      batch: row.batch,
      votes: row.votes,
      datePosted: row.created_at,
      daysAgo,
    };
  });
}

export async function getLaunchCategories() {
  return _LAUNCH_CATEGORIES;
}

// ─── Company Details ────────────────────────────────────────────────

export async function getCompanyDetail(
  slug: string
): Promise<CompanyDetail | undefined> {
  return _getCompanyDetailBySlug(slug);
}

export async function getAllCompanyDetailSlugs(): Promise<{ slug: string }[]> {
  return _getAllCompanyDetailSlugs();
}

export async function getRelatedCompanies(
  currentSlug: string
): Promise<CompanyDetail[]> {
  return _getRelatedCompanies(currentSlug);
}
