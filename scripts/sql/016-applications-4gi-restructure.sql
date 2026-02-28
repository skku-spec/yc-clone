-- 016-applications-4gi-restructure.sql
-- Restructure applications table for SPEC 4기 러너 지원서.
-- Adds grade, enrollment_status, additional_comments columns.
-- Drops survey columns (equip, photo_exp, design_exp, figma, illustrator)
-- that are no longer used in the 4기 form.

-- 1. Add new columns
ALTER TABLE public.applications ADD COLUMN IF NOT EXISTS grade text;
ALTER TABLE public.applications ADD COLUMN IF NOT EXISTS enrollment_status text;
ALTER TABLE public.applications ADD COLUMN IF NOT EXISTS additional_comments text;

-- 2. Drop survey columns (3기 data already saved; these are no longer collected)
ALTER TABLE public.applications DROP COLUMN IF EXISTS equip;
ALTER TABLE public.applications DROP COLUMN IF EXISTS photo_exp;
ALTER TABLE public.applications DROP COLUMN IF EXISTS design_exp;
ALTER TABLE public.applications DROP COLUMN IF EXISTS figma;
ALTER TABLE public.applications DROP COLUMN IF EXISTS illustrator;
