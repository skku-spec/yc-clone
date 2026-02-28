-- 012-applications-schema.sql
-- Ensure applications table schema is documented as code.
-- The table already exists in production (created via Supabase dashboard).
-- This file serves as the canonical CREATE TABLE reference.

-- Idempotent: IF NOT EXISTS prevents errors when table already exists.
CREATE TABLE IF NOT EXISTS public.applications (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name          text NOT NULL,
  student_id    text NOT NULL,
  email         text NOT NULL,
  phone         text,
  major         text,
  batch         text NOT NULL,
  introduction  text NOT NULL,
  vision        text NOT NULL,
  startup_idea  text NOT NULL,
  portfolio_url text,
  equip         boolean DEFAULT false,
  photo_exp     boolean DEFAULT false,
  design_exp    boolean DEFAULT false,
  figma         boolean DEFAULT false,
  illustrator   boolean DEFAULT false,
  experience_extra text,
  status        text DEFAULT 'pending',
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

-- Prevent duplicate applications per student per batch
CREATE UNIQUE INDEX IF NOT EXISTS applications_student_batch_unique
  ON public.applications (student_id, batch);

-- Enable RLS (idempotent)
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Grant anon role INSERT permission (required for RLS INSERT policies)
GRANT INSERT ON public.applications TO anon;
GRANT SELECT ON public.applications TO anon;
GRANT INSERT ON public.applications TO authenticated;
GRANT SELECT ON public.applications TO authenticated;
GRANT ALL ON public.applications TO service_role;
