"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { rateLimit } from "@/lib/rate-limit";

export type ApplicationState = {
  success?: boolean;
  error?: string;
};


// ── Validation helpers ────────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/;
const STUDENT_ID_REGEX = /^\d{8,10}$/;

function validateLength(value: string, label: string, min: number, max: number): string | null {
  if (value.length < min) return `${label}은(는) 최소 ${min}자 이상이어야 합니다.`;
  if (value.length > max) return `${label}은(는) ${max}자를 초과할 수 없습니다.`;
  return null;
}

// ── Rate limit config ─────────────────────────────────────────────────

const RATE_LIMIT_CONFIG = {
  maxRequests: 3,
  windowMs: 15 * 60 * 1000, // 15 minutes
} as const;

// ── Submit Application ────────────────────────────────────────────────

export async function submitApplication(formData: FormData): Promise<ApplicationState> {
  // 1. Rate limit check
  const headerStore = await headers();
  const ip = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const rateLimitResult = rateLimit(`apply:${ip}`, RATE_LIMIT_CONFIG);

  if (!rateLimitResult.allowed) {
    const retryMinutes = Math.ceil(rateLimitResult.retryAfterMs / 60_000);
    return { error: `너무 많은 요청입니다. ${retryMinutes}분 후에 다시 시도해주세요.` };
  }

  // 2. Extract form data
  const name = (formData.get("name") as string)?.trim() ?? "";
  const student_id = (formData.get("student_id") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const phone = (formData.get("phone") as string)?.trim() ?? "";
  const major = (formData.get("major") as string)?.trim() ?? "";
  const batch = (formData.get("batch") as string)?.trim() ?? "";
  const introduction = (formData.get("introduction") as string)?.trim() ?? "";
  const vision = (formData.get("vision") as string)?.trim() ?? "";
  const startup_idea = (formData.get("startup_idea") as string)?.trim() ?? "";
  const portfolio_url = (formData.get("portfolio_url") as string)?.trim() ?? "";

  // Survey fields (Step 3) - optional
  const equip = formData.get("equip") === "true";
  const photo_exp = formData.get("photo_exp") === "true";
  const design_exp = formData.get("design_exp") === "true";
  const figma = formData.get("figma") === "true";
  const illustrator = formData.get("illustrator") === "true";
  const experience_extra = (formData.get("experience_extra") as string)?.trim() ?? "";

  // 3. Required field validation
  if (!name || !email || !introduction || !student_id || !vision || !startup_idea || !batch) {
    return { error: "필수 항목을 모두 입력해주세요." };
  }

  // 4. Format validation
  if (!EMAIL_REGEX.test(email)) {
    return { error: "올바른 이메일 형식을 입력해주세요." };
  }

  if (!STUDENT_ID_REGEX.test(student_id)) {
    return { error: "학번은 8~10자리 숫자여야 합니다." };
  }

  if (phone && !PHONE_REGEX.test(phone)) {
    return { error: "올바른 전화번호 형식을 입력해주세요. (예: 010-1234-5678)" };
  }

  // 5. Length validation
  const lengthErrors = [
    validateLength(name, "이름", 2, 50),
    validateLength(introduction, "자기소개", 10, 5000),
    validateLength(vision, "비전", 10, 5000),
    validateLength(startup_idea, "스타트업 아이디어", 10, 5000),
    major ? validateLength(major, "전공", 1, 100) : null,
    portfolio_url ? validateLength(portfolio_url, "포트폴리오 URL", 1, 500) : null,
    experience_extra ? validateLength(experience_extra, "추가 경험", 1, 5000) : null,
  ].filter(Boolean);

  if (lengthErrors.length > 0) {
    return { error: lengthErrors[0]! };
  }

  // 6. Insert application
  // NOTE: Do NOT chain .select() here — the SELECT RLS policy is admin-only,
  // so non-admin users would get a 42501 error even though INSERT succeeded.
  // The INSERT policy is WITH CHECK (true), so silent failures cannot occur.
  const supabase = await createClient();

  // Attempt to get authenticated user — if logged in, link application to account
  const { data: { user } } = await supabase.auth.getUser();

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
      user_id: user?.id ?? null,
    });

  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Application submission error:", error);
    }

    // Duplicate submission (unique constraint on student_id + batch)
    if (error.code === "23505") {
      return { error: "이미 해당 기수에 지원서를 제출하셨습니다." };
    }

    // RLS violation
    if (error.code === "42501") {
      return { error: "지원서 제출 권한이 없습니다. 관리자에게 문의해주세요." };
    }

    // Column missing
    if (error.message.includes("column") && error.message.includes("does not exist")) {
      return { error: "데이터베이스 설정 오류가 발생했습니다. 관리자에게 문의해주세요." };
    }

    return { error: "지원서 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." };
  }

  // 7. Success — INSERT policy is permissive (WITH CHECK true),
  // so if error is null the row was definitely saved.

  revalidatePath("/dashboard/applications");
  return { success: true };
}

