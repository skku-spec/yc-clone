-- 015-applications-user-id.sql
-- Link applications to user accounts so logged-in users can view their own status automatically.

-- 1. Add user_id column (nullable — anonymous submissions still work)
ALTER TABLE public.applications
  ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;

-- 2. Index for fast lookup by user_id
CREATE INDEX IF NOT EXISTS idx_applications_user_id
  ON public.applications(user_id)
  WHERE user_id IS NOT NULL;

-- 3. RLS: Authenticated users can SELECT their own applications (by user_id)
--    This adds to the existing admin-only SELECT policy from 013.
DROP POLICY IF EXISTS "Applicants can view own applications" ON public.applications;

CREATE POLICY "Applicants can view own applications"
  ON public.applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
