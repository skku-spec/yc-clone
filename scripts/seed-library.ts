import { createClient } from "@supabase/supabase-js";

import { libraryItems } from "../app/library/library-data";
import type { Database } from "../lib/supabase/types";

async function main() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error("Missing SUPABASE_URL environment variable.");
  }

  if (!serviceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable.");
  }

  const supabase = createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  console.log("Clearing existing library items...");
  const { error: deleteError } = await supabase.from("library_items").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (deleteError) {
    throw new Error(`Failed to clear library items: ${deleteError.message}`);
  }

  const rows: Database["public"]["Tables"]["library_items"]["Insert"][] = libraryItems.map((item) => ({
    slug: item.slug,
    title: item.title,
    author: item.author,
    author_role: item.authorRole ?? "",
    type: item.type,
    categories: item.categories,
    description: item.description,
    body: item.body,
    date: item.date,
    views: Number.parseInt(item.views ?? "0", 10) || 0,
    duration: item.duration ?? "",
    youtube_id: item.youtubeId ?? "",
    featured: item.featured ?? false,
    thumbnail_color: item.thumbnailColor,
  }));

  console.log(`Seeding ${rows.length} library items...`);
  const { error: insertError } = await supabase.from("library_items").insert(rows);

  if (insertError) {
    throw new Error(`Failed to seed library items: ${insertError.message}`);
  }

  console.log("Library seed completed successfully.");
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : "Unknown seed script error.";
  console.error(`Library seed failed: ${message}`);
  process.exit(1);
});
