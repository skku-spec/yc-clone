import { locationParams, getLocationLabel } from "../../jobsData";
import LocationClient from "./LocationClient";

export function generateStaticParams() {
  return locationParams;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  return {
    title: `Startup Jobs in ${getLocationLabel(city)} | Y Combinator`,
    description: `Find startup jobs in ${getLocationLabel(city)} at top YC companies.`,
  };
}

export default function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  return <LocationClient params={params} />;
}
