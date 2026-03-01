# Application Status (지원 현황) Feature - Complete File Audit

## Overview
The "지원 현황" (Application Status) feature allows SPEC applicants to check their application status after submission. The feature supports both:
- **Linked applications** (for logged-in users) - fetches via `user_id`
- **Anonymous status checks** (for anyone) - fetches via email + student ID

---

## 1. PAGE & ROUTE FILES

### `/app/apply/status/page.tsx`
**Purpose:** Main status page that combines logged-in status + anonymous lookup  
**Key Functions:**
- Uses `getCurrentUser()` to check if user is logged in
- Calls `getMyApplication()` if user exists to fetch linked application
- Shows `ApplicationStatusCard` if linked application found
- Falls back to `StatusCheckForm` for anonymous users or logged-in users without linked application
- Provides back link to `/apply`

**Dependencies:**
- `@/lib/auth`: `getCurrentUser()`
- `@/lib/actions/applications`: `getMyApplication()`
- `./ApplicationStatusCard`: Display component
- `./StatusCheckForm`: Form component

**URL:** `http://localhost:3000/apply/status`

---

### `/app/apply/page.tsx` (Secondary)
**Purpose:** Main application page that shows status if user already applied  
**Key Functions:**
- Checks if logged-in user has existing application via `getMyApplication()`
- Shows `ApplicationStatusCard` if application exists
- Shows apply button + status check links if no application
- Displays application eligibility info and requirements

**Dependencies:**
- `@/lib/auth`: `getCurrentUser()`
- `@/lib/actions/applications`: `getMyApplication()`
- `./status/ApplicationStatusCard`: Display component

**URL:** `http://localhost:3000/apply`

---

## 2. COMPONENT FILES

### `/app/apply/status/ApplicationStatusCard.tsx`
**Type:** Server-side rendered component (no "use client")  
**Purpose:** Display formatted application status information  
**Key Functions:**
- Displays applicant name, batch, submission date, current status
- Shows status badge with color coding:
  - `pending` (접수완료): orange `#FF6C0F`
  - `under_review` (심사중): blue `#2563EB`
  - `accepted` (합격): green `#2f9e44`
  - `rejected` (불합격): red `#b42318`
- Shows conditional success/rejection messages
- Displays result announcement date (3월 23일)

**Props:**
```typescript
{
  application: {
    status: string;
    name: string;
    batch: string;
    created_at: string;
    updated_at: string;
  }
}
```

**No API calls** - Pure presentation layer

---

### `/app/apply/status/StatusCheckForm.tsx`
**Type:** Client component ("use client")  
**Purpose:** Form for anonymous users to check application status  
**Key Functions:**
- Collects email and student ID
- Calls `getApplicationByCredentials(email, studentId)` on submit
- Manages loading state during query
- Displays error messages if no match found
- Shows `ApplicationStatusCard` if application found
- Rate limited (5 requests per 10 minutes)

**Form Fields:**
- Email (required, email validation)
- Student ID (required, 8-10 digit numeric)

**State Management:**
- `email`, `studentId`: Form inputs
- `result`: API response
- `isLoading`: Submission state

**Dependencies:**
- `@/lib/actions/applications`: `getApplicationByCredentials()` (server action)
- `./ApplicationStatusCard`: Display component

---

## 3. SERVER ACTIONS & API LAYER

### `/lib/actions/applications.ts`
**Type:** Server actions file ("use server")  
**Purpose:** Core business logic for application management  

#### **Function 1: `submitApplication(formData: FormData)`**
- **Purpose:** Submit new application
- **Access:** Public (anyone can submit)
- **Rate Limit:** 3 requests per 15 minutes per IP
- **Validation:**
  - Email format (regex)
  - Student ID format (8-10 digits)
  - Phone format (optional, if provided)
  - Field length checks
  - All required fields present
- **RLS Check:** INSERT policy allows anonymous + authenticated
- **Returns:** `{ success: true }` or `{ error: string }`
- **Error Handling:**
  - Duplicate constraint (23505): "Already applied this batch"
  - RLS violation (42501): Permission denied
  - Missing columns: Database config error
  - Rate limit exceeded: Retry after X minutes

#### **Function 2: `getApplicationByCredentials(email: string, studentId: string)`** ⭐
- **Purpose:** Public status lookup (anonymous users)
- **Access:** Public (anyone)
- **Rate Limit:** 5 requests per 10 minutes per IP
- **Validation:**
  - Email format (regex)
  - Student ID format (8-10 digits)
