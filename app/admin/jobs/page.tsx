import JobsClient from "./JobsClient";

import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type Job = Database["public"]["Tables"]["jobs"]["Row"];

export default async function AdminJobsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load jobs:", error.message);
  }

  const jobs: Job[] = data ?? [];

  return <JobsClient initialJobs={jobs} />;
}
