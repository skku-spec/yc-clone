-- ============================================================
-- Migration: members, projects, member_projects, project_news
-- SPEC-web Supabase migration
-- ============================================================

-- ─── Projects (= Companies/Startups) ────────────────────────

CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  one_liner TEXT,
  description TEXT,
  batch TEXT,
  industries TEXT[] DEFAULT '{}',
  region TEXT,
  team_size INTEGER,
  is_hiring BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive', 'Acquired', 'Public')),
  website TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  github_url TEXT,
  logo_url TEXT,
  category TEXT CHECK (category IS NULL OR category IN ('featured', 'breakthrough')),
  founded_year INTEGER,
  is_top_company BOOLEAN DEFAULT false,
  is_nonprofit BOOLEAN DEFAULT false,
  is_women_founded BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Members (SPEC 활동 인원) ───────────────────────────────

CREATE TABLE IF NOT EXISTS members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,

  -- Private fields (admin-only, not displayed on public site)
  student_id TEXT,
  phone TEXT,
  email TEXT,

  -- Public profile fields
  major TEXT,
  runner_batch TEXT,          -- 러너 기수: '1기', '2기', '3기'
  preneur_batch TEXT,         -- 프러너 기수: '3기', '4기' (nullable)
  batch_tags TEXT[] DEFAULT '{}',  -- e.g. ['1기 러너', '3기 프러너']
  member_type TEXT NOT NULL DEFAULT 'runner'
    CHECK (member_type IN ('러너', '프러너', 'alumni')),

  -- SPEC organization
  department TEXT,            -- '대외홍보부', '기획운영부', '학술전략부'
  role TEXT,                  -- '부원', '부장', '회장', '부회장'
  parts TEXT[] DEFAULT '{}',  -- ['기획', '마케팅', '개발', '제작']

  -- Display
  photo_url TEXT,
  linkedin_url TEXT,
  bio TEXT,                   -- 한줄소개

  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Member ↔ Project (many-to-many) ────────────────────────

CREATE TABLE IF NOT EXISTS member_projects (
  member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  role TEXT,                  -- optional role within the project
  PRIMARY KEY (member_id, project_id)
);

-- ─── Project News ───────────────────────────────────────────

CREATE TABLE IF NOT EXISTS project_news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  url TEXT,
  date TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Indexes ────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_members_runner_batch ON members(runner_batch);
CREATE INDEX IF NOT EXISTS idx_members_member_type ON members(member_type);
CREATE INDEX IF NOT EXISTS idx_members_slug ON members(slug);
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_batch ON projects(batch);
CREATE INDEX IF NOT EXISTS idx_member_projects_member ON member_projects(member_id);
CREATE INDEX IF NOT EXISTS idx_member_projects_project ON member_projects(project_id);
CREATE INDEX IF NOT EXISTS idx_project_news_project ON project_news(project_id);

-- ─── RLS (Row Level Security) ───────────────────────────────

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE member_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_news ENABLE ROW LEVEL SECURITY;

-- Public read access for non-sensitive data
CREATE POLICY "Public can read projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Public can read members (public fields)"
  ON members FOR SELECT
  USING (true);

CREATE POLICY "Public can read member_projects"
  ON member_projects FOR SELECT
  USING (true);

CREATE POLICY "Public can read project_news"
  ON project_news FOR SELECT
  USING (true);

-- Admin write access
CREATE POLICY "Admins can insert projects"
  ON projects FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can update projects"
  ON projects FOR UPDATE
  USING (true);

CREATE POLICY "Admins can insert members"
  ON members FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can update members"
  ON members FOR UPDATE
  USING (true);

CREATE POLICY "Admins can insert member_projects"
  ON member_projects FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can insert project_news"
  ON project_news FOR INSERT
  WITH CHECK (true);
