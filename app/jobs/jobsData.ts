// ─── Types ─────────────────────────────────────────────
export interface RoleCategory {
  label: string;
  slug: string;
  count: number;
}

export interface LocationOption {
  label: string;
  slug: string;
  count: number;
}

// ─── Role categories ───────────────────────────────────
export const roleCategories: RoleCategory[] = [
  { label: "전체 포지션", slug: "all", count: 0 },
  { label: "개발", slug: "software-engineer", count: 0 },
  { label: "기획", slug: "product-manager", count: 0 },
  { label: "디자인", slug: "designer", count: 0 },
  { label: "마케팅", slug: "marketing", count: 0 },
  { label: "운영", slug: "operations", count: 0 },
];

// ─── Location options ──────────────────────────────────
export const locationOptions: LocationOption[] = [
  { label: "전체 지역", slug: "all", count: 0 },
  { label: "서울", slug: "seoul", count: 0 },
  { label: "판교", slug: "pangyo", count: 0 },
  { label: "부산", slug: "busan", count: 0 },
  { label: "Remote", slug: "remote", count: 0 },
];

// ─── Static params helpers ─────────────────────────────
export const roleParams = roleCategories
  .filter((r) => r.slug !== "all")
  .map((r) => ({ role: r.slug }));

export const locationParams = locationOptions
  .filter((l) => l.slug !== "all")
  .map((l) => ({ city: l.slug }));

// ─── Role label helper ─────────────────────────────────
export function getRoleLabel(slug: string): string {
  return roleCategories.find((r) => r.slug === slug)?.label ?? slug;
}

export function getLocationLabel(slug: string): string {
  return locationOptions.find((l) => l.slug === slug)?.label ?? slug;
}
