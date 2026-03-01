# YC-Clone Application System Database Audit Report

**Generated:** 2024
**Scope:** Application System Database Layer
**Status:** COMPLETE AUDIT WITH FINDINGS

---

## EXECUTIVE SUMMARY

The YC-Clone application system has a **well-structured database layer** with proper schema definition, RLS policies, and type safety. However, there are **several security and design concerns** that should be addressed.

### Critical Findings:
- ✅ **Schema is properly documented as code** in migration files
- ✅ **RLS policies are restrictive** (admin-only SELECT for PII protection)
- ✅ **TypeScript types are auto-generated** from Supabase schema
- ⚠️ **Status enum NOT defined as PostgreSQL enum** (using text field instead)
- ⚠️ **No status validation** in schema constraints
- ⚠️ **Missing indexes** on commonly filtered columns (batch, status)
- ✅ **Unique constraint** on (student_id, batch) prevents duplicates
- ✅ **Soft cascading** via RLS + INSERT rate limiting

---

## 1. DATABASE SCHEMA DOCUMENTATION

### Location: `scripts/sql/012-applications-schema.sql`

The `applications` table is defined as:

```sql
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
```

### Schema Statistics:
- **Total Columns:** 20
- **Nullable Columns:** 8 (phone, major, portfolio_url, experience_extra, and boolean fields defaulting to false)
- **Primary Key:** UUID (auto-generated)
- **Audit Fields:** created_at, updated_at
- **String-based Status:** `text` type (NOT an enum)

---

## 2. CONSTRAINTS & INDEXES

### Unique Constraint (CRITICAL)

```sql
CREATE UNIQUE INDEX IF NOT EXISTS applications_student_batch_unique
  ON public.applications (student_id, batch);
```

**Purpose:** Prevents duplicate applications per student per batch
**Impact:** 
- ✅ Ensures data integrity
- ✅ Enforced at database level
- ✅ Error code `23505` on duplicate (handled in app)

### Missing Indexes (PERFORMANCE ISSUE)

The schema **does NOT define indexes** on:
- `batch` - filtering/aggregation by batch
- `status` - filtering applications by status (pending/approved/rejected)
- `created_at` - sorting by date
- `student_id` - lookups by student ID

**Recommendation:** Add indexes for common query patterns:
```sql
CREATE INDEX idx_applications_batch ON public.applications(batch);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_applications_created_at ON public.applications(created_at DESC);
CREATE INDEX idx_applications_student_id ON public.applications(student_id);
```

---

## 3. STATUS FIELD ANALYSIS

### Current Implementation (PROBLEMATIC)

```sql
status text DEFAULT 'pending',
```

**Problems:**
1. **No enum type** - allows arbitrary values (e.g., 'invalid_status')
2. **No CHECK constraint** - schema doesn't enforce allowed values
3. **Runtime validation only** - rely on application code alone
4. **No database-level constraints** - data corruption possible

### Recommended Fix

Create a PostgreSQL enum type:

```sql
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'application_status') THEN
    CREATE TYPE public.application_status AS ENUM (
      'pending',
      'approved',
      'rejected',
      'reviewing',
      'waitlisted'
    );
  END IF;
END
$$;

-- Update table to use enum
ALTER TABLE public.applications 
ALTER COLUMN status TYPE public.application_status USING status::public.application_status,
ALTER COLUMN status SET DEFAULT 'pending'::public.application_status;
```

### Current Status Values (inferred from code)
The TypeScript types show `status: string` with no enum defined:

```typescript
status: string;  // In Row type
status?: string; // In Insert/Update types
```

**Recommendation:** Add to types.ts:
```typescript
export type ApplicationStatus = 'pending' | 'approved' | 'rejected' | 'reviewing' | 'waitlisted';
```

---

## 4. ROW-LEVEL SECURITY (RLS)

### Location: `scripts/sql/013-applications-rls-policies.sql`

#### Policy 1: INSERT - Anyone Can Submit

```sql
CREATE POLICY "Anyone can submit applications"
  ON public.applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
```

**Analysis:**
- ✅ Allows anonymous users (public form)
- ✅ Allows authenticated users
- ✅ `WITH CHECK (true)` is permissive (no column restrictions)
- ✅ Rate limiting in application layer prevents abuse
- ⚠️ No validation of form data at policy level (app layer responsible)

