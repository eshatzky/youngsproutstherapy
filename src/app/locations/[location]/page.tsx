import { LocationTemplate } from "@/components/template/site/location";
import React, { Suspense } from "react";
interface PageType {
  params: {
    location: string;
  };
}

export async function generateMetadata({ params }: PageType) {
  return {
    title: "Locations for Child, Teen, and Family Therapy in Vaughan",
    description:
      "Locations for child, teen, and family therapy services in Vaughan. Our registered therapists and social workers are covered by most workplace insurance.",

    alternates: {
      canonical: `https://www.youngsproutstherapy.com/${params.location}`,
    },
  };
}

export default function page({ params: { location } }: PageType) {
  return (
    <Suspense fallback={null}>
      <LocationTemplate location={location} />
    </Suspense>
  );
}
