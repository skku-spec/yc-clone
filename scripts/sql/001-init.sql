-- ============================================================
-- SPEC 1차 초기 스키마 마이그레이션
-- Supabase SQL Editor에서 수동 실행
-- ============================================================

-- ------------------------------------------------------------
-- 0) 확장 / 공통 유틸
-- ------------------------------------------------------------
create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.slugify(input text)
returns text
language sql
immutable
as $$
  select trim(both '-' from regexp_replace(lower(coalesce(input, '')), '[^a-z0-9]+', '-', 'g'));
$$;

-- ------------------------------------------------------------
-- 1) ENUM 정의
-- ------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type public.user_role as enum ('outsider', 'pre_runner', 'runner', 'alumni', 'mentor', 'admin');
  end if;

  if not exists (select 1 from pg_type where typname = 'post_type') then
    create type public.post_type as enum ('news', 'blog');
  end if;

  if not exists (select 1 from pg_type where typname = 'content_type') then
    create type public.content_type as enum ('Video', 'Essay', 'Podcast', 'Guide');
  end if;
end
$$;

-- ------------------------------------------------------------
-- 2) 테이블 정의
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null default '',
  slug text not null unique,
  role public.user_role not null default 'outsider',
  bio text not null default '',
  photo text not null default '',
  batch text not null default '',
  company text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_slug_not_blank check (length(trim(slug)) > 0)
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  content text not null default '',
  type public.post_type not null default 'blog',
  author_id uuid not null references public.profiles(id) on delete cascade,
  featured boolean not null default false,
  image_url text not null default '',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint posts_slug_not_blank check (length(trim(slug)) > 0),
  constraint posts_title_not_blank check (length(trim(title)) > 0)
);

create table if not exists public.tags (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  label text not null unique,
  constraint tags_slug_not_blank check (length(trim(slug)) > 0),
  constraint tags_label_not_blank check (length(trim(label)) > 0)
);

create table if not exists public.post_tags (
  post_id uuid not null references public.posts(id) on delete cascade,
  tag_id uuid not null references public.tags(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (post_id, tag_id)
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  parent_id uuid references public.comments(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint comments_content_not_blank check (length(trim(content)) > 0)
);

create table if not exists public.reactions (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  emoji text not null,
  created_at timestamptz not null default now(),
  constraint reactions_emoji_not_blank check (length(trim(emoji)) > 0),
  constraint reactions_unique_per_user unique (post_id, user_id, emoji)
);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  company_slug text not null,
  title text not null,
  description text not null default '',
  role text not null,
  role_slug text not null,
  location text not null,
  location_slug text not null,
  salary text not null default '',
  tags text[] not null default '{}',
  remote boolean not null default false,
  logo_color text not null default '#16140f',
  logo_letter text not null default 'S',
  posted text not null default '',
  active boolean not null default true,
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.library_items (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  author text not null,
  author_role text not null default '',
  type public.content_type not null,
  categories text[] not null default '{}',
  description text not null default '',
  body text not null default '',
  date text not null default '',
  views integer not null default 0,
  duration text not null default '',
  youtube_id text not null default '',
  featured boolean not null default false,
  thumbnail_color text not null default '#16140f',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint library_items_slug_not_blank check (length(trim(slug)) > 0),
  constraint library_items_title_not_blank check (length(trim(title)) > 0)
);

create table if not exists public.launches (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  slug text not null unique,
  tagline text not null,
  description text not null default '',
  category text not null default '',
  batch text not null default '',
  votes integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint launches_slug_not_blank check (length(trim(slug)) > 0),
  constraint launches_company_not_blank check (length(trim(company)) > 0)
);

-- ------------------------------------------------------------
-- 3) 인덱스
-- ------------------------------------------------------------
create index if not exists idx_profiles_role on public.profiles(role);
create index if not exists idx_profiles_slug on public.profiles(slug);

create index if not exists idx_posts_author_id on public.posts(author_id);
create index if not exists idx_posts_type_published_created_at on public.posts(type, published, created_at desc);
create index if not exists idx_posts_published_created_at on public.posts(published, created_at desc);

create index if not exists idx_post_tags_tag_id on public.post_tags(tag_id);

create index if not exists idx_comments_post_id_created_at on public.comments(post_id, created_at asc);
create index if not exists idx_comments_author_id on public.comments(author_id);
create index if not exists idx_comments_parent_id on public.comments(parent_id);

create index if not exists idx_reactions_post_id on public.reactions(post_id);
create index if not exists idx_reactions_user_id on public.reactions(user_id);

create index if not exists idx_jobs_active_created_at on public.jobs(active, created_at desc);
create index if not exists idx_jobs_company_slug on public.jobs(company_slug);

create index if not exists idx_library_items_type_created_at on public.library_items(type, created_at desc);
create index if not exists idx_library_items_featured_created_at on public.library_items(featured, created_at desc);

create index if not exists idx_launches_active_created_at on public.launches(active, created_at desc);
create index if not exists idx_launches_votes on public.launches(votes desc);

-- ------------------------------------------------------------
-- 4) 신규 유저 프로필 자동 생성 트리거
-- ------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_name text;
  v_photo text;
  v_slug_base text;
