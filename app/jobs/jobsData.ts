// ─── Types ─────────────────────────────────────────────
export interface Job {
  id: number;
  company: string;
  companySlug: string;
  logoColor: string;
  logoLetter: string;
  title: string;
  role: string;
  roleSlug: string;
  location: string;
  locationSlug: string;
  salary: string;
  posted: string;
  tags: string[];
}

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
  { label: "All Roles", slug: "all", count: 0 },
  { label: "Software Engineer", slug: "software-engineer", count: 0 },
  { label: "Product Manager", slug: "product-manager", count: 0 },
  { label: "Designer", slug: "designer", count: 0 },
  { label: "Sales Manager", slug: "sales-manager", count: 0 },
  { label: "Marketing", slug: "marketing", count: 0 },
  { label: "Operations", slug: "operations", count: 0 },
  { label: "Recruiting & HR", slug: "recruiting-hr", count: 0 },
  { label: "Science", slug: "science", count: 0 },
  { label: "Support", slug: "support", count: 0 },
];

// ─── Location options ──────────────────────────────────
export const locationOptions: LocationOption[] = [
  { label: "All Locations", slug: "all", count: 0 },
  { label: "San Francisco", slug: "san-francisco", count: 0 },
  { label: "New York", slug: "new-york", count: 0 },
  { label: "Los Angeles", slug: "los-angeles", count: 0 },
  { label: "Seattle", slug: "seattle", count: 0 },
  { label: "Austin", slug: "austin", count: 0 },
  { label: "Chicago", slug: "chicago", count: 0 },
  { label: "Remote", slug: "remote", count: 0 },
];

