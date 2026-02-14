"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type ActionResult = {
  success: boolean;
  error?: string;
};

function parseStringField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function parseNumberField(formData: FormData, key: string): number {
  const raw = parseStringField(formData, key);
  const value = Number.parseInt(raw || "0", 10);
  return Number.isNaN(value) ? 0 : value;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function ensureAdmin(supabase: Awaited<ReturnType<typeof createClient>>): Promise<void> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(`Authentication failed: ${userError.message}`);
  }

  if (!user) {
    throw new Error("You must be logged in to manage launches.");
  }

  const { data: profile, error: profileError } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();

  if (profileError) {
    throw new Error(`Failed to verify admin permissions: ${profileError.message}`);
  }

  if (profile?.role !== "admin") {
    throw new Error("Only admins can manage launches.");
  }
}

function parseLaunchPayload(formData: FormData) {
  const company = parseStringField(formData, "company");
  const tagline = parseStringField(formData, "tagline");
  const description = parseStringField(formData, "description");
  const category = parseStringField(formData, "category");
  const batch = parseStringField(formData, "batch");
  const votes = parseNumberField(formData, "votes");

  if (!company || !tagline || !description || !category || !batch) {
    throw new Error("Missing required launch fields.");
  }

  return {
    company,
    slug: slugify(company),
    tagline,
    description,
    category,
    batch,
    votes,
  };
}

export async function createLaunch(formData: FormData): Promise<ActionResult> {
  try {
    const supabase = await createClient();
    await ensureAdmin(supabase);
    const payload = parseLaunchPayload(formData);

    const insertPayload: Database["public"]["Tables"]["launches"]["Insert"] = {
      ...payload,
    };

    const { error } = await supabase.from("launches").insert(insertPayload);
    if (error) {
      throw new Error(`Failed to create launch: ${error.message}`);
    }

    revalidatePath("/launches");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create launch.",
    };
  }
}

export async function updateLaunch(launchId: string, formData: FormData): Promise<ActionResult> {
  try {
    if (!launchId) {
      throw new Error("Launch ID is required.");
    }

    const supabase = await createClient();
    await ensureAdmin(supabase);
    const payload = parseLaunchPayload(formData);

    const updatePayload: Database["public"]["Tables"]["launches"]["Update"] = {
      ...payload,
    };

    const { error } = await supabase.from("launches").update(updatePayload).eq("id", launchId);
    if (error) {
      throw new Error(`Failed to update launch: ${error.message}`);
    }

    revalidatePath("/launches");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update launch.",
    };
  }
}

export async function deleteLaunch(launchId: string): Promise<ActionResult> {
  try {
    if (!launchId) {
      throw new Error("Launch ID is required.");
    }

    const supabase = await createClient();
    await ensureAdmin(supabase);

    const { error } = await supabase.from("launches").delete().eq("id", launchId);
    if (error) {
      throw new Error(`Failed to delete launch: ${error.message}`);
    }

    revalidatePath("/launches");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete launch.",
    };
  }
}