#### Policy 2: SELECT - Admin Only

```sql
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
```

**Analysis:**
- ✅ **CRITICAL SECURITY FIX** - PII protection (name, email, phone, student_id)
- ✅ Admin-only SELECT prevents data leakage
- ✅ Subquery checks auth.uid() against profiles table
- ✅ Silent row filtering (non-admins see 0 rows)
- ⚠️ No SELECT policy for authenticated users viewing their own applications

#### Policy 3: UPDATE - Admin Only

```sql
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
```

**Analysis:**
- ✅ Admin-only status updates
- ✅ Uses both USING (check before) and WITH CHECK (validate after)
- ✅ Prevents unauthorized modifications
- ⚠️ No version control/audit trail for status changes

#### Policy 4: DELETE - Admin Only

```sql
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
```

**Analysis:**
- ✅ Admin-only deletion
- ⚠️ Hard delete (no soft delete/archive)
- ⚠️ No audit trail of deletions

### RLS Summary Matrix

| Operation | Who Can Do It | Policy | Status |
|-----------|---------------|--------|--------|
| INSERT    | Anyone        | Permissive (`true`) | ✅ Working |
| SELECT    | Admins only   | Restrictive (role check) | ✅ PII Protected |
| UPDATE    | Admins only   | Restrictive (role check) | ✅ Restricted |
| DELETE    | Admins only   | Restrictive (role check) | ✅ Restricted |

---

## 5. TYPESCRIPT TYPE DEFINITIONS

### Location: `lib/supabase/types.ts`

The applications table is auto-generated as:

```typescript
applications: {
  Row: {
    id: string;
    name: string;
    email: string;
    student_id: string | null;
    phone: string | null;
    major: string | null;
    batch: string;
    introduction: string;
    vision: string | null;
    startup_idea: string | null;
    portfolio_url: string | null;
    equip: boolean;
    photo_exp: boolean;
    design_exp: boolean;
    figma: boolean;
    illustrator: boolean;
    experience_extra: string | null;
    status: string;  // ⚠️ Should be enum
    created_at: string;
  };
  Insert: {
    id?: string;
    name: string;
    email: string;
    student_id?: string | null;
    phone?: string | null;
    major?: string | null;
    batch: string;
    introduction: string;
    vision?: string | null;
    startup_idea?: string | null;
    portfolio_url?: string | null;
    equip?: boolean;
    photo_exp?: boolean;
    design_exp?: boolean;
    figma?: boolean;
    illustrator?: boolean;
    experience_extra?: string | null;
    status?: string;
    created_at?: string;
  };
  Update: {
    // ... partial versions of all fields
  };
};
```

**Issues:**
- ❌ `status` is `string` instead of enum
- ⚠️ `student_id` is optional in Insert but NOT NULL in schema (contradiction)
- ⚠️ Missing field documentation/JSDoc

---

## 6. SUPABASE QUERY FUNCTIONS

### Location: `lib/api.ts`

**No direct application-related query functions found** in lib/api.ts. The application submission is handled directly via:

```typescript
// From lib/actions/applications.ts
const { error } = await supabase
  .from("applications")
  .insert({
    name,
    student_id,
    email,
    phone: phone || null,
    major: major || null,
    batch,
    introduction,
    vision,
    startup_idea,
    portfolio_url: portfolio_url || null,
    equip,
    photo_exp,
    design_exp,
    figma,
    illustrator,
    experience_extra: experience_extra || null,
  });
```

---

## 7. APPLICATION SUBMISSION FLOW

### Location: `lib/actions/applications.ts`

#### Validation Pipeline:

1. **Rate Limiting** (3 requests per 15 minutes)
   ```typescript
   const rateLimitResult = rateLimit(`apply:${ip}`, {
     maxRequests: 3,
     windowMs: 15 * 60 * 1000,
   });
   ```
   - ✅ IP-based rate limiting
   - ✅ Prevents spam
   - ⚠️ No per-student limits

2. **Required Fields Check**
   ```typescript
   if (!name || !email || !introduction || !student_id || !vision || !startup_idea || !batch)
   ```
   - ✅ Validates presence

