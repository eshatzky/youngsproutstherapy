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
  title: "Locations for Child, Teen, and Family Therapy in Vaughan",
  description:
    "Locations for child, teen, and family therapy services in Vaughan. Our registered therapists and social workers are covered by most workplace insurance.",
  alternates: {
    canonical: "https://www.youngsproutstherapy.com/locations",
  },
};