// ─── Mock jobs at real YC companies ────────────────────
export const allJobs: Job[] = [
  // Software Engineer
  { id: 1, company: "Stripe", companySlug: "stripe", logoColor: "#635BFF", logoLetter: "S", title: "Senior Software Engineer, Payments", role: "Software Engineer", roleSlug: "software-engineer", location: "San Francisco", locationSlug: "san-francisco", salary: "$190k – $250k", posted: "2d ago", tags: ["Python", "Go", "Distributed Systems"] },
  { id: 2, company: "Airbnb", companySlug: "airbnb", logoColor: "#FF5A5F", logoLetter: "A", title: "Staff Software Engineer, Search", role: "Software Engineer", roleSlug: "software-engineer", location: "San Francisco", locationSlug: "san-francisco", salary: "$220k – $300k", posted: "1d ago", tags: ["Java", "ML", "Search"] },
  { id: 3, company: "DoorDash", companySlug: "doordash", logoColor: "#FF3008", logoLetter: "D", title: "Software Engineer, Logistics", role: "Software Engineer", roleSlug: "software-engineer", location: "San Francisco", locationSlug: "san-francisco", salary: "$160k – $220k", posted: "3d ago", tags: ["Kotlin", "Microservices"] },
  { id: 4, company: "Instacart", companySlug: "instacart", logoColor: "#43B02A", logoLetter: "I", title: "Full-Stack Engineer, Marketplace", role: "Software Engineer", roleSlug: "software-engineer", location: "Remote", locationSlug: "remote", salary: "$170k – $230k", posted: "5d ago", tags: ["React", "Ruby on Rails"] },
  { id: 5, company: "Brex", companySlug: "brex", logoColor: "#1A1A1A", logoLetter: "B", title: "Backend Engineer, Banking", role: "Software Engineer", roleSlug: "software-engineer", location: "New York", locationSlug: "new-york", salary: "$180k – $240k", posted: "1d ago", tags: ["Elixir", "Kubernetes"] },
  { id: 6, company: "Scale AI", companySlug: "scale-ai", logoColor: "#6C5CE7", logoLetter: "S", title: "ML Engineer, Data Platform", role: "Software Engineer", roleSlug: "software-engineer", location: "San Francisco", locationSlug: "san-francisco", salary: "$200k – $280k", posted: "4d ago", tags: ["Python", "TensorFlow", "AWS"] },
  { id: 7, company: "Retool", companySlug: "retool", logoColor: "#3D53F5", logoLetter: "R", title: "Frontend Engineer, Editor", role: "Software Engineer", roleSlug: "software-engineer", location: "San Francisco", locationSlug: "san-francisco", salary: "$170k – $230k", posted: "2d ago", tags: ["TypeScript", "React"] },
  { id: 8, company: "Vercel", companySlug: "vercel", logoColor: "#000000", logoLetter: "V", title: "Software Engineer, Edge Runtime", role: "Software Engineer", roleSlug: "software-engineer", location: "Remote", locationSlug: "remote", salary: "$180k – $250k", posted: "6d ago", tags: ["Rust", "TypeScript", "Edge"] },
  { id: 9, company: "Monzo", companySlug: "monzo", logoColor: "#14233C", logoLetter: "M", title: "Senior Backend Engineer", role: "Software Engineer", roleSlug: "software-engineer", location: "New York", locationSlug: "new-york", salary: "$175k – $225k", posted: "3d ago", tags: ["Go", "Cassandra"] },
  { id: 10, company: "Posthog", companySlug: "posthog", logoColor: "#F9BD2B", logoLetter: "P", title: "Full-Stack Engineer", role: "Software Engineer", roleSlug: "software-engineer", location: "Remote", locationSlug: "remote", salary: "$160k – $210k", posted: "1d ago", tags: ["Django", "React", "ClickHouse"] },

  // Product Manager
  { id: 11, company: "Coinbase", companySlug: "coinbase", logoColor: "#0052FF", logoLetter: "C", title: "Senior Product Manager, Wallet", role: "Product Manager", roleSlug: "product-manager", location: "San Francisco", locationSlug: "san-francisco", salary: "$200k – $260k", posted: "2d ago", tags: ["Crypto", "Mobile"] },
  { id: 12, company: "Dropbox", companySlug: "dropbox", logoColor: "#0061FF", logoLetter: "D", title: "Product Manager, Collaboration", role: "Product Manager", roleSlug: "product-manager", location: "Remote", locationSlug: "remote", salary: "$180k – $240k", posted: "4d ago", tags: ["Enterprise", "SaaS"] },
  { id: 13, company: "Gusto", companySlug: "gusto", logoColor: "#F45D48", logoLetter: "G", title: "Senior PM, Payroll Platform", role: "Product Manager", roleSlug: "product-manager", location: "San Francisco", locationSlug: "san-francisco", salary: "$185k – $245k", posted: "1d ago", tags: ["Fintech", "B2B"] },
  { id: 14, company: "Whatnot", companySlug: "whatnot", logoColor: "#6F3AFF", logoLetter: "W", title: "Product Manager, Live Commerce", role: "Product Manager", roleSlug: "product-manager", location: "Los Angeles", locationSlug: "los-angeles", salary: "$170k – $230k", posted: "3d ago", tags: ["E-commerce", "Video"] },

  // Designer
  { id: 15, company: "Figma", companySlug: "figma", logoColor: "#A259FF", logoLetter: "F", title: "Senior Product Designer", role: "Designer", roleSlug: "designer", location: "San Francisco", locationSlug: "san-francisco", salary: "$180k – $250k", posted: "2d ago", tags: ["Design Systems", "Prototyping"] },
  { id: 16, company: "Linear", companySlug: "linear", logoColor: "#5E6AD2", logoLetter: "L", title: "Product Designer", role: "Designer", roleSlug: "designer", location: "Remote", locationSlug: "remote", salary: "$160k – $220k", posted: "5d ago", tags: ["UI/UX", "SaaS"] },
  { id: 17, company: "Notion", companySlug: "notion", logoColor: "#000000", logoLetter: "N", title: "Brand Designer", role: "Designer", roleSlug: "designer", location: "San Francisco", locationSlug: "san-francisco", salary: "$150k – $200k", posted: "1d ago", tags: ["Branding", "Illustration"] },
  { id: 18, company: "Loom", companySlug: "loom", logoColor: "#625DF5", logoLetter: "L", title: "UX Designer, Video Platform", role: "Designer", roleSlug: "designer", location: "New York", locationSlug: "new-york", salary: "$145k – $195k", posted: "6d ago", tags: ["UX Research", "Video"] },

  // Sales Manager
  { id: 19, company: "Deel", companySlug: "deel", logoColor: "#15357A", logoLetter: "D", title: "Enterprise Sales Manager", role: "Sales Manager", roleSlug: "sales-manager", location: "New York", locationSlug: "new-york", salary: "$150k – $220k", posted: "2d ago", tags: ["Enterprise", "HR Tech"] },
  { id: 20, company: "Amplitude", companySlug: "amplitude", logoColor: "#1E61E4", logoLetter: "A", title: "Senior Account Executive", role: "Sales Manager", roleSlug: "sales-manager", location: "San Francisco", locationSlug: "san-francisco", salary: "$140k – $200k", posted: "3d ago", tags: ["Analytics", "SaaS"] },
  { id: 21, company: "Segment", companySlug: "segment", logoColor: "#52BD94", logoLetter: "S", title: "Sales Manager, Mid-Market", role: "Sales Manager", roleSlug: "sales-manager", location: "Remote", locationSlug: "remote", salary: "$130k – $190k", posted: "4d ago", tags: ["Data", "B2B"] },

  // Marketing
  { id: 22, company: "Zapier", companySlug: "zapier", logoColor: "#FF4A00", logoLetter: "Z", title: "Head of Content Marketing", role: "Marketing", roleSlug: "marketing", location: "Remote", locationSlug: "remote", salary: "$160k – $210k", posted: "1d ago", tags: ["Content", "SEO"] },
  { id: 23, company: "Webflow", companySlug: "webflow", logoColor: "#4353FF", logoLetter: "W", title: "Growth Marketing Manager", role: "Marketing", roleSlug: "marketing", location: "San Francisco", locationSlug: "san-francisco", salary: "$140k – $185k", posted: "5d ago", tags: ["Growth", "PLG"] },
  { id: 24, company: "Gumroad", companySlug: "gumroad", logoColor: "#FF90E8", logoLetter: "G", title: "Marketing Lead", role: "Marketing", roleSlug: "marketing", location: "Remote", locationSlug: "remote", salary: "$120k – $160k", posted: "2d ago", tags: ["Creator Economy", "Social"] },

  // Operations
  { id: 25, company: "Faire", companySlug: "faire", logoColor: "#004E42", logoLetter: "F", title: "Operations Manager, Supply Chain", role: "Operations", roleSlug: "operations", location: "San Francisco", locationSlug: "san-francisco", salary: "$130k – $175k", posted: "3d ago", tags: ["Logistics", "Marketplace"] },
  { id: 26, company: "Flexport", companySlug: "flexport", logoColor: "#01478E", logoLetter: "F", title: "Senior Operations Analyst", role: "Operations", roleSlug: "operations", location: "Chicago", locationSlug: "chicago", salary: "$120k – $160k", posted: "4d ago", tags: ["Supply Chain", "Analytics"] },
  { id: 27, company: "Convoy", companySlug: "convoy", logoColor: "#2B3990", logoLetter: "C", title: "Operations Lead, Freight", role: "Operations", roleSlug: "operations", location: "Seattle", locationSlug: "seattle", salary: "$125k – $170k", posted: "6d ago", tags: ["Freight", "Logistics"] },

  // Recruiting & HR
  { id: 28, company: "Rippling", companySlug: "rippling", logoColor: "#FFC900", logoLetter: "R", title: "Senior Technical Recruiter", role: "Recruiting & HR", roleSlug: "recruiting-hr", location: "San Francisco", locationSlug: "san-francisco", salary: "$120k – $165k", posted: "1d ago", tags: ["Tech Recruiting", "Engineering"] },
  { id: 29, company: "Lattice", companySlug: "lattice", logoColor: "#7B68EE", logoLetter: "L", title: "People Operations Manager", role: "Recruiting & HR", roleSlug: "recruiting-hr", location: "New York", locationSlug: "new-york", salary: "$115k – $155k", posted: "5d ago", tags: ["People Ops", "Culture"] },

  // Science
  { id: 30, company: "Ginkgo Bioworks", companySlug: "ginkgo-bioworks", logoColor: "#3CB371", logoLetter: "G", title: "Senior Research Scientist", role: "Science", roleSlug: "science", location: "Boston", locationSlug: "san-francisco", salary: "$140k – $190k", posted: "2d ago", tags: ["Biotech", "Synthetic Biology"] },
  { id: 31, company: "Benchling", companySlug: "benchling", logoColor: "#1F6FEB", logoLetter: "B", title: "Computational Biologist", role: "Science", roleSlug: "science", location: "San Francisco", locationSlug: "san-francisco", salary: "$150k – $200k", posted: "4d ago", tags: ["Bio-Informatics", "R&D"] },

  // Support
  { id: 32, company: "GitLab", companySlug: "gitlab", logoColor: "#FC6D26", logoLetter: "G", title: "Senior Support Engineer", role: "Support", roleSlug: "support", location: "Remote", locationSlug: "remote", salary: "$110k – $150k", posted: "3d ago", tags: ["DevOps", "Git"] },
  { id: 33, company: "PlanetScale", companySlug: "planetscale", logoColor: "#000000", logoLetter: "P", title: "Customer Success Engineer", role: "Support", roleSlug: "support", location: "Austin", locationSlug: "austin", salary: "$115k – $155k", posted: "6d ago", tags: ["Databases", "MySQL"] },
  { id: 34, company: "Railway", companySlug: "railway", logoColor: "#843DE3", logoLetter: "R", title: "Support Specialist", role: "Support", roleSlug: "support", location: "Remote", locationSlug: "remote", salary: "$100k – $140k", posted: "1d ago", tags: ["Cloud", "Developer Tools"] },

  // More Software Engineers for variety
  { id: 35, company: "Supabase", companySlug: "supabase", logoColor: "#3ECF8E", logoLetter: "S", title: "Database Engineer", role: "Software Engineer", roleSlug: "software-engineer", location: "Remote", locationSlug: "remote", salary: "$170k – $230k", posted: "2d ago", tags: ["PostgreSQL", "Go"] },
  { id: 36, company: "Render", companySlug: "render", logoColor: "#46E3B7", logoLetter: "R", title: "Infrastructure Engineer", role: "Software Engineer", roleSlug: "software-engineer", location: "San Francisco", locationSlug: "san-francisco", salary: "$180k – $240k", posted: "3d ago", tags: ["Kubernetes", "Docker"] },
  { id: 37, company: "Resend", companySlug: "resend", logoColor: "#000000", logoLetter: "R", title: "Software Engineer, API", role: "Software Engineer", roleSlug: "software-engineer", location: "Remote", locationSlug: "remote", salary: "$150k – $200k", posted: "1d ago", tags: ["TypeScript", "Node.js"] },
  { id: 38, company: "Turso", companySlug: "turso", logoColor: "#4FF8D2", logoLetter: "T", title: "Systems Engineer", role: "Software Engineer", roleSlug: "software-engineer", location: "Austin", locationSlug: "austin", salary: "$165k – $220k", posted: "5d ago", tags: ["Rust", "SQLite", "Edge"] },
];

// ─── Computed counts ───────────────────────────────────
function computeCounts(): { roles: RoleCategory[]; locations: LocationOption[] } {
  const roles = roleCategories.map((r) => ({
    ...r,
    count: r.slug === "all" ? allJobs.length : allJobs.filter((j) => j.roleSlug === r.slug).length,
  }));
  const locations = locationOptions.map((l) => ({
    ...l,
    count: l.slug === "all" ? allJobs.length : allJobs.filter((j) => j.locationSlug === l.slug).length,
  }));
  return { roles, locations };
}

const computed = computeCounts();
export const roleCategoriesWithCounts = computed.roles;
export const locationOptionsWithCounts = computed.locations;

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