3. **Format Validation**
   - Email: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   - Student ID: `/^\d{8,10}$/`
   - Phone: `/^01[016789]-?\d{3,4}-?\d{4}$/` (Korean format)

4. **Length Validation**
   - Name: 2-50 chars
   - Introduction: 10-5000 chars
   - Vision: 10-5000 chars
   - Startup Idea: 10-5000 chars
   - Major: 1-100 chars (optional)
   - Portfolio URL: 1-500 chars (optional)
   - Experience Extra: 1-5000 chars (optional)

#### Error Handling:

| Error Code | Meaning | Handling |
|-----------|---------|----------|
| 23505 | Unique constraint violation | "Already applied this batch" |
| 42501 | RLS violation | "No permission to submit" |
| (other) | Database error | Generic error message |

#### Important Note:
```typescript
// NOTE: Do NOT chain .select() here — the SELECT RLS policy is admin-only,
// so non-admin users would get a 42501 error even though INSERT succeeded.
// The INSERT policy is WITH CHECK (true), so silent failures cannot occur.
```

✅ Correct handling of RLS - doesn't chain SELECT after INSERT

---

## 8. DATA INTEGRITY CHECKS

### Primary Key
- ✅ UUID auto-generated with `gen_random_uuid()`
- ✅ Unique across all records
- ✅ Collision probability: negligible

### Uniqueness
- ✅ `applications_student_batch_unique` index enforces (student_id, batch) uniqueness

### Required Fields
| Field | Required | Type | Notes |
|-------|----------|------|-------|
| name | ✅ | text | 2-50 chars (app validation) |
| student_id | ✅ | text | 8-10 digits (app validation) |
| email | ✅ | text | Valid email (app validation) |
| batch | ✅ | text | No validation |
| introduction | ✅ | text | 10-5000 chars (app validation) |
| vision | ✅ | text | 10-5000 chars (app validation) |
| startup_idea | ✅ | text | 10-5000 chars (app validation) |
| phone | ❌ | text | Korean format if provided |
| major | ❌ | text | 1-100 chars if provided |
| portfolio_url | ❌ | text | 1-500 chars if provided |
| experience_extra | ❌ | text | 1-5000 chars if provided |
| equip, photo_exp, design_exp, figma, illustrator | ❌ | boolean | Default false |
| status | ✅ | text | Default 'pending' |

**Issues:**
- ⚠️ `batch` field has no validation (should validate against known batches)
- ⚠️ No foreign key to batch table (batch is free text)

---

## 9. AUDIT & COMPLIANCE

### Timestamps
- ✅ `created_at` - set at insertion (now())
- ✅ `updated_at` - set at insertion, updated on changes (trigger)

### Missing Audit Trail
- ❌ No status change history
- ❌ No change log
- ❌ No modified_by tracking
- ❌ No deletion audit trail

