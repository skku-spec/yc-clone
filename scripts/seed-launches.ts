import { createClient } from "@supabase/supabase-js";

import type { Database } from "../lib/supabase/types";

const SEED_LAUNCHES: Database["public"]["Tables"]["launches"]["Insert"][] = [];

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

  if (SEED_LAUNCHES.length === 0) {
    console.log("No launch seed data configured. Nothing to seed.");
    return;
  }

  console.log("Clearing existing launches...");
  const { error: deleteError } = await supabase
    .from("launches")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
  if (deleteError) {
    throw new Error(`Failed to clear launches: ${deleteError.message}`);
  }

  console.log(`Seeding ${SEED_LAUNCHES.length} launches...`);
  const { error: insertError } = await supabase.from("launches").insert(SEED_LAUNCHES);

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