begin
  v_name := coalesce(nullif(trim(new.raw_user_meta_data->>'full_name'), ''), split_part(new.email, '@', 1), '사용자');
  v_photo := coalesce(new.raw_user_meta_data->>'avatar_url', '');
  v_slug_base := coalesce(nullif(public.slugify(v_name), ''), 'user');

  insert into public.profiles (
    id,
    name,
    slug,
    role,
    bio,
    photo,
    batch,
    company
  )
  values (
    new.id,
    v_name,
    v_slug_base || '-' || left(new.id::text, 8),
    'outsider',
    '',
    v_photo,
    '',
    ''
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();

-- ------------------------------------------------------------
-- 5) 커스텀 Access Token Hook
-- ------------------------------------------------------------
create or replace function public.custom_access_token_hook(event jsonb)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  claims jsonb;
  profile_role public.user_role;
begin
  select p.role
    into profile_role
  from public.profiles p
  where p.id = (event->>'user_id')::uuid;

  profile_role := coalesce(profile_role, 'outsider'::public.user_role);
  claims := coalesce(event->'claims', '{}'::jsonb);
  claims := jsonb_set(claims, '{user_role}', to_jsonb(profile_role::text), true);

  event := jsonb_set(event, '{claims}', claims, true);
  return event;
end;
$$;

grant usage on schema public to supabase_auth_admin;
grant execute on function public.custom_access_token_hook(jsonb) to supabase_auth_admin;
revoke execute on function public.custom_access_token_hook(jsonb) from anon, authenticated, public;

-- ------------------------------------------------------------
-- 6) 권한 헬퍼 함수
-- ------------------------------------------------------------
create or replace function public.get_user_role()
returns public.user_role
language sql
stable
as $$
  select case
    when coalesce(current_setting('request.jwt.claims', true), '') = '' then 'outsider'::public.user_role
    when (current_setting('request.jwt.claims', true)::jsonb ->> 'user_role') in ('outsider', 'pre_runner', 'runner', 'alumni', 'mentor', 'admin')
      then (current_setting('request.jwt.claims', true)::jsonb ->> 'user_role')::public.user_role
    else 'outsider'::public.user_role
  end;
$$;

create or replace function public.can_write()
returns boolean
language sql
stable
as $$
  select public.get_user_role() in ('pre_runner', 'runner', 'alumni', 'mentor', 'admin');
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select public.get_user_role() = 'admin';
$$;

grant execute on function public.get_user_role() to anon, authenticated;
grant execute on function public.can_write() to anon, authenticated;
grant execute on function public.is_admin() to anon, authenticated;

