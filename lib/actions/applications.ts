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
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const major = formData.get("major") as string;
  const batch = formData.get("batch") as string;
  const introduction = formData.get("introduction") as string;
  const vision = formData.get("vision") as string;
  const portfolio_url = formData.get("portfolio_url") as string;

  if (!name || !email || !introduction) {
    return { error: "필수 항목을 모두 입력해주세요." };
  }

  const { error } = await supabase.from("applications").insert({
    name,
    email,
    phone,
    major,
    batch,
    introduction,
    vision,
    portfolio_url,
  });

  if (error) {
    console.error("Application submission error:", error);
    return { error: "지원서 제출 중 오류가 발생했습니다. 다시 시도해주세요." };
  }

  revalidatePath("/dashboard/applications");
  return { success: true };
}
