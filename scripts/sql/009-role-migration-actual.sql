-- ============================================================
-- 009-role-migration-actual.sql
-- SPEC Role System Migration: 6-role → 3-role
-- Executed: 2026-02-27 on Supabase production (bohrexxmpbcumckmgkke)
-- PostgreSQL 17.6
--
-- NOTE: Files 003-008 in this directory and all files in
-- supabase/migrations/ were based on incorrect assumptions about
-- the database schema (assumed 14 tables, actual was 10) and
-- were NEVER executed. This file records what was actually run.
--
-- Pre-migration state:
--   - user_role enum: outsider, pre_runner, runner, alumni, mentor, admin
--   - profiles: 12 rows (9 outsider, 3 admin, 0 others)
--   - 7 public functions, 36 RLS policies
--
-- Post-migration state:
--   - user_role enum: outsider, member, admin
--   - profiles: 12 rows (9 outsider, 3 admin) — unchanged
--   - All functions and RLS policies recreated
-- ============================================================

SET lock_timeout = '10s';

-- ──────────────────────────────────────────────────────────────
-- Step 0: Drop ALL dependencies on user_role enum
-- PostgreSQL requires dropping all objects that reference an enum
-- before the enum can be altered/replaced.
-- ──────────────────────────────────────────────────────────────

-- RLS policies that directly cast to user_role
DROP POLICY IF EXISTS "Members can view all applications" ON public.applications;
DROP POLICY IF EXISTS "Admins can update applications" ON public.applications;
DROP POLICY IF EXISTS "Admins can delete applications" ON public.applications;

-- Functions that reference user_role (CASCADE drops dependent policies too)
-- CASCADE from can_write() drops: posts_insert_blog_by_writer, comments_insert_writer_own_author, reactions_insert_writer_own_user
DROP FUNCTION IF EXISTS public.can_write() CASCADE;
DROP FUNCTION IF EXISTS public.get_user_role() CASCADE;
DROP FUNCTION IF EXISTS public.is_admin() CASCADE;
DROP FUNCTION IF EXISTS public.custom_access_token_hook(jsonb) CASCADE;

-- ──────────────────────────────────────────────────────────────
-- Step 1: Enum Swap (rename old, create new)
-- ──────────────────────────────────────────────────────────────

ALTER TYPE public.user_role RENAME TO user_role_old;
CREATE TYPE public.user_role AS ENUM ('outsider', 'member', 'admin');

-- ──────────────────────────────────────────────────────────────
-- Step 2: Convert profiles.role column to new enum
-- Maps pre_runner, runner, alumni, mentor → member
-- Preserves outsider and admin as-is
-- ──────────────────────────────────────────────────────────────

ALTER TABLE public.profiles ALTER COLUMN role DROP DEFAULT;
ALTER TABLE public.profiles
  ALTER COLUMN role TYPE public.user_role
  USING (
    CASE
      WHEN role::text IN ('outsider', 'admin') THEN role::text::public.user_role
      ELSE 'member'::public.user_role
    END
  );
ALTER TABLE public.profiles ALTER COLUMN role SET DEFAULT 'outsider'::public.user_role;

-- ──────────────────────────────────────────────────────────────
-- Step 3: Recreate all dropped functions with new enum
-- ──────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS public.user_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT COALESCE(
    (SELECT role FROM public.profiles WHERE id = auth.uid()),
    'outsider'::public.user_role
  );
$$;

CREATE OR REPLACE FUNCTION public.can_write()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT public.get_user_role() IN ('member'::public.user_role, 'admin'::public.user_role);
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT public.get_user_role() = 'admin'::public.user_role;
$$;

CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  claims jsonb;
  profile_role public.user_role;
BEGIN
  claims := event->'claims';
  SELECT role INTO profile_role FROM public.profiles WHERE id = (event->>'user_id')::uuid;
  claims := jsonb_set(claims, '{user_role}', to_jsonb(COALESCE(profile_role::text, 'outsider')));
  event := jsonb_set(event, '{claims}', claims);
  RETURN event;
END;
$$;

-- ──────────────────────────────────────────────────────────────
-- Step 4: Recreate ALL dropped RLS policies
-- ──────────────────────────────────────────────────────────────

-- Application policies (directly referenced user_role cast)
CREATE POLICY "Members can view all applications" ON public.applications
  FOR SELECT USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid())
    IN ('member'::public.user_role, 'admin'::public.user_role)
  );

CREATE POLICY "Admins can update applications" ON public.applications
  FOR UPDATE USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'::public.user_role
  );

CREATE POLICY "Admins can delete applications" ON public.applications
  FOR DELETE USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'::public.user_role
  );

-- Policies that depended on can_write() (dropped via CASCADE)
CREATE POLICY "posts_insert_blog_by_writer" ON public.posts
  FOR INSERT WITH CHECK (public.can_write());

CREATE POLICY "comments_insert_writer_own_author" ON public.comments
  FOR INSERT WITH CHECK (public.can_write() AND author_id = auth.uid());

CREATE POLICY "reactions_insert_writer_own_user" ON public.reactions
  FOR INSERT WITH CHECK (public.can_write() AND user_id = auth.uid());

-- ──────────────────────────────────────────────────────────────
-- Step 5: Cleanup — drop the old enum type
-- ──────────────────────────────────────────────────────────────

DROP TYPE public.user_role_old;

-- ──────────────────────────────────────────────────────────────
-- Step 6: Reload PostgREST schema cache
-- ──────────────────────────────────────────────────────────────

NOTIFY pgrst, 'reload schema';
