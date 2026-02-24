"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import type { ProfileRole } from "@/lib/supabase/types";

type AdminActionResult = {
  success: boolean;
  error?: string;
};

const VALID_ROLES: Record<ProfileRole, true> = {
  outsider: true,
  pre_runner: true,
  runner: true,
  alumni: true,
  mentor: true,
  admin: true,
};

function isValidRole(role: string): role is ProfileRole {
  return role in VALID_ROLES;
}

export async function updateUserRole(userId: string, newRole: ProfileRole): Promise<AdminActionResult> {
  try {
    if (!userId) {
      throw new Error("Target user is required.");
    }

    if (!isValidRole(newRole)) {
      throw new Error("Invalid role provided.");
    }

    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      throw new Error(`Authentication failed: ${userError.message}`);
    }

    if (!user) {
      throw new Error("You must be logged in to manage roles.");
    }

    if (user.id === userId) {
      throw new Error("You cannot change your own role.");
    }

    const { data: callerProfile, error: callerProfileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (callerProfileError) {
      throw new Error(`Failed to verify admin permissions: ${callerProfileError.message}`);
    }

    if (callerProfile?.role !== "admin") {
      throw new Error("Only admins can manage user roles.");
    }

    const { error: updateError } = await supabase.from("profiles").update({ role: newRole }).eq("id", userId);

    if (updateError) {
      throw new Error(`Failed to update user role: ${updateError.message}`);
    }

    revalidatePath("/admin/users");

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update user role.",
    };
  }
}
