import { createClient } from "@supabase/supabase-js";

import { LAUNCHES } from "../lib/launches-data";
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

  console.log("Clearing existing launches...");
  const { error: deleteError } = await supabase.from("launches").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (deleteError) {
    throw new Error(`Failed to clear launches: ${deleteError.message}`);
  }

  const rows: Database["public"]["Tables"]["launches"]["Insert"][] = LAUNCHES.map((launch) => ({
    company: launch.company,
    slug: launch.slug,
    tagline: launch.tagline,
    description: launch.description,
    category: launch.category,
    batch: launch.batch,
    votes: launch.votes,
  }));

  console.log(`Seeding ${rows.length} launches...`);
  const { error: insertError } = await supabase.from("launches").insert(rows);

  if (insertError) {
    throw new Error(`Failed to seed launches: ${insertError.message}`);
  }

  console.log("Launches seed completed successfully.");
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : "Unknown seed script error.";
  console.error(`Launches seed failed: ${message}`);
  process.exit(1);
});
