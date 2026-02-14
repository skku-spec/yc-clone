import { roleParams, getRoleLabel } from "../../jobsData";
import RoleClient from "./RoleClient";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type Job = Database["public"]["Tables"]["jobs"]["Row"];

export function generateStaticParams() {
  return roleParams;
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  return {
    title: `채용 - ${getRoleLabel(role)} | SPEC`,
    description: `SPEC 회원사의 ${getRoleLabel(role)} 채용 공고를 확인하세요.`,
  };
}

export const dynamic = "force-dynamic";

export default async function RolePage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from("jobs")
    .select("*")
    .eq("active", true)
    .order("posted", { ascending: false });

  const allJobs: Job[] = data ?? [];
  const jobs = allJobs.filter((j) => j.role_slug === role);

  return <RoleClient role={role} jobs={jobs} allJobs={allJobs} />;
}
