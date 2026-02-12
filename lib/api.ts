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
export type { BlogPost, TagInfo } from "../app/blog/blogData";
export type { Job, RoleCategory, LocationOption } from "../app/jobs/jobsData";
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

import {
  BLOG_POSTS,
  TAGS,
  getPostBySlug as _getPostBySlug,
  getPostsByTag as _getPostsByTag,
  getTagLabel as _getTagLabel,
  getRelatedPosts as _getRelatedPosts,
} from "../app/blog/blogData";
import type { BlogPost } from "../app/blog/blogData";

import {
  allJobs,
  roleCategories,
  locationOptions,
  getRoleLabel as _getRoleLabel,
  getLocationLabel as _getLocationLabel,
} from "../app/jobs/jobsData";
import type { Job } from "../app/jobs/jobsData";

import {
  libraryItems as _libraryItems,
  categories as _categories,
} from "../app/library/library-data";
import type { LibraryItem, Category } from "../app/library/library-data";

import {
  FOUNDERS as _FOUNDERS,
  BATCH_OPTIONS as _FOUNDER_BATCH_OPTIONS,
  INDUSTRY_OPTIONS as _FOUNDER_INDUSTRY_OPTIONS,
  LOCATION_OPTIONS as _FOUNDER_LOCATION_OPTIONS,
} from "./founders-data";
import type { Founder as FounderDirectory } from "./founders-data";

import {
  LAUNCHES as _LAUNCHES,
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

export async function getBlogPosts(tag?: string): Promise<BlogPost[]> {
  if (tag) return _getPostsByTag(tag);
  return BLOG_POSTS;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  return _getPostBySlug(slug);
}

export async function getBlogTags() {
  return TAGS;
}

export async function getTagLabel(slug: string): Promise<string> {
  return _getTagLabel(slug);
}

export async function getRelatedPosts(
  currentSlug: string,
  limit?: number
): Promise<BlogPost[]> {
  return _getRelatedPosts(currentSlug, limit);
}

// ─── Jobs ───────────────────────────────────────────────────────────

export async function getJobs(filters?: {
  role?: string;
  location?: string;
  query?: string;
}): Promise<Job[]> {
  let result = [...allJobs];
  if (filters?.role) {
    result = result.filter((j) => j.roleSlug === filters.role);
  }
  if (filters?.location) {
    result = result.filter((j) => j.locationSlug === filters.location);
  }
  if (filters?.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q)
    );
  }
  return result;
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
  let result = [..._libraryItems];
  if (filters?.category) {
    result = result.filter((item) =>
      item.categories.includes(filters.category!)
    );
  }
  if (filters?.type) {
    result = result.filter((item) => item.type === filters.type);
  }
  if (filters?.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }
  return result;
}

export async function getLibraryItemBySlug(
  slug: string
): Promise<LibraryItem | undefined> {
  return _libraryItems.find((item) => item.slug === slug);
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
  return _LAUNCHES;
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
