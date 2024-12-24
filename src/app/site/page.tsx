import { SiteTemplate } from "@/components/template/site";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={null}>
      <SiteTemplate />
    </Suspense>
  );
}