-- ------------------------------------------------------------
-- 7) 업데이트 타임스탬프 트리거
-- ------------------------------------------------------------
drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute procedure public.set_updated_at();

drop trigger if exists set_posts_updated_at on public.posts;
create trigger set_posts_updated_at
before update on public.posts
for each row
execute procedure public.set_updated_at();

drop trigger if exists set_comments_updated_at on public.comments;
create trigger set_comments_updated_at
before update on public.comments
for each row
execute procedure public.set_updated_at();

drop trigger if exists set_jobs_updated_at on public.jobs;
create trigger set_jobs_updated_at
before update on public.jobs
for each row
execute procedure public.set_updated_at();

drop trigger if exists set_library_items_updated_at on public.library_items;
create trigger set_library_items_updated_at
before update on public.library_items
for each row
execute procedure public.set_updated_at();

drop trigger if exists set_launches_updated_at on public.launches;
create trigger set_launches_updated_at
before update on public.launches
for each row
execute procedure public.set_updated_at();

-- ------------------------------------------------------------
-- 8) RLS 활성화
-- ------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.tags enable row level security;
alter table public.post_tags enable row level security;
alter table public.comments enable row level security;
alter table public.reactions enable row level security;
alter table public.jobs enable row level security;
alter table public.library_items enable row level security;
alter table public.launches enable row level security;

-- ------------------------------------------------------------
-- 9) RLS 정책: profiles
-- ------------------------------------------------------------
drop policy if exists "profiles_read_all" on public.profiles;
create policy "profiles_read_all"
on public.profiles
for select
using (true);

drop policy if exists "profiles_update_self_or_admin" on public.profiles;
create policy "profiles_update_self_or_admin"
on public.profiles
for update
using (auth.uid() = id or public.is_admin())
with check (auth.uid() = id or public.is_admin());

-- ------------------------------------------------------------
-- 10) RLS 정책: posts
-- ------------------------------------------------------------
drop policy if exists "posts_read_published_or_owner_or_admin" on public.posts;
create policy "posts_read_published_or_owner_or_admin"
on public.posts
for select
using (published = true or auth.uid() = author_id or public.is_admin());

drop policy if exists "posts_insert_blog_by_writer" on public.posts;
create policy "posts_insert_blog_by_writer"
on public.posts
for insert
with check (
  public.can_write()
  and auth.uid() = author_id
  and type = 'blog'
);

drop policy if exists "posts_insert_news_by_admin" on public.posts;
create policy "posts_insert_news_by_admin"
on public.posts
for insert
with check (
  public.is_admin()
  and auth.uid() = author_id
  and type = 'news'
);

drop policy if exists "posts_update_author_or_admin" on public.posts;
create policy "posts_update_author_or_admin"
on public.posts
for update
using (auth.uid() = author_id or public.is_admin())
with check (auth.uid() = author_id or public.is_admin());

drop policy if exists "posts_delete_author_or_admin" on public.posts;
create policy "posts_delete_author_or_admin"
on public.posts
for delete
using (auth.uid() = author_id or public.is_admin());

-- ------------------------------------------------------------
-- 11) RLS 정책: tags
-- ------------------------------------------------------------
drop policy if exists "tags_read_all" on public.tags;
create policy "tags_read_all"
on public.tags
for select
using (true);

drop policy if exists "tags_insert_admin" on public.tags;
create policy "tags_insert_admin"
on public.tags
for insert
with check (public.is_admin());

drop policy if exists "tags_update_admin" on public.tags;
create policy "tags_update_admin"
on public.tags
for update
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "tags_delete_admin" on public.tags;
create policy "tags_delete_admin"
on public.tags
for delete
using (public.is_admin());

-- ------------------------------------------------------------
-- 12) RLS 정책: post_tags
-- ------------------------------------------------------------
drop policy if exists "post_tags_read_all" on public.post_tags;
create policy "post_tags_read_all"
on public.post_tags
for select
using (true);

