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

function parseTags(formData: FormData): string[] {
  const allValues = formData
    .getAll("tags")
    .filter((value): value is string => typeof value === "string")
    .flatMap((value) => value.split(","))
    .map((value) => value.trim())
    .filter(Boolean);

  if (allValues.length > 0) {
    return Array.from(new Set(allValues));
  }

  const singleValue = parseStringField(formData, "tags");
  if (!singleValue) {
    return [];
  }

  return Array.from(
    new Set(
      singleValue
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  );
}

function parseBooleanField(formData: FormData, key: string): boolean {
  const value = formData.get(key);
  if (typeof value !== "string") {
    return false;
  }

  const normalized = value.toLowerCase();
  return normalized === "on" || normalized === "true" || normalized === "1" || normalized === "yes";
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function ensureAdmin(supabase: Awaited<ReturnType<typeof createClient>>): Promise<string> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(`Authentication failed: ${userError.message}`);
  }

  if (!user) {
    throw new Error("You must be logged in to manage jobs.");
  }

  const { data: profile, error: profileError } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();

  if (profileError) {
    throw new Error(`Failed to verify admin permissions: ${profileError.message}`);
  }

  if (profile?.role !== "admin") {
    throw new Error("Only admins can manage jobs.");
  }

  return user.id;
}

function parseJobPayload(formData: FormData) {
  const company = parseStringField(formData, "company");
  const title = parseStringField(formData, "title");
  const description = parseStringField(formData, "description");
  const role = parseStringField(formData, "role");
  const location = parseStringField(formData, "location");
  const salary = parseStringField(formData, "salary");
  const logoColor = parseStringField(formData, "logoColor");
  const logoLetter = parseStringField(formData, "logoLetter");
  const logoUrl = parseStringField(formData, "logoUrl");
  const posted = parseStringField(formData, "posted");
  const tags = parseTags(formData);
  const remote = parseBooleanField(formData, "remote");

  if (!company || !title || !description || !role || !location || !salary || !logoColor || !logoLetter || !posted) {
    throw new Error("Missing required job fields.");
  }

  return {
    company,
    company_slug: slugify(company),
    title,
    description,
    role,
    role_slug: slugify(role),
    location,
    location_slug: slugify(location),
    salary,
    tags,
    remote,
    logo_color: logoColor,
    logo_letter: logoLetter,
    logo_url: logoUrl,
    posted,
  };
}

export async function createJob(formData: FormData): Promise<ActionResult> {
  try {
    const supabase = await createClient();
    const userId = await ensureAdmin(supabase);
    const payload = parseJobPayload(formData);

    const insertPayload: Database["public"]["Tables"]["jobs"]["Insert"] = {
      ...payload,
      active: true,
      created_by: userId,
    };

    const { error } = await supabase.from("jobs").insert(insertPayload);
    if (error) {
      throw new Error(`Failed to create job: ${error.message}`);
    }

    revalidatePath("/jobs");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create job.",
    };
  }
}

export async function updateJob(jobId: string, formData: FormData): Promise<ActionResult> {
  try {
    if (!jobId) {
      throw new Error("Job ID is required.");
    }

    const supabase = await createClient();
    await ensureAdmin(supabase);
    const payload = parseJobPayload(formData);

    const updatePayload: Database["public"]["Tables"]["jobs"]["Update"] = {
      ...payload,
    };

    const { error } = await supabase.from("jobs").update(updatePayload).eq("id", jobId);
    if (error) {
      throw new Error(`Failed to update job: ${error.message}`);
    }

    revalidatePath("/jobs");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update job.",
    };
  }
}

export async function deleteJob(jobId: string): Promise<ActionResult> {
  try {
    if (!jobId) {
      throw new Error("Job ID is required.");
    }

    const supabase = await createClient();
    await ensureAdmin(supabase);

    const { error } = await supabase.from("jobs").delete().eq("id", jobId);
    if (error) {
      throw new Error(`Failed to delete job: ${error.message}`);
    }

    revalidatePath("/jobs");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete job.",
    };
  }
}

export async function toggleJobActive(jobId: string): Promise<ActionResult> {
  try {
    if (!jobId) {
      throw new Error("Job ID is required.");
    }

    const supabase = await createClient();
    await ensureAdmin(supabase);

    const { data: existingJob, error: fetchError } = await supabase.from("jobs").select("active").eq("id", jobId).maybeSingle();
    if (fetchError) {
      throw new Error(`Failed to fetch job: ${fetchError.message}`);
    }

    if (!existingJob) {
      throw new Error("Job not found.");
    }

    const { error: updateError } = await supabase.from("jobs").update({ active: !existingJob.active }).eq("id", jobId);

    if (updateError) {
      throw new Error(`Failed to toggle job state: ${updateError.message}`);
    }

    revalidatePath("/jobs");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to toggle job state.",
    };
  }
}