### Recommendations
```sql
-- Add audit table
CREATE TABLE IF NOT EXISTS public.application_status_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  old_status text,
  new_status text NOT NULL,
  changed_by uuid REFERENCES public.profiles(id),
  reason text,
  created_at timestamptz DEFAULT now()
);

-- Create trigger to log status changes
CREATE OR REPLACE FUNCTION public.log_application_status_change()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status != NEW.status THEN
    INSERT INTO public.application_status_history (
      application_id, old_status, new_status, changed_by
    ) VALUES (
      NEW.id, OLD.status, NEW.status, auth.uid()
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## 10. SECURITY ANALYSIS

### Strengths
1. ✅ **RLS Policies** - Restrictive SELECT prevents PII leakage
2. ✅ **Rate Limiting** - IP-based spam prevention
3. ✅ **Unique Constraints** - Prevents duplicate applications
4. ✅ **Input Validation** - Comprehensive app-layer validation
5. ✅ **No SQL Injection** - Using parameterized queries (Supabase client)

### Vulnerabilities
1. ⚠️ **No enum for status** - Could accept invalid status values
2. ⚠️ **No batch validation** - Batch is free text, could be anything
3. ⚠️ **Rate limiting by IP** - VPN/Proxy users could bypass
4. ⚠️ **No CSRF protection mentioned** - Check Next.js middleware
5. ⚠️ **No data encryption at rest** - Standard Supabase (OK for non-PHI data)

---

## 11. MIGRATION HISTORY

| Version | File | Purpose |
|---------|------|---------|
| 001 | `001-init.sql` | Initial schema (profiles, posts, jobs, etc.) |
| 002 | `002-auth-migration.sql` | Add username, first_name, last_name, linkedin_url to profiles |
| 009 | `009-role-migration-actual.sql` | Fix role enum types |
| 010 | `010-members-projects-migration.sql` | Add members, projects, member_projects tables |
| 011 | `011-restore-missing-rls-policies.sql` | Restore missing RLS policies |
| **012** | **`012-applications-schema.sql`** | **Create applications table** |
| **013** | **`013-applications-rls-policies.sql`** | **Create RLS policies (CRITICAL FIX)** |
| 014 | `014-storage-rls-policies.sql` | Supabase storage policies |

### Migration 013 Notes (CRITICAL)
The migration file includes this comment:
```sql
-- Fix CRITICAL bug: applications table has NO INSERT policy, causing silent data loss.
-- Also tighten SELECT to admin-only (PII protection).
```

This indicates a **critical bug was fixed** where INSERT was failing silently.

---

## 12. SCHEMA COMPARISON: applications vs members/projects

| Feature | applications | members | projects |
|---------|--------------|---------|----------|
| PK Type | uuid | uuid | uuid |
| Unique Constraints | (student_id, batch) | (slug) | (slug) |
| Status Field | ✅ text (no enum) | ❌ N/A | ✅ check constraint |
| Audit Fields | ✅ created_at | ✅ yes | ✅ yes |
| Soft Delete | ❌ Hard delete | ❌ No | ❌ No |
| Indexes | ⚠️ Minimal | ✅ Good | ✅ Good |

**Note:** `projects` table has status with CHECK constraint:
```sql
status text not null default 'Active' check (status in ('Active', 'Inactive', 'Acquired', 'Public'))
```

✅ This is the pattern applications table should follow!

---

## 13. RECOMMENDATIONS & FIXES

### Priority 1: CRITICAL FIXES

#### 1.1 Add Enum for Application Status
```sql
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'application_status') THEN
    CREATE TYPE public.application_status AS ENUM (
      'pending',
      'approved',
      'rejected',
      'reviewing',
      'waitlisted'
    );
  END IF;
END
$$;

-- Migrate existing column
ALTER TABLE public.applications
  ALTER COLUMN status TYPE public.application_status 
  USING status::public.application_status,
  ALTER COLUMN status SET DEFAULT 'pending'::public.application_status;
```

#### 1.2 Add Validation Constraint on Batch
```sql
-- Create batch reference table
CREATE TABLE IF NOT EXISTS public.batches (
  id text PRIMARY KEY,
  name text NOT NULL,
  season text NOT NULL,
  year integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Add foreign key
ALTER TABLE public.applications
  ADD CONSTRAINT fk_applications_batch
  FOREIGN KEY (batch) REFERENCES public.batches(id);
```

#### 1.3 Add Missing Indexes
```sql
CREATE INDEX idx_applications_batch ON public.applications(batch);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_applications_created_at ON public.applications(created_at DESC);
CREATE INDEX idx_applications_student_id ON public.applications(student_id);
CREATE INDEX idx_applications_batch_status ON public.applications(batch, status);
```

### Priority 2: HIGH PRIORITY FIXES

#### 2.1 Add Audit Logging
```sql
CREATE TABLE IF NOT EXISTS public.application_status_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  old_status public.application_status,
  new_status public.application_status NOT NULL,
  changed_by uuid REFERENCES public.profiles(id),
  reason text,
  created_at timestamptz DEFAULT now()
);

