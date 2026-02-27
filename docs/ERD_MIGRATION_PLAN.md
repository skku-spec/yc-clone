---

# ✅ MIGRATION COMPLETED — 2026-02-27

**Status:** COMPLETED  
**Execution Method:** Supabase SQL Editor (Browser Automation)  
**Migration Script:** `scripts/sql/009-role-migration-actual.sql`  
**Result:** Role enum successfully consolidated to 3-role system (outsider, member, admin)

---

## What Actually Happened (vs. Planned)

### Reality vs. Plan Divergence

The migration plan assumed **14 tables** in production, but the actual schema only had **10 tables**. The following tables **never existed** in production:

| Missing Table | Assumed Purpose | Reason Not Found |
| --- | --- | --- |
| `members` | Admin-managed users (separate from auth) | Likely never created in production |
| `projects` | Entrepreneurship project records | Exists as `project_startups`, not matching plan |
| `member_projects` | Junction: members ↔ projects | Non-existent (depends on missing `members` & `projects`) |
| `project_news` | Project news/updates | Likely never created in production |

### Execution Changes

| Original Plan | Actual Execution | Reason |
| --- | --- | --- |
| 6-phase migration (files 003-008) | Single consolidated migration (file 009) | Reality check showed most phases unnecessary |
| Additive table creation + data transformation | Direct role enum change | No user data had the 4 extra roles |
| CLI-based migration | Supabase SQL Editor via browser | Direct SQL execution more reliable |

### Data Migration Reality

**Zero users had pre_runner/runner/alumni/mentor roles:**
- Query of `auth.users` joined with `profiles` showed all 7 users had `role = 'admin'`
- The 4 intermediate roles existed only as ENUM values, never as actual user data
- This made the planned 6-phase data transformation strategy **completely unnecessary**
- Simple one-step migration: Execute `009-role-migration-actual.sql`

### Successful Outcome

Despite the plan's assumptions being wrong, the **end goal was achieved:**
- ✅ Role enum consolidated to 3 values: `outsider`, `member`, `admin`
- ✅ Simplified role system reduces code complexity
- ✅ Zero data loss or corruption
- ✅ All 7 users remain as `admin` (expected)
- ✅ Code updated to use new 3-role enum throughout codebase

### Lessons Learned

1. **Assumption validation is critical:** The plan assumed 14 tables without verifying against production schema first
2. **Empty tables are common:** In development-stage projects, many planned tables are never actually populated
3. **Simplicity wins:** The actual migration was 1/6th of the planned complexity but just as effective
4. **Browser automation works:** Supabase SQL Editor is reliable for schema changes (better than assuming CLI would work)

---

## Original Plan (Historical Reference)

The document below represents the original comprehensive migration plan created on 2026-02-27. While reality diverged from the assumptions, it serves as a historical record of the planning process and the rationale for the role system consolidation.

---

# SPEC ERD 마이그레이션 계획서

> 작성일: 2026-02-27  
> 대상 시스템: SPEC (성균관대학교 창업학회) 웹 애플리케이션  
> 스택: Next.js 15 + Supabase (PostgreSQL)  
> 컨설턴트: Oracle (스키마 설계), Metis (위험 분석), Librarian (Supabase 모범 사례)

---

## 목차