// ── Delete Application (Admin Only) ───────────────────────────────────

export async function deleteApplication(id: string): Promise<ApplicationState> {
  const supabase = await createClient();

  // Verify admin permissions
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "로그인이 필요합니다." };

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    return { error: "삭제 권한이 없습니다. 관리자만 삭제 가능합니다." };
  }

  const { data, error } = await supabase
    .from("applications")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error deleting application:", error);
    }
    return { error: "지원서 삭제 중 오류가 발생했습니다." };
  }

  if (!data || data.length === 0) {
    return { error: "삭제 권한이 없거나 해당 데이터를 찾을 수 없습니다." };
  }

  revalidatePath("/dashboard/applications");
  return { success: true };
}

// ── Application Status Types ──────────────────────────────────────────

export type ApplicationStatus = "pending" | "under_review" | "accepted" | "rejected";

const VALID_STATUSES: ApplicationStatus[] = ["pending", "under_review", "accepted", "rejected"];

function isValidStatus(value: string): value is ApplicationStatus {
  return VALID_STATUSES.includes(value as ApplicationStatus);
}

// ── Update Application Status (Admin Only) ────────────────────────────

export async function updateApplicationStatus(
  id: string,
  status: string,
): Promise<ApplicationState> {
  const supabase = await createClient();

  // Verify admin permissions
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "로그인이 필요합니다." };

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    return { error: "상태 변경 권한이 없습니다. 관리자만 변경 가능합니다." };
  }

  // Validate status value
  if (!isValidStatus(status)) {
    return { error: `유효하지 않은 상태입니다: ${status}` };
  }

  const { data, error } = await supabase
    .from("applications")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select();

  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error updating application status:", error);
    }
    return { error: "상태 변경 중 오류가 발생했습니다." };
  }

  if (!data || data.length === 0) {
    return { error: "해당 지원서를 찾을 수 없습니다." };
  }

  revalidatePath("/admin/applications");
  revalidatePath("/dashboard/applications");
  return { success: true };
}

// ── Get Application by Credentials (Public) ─────────────────────────

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

const STATUS_CHECK_RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 10 * 60 * 1000, // 10 minutes
} as const;

export async function getApplicationByCredentials(
  email: string,
  studentId: string,
): Promise<ApplicationStatusResult> {
  // Rate limit check
  const headerStore = await headers();
  const ip = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const rateLimitResult = rateLimit(`status-check:${ip}`, STATUS_CHECK_RATE_LIMIT);

  if (!rateLimitResult.allowed) {
    const retryMinutes = Math.ceil(rateLimitResult.retryAfterMs / 60_000);
    return { error: `너무 많은 요청입니다. ${retryMinutes}분 후에 다시 시도해주세요.` };
  }

  // Validate inputs
  const trimmedEmail = email.trim();
  const trimmedStudentId = studentId.trim();

  if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
    return { error: "올바른 이메일 형식을 입력해주세요." };
  }

  if (!trimmedStudentId || !STUDENT_ID_REGEX.test(trimmedStudentId)) {
    return { error: "학번은 8~10자리 숫자여야 합니다." };
  }

  // Use admin client to bypass RLS (SELECT is admin-only)
  const adminClient = createAdminClient();

  const { data, error } = await adminClient
    .from("applications")
    .select("status, name, batch, created_at, updated_at")
    .eq("email", trimmedEmail)
    .eq("student_id", trimmedStudentId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error fetching application status:", error);
    }
    return { error: "조회 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." };
  }

  if (!data) {
    return { error: "해당 정보로 접수된 지원서를 찾을 수 없습니다." };
  }

  return {
    success: true,
    application: {
      status: data.status,
      name: data.name,
      batch: data.batch,
      created_at: data.created_at,
      updated_at: data.updated_at,
    },
  };
}

// ── Get My Application (Logged-in User) ──────────────────────────────

export async function getMyApplication(): Promise<ApplicationStatusResult> {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: "로그인이 필요합니다." };
  }

  // Explicitly filter by user_id — don't rely solely on RLS
  // (admin users' RLS policy would see ALL rows, breaking .maybeSingle())
  const { data, error } = await supabase
    .from("applications")
    .select("status, name, batch, created_at, updated_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error fetching own application:", error);
    }
    return { error: "조회 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." };
  }

  if (!data) {
    return { success: true }; // No application found — not an error
  }

  return {
    success: true,
    application: {
      status: data.status,
      name: data.name,
      batch: data.batch,
      created_at: data.created_at,
      updated_at: data.updated_at,
    },
  };
}
