import { SiteTemplate } from "@/components/template/site";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={null}>
      <SiteTemplate />
    </Suspense>
  );
}

export const metadata = {
  title: "Locations for Child, Teen, and Family Therapy in Ontario",
  description:
    "Find child, teen, and family therapy services across Ontario. Our registered therapists and social workers provide support in Vaughan, Thornhill, Richmond Hill, Markham, and beyond. Covered by most workplace insurance.",
  alternates: {
    canonical: "https://www.youngsproutstherapy.com/locations",
  },
};

