import JobsClient from "./JobsClient";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type Job = Database["public"]["Tables"]["jobs"]["Row"];

export default async function JobsPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("jobs")
    .select("*")
    .eq("active", true)
    .order("posted", { ascending: false });

  const jobs: Job[] = data ?? [];

  return <JobsClient jobs={jobs} />;
}
