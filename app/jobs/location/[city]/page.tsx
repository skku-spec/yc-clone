import { locationParams, getLocationLabel } from "../../jobsData";
import LocationClient from "./LocationClient";

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

export default function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  return <LocationClient params={params} />;
}
