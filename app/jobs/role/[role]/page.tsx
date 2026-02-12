import { roleParams, getRoleLabel } from "../../jobsData";
import RoleClient from "./RoleClient";

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

export default function RolePage({ params }: { params: Promise<{ role: string }> }) {
  return <RoleClient params={params} />;
}