- **Database Query:**
  - Uses **admin client** to bypass SELECT RLS (RLS is admin-only)
  - Queries by `email` + `student_id` exact match
  - Orders by `created_at DESC` (newest first)
  - Limits to 1 result
- **Returns:** `ApplicationStatusResult`
```typescript
{
  success?: boolean;
  error?: string;
  application?: {
    status: string;
    name: string;
    batch: string;
    created_at: string;
    updated_at: string;
  }
}
```

#### **Function 3: `getMyApplication()`** ⭐
- **Purpose:** Fetch logged-in user's linked application
- **Access:** Authenticated only
- **Rate Limit:** None (implicit auth check)
- **Validation:** User must be logged in
- **Database Query:**
  - Filters by `user_id = auth.uid()`
  - Orders by `created_at DESC`
  - Limits to 1 result
  - Uses standard client (with RLS)
- **Returns:** `ApplicationStatusResult`
- **Note:** Returns `{ success: true }` with no application if none found (not an error)

#### **Function 4: `updateApplicationStatus(id: string, status: string)`**
- **Purpose:** Update application status (admin only)
- **Access:** Admin role only
- **Validation:**
  - User authenticated
  - User has admin role
  - Status is one of: `pending`, `under_review`, `accepted`, `rejected`
- **Database Update:**
  - Updates `status` and `updated_at`
  - Revalidates admin and dashboard paths
- **Returns:** `{ success: true }` or `{ error: string }`

#### **Function 5: `deleteApplication(id: string)`**
- **Purpose:** Delete application (admin only)
- **Access:** Admin role only
- **Validation:**
  - User authenticated
  - User has admin role
- **Returns:** `{ success: true }` or `{ error: string }`

#### **Type Exports:**
```typescript
export type ApplicationState = {
  success?: boolean;
  error?: string;
};

export type ApplicationStatus = "pending" | "under_review" | "accepted" | "rejected";

export type ApplicationStatusResult = {
  success?: boolean;
  error?: string;
  application?: {
    status: string;
    name: string;
    batch: string;
    created_at: string;
    updated_at: string;
  };
};
```

---

## 4. DATABASE SCHEMA

### Table: `public.applications`
**Location:** `/scripts/sql/012-applications-schema.sql`

**Columns:**
| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| `id` | UUID | PRIMARY KEY | Auto-generated |
| `name` | text | NOT NULL | Applicant name |
| `student_id` | text | NOT NULL | 8-10 digit student ID |
| `email` | text | NOT NULL | Application email |
| `phone` | text | nullable | Contact phone |
| `major` | text | nullable | Major/department |
| `batch` | text | NOT NULL | Batch (e.g., "4") |
| `grade` | text | nullable | Year/grade (added in 4th batch) |
| `enrollment_status` | text | nullable | Enrollment status (added in 4th batch) |
| `introduction` | text | NOT NULL | Q1 answer (50-5000 chars) |
| `vision` | text | NOT NULL | Q2 answer (50-5000 chars) |
| `startup_idea` | text | NOT NULL | Q3 answer (50-5000 chars) |
| `portfolio_url` | text | nullable | Q4 answer (10-5000 chars) |
| `experience_extra` | text | nullable | Q5 answer (50-5000 chars) |
| `additional_comments` | text | nullable | Extra comments (max 5000 chars) |
| `status` | text | DEFAULT 'pending' | Status: pending, under_review, accepted, rejected |
| `user_id` | UUID | nullable | FK to auth.users (for linked accounts) |
| `created_at` | timestamptz | DEFAULT now() | Submission timestamp |
| `updated_at` | timestamptz | DEFAULT now() | Last update timestamp |

**Indexes:**
- Primary Key: `id`
- Unique Constraint: `(student_id, batch)` - prevents duplicate submissions per batch

**RLS Policies:**
Location: `/scripts/sql/013-applications-rls-policies.sql`

1. **INSERT Policy** (for `submitApplication`):
   - Allow: `anon`, `authenticated`
   - Condition: Unrestricted (`WITH CHECK (true)`)
   - Purpose: Anyone can submit

2. **SELECT Policy** (for `getMyApplication`, `getApplicationByCredentials`):
   - Allow: `authenticated` users only
   - Condition: User must have `admin` role
   - Purpose: Only admins can view (contains PII)
   - **Note:** `getApplicationByCredentials` uses admin client to bypass this

3. **UPDATE Policy** (for `updateApplicationStatus`):
   - Allow: `authenticated` users only
   - Condition: User must have `admin` role
   - Purpose: Only admins can update status

4. **DELETE Policy** (for `deleteApplication`):
   - Allow: `authenticated` users only
   - Condition: User must have `admin` role
   - Purpose: Only admins can delete

