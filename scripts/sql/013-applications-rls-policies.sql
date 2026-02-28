-- 013-applications-rls-policies.sql
-- Fix CRITICAL bug: applications table has NO INSERT policy, causing silent data loss.
-- Also tighten SELECT to admin-only (PII protection).

-- Drop existing policies to rebuild cleanly (idempotent via IF EXISTS)
DROP POLICY IF EXISTS "Anyone can submit applications" ON public.applications;
DROP POLICY IF EXISTS "Admins can view all applications" ON public.applications;
DROP POLICY IF EXISTS "Admins can update applications" ON public.applications;
DROP POLICY IF EXISTS "Admins can delete applications" ON public.applications;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.applications;

-- 1. INSERT: Anyone (including anonymous/unauthenticated) can submit an application.
--    This is the CRITICAL fix — without this, .insert() silently returns empty data.
CREATE POLICY "Anyone can submit applications"
  ON public.applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 2. SELECT: Only admins can view applications (contains PII: name, email, phone, student_id).
CREATE POLICY "Admins can view all applications"
  ON public.applications
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );

-- 3. UPDATE: Only admins can update application status.
CREATE POLICY "Admins can update applications"
  ON public.applications
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );

-- 4. DELETE: Only admins can delete applications.
CREATE POLICY "Admins can delete applications"
  ON public.applications
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );
