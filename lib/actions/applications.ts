"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export type ApplicationState = {
  success?: boolean;
  error?: string;
};

export async function submitApplication(formData: FormData): Promise<ApplicationState> {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const student_id = formData.get("student_id") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const major = formData.get("major") as string;
  const batch = formData.get("batch") as string;
  const introduction = formData.get("introduction") as string;
  const vision = formData.get("vision") as string;
  const startup_idea = formData.get("startup_idea") as string;
  const portfolio_url = formData.get("portfolio_url") as string;

  // Survey fields (Step 3) - these are optional but gathered if filled
  const equip = formData.get("equip") === "true";
  const photo_exp = formData.get("photo_exp") === "true";
  const design_exp = formData.get("design_exp") === "true";
  const figma = formData.get("figma") === "true";
  const illustrator = formData.get("illustrator") === "true";
  const experience_extra = formData.get("experience_extra") as string;

  if (!name || !email || !introduction || !student_id || !vision || !startup_idea) {
    return { error: "필수 항목을 모두 입력해주세요." };
  }

  const { error } = await supabase.from("applications").insert({
    name,
    student_id,
    email,
    phone,
    major,
    batch,
    introduction,
    vision,
    startup_idea,
    portfolio_url,
    equip,
    photo_exp,
    design_exp,
    figma,
    illustrator,
    experience_extra,
  });

  if (error) {
    console.error("Application submission error:", error);
    // 컬럼 누락 에러 처리
    if (error.message.includes("column") && error.message.includes("does not exist")) {
      return { error: `데이터베이스 설정 오류: ${error.message}. 관리자 페이지나 SQL 에디터에서 필요한 컬럼을 추가해주세요.` };
    }
    return { error: `지원서 제출 중 오류가 발생했습니다: ${error.message}` };
  }


  revalidatePath("/dashboard/applications");
  return { success: true };
}

export async function deleteApplication(id: string): Promise<ApplicationState> {
  const supabase = await createClient();
  
  // 관리자 권한 확인
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
    console.error("Error deleting application:", error);
    return { error: "지원서 삭제 중 오류가 발생했습니다." };
  }

  if (!data || data.length === 0) {
    return { error: "삭제 권한이 없거나 해당 데이터를 찾을 수 없습니다. (RLS 정책 확인 필요)" };
  }

  revalidatePath("/dashboard/applications");
  return { success: true };
}
