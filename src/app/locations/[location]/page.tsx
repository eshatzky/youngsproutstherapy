import { LocationTemplate } from "@/components/template/site/location";
import React, { Suspense } from "react";
interface PageType {
  params: {
    location: string;
  };
}

export default function page({ params: { location } }: PageType) {
  return (
    <Suspense fallback={null}>
      <LocationTemplate location={location} />
    </Suspense>
  );
}