1. [개요](#1-개요)
2. [현재 스키마 문제점](#2-현재-스키마-문제점)
3. [새 스키마 설계](#3-새-스키마-설계)
4. [마이그레이션 실행 계획](#4-마이그레이션-실행-계획)
5. [역할 매핑 전략](#5-역할-매핑-전략)
6. [profiles ↔ members 통합 전략](#6-profiles--members-통합-전략)
7. [JWT Token 전환 전략](#7-jwt-token-전환-전략)
8. [롤백 전략](#8-롤백-전략)
9. [위험 매트릭스](#9-위험-매트릭스)
10. [미해결 질문](#10-미해결-질문)
11. [코드 변경 영향 파일 목록](#11-코드-변경-영향-파일-목록)
12. [새 ERD 다이어그램](#12-새-erd-다이어그램-ascii)

---

## 1. 개요

### 1.1 현재 상태

| 항목 | 값 |
|------|----|
| 테이블 수 | 14개 |
| 역할(ENUM) | 6개: `outsider`, `pre_runner`, `runner`, `alumni`, `mentor`, `admin` |
| 아이덴티티 | 이중: `profiles` (auth 연동) + `members` (auth 미연동) |
| 보안 취약점 | members, projects RLS `WITH CHECK(true)` → 누구나 쓰기 가능 |
| 지원서 | `applications` 테이블에 `user_id` FK 없음, RLS 불명 |

### 1.2 목표 상태

| 항목 | 값 |
|------|----|
| 역할(ENUM) | 3개: `outsider`, `member`, `admin` |
| 아이덴티티 | 단일: `profiles` (auth 연동), 조직 정보는 `member_profiles`로 분리 |
| 지원 파이프라인 | `membership_applications` (auth 연동, RLS 완비) |
| 보안 | deny-by-default RLS, `WITH CHECK(true)` 전면 제거 |
| 감사 로그 | 역할 변경, 지원 상태 변경 모두 기록 |

### 1.3 비즈니스 모델

```
외부인(outsider)
    |
    | 지원서 제출 (membership_applications)
    |
    v
지원 검토 중 (under_review)
    |
    | 합격 (accepted) → 역할 자동 승격
    v
부원(member) ← member_profiles 자동 생성
    |
    | 관리자 수동 승격
    v
관리자(admin)
```

---

## 2. 현재 스키마 문제점

### 🔴 Critical — 즉시 수정 필요

#### 문제 1: 6역할 과잉 설계

현재 `user_role` ENUM은 `outsider`, `pre_runner`, `runner`, `alumni`, `mentor`, `admin` 6가지다. 코드 전체를 검토한 결과, `pre_runner`, `runner`, `alumni`, `mentor` 4개는 모두 동일한 WRITER_ROLES 집합에 포함되어 실질적으로 같은 권한을 가진다. 차이는 순전히 표시(display) 목적인데, 이를 권한 시스템과 혼재해놓아 복잡성만 증가시켰다.

**코드 근거:**
```typescript
// middleware.ts, lib/auth.ts 등에서 반복 등장
const WRITER_ROLES = ['pre_runner', 'runner', 'alumni', 'mentor', 'admin']
```

**결론:** `pre_runner`, `runner`, `alumni`, `mentor` → 모두 `member`로 통합. 조직 구분은 `member_labels`로 보존.

#### 문제 2: profiles ↔ members 이중 아이덴티티

| 속성 | `profiles` | `members` |
|------|-----------|-----------|
| auth 연동 | 있음 (PK = auth.users.id) | 없음 (독자 UUID) |
| 생성 방식 | 회원가입 시 자동 | 관리자 수동 입력 |
| 이름/사진/약력 | 있음 | 있음 (중복!) |
| 조직 정보 | 없음 | 있음 (department, parts 등) |

같은 사람이 두 테이블에 각각 레코드를 가질 수 있다. `member_projects`는 `members.id`를 참조하는데, 만약 `profiles` 기준으로 권한을 바꾸면 조인이 불가능해진다.

#### 문제 3: applications에 auth 연결 없음

`applications` 테이블에 `user_id` FK가 없다. 누가 지원했는지 인증 시스템과 매칭할 수 없어, 지원자가 자기 지원서를 보거나 중복 지원을 막는 것이 불가능하다. 또한 SQL 마이그레이션 파일에 이 테이블의 CREATE TABLE 구문이 없다 (대시보드에서 직접 생성한 것으로 추정).

---

### 🟡 Medium — 마이그레이션 중 수정

#### 문제 4: members, projects RLS 보안 취약점

```sql
-- 현재 (위험)
CREATE POLICY "admin_write_members"
  ON public.members FOR INSERT
  WITH CHECK (true);  -- 인증된 누구나 INSERT 가능!
```

`WITH CHECK(true)`는 RLS가 켜져 있어도 실질적으로 쓰기를 전혀 막지 않는다. 현재는 Server Action 레벨에서 admin 체크를 하고 있지만, API를 직접 호출하면 우회 가능하다.

#### 문제 5: library_items, launches에 created_by FK 없음

`library_items`와 `launches` 테이블에 누가 만들었는지 기록하는 `created_by` FK가 없다. `jobs`에는 있는데 이 두 테이블에는 빠져있다.

#### 문제 6: reactions 테이블 이모지 하드코딩

현재 `reactions` 테이블의 `emoji` 컬럼은 어떤 텍스트도 허용한다. 허용 이모지 목록이 코드에 하드코딩되어 있으며, DB 레벨 제약이 없다.

---

### 🟢 Minor — 기회가 될 때 수정

#### 문제 7: 한/영 enum 혼재

`members.member_type` CHECK 제약에 `'러너'`, `'프러너'`, `'alumni'`처럼 한국어와 영어가 섞여 있다. `project.status`에는 `'Active'`, `'Inactive'`처럼 대문자로 시작하는 값이 있다.

#### 문제 8: 메타필드 부재

`posts` 테이블에 `status` (draft/published/archived), `visibility` (public/members_only) 필드가 없다. 현재는 `published` boolean만 있어 임시저장, 멤버 전용 글 기능을 추가할 수 없다.

#### 문제 9: parts 배열 필드

`members.parts` (`text[]`)는 정규화되지 않은 배열 필드다. 파트별 통계, 파트 기반 권한 등을 추가하려면 별도 테이블로 분리해야 한다.

---

## 3. 새 스키마 설계

### 3.1 새 ENUM 타입

```sql
-- 기존 user_role(6개) 대체
CREATE TYPE public.spec_role AS ENUM (
  'outsider',
  'member',
  'admin'
);

-- 기존 post_type 대체 (소문자 통일)
CREATE TYPE public.post_kind AS ENUM (
  'blog',
  'news'
);

-- 글 발행 상태 (신규)
CREATE TYPE public.publish_status AS ENUM (
  'draft',
  'published',
  'archived'
);

-- 글 공개 범위 (신규)
CREATE TYPE public.content_visibility AS ENUM (
  'public',
  'members_only'
);

-- 지원서 상태 (기존 text 대체)
CREATE TYPE public.application_status AS ENUM (
  'draft',
  'submitted',
  'under_review',
  'accepted',
  'rejected',
  'withdrawn'
);

-- 채용공고 상태 (신규)
CREATE TYPE public.job_status AS ENUM (
  'draft',
  'published',
  'closed',
  'archived'
);

-- 라이브러리 아이템 유형 (기존 content_type 대체, 소문자)
CREATE TYPE public.library_item_kind AS ENUM (
  'article',
  'video',
  'book',
  'tool',
  'other'
);

-- 프로젝트 멤버 역할 (신규)
CREATE TYPE public.project_member_role AS ENUM (
  'owner',
  'maintainer',
  'contributor'
);
```

---

### 3.2 테이블별 설계

#### 테이블 1: `profiles` — 사용자 아이덴티티

**변경사항:** `role` 타입을 `user_role` → `spec_role`로 교체. 나머지 컬럼 유지.

```sql
CREATE TABLE public.profiles (
  id              uuid        NOT NULL,
  name            text        NOT NULL DEFAULT '',
  slug            text        NOT NULL,
  role            public.spec_role NOT NULL DEFAULT 'outsider',
  bio             text        NOT NULL DEFAULT '',
  photo           text        NOT NULL DEFAULT '',
  batch           text        NOT NULL DEFAULT '',
  company         text        NOT NULL DEFAULT '',
  username        text        NOT NULL DEFAULT '',
  first_name      text        NOT NULL DEFAULT '',
  last_name       text        NOT NULL DEFAULT '',
  linkedin_url    text        NOT NULL DEFAULT '',
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id)
    REFERENCES auth.users(id) ON DELETE CASCADE,
  CONSTRAINT profiles_slug_key UNIQUE (slug),
  CONSTRAINT profiles_slug_nonempty CHECK (length(slug) > 0)
);

CREATE UNIQUE INDEX profiles_username_unique
  ON public.profiles (username)
  WHERE username != '';
```

**FK 관계:**
- `id` → `auth.users(id)` ON DELETE CASCADE (1:1)

---

#### 테이블 2: `member_profiles` — 회원 조직 정보 (1:1 확장)

**변경사항:** `members` 테이블을 대체. PK가 곧 FK(`profiles.id`). auth 없는 기존 members 레코드는 별도 처리 필요.

```sql
CREATE TABLE public.member_profiles (
  profile_id      uuid        NOT NULL,
  department      text,
  major           text,
  student_id      text,
  phone           text,
  runner_batch    text,
  preneur_batch   text,
  graduation_year integer,
  joined_at       date        NOT NULL DEFAULT CURRENT_DATE,
  left_at         date,
  notes           text,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT member_profiles_pkey PRIMARY KEY (profile_id),
  CONSTRAINT member_profiles_profile_fkey FOREIGN KEY (profile_id)
    REFERENCES public.profiles(id) ON DELETE CASCADE
);

COMMENT ON TABLE public.member_profiles IS
  'profiles의 1:1 확장. 부원 이상(member/admin)만 레코드를 가진다.';
COMMENT ON COLUMN public.member_profiles.left_at IS
  '탈퇴/졸업 날짜. NULL이면 현재 활동 중.';
```

**FK 관계:**
- `profile_id` → `profiles(id)` ON DELETE CASCADE

---

#### 테이블 3: `parts` + `member_parts` — 파트 정규화

**변경사항:** `members.parts text[]` 배열을 정규화된 두 테이블로 분리.

```sql
CREATE TABLE public.parts (
  id    uuid NOT NULL DEFAULT gen_random_uuid(),
  name  text NOT NULL,
  slug  text NOT NULL,

  CONSTRAINT parts_pkey PRIMARY KEY (id),
  CONSTRAINT parts_slug_key UNIQUE (slug),
  CONSTRAINT parts_name_key UNIQUE (name)
);

-- 기본 파트 데이터
INSERT INTO public.parts (name, slug) VALUES
  ('기획', 'planning'),
  ('마케팅', 'marketing'),
  ('개발', 'development'),
  ('제작', 'production');

CREATE TABLE public.member_parts (
  profile_id  uuid NOT NULL,
  part_id     uuid NOT NULL,
  assigned_at timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT member_parts_pkey PRIMARY KEY (profile_id, part_id),
  CONSTRAINT member_parts_profile_fkey FOREIGN KEY (profile_id)
    REFERENCES public.member_profiles(profile_id) ON DELETE CASCADE,
  CONSTRAINT member_parts_part_fkey FOREIGN KEY (part_id)
    REFERENCES public.parts(id) ON DELETE RESTRICT
);
```

**FK 관계:**
- `member_parts.profile_id` → `member_profiles(profile_id)` ON DELETE CASCADE
- `member_parts.part_id` → `parts(id)` ON DELETE RESTRICT

---

#### 테이블 4: `member_labels` + `member_label_assignments` — 라벨 시스템

**변경사항:** `members.member_type` (러너/프러너/alumni), `members.batch_tags[]` 등을 유연한 라벨 시스템으로 교체. 권한과 무관하게 표시용으로만 사용.

```sql
CREATE TABLE public.member_labels (
  id          uuid NOT NULL DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  slug        text NOT NULL,
  color       text NOT NULL DEFAULT '#6B7280',
  description text NOT NULL DEFAULT '',
  created_at  timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT member_labels_pkey PRIMARY KEY (id),
  CONSTRAINT member_labels_slug_key UNIQUE (slug),
  CONSTRAINT member_labels_name_key UNIQUE (name)
);

-- 기본 라벨 데이터 (기존 member_type 값들)
INSERT INTO public.member_labels (name, slug, color, description) VALUES
  ('러너',   'runner',  '#3B82F6', '러너 트랙 부원'),
  ('프러너', 'preneur', '#8B5CF6', '프러너 트랙 부원'),
  ('alumni', 'alumni',  '#F59E0B', '졸업 동문'),
  ('mentor', 'mentor',  '#10B981', '멘토');

CREATE TABLE public.member_label_assignments (
  profile_id  uuid NOT NULL,
  label_id    uuid NOT NULL,
  batch_tag   text,
  assigned_at timestamptz NOT NULL DEFAULT now(),
  assigned_by uuid,

  CONSTRAINT member_label_assignments_pkey PRIMARY KEY (profile_id, label_id),
  CONSTRAINT mla_profile_fkey FOREIGN KEY (profile_id)
    REFERENCES public.member_profiles(profile_id) ON DELETE CASCADE,
  CONSTRAINT mla_label_fkey FOREIGN KEY (label_id)
    REFERENCES public.member_labels(id) ON DELETE RESTRICT,
  CONSTRAINT mla_assigned_by_fkey FOREIGN KEY (assigned_by)
    REFERENCES public.profiles(id) ON DELETE SET NULL
);

COMMENT ON COLUMN public.member_label_assignments.batch_tag IS
  '예: "3기 러너". 같은 라벨을 여러 기수에 걸쳐 가질 수 있음.';
```

---

#### 테이블 5: `membership_applications` — 지원서 (auth 연동)

**변경사항:** 기존 `applications` 테이블 대체. `profile_id` FK 추가, `status` ENUM으로 교체.

```sql
CREATE TABLE public.membership_applications (
  id             uuid                      NOT NULL DEFAULT gen_random_uuid(),
  profile_id     uuid,  -- NULL 허용: 비회원 지원 또는 백필 전
  batch          text                      NOT NULL,
  name           text                      NOT NULL,
  email          text                      NOT NULL,
  student_id     text,
  phone          text,
  major          text,
  introduction   text                      NOT NULL,
  vision         text,
  startup_idea   text,
  portfolio_url  text,
  equip          boolean                   NOT NULL DEFAULT false,
  photo_exp      boolean                   NOT NULL DEFAULT false,
  design_exp     boolean                   NOT NULL DEFAULT false,
  figma          boolean                   NOT NULL DEFAULT false,
  illustrator    boolean                   NOT NULL DEFAULT false,
  experience_extra text,
  status         public.application_status NOT NULL DEFAULT 'submitted',
  reviewed_by    uuid,
  created_at     timestamptz               NOT NULL DEFAULT now(),
  updated_at     timestamptz               NOT NULL DEFAULT now(),

  CONSTRAINT membership_applications_pkey PRIMARY KEY (id),
  CONSTRAINT ma_profile_fkey FOREIGN KEY (profile_id)
    REFERENCES public.profiles(id) ON DELETE SET NULL,
  CONSTRAINT ma_reviewed_by_fkey FOREIGN KEY (reviewed_by)
    REFERENCES public.profiles(id) ON DELETE SET NULL
);

-- 1인 1개 활성 지원 제약 (draft/submitted/under_review 상태만)
CREATE UNIQUE INDEX membership_applications_one_active_per_profile
  ON public.membership_applications (profile_id)
  WHERE profile_id IS NOT NULL
    AND status IN ('draft', 'submitted', 'under_review');

COMMENT ON TABLE public.membership_applications IS
  '입부 지원서. profile_id는 nullable (과거 데이터 호환).';
```

**FK 관계:**
- `profile_id` → `profiles(id)` ON DELETE SET NULL
- `reviewed_by` → `profiles(id)` ON DELETE SET NULL

---

#### 테이블 6: `membership_application_events` — 지원 상태 감사 로그

**변경사항:** 신규 테이블. 지원서 상태 변경 이력 전체 보존.

```sql
CREATE TABLE public.membership_application_events (
  id             uuid                      NOT NULL DEFAULT gen_random_uuid(),
  application_id uuid                      NOT NULL,
  from_status    public.application_status,
  to_status      public.application_status NOT NULL,
  changed_by     uuid,
  note           text,
  created_at     timestamptz               NOT NULL DEFAULT now(),

  CONSTRAINT mae_pkey PRIMARY KEY (id),
  CONSTRAINT mae_application_fkey FOREIGN KEY (application_id)
    REFERENCES public.membership_applications(id) ON DELETE CASCADE,
  CONSTRAINT mae_changed_by_fkey FOREIGN KEY (changed_by)
    REFERENCES public.profiles(id) ON DELETE SET NULL
);

CREATE INDEX idx_mae_application_id ON public.membership_application_events (application_id);
```

---

#### 테이블 7: `posts` — 블로그/뉴스

**변경사항:** `type` → `kind` (post_kind ENUM), `published boolean` → `status` (publish_status ENUM), `visibility` 컬럼 추가.

```sql
CREATE TABLE public.posts (
  id          uuid                       NOT NULL DEFAULT gen_random_uuid(),
  slug        text                       NOT NULL,
  title       text                       NOT NULL,
  excerpt     text                       NOT NULL DEFAULT '',
  content     text                       NOT NULL DEFAULT '',
  kind        public.post_kind           NOT NULL DEFAULT 'blog',
  status      public.publish_status      NOT NULL DEFAULT 'draft',
  visibility  public.content_visibility  NOT NULL DEFAULT 'public',
  author_id   uuid                       NOT NULL,
  featured    boolean                    NOT NULL DEFAULT false,
  image_url   text                       NOT NULL DEFAULT '',
  created_at  timestamptz                NOT NULL DEFAULT now(),
  updated_at  timestamptz                NOT NULL DEFAULT now(),

  CONSTRAINT posts_pkey PRIMARY KEY (id),
  CONSTRAINT posts_slug_key UNIQUE (slug),
  CONSTRAINT posts_slug_nonempty CHECK (length(slug) > 0),
  CONSTRAINT posts_title_nonempty CHECK (length(title) > 0),
  CONSTRAINT posts_author_fkey FOREIGN KEY (author_id)
    REFERENCES public.profiles(id) ON DELETE CASCADE
);
```

**마이그레이션 시 주의:** 기존 `published = true` → `status = 'published'`, `published = false` → `status = 'draft'`로 변환.

---

#### 테이블 8: `tags` + `post_tags`

**변경사항:** `post_tags`의 `(post_id, tag_id)` 복합 PK에 DEFERRABLE 제약 추가.

```sql
CREATE TABLE public.tags (
  id    uuid NOT NULL DEFAULT gen_random_uuid(),
  slug  text NOT NULL,
  label text NOT NULL,

  CONSTRAINT tags_pkey PRIMARY KEY (id),
  CONSTRAINT tags_slug_key UNIQUE (slug),
  CONSTRAINT tags_label_key UNIQUE (label),
  CONSTRAINT tags_slug_nonempty CHECK (length(slug) > 0),
  CONSTRAINT tags_label_nonempty CHECK (length(label) > 0)
);

CREATE TABLE public.post_tags (
  post_id    uuid        NOT NULL,
  tag_id     uuid        NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT post_tags_pkey PRIMARY KEY (post_id, tag_id),
  CONSTRAINT post_tags_post_fkey FOREIGN KEY (post_id)
    REFERENCES public.posts(id) ON DELETE CASCADE,
  CONSTRAINT post_tags_tag_fkey FOREIGN KEY (tag_id)
    REFERENCES public.tags(id) ON DELETE CASCADE
);
```

---

#### 테이블 9: `comments` — 댓글

**변경사항:** `parent_id` ON DELETE 동작을 `SET NULL`에서 `CASCADE`로 변경 검토 필요. 현재는 유지.

```sql
CREATE TABLE public.comments (
  id         uuid        NOT NULL DEFAULT gen_random_uuid(),
  post_id    uuid        NOT NULL,
  author_id  uuid        NOT NULL,
  content    text        NOT NULL,
  parent_id  uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT comments_pkey PRIMARY KEY (id),
  CONSTRAINT comments_content_nonempty CHECK (length(content) > 0),
  CONSTRAINT comments_post_fkey FOREIGN KEY (post_id)
    REFERENCES public.posts(id) ON DELETE CASCADE,
  CONSTRAINT comments_author_fkey FOREIGN KEY (author_id)
    REFERENCES public.profiles(id) ON DELETE CASCADE,
  CONSTRAINT comments_parent_fkey FOREIGN KEY (parent_id)
    REFERENCES public.comments(id) ON DELETE SET NULL
);
```

---

#### 테이블 10: `reaction_types` + `post_reactions`

**변경사항:** 기존 `reactions` 테이블 대체. 허용 이모지를 DB 레벨로 제어.

```sql
CREATE TABLE public.reaction_types (
  id    uuid NOT NULL DEFAULT gen_random_uuid(),
  emoji text NOT NULL,
  label text NOT NULL DEFAULT '',

  CONSTRAINT reaction_types_pkey PRIMARY KEY (id),
  CONSTRAINT reaction_types_emoji_key UNIQUE (emoji)
);

-- 기본 이모지 데이터
INSERT INTO public.reaction_types (emoji, label) VALUES
  ('👍', '좋아요'),
  ('❤️', '사랑해요'),
  ('🔥', '열정적이에요'),
  ('🎉', '축하해요'),
  ('🤔', '생각해볼게요');

CREATE TABLE public.post_reactions (
  post_id          uuid        NOT NULL,
  user_id          uuid        NOT NULL,
  reaction_type_id uuid        NOT NULL,
  created_at       timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT post_reactions_pkey PRIMARY KEY (post_id, user_id, reaction_type_id),
  CONSTRAINT pr_post_fkey FOREIGN KEY (post_id)
    REFERENCES public.posts(id) ON DELETE CASCADE,
  CONSTRAINT pr_user_fkey FOREIGN KEY (user_id)
    REFERENCES public.profiles(id) ON DELETE CASCADE,
  CONSTRAINT pr_reaction_type_fkey FOREIGN KEY (reaction_type_id)
    REFERENCES public.reaction_types(id) ON DELETE RESTRICT
);
```

---

#### 테이블 11: `jobs` — 채용공고

**변경사항:** `active boolean` → `status` (job_status ENUM).

```sql
CREATE TABLE public.jobs (
  id             uuid              NOT NULL DEFAULT gen_random_uuid(),
  company        text              NOT NULL,
  company_slug   text              NOT NULL,
  title          text              NOT NULL,
  description    text              NOT NULL DEFAULT '',
  role           text              NOT NULL,
  role_slug      text              NOT NULL,
  location       text              NOT NULL,
  location_slug  text              NOT NULL,
  salary         text              NOT NULL DEFAULT '',
  tags           text[]            NOT NULL DEFAULT '{}',
  remote         boolean           NOT NULL DEFAULT false,
  logo_color     text              NOT NULL DEFAULT '#16140f',
  logo_letter    text              NOT NULL DEFAULT 'S',
  logo_url       text              NOT NULL DEFAULT '',
  posted         text              NOT NULL DEFAULT '',
  status         public.job_status NOT NULL DEFAULT 'published',
  created_by     uuid              NOT NULL,
  created_at     timestamptz       NOT NULL DEFAULT now(),
  updated_at     timestamptz       NOT NULL DEFAULT now(),

  CONSTRAINT jobs_pkey PRIMARY KEY (id),
  CONSTRAINT jobs_created_by_fkey FOREIGN KEY (created_by)
    REFERENCES public.profiles(id) ON DELETE RESTRICT
);
```

**마이그레이션 시:** `active = true` → `status = 'published'`, `active = false` → `status = 'closed'`.

---

#### 테이블 12: `library_items` — 라이브러리

**변경사항:** `created_by` FK 추가, `type` → `kind` (library_item_kind ENUM, 소문자).

```sql
CREATE TABLE public.library_items (
  id               uuid                     NOT NULL DEFAULT gen_random_uuid(),
  slug             text                     NOT NULL,
  title            text                     NOT NULL,
  author           text                     NOT NULL,
  author_role      text                     NOT NULL DEFAULT '',
  kind             public.library_item_kind NOT NULL,
  categories       text[]                   NOT NULL DEFAULT '{}',
  description      text                     NOT NULL DEFAULT '',
  body             text                     NOT NULL DEFAULT '',
  date             text                     NOT NULL DEFAULT '',
  views            integer                  NOT NULL DEFAULT 0,
  duration         text                     NOT NULL DEFAULT '',
  youtube_id       text                     NOT NULL DEFAULT '',
  featured         boolean                  NOT NULL DEFAULT false,
  thumbnail_color  text                     NOT NULL DEFAULT '#16140f',
  created_by       uuid,  -- NULL 허용: 기존 데이터 호환
  created_at       timestamptz              NOT NULL DEFAULT now(),
  updated_at       timestamptz              NOT NULL DEFAULT now(),

  CONSTRAINT library_items_pkey PRIMARY KEY (id),
  CONSTRAINT library_items_slug_key UNIQUE (slug),
  CONSTRAINT library_items_slug_nonempty CHECK (length(slug) > 0),
  CONSTRAINT library_items_title_nonempty CHECK (length(title) > 0),
  CONSTRAINT library_items_created_by_fkey FOREIGN KEY (created_by)
    REFERENCES public.profiles(id) ON DELETE SET NULL
);
```

**ENUM 매핑:** `'Video'` → `'video'`, `'Essay'` → `'article'`, `'Podcast'` → `'other'`, `'Guide'` → `'other'`.

---

#### 테이블 13: `launches` — 런치

**변경사항:** `created_by` FK 추가.

```sql
CREATE TABLE public.launches (
  id          uuid        NOT NULL DEFAULT gen_random_uuid(),
  company     text        NOT NULL,
  slug        text        NOT NULL,
  tagline     text        NOT NULL,
  description text        NOT NULL DEFAULT '',
  category    text        NOT NULL DEFAULT '',
  batch       text        NOT NULL DEFAULT '',
  votes       integer     NOT NULL DEFAULT 0,
  active      boolean     NOT NULL DEFAULT true,
  created_by  uuid,  -- NULL 허용: 기존 데이터 호환
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT launches_pkey PRIMARY KEY (id),
  CONSTRAINT launches_slug_key UNIQUE (slug),
  CONSTRAINT launches_company_nonempty CHECK (length(company) > 0),
  CONSTRAINT launches_slug_nonempty CHECK (length(slug) > 0),
  CONSTRAINT launches_created_by_fkey FOREIGN KEY (created_by)
    REFERENCES public.profiles(id) ON DELETE SET NULL
);
```

---

#### 테이블 14: `projects` + `project_members` + `project_updates`

**변경사항:** `member_projects`를 `project_members`로 교체 (FK를 `members.id` → `member_profiles.profile_id`로 재연결). `project_news`를 `project_updates`로 교체 (created_by 추가).

```sql
CREATE TABLE public.projects (
  id              uuid    NOT NULL DEFAULT gen_random_uuid(),
  name            text    NOT NULL,
  slug            text    NOT NULL,
  one_liner       text,
  description     text,
  batch           text,
  industries      text[]  NOT NULL DEFAULT '{}',
  region          text,
  team_size       integer,
  is_hiring       boolean NOT NULL DEFAULT false,
  status          text    NOT NULL DEFAULT 'active'
                          CHECK (status IN ('active', 'inactive', 'acquired', 'public')),
  website         text,
  linkedin_url    text,
  twitter_url     text,
  github_url      text,
  logo_url        text,
  category        text    CHECK (category IN ('featured', 'breakthrough', NULL)),
  founded_year    integer,
  is_top_company  boolean NOT NULL DEFAULT false,
  is_nonprofit    boolean NOT NULL DEFAULT false,
  is_women_founded boolean NOT NULL DEFAULT false,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT projects_pkey PRIMARY KEY (id),
  CONSTRAINT projects_slug_key UNIQUE (slug)
);

CREATE TABLE public.project_members (
  profile_id  uuid                         NOT NULL,
  project_id  uuid                         NOT NULL,
  role        public.project_member_role   NOT NULL DEFAULT 'contributor',
  joined_at   timestamptz                  NOT NULL DEFAULT now(),

  CONSTRAINT project_members_pkey PRIMARY KEY (profile_id, project_id),
  CONSTRAINT pm_profile_fkey FOREIGN KEY (profile_id)
    REFERENCES public.member_profiles(profile_id) ON DELETE CASCADE,
  CONSTRAINT pm_project_fkey FOREIGN KEY (project_id)
    REFERENCES public.projects(id) ON DELETE CASCADE
);

CREATE TABLE public.project_updates (
  id         uuid        NOT NULL DEFAULT gen_random_uuid(),
  project_id uuid        NOT NULL,
  title      text        NOT NULL,
  url        text,
  date       text,
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT project_updates_pkey PRIMARY KEY (id),
  CONSTRAINT pu_project_fkey FOREIGN KEY (project_id)
    REFERENCES public.projects(id) ON DELETE CASCADE,
  CONSTRAINT pu_created_by_fkey FOREIGN KEY (created_by)
    REFERENCES public.profiles(id) ON DELETE SET NULL
);
```

---

#### 테이블 15: `role_change_events` — 역할 변경 감사 로그

**변경사항:** 신규 테이블.

```sql
CREATE TABLE public.role_change_events (
  id          uuid              NOT NULL DEFAULT gen_random_uuid(),
  profile_id  uuid              NOT NULL,
  from_role   public.spec_role,
  to_role     public.spec_role  NOT NULL,
  changed_by  uuid,
  reason      text,
  created_at  timestamptz       NOT NULL DEFAULT now(),

  CONSTRAINT role_change_events_pkey PRIMARY KEY (id),
  CONSTRAINT rce_profile_fkey FOREIGN KEY (profile_id)
    REFERENCES public.profiles(id) ON DELETE CASCADE,
  CONSTRAINT rce_changed_by_fkey FOREIGN KEY (changed_by)
    REFERENCES public.profiles(id) ON DELETE SET NULL
);

CREATE INDEX idx_rce_profile_id ON public.role_change_events (profile_id);
```

---

### 3.3 트리거 및 함수

#### `handle_profile_role_change()` — 역할 변경 시 자동 처리

```sql
CREATE OR REPLACE FUNCTION public.handle_profile_role_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- 역할이 변경된 경우에만 처리
  IF OLD.role = NEW.role THEN
    RETURN NEW;
  END IF;

  -- 감사 로그 기록
  INSERT INTO public.role_change_events (profile_id, from_role, to_role, changed_by)
  VALUES (NEW.id, OLD.role, NEW.role, auth.uid());

  -- outsider → member 또는 admin: member_profiles 자동 생성
  IF OLD.role = 'outsider' AND NEW.role IN ('member', 'admin') THEN
    INSERT INTO public.member_profiles (profile_id)
    VALUES (NEW.id)
    ON CONFLICT (profile_id) DO NOTHING;
  END IF;

  -- member → outsider: member_profiles.left_at 설정
  IF OLD.role = 'member' AND NEW.role = 'outsider' THEN
    UPDATE public.member_profiles
    SET left_at = CURRENT_DATE
    WHERE profile_id = NEW.id AND left_at IS NULL;
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER on_profile_role_change
  AFTER UPDATE OF role ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_profile_role_change();
```

#### `custom_access_token_hook()` — JWT claims 주입 (enum 의존성 제거 버전)

```sql
CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  claims jsonb;
  user_role_text text;  -- text 사용 (enum OID 의존성 제거)
BEGIN
  SELECT role::text INTO user_role_text
  FROM public.profiles
  WHERE id = (event->>'user_id')::uuid;

  claims := event->'claims';

  IF user_role_text IS NOT NULL THEN
    claims := jsonb_set(claims, '{user_role}', to_jsonb(user_role_text));
  ELSE
    claims := jsonb_set(claims, '{user_role}', '"outsider"');
  END IF;

  RETURN jsonb_set(event, '{claims}', claims);
END;
$$;

GRANT USAGE ON SCHEMA public TO supabase_auth_admin;
GRANT EXECUTE ON FUNCTION public.custom_access_token_hook(jsonb) TO supabase_auth_admin;
REVOKE EXECUTE ON FUNCTION public.custom_access_token_hook(jsonb) FROM anon, authenticated, public;
GRANT SELECT ON public.profiles TO supabase_auth_admin;
```

#### 역할 헬퍼 함수 업데이트

```sql
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT coalesce(
    nullif(current_setting('request.jwt.claims', true)::jsonb->>'user_role', ''),
    'outsider'
  );
$$;

CREATE OR REPLACE FUNCTION public.can_write()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT get_user_role() IN ('member', 'admin');
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT get_user_role() = 'admin';
$$;
```

---

### 3.4 RLS 정책 설계 원칙

1. **deny-by-default**: RLS를 활성화하면 정책이 없는 한 아무것도 허용하지 않는다.
2. **`CREATE OR REPLACE POLICY` 사용** (PG 15+): DROP 후 CREATE 사이의 보안 갭을 없앤다.
3. **`WITH CHECK(true)` 절대 금지**: 모든 쓰기 정책에 명시적인 관리자 체크 포함.
4. **서비스 롤 예외 없음**: 앱 코드는 항상 RLS를 통과해야 한다.

```sql
-- 올바른 관리자 쓰기 정책 패턴
CREATE OR REPLACE POLICY "members_insert_admin"
  ON public.member_profiles FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE OR REPLACE POLICY "members_update_admin"
  ON public.member_profiles FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());
```

---

## 4. 마이그레이션 실행 계획

> 각 Phase는 별도 PR로 분리. 반드시 스테이징 Supabase 프로젝트에서 먼저 실행.

---

### Phase 0: 긴급 보안 수정 (별도 PR, 오늘 당장)

**다운타임:** 없음  
**위험도:** 🔴 (수정 안 하면 보안 취약)  
**예상 소요:** 30분

이 Phase는 마이그레이션과 무관하게 즉시 실행해야 한다.

`pg_policies`에서 실제 정책명을 먼저 확인한 뒤 실행해야 한다. Supabase 환경별로 기존 정책명이 다를 수 있다.

```sql
-- Phase 0: members/projects RLS 보안 취약점 수정
SET lock_timeout = '5s';

-- 사전 점검: PostgreSQL 버전 확인 (15+ 필수)
SHOW server_version;
-- 결과가 15.x 이상이어야 CREATE OR REPLACE POLICY 사용 가능
-- PG14인 경우: DROP POLICY + CREATE POLICY를 트랜잭션 안에서 실행

-- 먼저 기존 정책 확인
SELECT schemaname, tablename, policyname, permissive, cmd
FROM pg_policies
WHERE tablename IN ('members', 'projects', 'member_projects', 'project_news');
-- 기존 정책 전부 삭제 후 새로 생성
-- DROP POLICY IF EXISTS "<actual_policy_name>" ON <table>;

-- members 테이블 쓰기 정책 수정
CREATE OR REPLACE POLICY "members_insert_admin"
  ON public.members FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE OR REPLACE POLICY "members_update_admin"
  ON public.members FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE OR REPLACE POLICY "members_delete_admin"
  ON public.members FOR DELETE
  TO authenticated
  USING (is_admin());

-- projects 테이블 쓰기 정책 수정
CREATE OR REPLACE POLICY "projects_insert_admin"
  ON public.projects FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE OR REPLACE POLICY "projects_update_admin"
  ON public.projects FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE OR REPLACE POLICY "projects_delete_admin"
  ON public.projects FOR DELETE
  TO authenticated
  USING (is_admin());

-- member_projects 쓰기 정책 수정
CREATE OR REPLACE POLICY "member_projects_insert_admin"
  ON public.member_projects FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE OR REPLACE POLICY "member_projects_update_admin"
  ON public.member_projects FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE OR REPLACE POLICY "member_projects_delete_admin"
  ON public.member_projects FOR DELETE
  TO authenticated
  USING (is_admin());

-- project_news 쓰기 정책 수정
CREATE OR REPLACE POLICY "project_news_insert_admin"
  ON public.project_news FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE OR REPLACE POLICY "project_news_update_admin"
  ON public.project_news FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

NOTIFY pgrst, 'reload schema';
```

---

### Phase 1: Additive — 새 테이블 및 컬럼 추가 (다운타임 없음)

**다운타임:** 없음  
**위험도:** 🟢 (추가만, 삭제 없음)  
**예상 소요:** 1시간

```sql
-- Phase 1: 새 ENUM 타입 생성 (트랜잭션 밖에서 실행)
-- ⚠️ Supabase CLI 마이그레이션이라면 별도 파일로 분리

CREATE TYPE public.spec_role AS ENUM ('outsider', 'member', 'admin');
CREATE TYPE public.post_kind AS ENUM ('blog', 'news');
CREATE TYPE public.publish_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE public.content_visibility AS ENUM ('public', 'members_only');
CREATE TYPE public.application_status AS ENUM (
  'draft', 'submitted', 'under_review', 'accepted', 'rejected', 'withdrawn'
);
CREATE TYPE public.job_status AS ENUM ('draft', 'published', 'closed', 'archived');
CREATE TYPE public.library_item_kind AS ENUM ('article', 'video', 'book', 'tool', 'other');
CREATE TYPE public.project_member_role AS ENUM ('owner', 'maintainer', 'contributor');
```

```sql
-- 트랜잭션 안에서 실행
BEGIN;
SET lock_timeout = '5s';

-- 새 테이블 생성
-- 아래 SQL은 Section 3.2의 각 테이블 DDL을 그대로 실행
-- 실행 전 반드시 Section 3.2를 참조하여 전체 DDL을 복사-붙여넣기
-- Section 3.2 참조: public.member_profiles
-- Section 3.2 참조: public.parts
-- Section 3.2 참조: public.member_parts
-- Section 3.2 참조: public.member_labels
-- Section 3.2 참조: public.member_label_assignments
-- Section 3.2 참조: public.role_change_events
-- Section 3.2 참조: public.membership_applications
-- Section 3.2 참조: public.membership_application_events
-- Section 3.2 참조: public.reaction_types
-- Section 3.2 참조: public.post_reactions
-- Section 3.2 참조: public.project_members
-- Section 3.2 참조: public.project_updates

-- 신규 테이블 RLS 활성화 (deny-by-default)
ALTER TABLE public.member_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.member_parts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.member_labels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.member_label_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.membership_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.membership_application_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reaction_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_reactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.role_change_events ENABLE ROW LEVEL SECURITY;

-- 기본 읽기 정책 (인증된 사용자)
CREATE POLICY "authenticated_read" ON public.member_profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated_read" ON public.parts FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated_read" ON public.member_parts FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated_read" ON public.member_labels FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated_read" ON public.member_label_assignments FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated_read" ON public.reaction_types FOR SELECT TO authenticated USING (true);
CREATE POLICY "anon_read" ON public.reaction_types FOR SELECT TO anon USING (true);

-- membership_applications: 본인 것만 읽기
CREATE POLICY "own_applications_read" ON public.membership_applications
  FOR SELECT TO authenticated USING (profile_id = auth.uid());
CREATE POLICY "admin_applications_read" ON public.membership_applications
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 쓰기 정책은 admin만
CREATE POLICY "admin_write" ON public.member_profiles FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));
-- (나머지 admin-only 테이블들도 동일 패턴)

-- applications에 user_id nullable FK 추가
ALTER TABLE public.applications
  ADD COLUMN IF NOT EXISTS profile_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL;

-- members에 profile_id nullable FK 추가
ALTER TABLE public.members
  ADD COLUMN IF NOT EXISTS profile_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL;

-- library_items에 created_by nullable FK 추가
ALTER TABLE public.library_items ADD COLUMN IF NOT EXISTS created_by uuid;
ALTER TABLE public.library_items
  ADD CONSTRAINT library_items_created_by_fkey
  FOREIGN KEY (created_by) REFERENCES public.profiles(id) ON DELETE SET NULL NOT VALID;

-- launches에 created_by nullable FK 추가
ALTER TABLE public.launches ADD COLUMN IF NOT EXISTS created_by uuid;
ALTER TABLE public.launches
  ADD CONSTRAINT launches_created_by_fkey
  FOREIGN KEY (created_by) REFERENCES public.profiles(id) ON DELETE SET NULL NOT VALID;

-- 기본 데이터 삽입
INSERT INTO public.parts (name, slug) VALUES
  ('기획', 'planning'), ('마케팅', 'marketing'),
  ('개발', 'development'), ('제작', 'production')
ON CONFLICT DO NOTHING;

INSERT INTO public.member_labels (name, slug, color, description) VALUES
  ('러너', 'runner', '#3B82F6', '러너 트랙 부원'),
  ('프러너', 'preneur', '#8B5CF6', '프러너 트랙 부원'),
  ('alumni', 'alumni', '#F59E0B', '졸업 동문'),
  ('mentor', 'mentor', '#10B981', '멘토')
ON CONFLICT DO NOTHING;

INSERT INTO public.reaction_types (emoji, label) VALUES
  ('👍', '좋아요'), ('❤️', '사랑해요'), ('🔥', '열정적이에요'),
  ('🎉', '축하해요'), ('🤔', '생각해볼게요')
ON CONFLICT DO NOTHING;

COMMIT;
```

```sql
-- Phase 1 완료 후 FK 검증 (별도 실행)
ALTER TABLE public.library_items VALIDATE CONSTRAINT library_items_created_by_fkey;
ALTER TABLE public.launches VALIDATE CONSTRAINT launches_created_by_fkey;
```

---

### Phase 2: Additive — 트리거 및 함수 추가 (다운타임 없음)

**다운타임:** 없음  
**위험도:** 🟢  
**예상 소요:** 30분

```sql
BEGIN;

-- 새 역할 헬퍼 함수 (전환 기간: old+new 역할 모두 처리)
-- 전환 기간 전용: 기존 JWT에 old role 값이 있을 수 있으므로 양쪽 허용
CREATE OR REPLACE FUNCTION public.can_write()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT get_user_role() IN ('member', 'admin', 'pre_runner', 'runner', 'alumni', 'mentor');
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT get_user_role() = 'admin';
$$;

-- 역할 변경 감사 트리거 (새 ENUM 사용 전이라 임시로 text 비교)
-- Phase 4 이후 handle_profile_role_change()로 교체

COMMIT;
```

---

### Phase 3: 데이터 마이그레이션 (다운타임 없음)

**다운타임:** 없음  
**위험도:** 🟡 (데이터 변경)  
**예상 소요:** 2-4시간 (데이터 양에 따라)

#### 3-A: members.profile_id 백필

```sql
-- Phase 3 사전 점검: 이메일 매칭 정확도 확인
-- 1. 중복 이메일 확인
SELECT email, count(*) FROM members WHERE email IS NOT NULL GROUP BY email HAVING count(*) > 1;
-- 2. auth.users 중복 이메일 확인
SELECT email, count(*) FROM auth.users GROUP BY email HAVING count(*) > 1;
-- 3. 매칭률 확인
SELECT count(*) AS total_members,
  count(CASE WHEN u.id IS NOT NULL THEN 1 END) AS matched,
  count(CASE WHEN u.id IS NULL THEN 1 END) AS unmatched
FROM members m LEFT JOIN auth.users u ON lower(m.email) = lower(u.email);
-- ⚠️ 매칭률이 50% 미만이면 수동 검토 후 진행

-- email 매칭으로 members와 profiles 연결
-- ⚠️ auth.users는 직접 쿼리 불가 → profiles.id(=auth.users.id)의 email은
--    auth 스키마에 있으므로 SECURITY DEFINER 함수 필요

CREATE OR REPLACE FUNCTION public.backfill_member_profile_ids()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  UPDATE public.members m
  SET profile_id = p.id
  FROM public.profiles p
  JOIN auth.users u ON u.id = p.id
  WHERE lower(m.email) = lower(u.email)
    AND m.profile_id IS NULL;

  RAISE NOTICE '백필 완료: % 레코드 업데이트',
    (SELECT count(*) FROM public.members WHERE profile_id IS NOT NULL);
END;
$$;

SELECT public.backfill_member_profile_ids();
DROP FUNCTION public.backfill_member_profile_ids();
```

#### 3-B: applications.profile_id 백필

```sql
CREATE OR REPLACE FUNCTION public.backfill_application_profile_ids()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  -- 이메일 매칭 (중복 이메일 주의: DISTINCT ON으로 최신 profiles 선택)
  UPDATE public.applications a
  SET profile_id = p.id
  FROM (
    SELECT DISTINCT ON (lower(u.email)) p.id, lower(u.email) as email
    FROM public.profiles p
    JOIN auth.users u ON u.id = p.id
    ORDER BY lower(u.email), p.created_at DESC
  ) p
  WHERE lower(a.email) = p.email
    AND a.profile_id IS NULL;

  RAISE NOTICE '지원서 백필 완료: % 레코드',
    (SELECT count(*) FROM public.applications WHERE profile_id IS NOT NULL);
END;
$$;

SELECT public.backfill_application_profile_ids();
DROP FUNCTION public.backfill_application_profile_ids();
```

#### 3-C: members → member_profiles 데이터 이전

```sql
-- profile_id가 연결된 members 레코드만 이전
INSERT INTO public.member_profiles (
  profile_id, department, major, student_id,
  phone, runner_batch, preneur_batch, notes, created_at
)
SELECT
  m.profile_id,
  m.department,
  m.major,
  m.student_id,
  m.phone,
  m.runner_batch,
  m.preneur_batch,
  m.notes,
  m.created_at
FROM public.members m
WHERE m.profile_id IS NOT NULL
ON CONFLICT (profile_id) DO NOTHING;

-- 이전된 레코드 수 확인
SELECT
  (SELECT count(*) FROM public.members WHERE profile_id IS NOT NULL) as members_with_profile,
  (SELECT count(*) FROM public.member_profiles) as member_profiles_count;
```

#### 3-D: members.batch_tags + member_type → member_label_assignments 이전

```sql
DO $$
DECLARE
  m record;
  label_id uuid;
  tag text;
  profile_role text;
BEGIN
  FOR m IN
    SELECT m.id, m.profile_id, m.member_type, m.batch_tags, p.role::text AS profile_role
    FROM public.members m
    JOIN public.profiles p ON p.id = m.profile_id
    WHERE profile_id IS NOT NULL
  LOOP
    profile_role := m.profile_role;

    -- member_type 라벨 할당
    IF m.member_type IS NOT NULL THEN
      SELECT id INTO label_id
      FROM public.member_labels
      WHERE name = m.member_type
        OR (m.member_type = 'runner' AND slug = 'runner')
        OR (m.member_type = '러너' AND slug = 'runner')
        OR (m.member_type = '프러너' AND slug = 'preneur')
        OR (m.member_type = 'alumni' AND slug = 'alumni');

      IF label_id IS NOT NULL THEN
        INSERT INTO public.member_label_assignments (profile_id, label_id)
        VALUES (m.profile_id, label_id)
        ON CONFLICT DO NOTHING;
      END IF;
    END IF;

    -- profiles.role = mentor 라벨 할당
    IF profile_role = 'mentor' THEN
      SELECT id INTO label_id
      FROM public.member_labels
      WHERE slug = 'mentor';

      IF label_id IS NOT NULL THEN
        INSERT INTO public.member_label_assignments (profile_id, label_id)
        VALUES (m.profile_id, label_id)
        ON CONFLICT DO NOTHING;
      END IF;
    END IF;

    -- batch_tags 이전
    FOREACH tag IN ARRAY COALESCE(m.batch_tags, '{}')
    LOOP
      -- batch_tag 컬럼에 원본 문자열 보존
      INSERT INTO public.member_label_assignments (profile_id, label_id, batch_tag)
      SELECT m.profile_id, id, tag
      FROM public.member_labels
      WHERE (tag LIKE '%러너%' AND slug = 'runner')
         OR (tag LIKE '%프러너%' AND slug = 'preneur')
         OR (tag LIKE '%alumni%' AND slug = 'alumni')
      ON CONFLICT (profile_id, label_id) DO UPDATE
        SET batch_tag = EXCLUDED.batch_tag;
    END LOOP;
  END LOOP;
END;
$$;
```

#### 3-E: reactions → post_reactions 변환

```sql
INSERT INTO public.post_reactions (post_id, user_id, reaction_type_id, created_at)
SELECT
  r.post_id,
  r.user_id,
  rt.id,
  r.created_at
FROM public.reactions r
JOIN public.reaction_types rt ON rt.emoji = r.emoji
ON CONFLICT DO NOTHING;

-- 매칭 안 된 이모지 확인
SELECT DISTINCT r.emoji
FROM public.reactions r
WHERE NOT EXISTS (
  SELECT 1 FROM public.reaction_types rt WHERE rt.emoji = r.emoji
);
```

#### 3-F: members.parts[] → member_parts 이전

```sql
INSERT INTO public.member_parts (member_profile_id, part_id)
SELECT mp.profile_id, p.id
FROM public.members m
JOIN public.member_profiles mp ON mp.profile_id = m.profile_id
CROSS JOIN LATERAL unnest(m.parts) AS part_name
JOIN public.parts p ON p.name = part_name
WHERE m.profile_id IS NOT NULL
ON CONFLICT DO NOTHING;
```

#### 3-G: project_news → project_updates 이전

```sql
INSERT INTO public.project_updates (project_id, created_by, title, body_md, published_at, created_at)
SELECT
  pn.project_id,
  (SELECT p.id FROM public.profiles p WHERE p.role = 'admin' LIMIT 1),  -- fallback created_by
  pn.title,
  COALESCE(pn.content, ''),
  pn.published_at,
  pn.created_at
FROM public.project_news pn;
```

---

### Phase 4: 스키마 변환 — ENUM 교체 (약 수초 다운타임)

**다운타임:** AccessExclusiveLock으로 profiles 테이블 수초 차단  
**위험도:** 🔴 (스키마 변경)  
**예상 소요:** 15분 (스테이징에서 먼저 테스트 필수)

> ⚠️ 반드시 Phase 5 코드 배포와 동시에 또는 직후에 실행. 단독 실행하면 앱이 깨진다.

```sql
-- [OUTSIDE TRANSACTION] user_role → spec_role 교체
-- ⚠️ 구 user_role 이름만 변경하고, 새 역할 타입은 이미 생성된 spec_role을 사용

ALTER TYPE public.user_role RENAME TO user_role__old;
```

```sql
-- [IN TRANSACTION] 컬럼 타입 변경 및 데이터 마이그레이션
BEGIN;
SET lock_timeout = '5s';

-- profiles.role: user_role__old → spec_role
-- 먼저 기존 값을 새 값으로 변환
UPDATE public.profiles
SET role = 'member'::text
WHERE role::text IN ('pre_runner', 'runner', 'alumni', 'mentor');

ALTER TABLE public.profiles
  ALTER COLUMN role TYPE public.spec_role
  USING CASE role::text
    WHEN 'outsider' THEN 'outsider'::public.spec_role
    WHEN 'member'   THEN 'member'::public.spec_role
    WHEN 'admin'    THEN 'admin'::public.spec_role
    -- 혹시 남아있는 old 값들
    WHEN 'pre_runner' THEN 'member'::public.spec_role
    WHEN 'runner'     THEN 'member'::public.spec_role
    WHEN 'alumni'     THEN 'member'::public.spec_role
    WHEN 'mentor'     THEN 'member'::public.spec_role
    ELSE 'outsider'::public.spec_role
  END;

-- posts: published boolean → status publish_status, type → kind
ALTER TABLE public.posts
  ADD COLUMN IF NOT EXISTS kind public.post_kind,
  ADD COLUMN IF NOT EXISTS status public.publish_status,
  ADD COLUMN IF NOT EXISTS visibility public.content_visibility;

UPDATE public.posts SET
  kind = type::text::public.post_kind,
  status = CASE WHEN published THEN 'published'::public.publish_status
                ELSE 'draft'::public.publish_status END,
  visibility = 'public'::public.content_visibility;

ALTER TABLE public.posts
  ALTER COLUMN kind SET NOT NULL,
  ALTER COLUMN status SET NOT NULL,
  ALTER COLUMN visibility SET NOT NULL;

-- jobs: active boolean → status job_status
ALTER TABLE public.jobs
  ADD COLUMN IF NOT EXISTS status public.job_status;

UPDATE public.jobs SET
  status = CASE WHEN active THEN 'published'::public.job_status
                ELSE 'closed'::public.job_status END;

ALTER TABLE public.jobs
  ALTER COLUMN status SET NOT NULL;

-- library_items: type → kind
ALTER TABLE public.library_items
  ADD COLUMN IF NOT EXISTS kind public.library_item_kind;

UPDATE public.library_items SET
  kind = CASE type::text
    WHEN 'Video'   THEN 'video'::public.library_item_kind
    WHEN 'Essay'   THEN 'article'::public.library_item_kind
    WHEN 'Podcast' THEN 'other'::public.library_item_kind
    WHEN 'Guide'   THEN 'other'::public.library_item_kind
    ELSE 'other'::public.library_item_kind
  END;

ALTER TABLE public.library_items
  ALTER COLUMN kind SET NOT NULL;

-- JWT hook 함수 업데이트 (enum OID 의존성 제거)
CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
RETURNS jsonb
LANGUAGE plpgsql STABLE SECURITY DEFINER
SET search_path = public AS $$
DECLARE
  claims jsonb;
  user_role_text text;
BEGIN
  SELECT role::text INTO user_role_text
  FROM public.profiles WHERE id = (event->>'user_id')::uuid;

  claims := event->'claims';
  claims := jsonb_set(claims, '{user_role}',
    to_jsonb(COALESCE(user_role_text, 'outsider')));
  RETURN jsonb_set(event, '{claims}', claims);
END;
$$;

GRANT USAGE ON SCHEMA public TO supabase_auth_admin;
GRANT EXECUTE ON FUNCTION public.custom_access_token_hook(jsonb) TO supabase_auth_admin;
REVOKE EXECUTE ON FUNCTION public.custom_access_token_hook(jsonb) FROM anon, authenticated, public;
GRANT SELECT ON public.profiles TO supabase_auth_admin;

-- 역할 헬퍼 함수 업데이트 (전환 완료 후 old 값 제거)
CREATE OR REPLACE FUNCTION public.can_write()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT get_user_role() IN ('member', 'admin');
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT get_user_role() = 'admin';
$$;

-- handle_profile_role_change 트리거 설치
CREATE OR REPLACE FUNCTION public.handle_profile_role_change()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public AS $$
BEGIN
  IF OLD.role = NEW.role THEN RETURN NEW; END IF;

  INSERT INTO public.role_change_events (profile_id, from_role, to_role, changed_by)
  VALUES (NEW.id, OLD.role, NEW.role, auth.uid());

  IF OLD.role = 'outsider' AND NEW.role IN ('member', 'admin') THEN
    INSERT INTO public.member_profiles (profile_id)
    VALUES (NEW.id) ON CONFLICT (profile_id) DO NOTHING;
  END IF;

  IF OLD.role = 'member' AND NEW.role = 'outsider' THEN
    UPDATE public.member_profiles
    SET left_at = CURRENT_DATE
    WHERE profile_id = NEW.id AND left_at IS NULL;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_profile_role_change ON public.profiles;
CREATE TRIGGER on_profile_role_change
  AFTER UPDATE OF role ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_profile_role_change();

-- RLS 정책 업데이트 (CREATE OR REPLACE, PG 15+)
-- posts RLS
CREATE OR REPLACE POLICY "posts_insert_blog_by_writer"
  ON public.posts FOR INSERT TO authenticated
  WITH CHECK (can_write() AND auth.uid() = author_id AND kind = 'blog');

CREATE OR REPLACE POLICY "posts_insert_news_by_admin"
  ON public.posts FOR INSERT TO authenticated
  WITH CHECK (is_admin() AND auth.uid() = author_id AND kind = 'news');

-- 나머지 테이블 RLS 정책도 동일하게 CREATE OR REPLACE로 갱신

COMMIT;
```

```sql
-- [POST-DEPLOY] 스키마 캐시 갱신
NOTIFY pgrst, 'reload schema';
```

---

### Phase 5: 코드 업데이트 (배포 창 필요)

**다운타임:** 배포 창 (수분)  
**위험도:** 🔴 (SQL + TS 동시 배포 필수)  
**예상 소요:** 1-2일 (코드 변경량)

> ⚠️ Phase 4 SQL과 Phase 5 코드 배포를 같은 배포 창에 실행. SQL만 먼저 하거나 코드만 먼저 하면 앱이 깨진다.
>
> **Phase 4+5 배포 런북:**
> 1. pg_dump로 백업 생성
> 2. 스테이징에서 Phase 4 SQL 테스트
> 3. 프로덕션 앱을 maintenance mode로 전환 (선택)
> 4. Phase 4 SQL 실행 (Supabase SQL Editor)
> 5. NOTIFY pgrst, 'reload schema' 실행
> 6. Phase 5 코드 변경 PR 머지 → Vercel 자동 배포
> 7. 배포 완료 확인 (health check)
> 8. maintenance mode 해제
> 9. 사용자 토큰 갱신 대기 (최대 1시간)

1. 11절 [코드 변경 영향 파일 목록](#11-코드-변경-영향-파일-목록) 참조하여 29개+ 파일 수정
2. TypeScript 타입 재생성:
   ```bash
   npx supabase gen types typescript --project-id <PROJECT_ID> > lib/supabase/types.ts
   ```
3. 빌드 및 린트 통과 확인:
   ```bash
   npm run lint && npx tsc --noEmit && npm run build
   ```

---

### Phase 6: 정리 (다운타임 없음)

**다운타임:** 없음  
**위험도:** 🟢  
**예상 소요:** 1시간

```sql
BEGIN;
SET lock_timeout = '5s';

-- 구 컬럼 삭제 (신규 컬럼으로 완전 전환 후)
ALTER TABLE public.posts
  DROP COLUMN IF EXISTS type,
  DROP COLUMN IF EXISTS published;

ALTER TABLE public.jobs
  DROP COLUMN IF EXISTS active;

ALTER TABLE public.library_items
  DROP COLUMN IF EXISTS type;

-- 구 ENUM 타입 삭제
DROP TYPE IF EXISTS public.user_role__old;
DROP TYPE IF EXISTS public.post_type;
DROP TYPE IF EXISTS public.content_type;

-- 구 테이블 삭제 (데이터 이전 확인 후)
-- ⚠️ 아래 3개 쿼리로 이전 완료 여부 확인 먼저
-- SELECT count(*) FROM public.members WHERE profile_id IS NULL;  → 0이어야 함
-- SELECT count(*) FROM public.reactions WHERE post_id NOT IN (SELECT post_id FROM public.post_reactions);
-- SELECT count(*) FROM public.member_projects;  → project_members에 모두 이전됐으면 DROP

DROP TABLE IF EXISTS public.member_projects;
DROP TABLE IF EXISTS public.project_news;
-- members는 이전 불가 레코드가 있을 수 있으므로 아카이브 후 결정
-- DROP TABLE IF EXISTS public.members;
-- DROP TABLE IF EXISTS public.applications;
-- DROP TABLE IF EXISTS public.reactions;

COMMIT;

NOTIFY pgrst, 'reload schema';
```

---

## 5. 역할 매핑 전략

| 현재 역할 | 새 역할 | 근거 |
|-----------|---------|------|
| `outsider` | `outsider` | 동일, 변경 없음 |
| `pre_runner` | `member` | WRITER_ROLES에 포함, 실질적 권한 동일 |
| `runner` | `member` | WRITER_ROLES에 포함, 실질적 권한 동일 |
| `alumni` | `member` | WRITER_ROLES에 포함, 실질적 권한 동일 |
| `mentor` | `member` | WRITER_ROLES에 포함, 실질적 권한 동일 |
| `admin` | `admin` | 동일, 변경 없음 |

### alumni/mentor 구분 보존

`alumni`와 `mentor`는 현재 코드에서 `WRITER_ROLES`에 포함되어 `pre_runner`, `runner`와 완전히 동일한 권한을 가진다. 권한 측면에서는 단순히 `member`로 통합하면 된다.

그러나 UI에서 이들을 구분해서 표시하는 경우(예: `app/founders/page.tsx`)를 위해, `member_labels` 시스템으로 구분을 보존한다.

```
alumni 역할 사용자 → 역할: member, 라벨: alumni
mentor 역할 사용자 → 역할: member, 라벨: mentor
runner 역할 사용자 → 역할: member, 라벨: runner (또는 preneur)
```

라벨은 권한과 완전히 분리되어 있다. `member_labels`를 아무리 많이 추가해도 권한에 영향을 주지 않는다.

---

## 6. profiles ↔ members 통합 전략

### 결정: 합치지 않고 확장 테이블 패턴 사용

Oracle과 Metis 모두 두 테이블을 하나로 합치는 것에 반대했다. 핵심 이유:

1. `profiles.id`는 `auth.users.id`와 동일 — auth 없이 profiles 레코드 생성 불가
2. 약 29명의 members는 auth 계정이 없는 역사적 기록일 수 있음
3. 합치면 모든 FK 연결 재작업 필요 (위험 증가)

### 새 아이덴티티 모델

```
auth.users (Supabase 관리)
    |
    | 1:1 (auth UID = profile ID)
    v
profiles (유일한 사람 아이덴티티)
  - name, bio, photo, role(spec_role), ...
    |
    | 1:1 (부원/관리자만)
    v
member_profiles (조직 정보 확장)
  - department, major, student_id, joined_at, ...
    |
    | 1:N
    v
member_parts, member_label_assignments, project_members
```

### auth 없는 기존 members 처리

```sql
-- auth 계정이 없는 members 확인
SELECT count(*) FROM public.members WHERE profile_id IS NULL;

-- 선택지 1: Supabase Auth API로 계정 생성 후 연결
-- 선택지 2: legacy_members 테이블로 아카이브 (권한 없이 기록만 보존)
CREATE TABLE public.legacy_members AS
SELECT * FROM public.members WHERE profile_id IS NULL;
```

### member_projects FK 재연결

Phase 3 완료 후, `member_projects`의 `member_id`(→members.id)를 `project_members`의 `profile_id`(→member_profiles.profile_id)로 재연결한다.

```sql
INSERT INTO public.project_members (profile_id, project_id, role)
SELECT
  m.profile_id,
  mp.project_id,
  CASE
    WHEN mp.role = 'owner' THEN 'owner'::public.project_member_role
    WHEN mp.role = 'maintainer' THEN 'maintainer'::public.project_member_role
    ELSE 'contributor'::public.project_member_role
  END
FROM public.member_projects mp
JOIN public.members m ON m.id = mp.member_id
WHERE m.profile_id IS NOT NULL
ON CONFLICT DO NOTHING;
```

---

## 7. JWT Token 전환 전략

### 문제

마이그레이션 후 기존 사용자의 JWT에는 old role 값(`pre_runner`, `runner` 등)이 캐싱되어 있다. Supabase Auth 기본 만료는 1시간이므로, 최악의 경우 1시간 동안 stale role로 권한 판단이 이루어진다.

### 전환 기간 대응

**Phase 2-4 기간 동안 (전환 기간):**

```sql
-- 전환 기간용 can_write() — old+new 역할 모두 허용
CREATE OR REPLACE FUNCTION public.can_write()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT get_user_role() IN (
    'member', 'admin',           -- new
    'pre_runner', 'runner', 'alumni', 'mentor'  -- old (JWT stale 대비)
  );
$$;
```

**Phase 5 배포 후:**

```sql
-- old role 값 제거
CREATE OR REPLACE FUNCTION public.can_write()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT get_user_role() IN ('member', 'admin');
$$;
```

### Hook text 캐스팅

`custom_access_token_hook()`에서 enum 타입 대신 text를 사용하면 enum recreate 시 함수가 깨지지 않는다 (3.3절 참조).

### 배포 후 토큰 갱신 옵션

1. **자연 만료 대기 (1시간):** 가장 간단. 전환 기간 can_write()로 대응하면 됨.
2. **강제 로그아웃:** Supabase Dashboard에서 모든 refresh token 무효화.
3. **선택적 무효화:** admin, member 역할 사용자만 대상으로 refresh token 무효화.

---

## 8. 롤백 전략

### 원칙

각 Phase는 별도 PR로 분리되므로 독립적으로 롤백 가능하다.

⚠️ Phase 4와 Phase 5는 반드시 같은 배포 창에서 실행해야 합니다.
Phase 4만 실행하고 Phase 5를 하지 않으면 앱이 깨집니다.
롤백 시 Phase 4+5를 함께 롤백해야 합니다.

### Phase별 롤백

| Phase | 롤백 방법 |
|-------|-----------|
| 0 | RLS 정책 `WITH CHECK(true)`로 되돌리기 (단, 권장하지 않음) |
| 1 | 신규 테이블 DROP, 추가 컬럼 DROP |
| 2 | 트리거/함수 이전 버전으로 CREATE OR REPLACE |
| 3 | 백필 데이터 NULL로 UPDATE (데이터 삭제는 불필요) |
| 4 | ENUM rename-recreate 역방향 실행 (아래 참조) |
| 5 | 코드 이전 커밋으로 revert |
| 6 | 삭제한 테이블 복구 (Phase 6 전에 백업 필수) |

### Phase 4 롤백 SQL

```sql
-- Phase 4 롤백: spec_role → user_role__old 역방향
BEGIN;
SET lock_timeout = '5s';

-- ⚠️ Phase 4 롤백은 역할 세분화 정보를 복구할 수 없습니다
-- (member → pre_runner 자동 복원 불가). 완전 복구가 필요하면 pg_dump 백업에서 복원해야 합니다.
-- spec_role을 old user_role 값으로 역변환 (정보 손실: member → pre_runner으로 임의 선택)
UPDATE public.profiles
SET role = 'pre_runner'::text
WHERE role::text = 'member';

ALTER TABLE public.profiles
  ALTER COLUMN role TYPE public.user_role__old
  USING role::text::public.user_role__old;

ALTER TYPE public.user_role__old RENAME TO user_role;

-- spec_role 타입 삭제
DROP TYPE IF EXISTS public.spec_role;

COMMIT;
```

> ⚠️ Phase 4 롤백 시 `member` → `pre_runner` 매핑은 정보 손실이 발생한다. 스테이징에서 충분히 검증하여 롤백 상황 자체를 방지해야 한다.

### 전체 백업

```bash
# 마이그레이션 시작 전 반드시 실행
pg_dump --schema=public --format=custom \
  "postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres" \
  > backup_before_migration_$(date +%Y%m%d_%H%M%S).dump
```

---

## 9. 위험 매트릭스

| 변경 | 위험도 | 이유 | 완화 방법 |
|------|--------|------|----------|
| Phase 0: RLS WITH CHECK 수정 | 🟡 중간 | 기존 Server Action 로직에 의존하던 부분 영향 가능 | Server Action admin 체크 코드 먼저 검증 |
| Phase 1: 새 테이블 추가 | 🟢 낮음 | 기존 코드 영향 없음 | 스테이징 확인 후 적용 |
| Phase 2: 트리거 추가 | 🟢 낮음 | CREATE OR REPLACE이므로 원복 용이 | 함수 로직 단위 테스트 |
| Phase 3: 이메일 백필 | 🟡 중간 | 중복 이메일 시 잘못된 연결 가능 | 백필 전 중복 이메일 수동 확인 |
| Phase 3: reactions 변환 | 🟡 중간 | 미지원 이모지 데이터 유실 | 매칭 안 된 이모지 목록 사전 확인 |
| Phase 4: ENUM 교체 | 🔴 높음 | profiles 테이블 AccessExclusiveLock (수초 차단) | `SET lock_timeout = '5s'` 필수, 스테이징 선행 테스트 |
| Phase 4: Hook 함수 교체 | 🔴 높음 | 교체 순간 JWT 발급 일시 실패 가능 | enum→text 캐스팅으로 분리, SAME 마이그레이션에서 처리 |
| Phase 5: 29개+ 파일 동시 변경 | 🔴 높음 | SQL과 코드 타이밍 불일치 시 앱 전체 중단 | 단일 PR로 SQL+코드 동시 배포, 전환 기간 can_write() 활용 |
| Phase 5: stale JWT | 🟡 중간 | 최대 1시간 old role 값으로 권한 판단 | 전환 기간 can_write()가 old+new 허용 |
| Phase 6: 구 테이블 DROP | 🟡 중간 | 참조 누락 시 앱 에러 | 코드에서 해당 테이블 참조 완전 제거 확인 후 DROP |
| PostgREST 캐시 지연 | 🟢 낮음 | 변경 후 최대 10초 스테일 응답 | `NOTIFY pgrst, 'reload schema'` 즉시 실행 |
| auth 없는 members | 🟡 중간 | profile_id NULL인 멤버는 이전 불가 | legacy_members로 아카이브, 수동 처리 |
| member_projects FK 재연결 | 🟡 중간 | profile_id NULL인 members 데이터 유실 | 재연결 전 NULL 레코드 수 확인 |

---

## 10. 미해결 질문

Metis가 제기한 질문들로, 마이그레이션 시작 전에 답해야 한다.

1. **스테이징 Supabase 프로젝트가 있는가?**
   Phase 4 이상은 스테이징 없이 프로덕션에서 직접 실행하는 것은 극도로 위험하다.

2. **현재 각 역할별 실제 사용자 수는?**
   ```sql
   SELECT role, count(*) FROM public.profiles GROUP BY role ORDER BY count DESC;
   ```
   이 숫자를 알면 마이그레이션 전후 데이터 정합성 검증이 가능하다.

3. **members와 auth.users가 email로 매칭되는 건 몇 건?**
   ```sql
   -- SECURITY DEFINER 함수 안에서 실행
   SELECT count(*) FROM public.members m
   JOIN auth.users u ON lower(m.email) = lower(u.email)
   WHERE m.email IS NOT NULL;
   ```

4. **applications 테이블의 현재 RLS 상태는?**
   Supabase Dashboard → Table Editor → applications → RLS 탭에서 확인.

5. **`components/Navbar.tsx` vs `components/layout/Navbar.tsx` — 어느 것이 활성?**
   두 파일 모두 역할 레이블을 표시한다면 둘 다 수정해야 한다.

6. **`lib/founders-data.ts`는 아직 사용 중인가?**
   `members` 테이블로 대체되었다면 삭제 대상. 아직 사용 중이라면 역할 값 업데이트 필요.

7. **`member_type` ('러너'/'프러너'/'alumni')는 새 역할 시스템과 별도로 UI에 표시되는가?**
   `app/founders/page.tsx` 등에서 타입 필터링을 한다면 `member_labels` 기반으로 전환 필요.

8. **허용 가능한 다운타임 창은?**
   Phase 4는 profiles 테이블 수초 차단이 발생한다. 새벽 시간대 배포 등을 고려해야 한다.

---

## 11. 코드 변경 영향 파일 목록

Phase 5에서 수정해야 할 파일 목록. 모두 동일 PR에서 동시 변경.

| 파일 | 변경 내용 |
|------|-----------|
| `lib/auth.ts` | `UserRole` 타입 (`pre_runner`, `runner`, `alumni`, `mentor` 제거, `member` 추가), `ROLE_LEVEL` 맵 업데이트, `canWrite()` 로직 단순화 |
| `middleware.ts` | `WRITER_ROLES` 배열: `['pre_runner', 'runner', 'alumni', 'mentor', 'admin']` → `['member', 'admin']` |
| `lib/actions/posts.ts` | `WRITER_ROLES` 배열 동일하게 업데이트 |
| `lib/actions/comments.ts` | `WRITER_ROLES` 배열 업데이트 |
| `lib/actions/reactions.ts` | `WRITER_ROLES` Set 업데이트 |
| `lib/actions/admin.ts` | `VALID_ROLES` record: 새 3개 역할로 교체 |
| `lib/supabase/types.ts` | `supabase gen types` 재실행으로 자동 업데이트 (수동 확인 필요) |
| `app/profile/page.tsx` | 역할 표시 레이블: `pre_runner` → `'멤버'` 등 |
| `app/admin/users/UsersClient.tsx` | `ROLE_OPTIONS` 배열, 역할 색상 맵 업데이트 |
| `app/blog/BlogPageClient.tsx` | `WRITER_ROLES` 참조 업데이트 |
| `app/blog/PostEditorForm.tsx` | `WRITER_ROLES` 참조 업데이트 |
| `app/dashboard/layout.tsx` | `requireRole("pre_runner")` → `requireRole("member")` |
| `components/Navbar.tsx` | 역할 레이블 표시 업데이트 |
| `components/layout/Navbar.tsx` | 역할 레이블 표시 업데이트 (중복 컴포넌트 여부 확인) |
| `components/blog/CommentSection.tsx` | `WRITER_ROLES` 참조 업데이트 |
| `hooks/useUser.ts` | 기본 역할 fallback: `outsider` 확인 |
| `app/founders/page.tsx` | `member_type` 필터 → `member_labels` 기반으로 전환 |

**추가로 확인 필요한 파일들:**

| 파일 | 확인 내용 |
|------|-----------|
| `lib/founders-data.ts` | 사용 중이면 역할 값 확인, 미사용이면 삭제 |
| `lib/actions/applications.ts` (있다면) | `membership_applications` 테이블로 마이그레이션 |
| `lib/actions/members.ts` (있다면) | `member_profiles` 테이블 참조로 업데이트 |
| `app/admin/members/` 하위 파일들 | `members` → `member_profiles` 쿼리 전환 |
| `app/apply/` 하위 파일들 | `applications` → `membership_applications` 전환 |
| Supabase RLS 정책에서 직접 역할 비교하는 부분 | `get_user_role() = 'pre_runner'` 같은 패턴 검색 |

**Supabase 설정 확인:**

| 항목 | 변경 내용 |
|------|-----------|
| Supabase Dashboard → Auth → Hooks | `custom_access_token_hook` 함수 연결 확인 |
| Supabase Dashboard → Auth → JWT Settings | JWT 만료 시간 확인 |
| `.env` / Vercel 환경변수 | 변경 없음 (Supabase URL/KEY 동일) |

---

## 12. 새 ERD 다이어그램 (ASCII)

```
┌─────────────────┐           ┌─────────────────────┐
│   auth.users    │           │      profiles        │
│─────────────────│           │─────────────────────│
│ id (uuid) PK    │──1:1─────▶│ id (uuid) PK/FK     │
└─────────────────┘           │ name                 │
                              │ slug (unique)         │
                              │ role (spec_role)      │
                              │   outsider/member/    │
                              │   admin               │
                              │ bio, photo, batch,... │
                              └──────────┬────────────┘
                                         │ 1:1 (member/admin만)
                                         ▼
                              ┌─────────────────────┐
                              │   member_profiles    │
                              │─────────────────────│
                              │ profile_id PK/FK     │
                              │ department           │
                              │ major, student_id    │
                              │ runner_batch         │
                              │ preneur_batch        │
                              │ joined_at, left_at   │
                              └──┬────────────────┬──┘
                                 │ 1:N            │ 1:N
                    ┌────────────┘                └────────────┐
                    ▼                                          ▼
         ┌──────────────────┐                    ┌───────────────────────┐
         │   member_parts   │                    │ member_label_         │
         │──────────────────│                    │ assignments           │
         │ profile_id FK    │                    │─────────────────────── │
         │ part_id FK  ─────│──▶ parts           │ profile_id FK         │
         └──────────────────┘                    │ label_id FK ──────────│──▶ member_labels
                                                 │ batch_tag             │
                                                 └───────────────────────┘


┌──────────────────────┐          ┌──────────────────────┐
│  membership_         │          │  membership_          │
│  applications        │          │  application_events   │
│──────────────────────│          │──────────────────────│
│ id PK                │◀─────────│ application_id FK    │
│ profile_id FK (null) │          │ from_status          │
│ batch, name, email   │          │ to_status            │
│ status               │          │ changed_by FK        │
│  (application_status)│          │ created_at           │
│ reviewed_by FK       │          └──────────────────────┘
└──────────────────────┘


                  ┌──────────────────┐
                  │      posts       │
                  │──────────────────│
                  │ id PK            │
                  │ slug (unique)    │
                  │ title, content   │
                  │ kind (post_kind) │
                  │ status           │
                  │  (publish_status)│
                  │ visibility       │
                  │ author_id FK ────│──▶ profiles
                  └────────┬─────────┘
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
  ┌──────────────┐  ┌───────────┐  ┌───────────────────┐
  │   post_tags  │  │ comments  │  │   post_reactions   │
  │──────────────│  │───────────│  │───────────────────│
  │ post_id FK   │  │ id PK     │  │ post_id FK        │
  │ tag_id FK ───│─▶│ post_id FK│  │ user_id FK ───────│──▶ profiles
  └──────────────┘  │author_idFK│  │ reaction_type_id  │
       │            │ parent_id │  │  FK ──────────────│──▶ reaction_types
       ▼            └───────────┘  └───────────────────┘
  ┌──────────┐


                  ┌──────────────────┐
                  │    projects      │
                  │──────────────────│
                  │ id PK            │
                  │ name, slug       │
                  │ status           │
                  └────────┬─────────┘
           ┌───────────────┼
           ▼               ▼
  ┌─────────────────┐  ┌──────────────────┐
  │ project_members │  │ project_updates  │
  │─────────────────│  │──────────────────│
  │ profile_id FK ──│─▶ member_profiles  │ project_id FK
  │ project_id FK   │  │ title, url, date │
  │ role            │  │ created_by FK    │
  │  (project_      │  └──────────────────┘
  │   member_role)  │
  └─────────────────┘


  ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
  │      jobs        │   │  library_items   │   │    launches      │
  │──────────────────│   │──────────────────│   │──────────────────│
  │ id PK            │   │ id PK            │   │ id PK            │
  │ status(job_status│   │ kind             │   │ company, slug    │
  │ created_by FK ───│   │ (library_item_   │   │ created_by FK    │
  └──────────────────┘   │  kind)           │   └──────────────────┘
         │               │ created_by FK    │          │
         └───────────────┴──────────────────┴──────────┘
                         FK → profiles.id


  ┌──────────────────┐   ┌──────────────────┐
  │ role_change_     │   │   tags           │
  │ events           │   │──────────────────│
  │──────────────────│   │ id PK            │
  │ profile_id FK    │   │ slug (unique)    │
  │ from_role        │   │ label (unique)   │
  │ to_role          │   └──────────────────┘
  │ changed_by FK    │
  └──────────────────┘

ENUM 타입 요약:
  spec_role:           outsider | member | admin
  post_kind:           blog | news
  publish_status:      draft | published | archived
  content_visibility:  public | members_only
  application_status:  draft | submitted | under_review | accepted | rejected | withdrawn
  job_status:          draft | published | closed | archived
  library_item_kind:   article | video | book | tool | other
  project_member_role: owner | maintainer | contributor
```

---

## 부록: 체크리스트

### Phase 0 완료 기준
- [ ] members INSERT/UPDATE/DELETE 정책에서 `WITH CHECK(true)` 제거
- [ ] projects, member_projects, project_news 동일 수정
- [ ] `NOTIFY pgrst, 'reload schema'` 실행
- [ ] 앱에서 admin 쓰기 동작 확인

### Phase 1 완료 기준
- [ ] 새 ENUM 8개 생성 확인
- [ ] 신규 테이블 11개 생성 확인
- [ ] applications.profile_id, members.profile_id nullable FK 추가 확인
- [ ] library_items.created_by, launches.created_by nullable FK 추가 확인
- [ ] 기본 데이터 (parts, member_labels, reaction_types) 삽입 확인

### Phase 2 완료 기준
- [ ] 전환 기간용 `can_write()` 함수 (old+new 역할 모두 허용) 배포 확인
- [ ] `is_admin()` 함수가 `admin`만 허용하도록 배포 확인

### Phase 3 완료 기준
- [ ] `members.profile_id` 백필 완료, NULL 건수 최소화
- [ ] `applications.profile_id` 백필 완료
- [ ] `member_profiles` 데이터 이전 완료
- [ ] `member_label_assignments` 이전 완료
- [ ] `post_reactions` 이전 완료, 유실된 이모지 없음

### Phase 4 완료 기준
- [ ] 스테이징에서 Phase 4 SQL 성공 실행 확인
- [ ] `profiles.role` 컬럼 타입이 `spec_role`로 변경됨
- [ ] 모든 old role 값이 `member`로 변환됨
- [ ] `custom_access_token_hook()` text 캐스팅 버전으로 교체
- [ ] `can_write()`, `is_admin()` 새 역할 값으로 업데이트
- [ ] `NOTIFY pgrst, 'reload schema'` 실행

### Phase 5 완료 기준
- [ ] 29개+ TypeScript 파일 역할 문자열 변경
- [ ] `npm run lint` 통과
- [ ] `npx tsc --noEmit` 통과
- [ ] `npm run build` 성공
- [ ] `supabase gen types` 재실행 후 타입 오류 없음
- [ ] 스테이징 앱에서 로그인, 글 작성, 관리자 기능 전체 동작 확인

### Phase 6 완료 기준
- [ ] 구 컬럼 (posts.type, posts.published, jobs.active, library_items.type) 삭제
- [ ] 구 ENUM (user_role__old, post_type, content_type) 삭제
- [ ] 데이터 이전 완료된 구 테이블 (member_projects, project_news) 삭제
- [ ] 최종 `NOTIFY pgrst, 'reload schema'` 실행
