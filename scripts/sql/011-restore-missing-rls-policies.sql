-- ============================================================
-- 011-restore-missing-rls-policies.sql
-- Restore RLS policies destroyed by CASCADE in 009-role-migration-actual.sql
--
-- ROOT CAUSE: Migration 009 dropped is_admin(), can_write(), get_user_role()
-- with CASCADE, which silently destroyed ALL RLS policies that referenced
-- those functions. Step 4 of 009 only recreated 6 of ~28 policies.
--
-- This script restores the 22 missing policies across 8 tables.
-- Policies for members, projects, member_projects, project_news were
-- created fresh in 010 and are NOT affected.
--
-- Executed: 2026-02-28 on Supabase production (bohrexxmpbcumckmgkke)
-- ============================================================

-- ──────────────────────────────────────────────────────────────
-- 1) profiles — MISSING: UPDATE (self or admin)
--    This is the ROOT CAUSE of the admin role toggle bug.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "profiles_update_self_or_admin" ON public.profiles;
CREATE POLICY "profiles_update_self_or_admin"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id OR public.is_admin())
  WITH CHECK (auth.uid() = id OR public.is_admin());

-- ──────────────────────────────────────────────────────────────
-- 2) posts — MISSING: SELECT, INSERT (news), UPDATE, DELETE
--    Note: INSERT (blog by writer) was recreated in 009 Step 4.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "posts_read_published_or_owner_or_admin" ON public.posts;
CREATE POLICY "posts_read_published_or_owner_or_admin"
  ON public.posts FOR SELECT
  USING (published = true OR auth.uid() = author_id OR public.is_admin());

DROP POLICY IF EXISTS "posts_insert_news_by_admin" ON public.posts;
CREATE POLICY "posts_insert_news_by_admin"
  ON public.posts FOR INSERT
  WITH CHECK (
    public.is_admin()
    AND auth.uid() = author_id
    AND type = 'news'
  );

DROP POLICY IF EXISTS "posts_update_author_or_admin" ON public.posts;
CREATE POLICY "posts_update_author_or_admin"
  ON public.posts FOR UPDATE
  USING (auth.uid() = author_id OR public.is_admin())
  WITH CHECK (auth.uid() = author_id OR public.is_admin());

DROP POLICY IF EXISTS "posts_delete_author_or_admin" ON public.posts;
CREATE POLICY "posts_delete_author_or_admin"
  ON public.posts FOR DELETE
  USING (auth.uid() = author_id OR public.is_admin());

-- ──────────────────────────────────────────────────────────────
-- 3) tags — MISSING: INSERT, UPDATE, DELETE (admin only)
--    Note: tags_read_all uses (true) — survived CASCADE.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "tags_insert_admin" ON public.tags;
CREATE POLICY "tags_insert_admin"
  ON public.tags FOR INSERT
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "tags_update_admin" ON public.tags;
CREATE POLICY "tags_update_admin"
  ON public.tags FOR UPDATE
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "tags_delete_admin" ON public.tags;
CREATE POLICY "tags_delete_admin"
  ON public.tags FOR DELETE
  USING (public.is_admin());

-- ──────────────────────────────────────────────────────────────
-- 4) post_tags — MISSING: INSERT, DELETE (author or admin)
--    Note: post_tags_read_all uses (true) — survived CASCADE.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "post_tags_manage_author_or_admin_insert" ON public.post_tags;
CREATE POLICY "post_tags_manage_author_or_admin_insert"
  ON public.post_tags FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.posts p
      WHERE p.id = post_id
        AND (p.author_id = auth.uid() OR public.is_admin())
    )
  );

DROP POLICY IF EXISTS "post_tags_manage_author_or_admin_delete" ON public.post_tags;
CREATE POLICY "post_tags_manage_author_or_admin_delete"
  ON public.post_tags FOR DELETE
  USING (
    EXISTS (
      SELECT 1
      FROM public.posts p
      WHERE p.id = post_id
        AND (p.author_id = auth.uid() OR public.is_admin())
    )
  );

-- ──────────────────────────────────────────────────────────────
-- 5) comments — MISSING: DELETE (author or admin)
--    Note: comments_read_all uses (true) — survived CASCADE.
--    Note: comments_insert_writer_own_author was recreated in 009.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "comments_delete_author_or_admin" ON public.comments;
CREATE POLICY "comments_delete_author_or_admin"
  ON public.comments FOR DELETE
  USING (auth.uid() = author_id OR public.is_admin());

-- ──────────────────────────────────────────────────────────────
-- 6) reactions — MISSING: DELETE (own)
--    Note: reactions_read_all uses (true) — survived CASCADE.
--    Note: reactions_insert_writer_own_user was recreated in 009.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "reactions_delete_own" ON public.reactions;
CREATE POLICY "reactions_delete_own"
  ON public.reactions FOR DELETE
  USING (auth.uid() = user_id);

-- ──────────────────────────────────────────────────────────────
-- 7) jobs — MISSING: SELECT, INSERT, UPDATE, DELETE
--    jobs_read_active_or_admin uses is_admin() — was destroyed.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "jobs_read_active_or_admin" ON public.jobs;
CREATE POLICY "jobs_read_active_or_admin"
  ON public.jobs FOR SELECT
  USING (active = true OR public.is_admin());

DROP POLICY IF EXISTS "jobs_insert_admin" ON public.jobs;
CREATE POLICY "jobs_insert_admin"
  ON public.jobs FOR INSERT
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "jobs_update_admin" ON public.jobs;
CREATE POLICY "jobs_update_admin"
  ON public.jobs FOR UPDATE
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "jobs_delete_admin" ON public.jobs;
CREATE POLICY "jobs_delete_admin"
  ON public.jobs FOR DELETE
  USING (public.is_admin());

-- ──────────────────────────────────────────────────────────────
-- 8) library_items — MISSING: INSERT, UPDATE, DELETE (admin only)
--    Note: library_items_read_all uses (true) — survived CASCADE.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "library_items_insert_admin" ON public.library_items;
CREATE POLICY "library_items_insert_admin"
  ON public.library_items FOR INSERT
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "library_items_update_admin" ON public.library_items;
CREATE POLICY "library_items_update_admin"
  ON public.library_items FOR UPDATE
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "library_items_delete_admin" ON public.library_items;
CREATE POLICY "library_items_delete_admin"
  ON public.library_items FOR DELETE
  USING (public.is_admin());

-- ──────────────────────────────────────────────────────────────
-- 9) launches — MISSING: INSERT, UPDATE, DELETE (admin only)
--    Note: launches_read_all uses (true) — survived CASCADE.
-- ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "launches_insert_admin" ON public.launches;
CREATE POLICY "launches_insert_admin"
  ON public.launches FOR INSERT
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "launches_update_admin" ON public.launches;
CREATE POLICY "launches_update_admin"
  ON public.launches FOR UPDATE
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "launches_delete_admin" ON public.launches;
CREATE POLICY "launches_delete_admin"
  ON public.launches FOR DELETE
  USING (public.is_admin());

-- ──────────────────────────────────────────────────────────────
-- Reload PostgREST schema cache
-- ──────────────────────────────────────────────────────────────

NOTIFY pgrst, 'reload schema';
