-- ============================================================
-- 014-storage-rls-policies.sql
-- Add RLS policies for Supabase Storage buckets.
--
-- BACKGROUND: The blog-images bucket had RLS enabled on
-- storage.objects but NO policies, causing INSERT failures
-- for authenticated users uploading via the anon key.
--
-- FIX APPLIED: Server-side upload API route using service
-- role key (bypasses RLS). These policies are provided as
-- a reference in case direct client-side uploads are needed
-- in the future.
--
-- To execute: Run in Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- ──────────────────────────────────────────────────────────────
-- 1) blog-images bucket
-- ──────────────────────────────────────────────────────────────

-- Allow authenticated users to upload to blog-images
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- Allow anyone to view blog images (bucket is already public)
CREATE POLICY "Anyone can view blog images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update blog images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images');

-- Allow authenticated users to delete their uploads
CREATE POLICY "Authenticated users can delete blog images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');

-- ──────────────────────────────────────────────────────────────
-- Reload PostgREST schema cache
-- ──────────────────────────────────────────────────────────────

NOTIFY pgrst, 'reload schema';
