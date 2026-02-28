import ApplicationsClient from "@/app/admin/applications/ApplicationsClient";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type Application = Database["public"]["Tables"]["applications"]["Row"];

export default async function AdminApplicationsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load applications:", error.message);
  }

  const applications: Application[] = data ?? [];

  return <ApplicationsClient initialApplications={applications} />;
}
