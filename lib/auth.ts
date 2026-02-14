import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";

import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

export type UserRole = "outsider" | "pre_runner" | "runner" | "alumni" | "mentor" | "admin";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

type AuthResult = {
  user: User;
  profile: Profile | null;
};

const ROLE_LEVEL: Record<UserRole, number> = {
  outsider: 0,
  pre_runner: 1,
  runner: 2,
  alumni: 3,
  mentor: 4,
  admin: 5,
};

export async function getCurrentUser(): Promise<AuthResult | { user: null; profile: null }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { user: null, profile: null };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  return {
    user,
    profile: profile ?? null,
  };
}

export async function requireAuth(): Promise<AuthResult> {
  const currentUser = await getCurrentUser();

  if (!currentUser.user) {
    redirect("/login");
  }

  return currentUser;
}

export async function requireRole(minRole: UserRole): Promise<AuthResult> {
  const currentUser = await requireAuth();
  const currentRole = currentUser.profile?.role ?? "outsider";

  if (ROLE_LEVEL[currentRole] < ROLE_LEVEL[minRole]) {
    redirect("/");
  }

  return currentUser;
}

export function isAdmin(role: string | null): boolean {
  return role === "admin";
}

export function canWrite(role: string | null): boolean {
  return role === "pre_runner" || role === "runner" || role === "alumni" || role === "mentor" || role === "admin";
}
