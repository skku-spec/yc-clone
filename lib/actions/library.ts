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

function parseBooleanField(formData: FormData, key: string): boolean {
  const value = formData.get(key);
  if (typeof value !== "string") {
    return false;
  }

  const normalized = value.toLowerCase();
  return normalized === "on" || normalized === "true" || normalized === "1" || normalized === "yes";
}

function parseNumberField(formData: FormData, key: string): number {
  const raw = parseStringField(formData, key);
  const value = Number.parseInt(raw || "0", 10);
  return Number.isNaN(value) ? 0 : value;
}

function parseCategories(formData: FormData): string[] {
  const fromArray = formData
    .getAll("categories")
    .filter((value): value is string => typeof value === "string")
    .flatMap((value) => value.split(","))
    .map((value) => value.trim())
    .filter(Boolean);

  if (fromArray.length > 0) {
    return Array.from(new Set(fromArray));
  }

  const singleValue = parseStringField(formData, "categories");
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
    throw new Error("You must be logged in to manage library items.");
  }

  const { data: profile, error: profileError } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();

  if (profileError) {
    throw new Error(`Failed to verify admin permissions: ${profileError.message}`);
  }

  if (profile?.role !== "admin") {
    throw new Error("Only admins can manage library items.");
  }
}

function parseLibraryPayload(formData: FormData) {
  const title = parseStringField(formData, "title");
  const author = parseStringField(formData, "author");
  const authorRole = parseStringField(formData, "authorRole");
  const type = parseStringField(formData, "type");
  const categories = parseCategories(formData);
  const description = parseStringField(formData, "description");
  const body = parseStringField(formData, "body");
  const date = parseStringField(formData, "date");
  const views = parseNumberField(formData, "views");
  const duration = parseStringField(formData, "duration");
  const youtubeId = parseStringField(formData, "youtubeId");
  const featured = parseBooleanField(formData, "featured");
  const thumbnailColor = parseStringField(formData, "thumbnailColor");

  if (!title || !author || !type || categories.length === 0 || !description || !body || !date || !thumbnailColor) {
    throw new Error("Missing required library item fields.");
  }

  return {
    slug: slugify(title),
    title,
    author,
    author_role: authorRole,
    type,
    categories,
    description,
    body,
    date,
    views,
    duration,
    youtube_id: youtubeId,
    featured,
    thumbnail_color: thumbnailColor,
  };
}

export async function createLibraryItem(formData: FormData): Promise<ActionResult> {
  try {
    const supabase = await createClient();
    await ensureAdmin(supabase);
    const payload = parseLibraryPayload(formData);

    const insertPayload: Database["public"]["Tables"]["library_items"]["Insert"] = {
      ...payload,
    };

    const { error } = await supabase.from("library_items").insert(insertPayload);
    if (error) {
      throw new Error(`Failed to create library item: ${error.message}`);
    }

    revalidatePath("/library");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create library item.",
    };
  }
}

export async function updateLibraryItem(itemId: string, formData: FormData): Promise<ActionResult> {
  try {
    if (!itemId) {
      throw new Error("Library item ID is required.");
    }

    const supabase = await createClient();
    await ensureAdmin(supabase);
    const payload = parseLibraryPayload(formData);

    const updatePayload: Database["public"]["Tables"]["library_items"]["Update"] = {
      ...payload,
    };

    const { error } = await supabase.from("library_items").update(updatePayload).eq("id", itemId);
    if (error) {
      throw new Error(`Failed to update library item: ${error.message}`);
    }

    revalidatePath("/library");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update library item.",
    };
  }
}

export async function deleteLibraryItem(itemId: string): Promise<ActionResult> {
  try {
    if (!itemId) {
      throw new Error("Library item ID is required.");
    }

    const supabase = await createClient();
    await ensureAdmin(supabase);

    const { error } = await supabase.from("library_items").delete().eq("id", itemId);
    if (error) {
      throw new Error(`Failed to delete library item: ${error.message}`);
    }

    revalidatePath("/library");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete library item.",
    };
  }
}
