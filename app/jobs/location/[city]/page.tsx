import { locationParams, getLocationLabel } from "../../jobsData";
import LocationClient from "./LocationClient";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type Job = Database["public"]["Tables"]["jobs"]["Row"];

export function generateStaticParams() {
  return locationParams;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  return {
    title: `채용 - ${getLocationLabel(city)} | SPEC`,
    description: `${getLocationLabel(city)}의 SPEC 회원사 채용 공고를 확인하세요.`,
  };
}

export const dynamic = "force-dynamic";

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from("jobs")
    .select("*")
    .eq("active", true)
    .order("posted", { ascending: false });

  const allJobs: Job[] = data ?? [];
  const jobs = allJobs.filter((j) => j.location_slug === city);

  return <LocationClient city={city} jobs={jobs} allJobs={allJobs} />;
}