-- Add RLS
ALTER TABLE public.application_status_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "admins_can_view_history"
  ON public.application_status_history
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Create trigger
CREATE OR REPLACE FUNCTION public.log_application_status_change()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO public.application_status_history (
      application_id, old_status, new_status, changed_by
    ) VALUES (
      NEW.id, OLD.status, NEW.status, auth.uid()
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_log_application_status
AFTER UPDATE ON public.applications
FOR EACH ROW
EXECUTE FUNCTION public.log_application_status_change();
```

#### 2.2 Fix TypeScript Types
Update `lib/supabase/types.ts`:
```typescript
export type ApplicationStatus = 'pending' | 'approved' | 'rejected' | 'reviewing' | 'waitlisted';

// Then update in Database type
applications: {
  Row: {
    // ...
    status: ApplicationStatus;  // Changed from string
    // ...
  };
  // Similar updates for Insert/Update
};
```

#### 2.3 Add Rate Limiting Per Student ID
Update `lib/actions/applications.ts`:
```typescript
// Also check per-student rate limit
const studentRateLimit = rateLimit(`apply:${student_id}`, {
  maxRequests: 1,  // Only 1 application per student
  windowMs: 7 * 24 * 60 * 60 * 1000,  // Per week (or season)
});

if (!studentRateLimit.allowed) {
  return { error: "You have already submitted an application. Please contact us for updates." };
}
```

### Priority 3: NICE-TO-HAVE IMPROVEMENTS

#### 3.1 Add Soft Delete
```sql
ALTER TABLE public.applications
  ADD COLUMN IF NOT EXISTS deleted_at timestamptz;

-- Update RLS to exclude soft-deleted rows
ALTER POLICY "Admins can view all applications" 
  ON public.applications
  USING (
    deleted_at IS NULL
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );
```

#### 3.2 Add Search/Text Index
```sql
CREATE INDEX idx_applications_search 
  ON public.applications 
  USING GIN (
    to_tsvector('korean', name || ' ' || introduction || ' ' || vision)
  );
```

#### 3.3 Add View for Admin Dashboard
```sql
CREATE OR REPLACE VIEW public.applications_with_status_count AS
SELECT 
  batch,
  status,
  COUNT(*) as count
FROM public.applications
WHERE deleted_at IS NULL
GROUP BY batch, status
ORDER BY batch, status;
```

---

## 14. TESTING CHECKLIST

### Database Tests
- [ ] Verify (student_id, batch) uniqueness
- [ ] Verify RLS: non-admin cannot SELECT
- [ ] Verify RLS: admin can SELECT all
- [ ] Verify INSERT works from anonymous session
- [ ] Verify UPDATE only works for admin
- [ ] Verify DELETE only works for admin
- [ ] Verify duplicate batch rejects with 23505
- [ ] Verify RLS violation returns 42501

### Application Tests (see `e2e/application-form.spec.ts`)
- [x] Form navigation (Step 1-4)
- [x] Required field validation
- [x] Format validation (email, phone)
- [x] Step backward/forward preserves data
- [ ] Submit success with valid data
- [ ] Submit error with invalid data
- [ ] Rate limit triggers at 4th request
- [ ] Duplicate submission detection

---

## 15. SUMMARY MATRIX

| Category | Item | Status | Priority | Impact |
|----------|------|--------|----------|--------|
| **Schema** | Table structure | ✅ | - | - |
| | Column types | ⚠️ status is text | P1 | Medium |
| | Constraints | ⚠️ Missing enum | P1 | High |
| | Indexes | ⚠️ Missing common ones | P2 | Medium |
| **RLS** | INSERT policy | ✅ | - | - |
| | SELECT policy | ✅ | - | - |
| | UPDATE policy | ✅ | - | - |
| | DELETE policy | ✅ | - | - |
| **Types** | TypeScript sync | ⚠️ | P2 | Low |
| | Enum definitions | ❌ Missing | P1 | High |
| **Validation** | App-layer | ✅ | - | - |
| | Database-layer | ⚠️ | P1 | High |
| **Audit** | Timestamps | ✅ | - | - |
| | Status history | ❌ Missing | P2 | Medium |
| **Security** | Rate limiting | ✅ | - | - |
| | RLS protection | ✅ | - | - |
| | SQL injection | ✅ | - | - |

---

## CONCLUSION

The YC-Clone application system database layer is **production-ready** with proper RLS policies and unique constraint protection. However, **Priority 1 fixes should be implemented** to:

1. Add proper enum type for status field
2. Implement database-level batch validation
3. Create missing indexes for performance

The application submission flow is well-designed with comprehensive client-side validation and rate limiting. The critical RLS bug was already fixed in migration 013.

**Estimated effort to implement all recommendations:** 4-6 hours
**Risk of not implementing:** Low immediate risk, but data integrity and performance concerns over time.

