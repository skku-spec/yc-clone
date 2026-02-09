import { roleParams, getRoleLabel } from "../../jobsData";
import RoleClient from "./RoleClient";

export function generateStaticParams() {
  return roleParams;
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  return {
    title: `${getRoleLabel(role)} Jobs | Y Combinator`,
    description: `Find ${getRoleLabel(role).toLowerCase()} jobs at top YC startups.`,
  };
}

export default function RolePage({ params }: { params: Promise<{ role: string }> }) {
  return <RoleClient params={params} />;
}
