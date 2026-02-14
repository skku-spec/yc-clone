import { createClient } from "@supabase/supabase-js";

import { allJobs } from "../app/jobs/jobsData";
import type { Database } from "../lib/supabase/types";

const SYSTEM_ADMIN_ID = "00000000-0000-0000-0000-000000000001";

async function ensureSystemProfile(supabase: ReturnType<typeof createClient<Database>>) {
  const profile: Database["public"]["Tables"]["profiles"]["Insert"] = {
    id: SYSTEM_ADMIN_ID,
    name: "System",
    slug: "system-seed",
    role: "admin",
    bio: "System seed account",
    photo: "",
    batch: "SYSTEM",
    company: "SPEC",
    username: "system",
    first_name: "System",
    last_name: "Admin",
    linkedin_url: "",
  };

  const { error } = await supabase.from("profiles").upsert(profile, {
    onConflict: "id",
  });

  if (error) {
    throw new Error(`Failed to ensure system profile: ${error.message}`);
  }
}

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

  await ensureSystemProfile(supabase);

  console.log("Clearing existing jobs...");
  const { error: deleteError } = await supabase.from("jobs").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (deleteError) {
    throw new Error(`Failed to clear jobs: ${deleteError.message}`);
  }

  const rows: Database["public"]["Tables"]["jobs"]["Insert"][] = allJobs.map((job) => ({
    company: job.company,
    company_slug: job.companySlug,
    title: job.title,
    description: job.description,
    role: job.role,
    role_slug: job.roleSlug,
    location: job.location,
    location_slug: job.locationSlug,
    salary: job.salary,
    tags: job.tags,
    remote: job.remote ?? false,
    logo_color: job.logoColor,
    logo_letter: job.logoLetter,
    posted: job.posted,
    active: true,
    created_by: SYSTEM_ADMIN_ID,
  }));

  console.log(`Seeding ${rows.length} jobs...`);
  const { error: insertError } = await supabase.from("jobs").insert(rows);

  if (insertError) {
    throw new Error(`Failed to seed jobs: ${insertError.message}`);
  }

  console.log("Jobs seed completed successfully.");
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : "Unknown seed script error.";
  console.error(`Jobs seed failed: ${message}`);
  process.exit(1);
});