---

## 5. AUTHENTICATION & AUTHORIZATION

### `/lib/auth.ts`
**Purpose:** Authentication utilities and role checking

**Key Functions:**

#### `getCurrentUser()`
- Returns: `{ user: User; profile: Profile | null }`
- Behavior: Returns `{ user: null; profile: null }` if not logged in (no redirect)
- Uses: Standard Supabase client with RLS

#### `requireAuth()`
- Returns: `{ user: User; profile: Profile }`
- Behavior: **Redirects to `/login`** if not logged in
- Use case: Routes that require authentication

#### `requireRole(minRole: UserRole)`
- Takes: `"outsider" | "member" | "admin"`
- Behavior: Calls `requireAuth()` then checks role level
- Redirects to home (`/`) if insufficient role
- Use case: Routes requiring specific roles

**Role Levels:**
```typescript
outsider: 0  // Not logged in
member: 1    // Logged in member
admin: 2     // Admin user
```

---

### `/middleware.ts` (Route Protection)
**Purpose:** Middleware-level route protection

**Protected Routes:**
- `/admin/*` - Requires admin role
- `/blog/write*` - Requires member or admin role
- `/blog/edit*` - Requires member or admin role
- `/profile/*` - Requires authentication

**Status feature:** Not protected at middleware level (open to all)

---

## 6. DATABASE CLIENTS

### `/lib/supabase/server.ts`
- Standard authenticated client
- Uses `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Subject to RLS policies
- For `getMyApplication()` - user-specific queries

### `/lib/supabase/admin.ts`
- Admin client using `SUPABASE_SERVICE_ROLE_KEY`
- Bypasses all RLS policies
- Server-only (imported with "server-only")
- For `getApplicationByCredentials()` - public status lookup

---

## 7. RATE LIMITING

### `/lib/rate-limit.ts`
- In-memory sliding window implementation
- No external dependencies
- Per-instance (resets on server restart)
- Suitable for single-instance Vercel deployment
- For multi-instance: use Redis/Upstash instead

**Configuration:**

| Action | Max Requests | Window | Per | Used In |
|--------|--------------|--------|-----|---------|
| Application Submit | 3 | 15 min | IP | `submitApplication` |
| Status Check | 5 | 10 min | IP | `getApplicationByCredentials` |

**Usage Pattern:**
```typescript
const headerStore = await headers();
const ip = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
const result = rateLimit(`status-check:${ip}`, { maxRequests: 5, windowMs: 10 * 60 * 1000 });

if (!result.allowed) {
  const retryMinutes = Math.ceil(result.retryAfterMs / 60_000);
  return { error: `너무 많은 요청입니다. ${retryMinutes}분 후에 다시 시도해주세요.` };
}
```

---

## 8. DATA FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│                    /apply/status (Page)                      │
└──────────────────────────┬──────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
    [User Check]    [Already Applied?]  [Form for Others]
          │                │                │
          ├─Logged in       ├─YES           └─StatusCheckForm (client)
          │                │                   │
          ├─Call getMyApp  │                   ├─Input: email, student_id
          │                │                   ├─Submit → getAppByCredentials
          │                ▼                   │
          │          Show AppCard              ▼
          │                │              Admin Client
          │                │             (bypass RLS)
          │                │                   │
          │                │              DB Query:
          │                │              WHERE email = ?
          │                │              AND student_id = ?
          │                │                   │
          │                │                   ▼
          │                └──────────▶ Show AppCard or Error
          │
          └─Not logged in
               │
               └─Show Form

┌──────────────────────────────────────────────────────────────┐
│            Application Submission Flow                        │
└──────────────────────────────────────────────────────────────┘

[/apply/form] (ApplicationForm component)
     │
     ├─Validate form fields
     ├─Rate limit check
     ├─Call submitApplication(formData)
     │
     ▼ Server Action
submitApplication
     │
     ├─IP rate limit (3 per 15 min)
     ├─Validate all inputs
     ├─Get authenticated user (if logged in)
     │
     ▼
INSERT INTO applications
  (name, student_id, email, ..., user_id)
VALUES (...)
     │
     ├─RLS allows INSERT (anyone)
     └─On success: user_id linked if logged in
```

---

## 9. COMPLETE FILE REFERENCE TABLE

