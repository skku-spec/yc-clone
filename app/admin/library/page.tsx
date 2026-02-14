import LibraryClient from "./LibraryClient";

import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type LibraryItem = Database["public"]["Tables"]["library_items"]["Row"];

export default async function AdminLibraryPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("library_items")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load library items:", error.message);
  }

  const items: LibraryItem[] = data ?? [];

  return <LibraryClient initialItems={items} />;
}