drop policy if exists "post_tags_manage_author_or_admin_insert" on public.post_tags;
create policy "post_tags_manage_author_or_admin_insert"
on public.post_tags
for insert
with check (
  exists (
    select 1
    from public.posts p
    where p.id = post_id
      and (p.author_id = auth.uid() or public.is_admin())
  )
);

drop policy if exists "post_tags_manage_author_or_admin_delete" on public.post_tags;
create policy "post_tags_manage_author_or_admin_delete"
on public.post_tags
for delete
using (
  exists (
    select 1
    from public.posts p
    where p.id = post_id
      and (p.author_id = auth.uid() or public.is_admin())
  )
);

-- ------------------------------------------------------------
-- 13) RLS 정책: comments
-- ------------------------------------------------------------
drop policy if exists "comments_read_all" on public.comments;
create policy "comments_read_all"
on public.comments
for select
using (true);

drop policy if exists "comments_insert_writer_own_author" on public.comments;
create policy "comments_insert_writer_own_author"
on public.comments
for insert
with check (
  public.can_write()
  and auth.uid() = author_id
);

drop policy if exists "comments_delete_author_or_admin" on public.comments;
create policy "comments_delete_author_or_admin"
on public.comments
for delete
using (auth.uid() = author_id or public.is_admin());

-- ------------------------------------------------------------
-- 14) RLS 정책: reactions
-- ------------------------------------------------------------
drop policy if exists "reactions_read_all" on public.reactions;
create policy "reactions_read_all"
on public.reactions
for select
using (true);

drop policy if exists "reactions_insert_writer_own_user" on public.reactions;
create policy "reactions_insert_writer_own_user"
on public.reactions
for insert
with check (
  public.can_write()
  and auth.uid() = user_id
);

drop policy if exists "reactions_delete_own" on public.reactions;
create policy "reactions_delete_own"
on public.reactions
for delete
using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- 15) RLS 정책: jobs
-- ------------------------------------------------------------
drop policy if exists "jobs_read_active_or_admin" on public.jobs;
create policy "jobs_read_active_or_admin"
on public.jobs
for select
using (active = true or public.is_admin());

drop policy if exists "jobs_insert_admin" on public.jobs;
create policy "jobs_insert_admin"
on public.jobs
for insert
with check (public.is_admin());

drop policy if exists "jobs_update_admin" on public.jobs;
create policy "jobs_update_admin"
on public.jobs
for update
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "jobs_delete_admin" on public.jobs;
create policy "jobs_delete_admin"
on public.jobs
for delete
using (public.is_admin());

-- ------------------------------------------------------------
-- 16) RLS 정책: library_items
-- ------------------------------------------------------------
drop policy if exists "library_items_read_all" on public.library_items;
create policy "library_items_read_all"
on public.library_items
for select
using (true);

drop policy if exists "library_items_insert_admin" on public.library_items;
create policy "library_items_insert_admin"
on public.library_items
for insert
with check (public.is_admin());

drop policy if exists "library_items_update_admin" on public.library_items;
create policy "library_items_update_admin"
on public.library_items
for update
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "library_items_delete_admin" on public.library_items;
create policy "library_items_delete_admin"
on public.library_items
for delete
using (public.is_admin());

-- ------------------------------------------------------------
-- 17) RLS 정책: launches
-- ------------------------------------------------------------
drop policy if exists "launches_read_all" on public.launches;
create policy "launches_read_all"
on public.launches
for select
using (true);

drop policy if exists "launches_insert_admin" on public.launches;
create policy "launches_insert_admin"
on public.launches
for insert
with check (public.is_admin());

drop policy if exists "launches_update_admin" on public.launches;
create policy "launches_update_admin"
on public.launches
for update
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "launches_delete_admin" on public.launches;
create policy "launches_delete_admin"
on public.launches
for delete
using (public.is_admin());