| File Path | Type | Purpose | Key Functions | Access Level |
|-----------|------|---------|---------------|--------------|
| `/app/apply/status/page.tsx` | Page | Main status page | - | Public |
| `/app/apply/status/ApplicationStatusCard.tsx` | Component | Display status | Formatters, badge mapping | Public |
| `/app/apply/status/StatusCheckForm.tsx` | Component | Anonymous lookup form | handleSubmit | Public |
| `/app/apply/page.tsx` | Page | Apply landing page | Shows card if applied | Public |
| `/lib/actions/applications.ts` | Server Actions | Business logic | getMyApplication, getApplicationByCredentials, submitApplication, updateApplicationStatus, deleteApplication | Varies |
| `/lib/auth.ts` | Utilities | Auth helpers | getCurrentUser, requireAuth, requireRole | Server-only |
| `/lib/supabase/server.ts` | Client | Authenticated DB client | createClient | Server-only |
| `/lib/supabase/admin.ts` | Client | Admin DB client | createAdminClient | Server-only |
| `/lib/rate-limit.ts` | Utility | Rate limiting | rateLimit | Server-only |
| `/middleware.ts` | Middleware | Route protection | getUserRole, route checks | Server-only |
| `/scripts/sql/012-applications-schema.sql` | Schema | Table definition | CREATE TABLE applications | DB |
| `/scripts/sql/013-applications-rls-policies.sql` | Schema | Security policies | RLS policies | DB |

---

## 10. CRITICAL IMPLEMENTATION NOTES

### ⚠️ RLS Bypass Pattern
`getApplicationByCredentials` uses admin client specifically because:
- Regular SELECT is restricted to admins only (RLS policy)
- Need to allow public status checks without revealing user identity
- Admin client bypasses RLS, returning only specific columns (no email)
- Alternative: Would require separate public query function or different table

### ⚠️ Rate Limiting
- Uses in-memory store (per-instance)
- IP detection via `x-forwarded-for` header
- Falls back to "unknown" if header missing
- Cleanup runs every 5 minutes to remove stale entries

### ⚠️ User Linking
- `submitApplication` captures `user_id` if user is logged in
- Later calls to `getMyApplication` use this `user_id`
- Allows seamless experience: submit → check status → see status immediately

### ⚠️ Silent Success
`getMyApplication` returns `{ success: true }` with no application if none found
- Not an error condition
- Indicates user is logged in but hasn't applied yet

---

## 11. TESTING RECOMMENDATIONS

### Unit Tests
- [ ] Email validation regex
- [ ] Student ID validation (8-10 digits)
- [ ] Rate limiter incrementing/resetting
- [ ] Status badge color mapping
- [ ] Date formatting with Intl API

### Integration Tests
- [ ] Full submit → status check flow
- [ ] Linked application detection for logged-in users
- [ ] Anonymous status check via email + student ID
- [ ] Rate limit enforcement (3 submit, 5 check per window)
- [ ] RLS policy enforcement (INSERT allowed, SELECT admin-only)
- [ ] Error messages for duplicate submissions
- [ ] Error messages for not found scenarios

### E2E Tests
- [ ] Anonymous user: visit /apply/status → fill form → see status
- [ ] Logged-in user: submit application → visit /apply/status → see linked status
- [ ] Admin: update application status in admin panel → user sees updated status
- [ ] Rate limiting: exceed limit → see retry message

---

## 12. ENVIRONMENT DEPENDENCIES

```bash
# Required environment variables
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# Server-only (not exposed to client)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...  # For admin client in getApplicationByCredentials
```

---

## Quick Summary: File Structure

```
📁 Application Status Feature
├── 📄 Pages
│   ├── /app/apply/status/page.tsx              (Main status page)
│   └── /app/apply/page.tsx                     (Landing page with status)
│
├── 📄 Components
│   ├── /app/apply/status/ApplicationStatusCard.tsx  (Display component)
│   └── /app/apply/status/StatusCheckForm.tsx       (Form component)
│
├── 📄 Server Actions
│   └── /lib/actions/applications.ts            (All business logic)
│       ├── submitApplication()
│       ├── getMyApplication()
│       ├── getApplicationByCredentials()
│       ├── updateApplicationStatus()
│       └── deleteApplication()
│
├── 📄 Auth & Security
│   ├── /lib/auth.ts                            (Auth helpers)
│   ├── /middleware.ts                          (Route protection)
│   └── /lib/rate-limit.ts                      (Rate limiting)
│
├── 📄 Database Clients
│   ├── /lib/supabase/server.ts                 (Standard client)
│   └── /lib/supabase/admin.ts                  (Admin client)
│
└── 📄 Database Schema
    ├── /scripts/sql/012-applications-schema.sql    (Table definition)
    └── /scripts/sql/013-applications-rls-policies.sql (Security)
```
