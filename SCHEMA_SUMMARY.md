# YC-Clone Application System - Schema Summary

## Quick Reference

### Files
- **Schema Definition:** `scripts/sql/012-applications-schema.sql`
- **RLS Policies:** `scripts/sql/013-applications-rls-policies.sql`
- **Types Definition:** `lib/supabase/types.ts` (auto-generated)
- **App Actions:** `lib/actions/applications.ts`
- **Tests:** `e2e/application-form.spec.ts`

### Table: `applications`

```
ID: uuid (PRIMARY KEY)
├─ Contact Info
│  ├─ name (text, NOT NULL) - 2-50 chars
│  ├─ email (text, NOT NULL) - valid email
│  ├─ phone (text, optional) - Korean format (01X-XXXX-XXXX)
│  └─ student_id (text, NOT NULL) - 8-10 digits
├─ Academic Info
│  ├─ batch (text, NOT NULL) - e.g., "4"
│  └─ major (text, optional) - 1-100 chars
├─ Application Content
│  ├─ introduction (text, NOT NULL) - 10-5000 chars
│  ├─ vision (text, NOT NULL) - 10-5000 chars
│  ├─ startup_idea (text, NOT NULL) - 10-5000 chars
│  └─ portfolio_url (text, optional) - 1-500 chars
├─ Skills & Experience
│  ├─ equip (boolean) - default false
│  ├─ photo_exp (boolean) - default false
│  ├─ design_exp (boolean) - default false
│  ├─ figma (boolean) - default false
│  ├─ illustrator (boolean) - default false
│  └─ experience_extra (text, optional) - 1-5000 chars
├─ System Fields
│  ├─ status (text) - default 'pending' ⚠️ NO ENUM
│  ├─ created_at (timestamptz)
│  └─ updated_at (timestamptz)
└─ Constraints
   └─ UNIQUE (student_id, batch) - prevents duplicate applications
```

### RLS Policy Matrix

|  | INSERT | SELECT | UPDATE | DELETE |
|---|--------|--------|--------|--------|
| Anon | ✅ | ❌ | ❌ | ❌ |
| Authenticated | ✅ | ❌* | ❌* | ❌* |
| Admin | ✅ | ✅ | ✅ | ✅ |

*Only if admin role in profiles table

### Data Flow

```
User Form
   ↓
lib/actions/applications.ts
   ├─ Rate limit check (IP-based)
   ├─ Field validation
   │  ├─ Required fields
   │  ├─ Format validation (email, phone, student_id)
   │  └─ Length validation
   └─ Insert to DB
      ├─ RLS Policy: INSERT with CHECK (true)
      ├─ Constraint: (student_id, batch) unique
      └─ Audit: created_at, updated_at

Admin Dashboard
   ↓
lib/api.ts (or direct Supabase query)
   └─ SELECT from applications
      └─ RLS Policy: SELECT only if admin
```

### Validation Rules

| Field | Required | Type | Constraints | Validation |
|-------|----------|------|-------------|-----------|
| name | ✅ | text | NOT NULL | 2-50 chars |
| email | ✅ | text | NOT NULL | Valid email format |
| student_id | ✅ | text | NOT NULL | 8-10 digits |
| batch | ✅ | text | NOT NULL | Any text (⚠️) |
| introduction | ✅ | text | NOT NULL | 10-5000 chars |
| vision | ✅ | text | NOT NULL | 10-5000 chars |
| startup_idea | ✅ | text | NOT NULL | 10-5000 chars |
| phone | ❌ | text | nullable | Korean format if present |
| major | ❌ | text | nullable | 1-100 chars if present |
| portfolio_url | ❌ | text | nullable | 1-500 chars if present |
| experience_extra | ❌ | text | nullable | 1-5000 chars if present |
| equip | ❌ | boolean | nullable | default false |
| photo_exp | ❌ | boolean | nullable | default false |
| design_exp | ❌ | boolean | nullable | default false |
| figma | ❌ | boolean | nullable | default false |
| illustrator | ❌ | boolean | nullable | default false |
| status | ✅ | text | NOT NULL | default 'pending' (⚠️ NO ENUM) |

### Error Handling

| Code | Meaning | Example |
|------|---------|---------|
| 23505 | Duplicate (student_id, batch) | "Already applied this batch" |
| 42501 | RLS violation | "No permission" |
| - | Validation error | "Email invalid" |
| - | Rate limit | "Too many requests" |

### Key Issues ⚠️

1. **Status field is `text`, not enum**
   - Could accept invalid values like 'foo'
   - Should use PostgreSQL enum type
   - Recommendation: See DATABASE_AUDIT.md Priority 1.1

2. **No batch validation**
   - Batch is free text, could be anything
   - Should validate against known batches
   - Recommendation: See DATABASE_AUDIT.md Priority 1.2

3. **Missing indexes**
   - No index on batch, status, created_at
   - Could be slow for large tables
   - Recommendation: See DATABASE_AUDIT.md Priority 1.3

4. **No audit trail**
   - Status changes not logged
   - Deletions not tracked
   - Recommendation: See DATABASE_AUDIT.md Priority 2.1

### Key Strengths ✅

1. **RLS policies protect PII**
   - Admin-only SELECT
   - Prevents unauthorized access

2. **Unique constraint prevents duplicates**
   - (student_id, batch) enforced
   - Helps data integrity

3. **Rate limiting prevents spam**
   - IP-based, 3 requests per 15 minutes
   - Handled at application layer

4. **Comprehensive validation**
   - Format, length, required fields
   - Error messages in Korean

5. **Proper migration structure**
   - Schema documented in SQL
   - RLS policies in separate migration
   - Easy to track changes

### Quick Links

- **Full Audit:** DATABASE_AUDIT.md
- **All Recommendations:** DATABASE_AUDIT.md Section 13
- **Testing Checklist:** DATABASE_AUDIT.md Section 14
- **TypeScript Types:** lib/supabase/types.ts
- **Submission Logic:** lib/actions/applications.ts
