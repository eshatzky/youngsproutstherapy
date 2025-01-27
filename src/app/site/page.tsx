import { SiteTemplate } from "@/components/template/site";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={null}>
      <SiteTemplate />
    </Suspense>
  );
}
