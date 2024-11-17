import { FaqPage } from "@/components/pages/faq";
import React from "react";

export default function page() {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqPage />
    </section>
  );
}

export const metadata = {
  title: "FAQs About Our Child and Family Therapy Services",
  description:
    "Find answers to questions about Young Sprouts Therapy in Vaughan. Explore our FAQ page for insights into the therapy process and what to expect in sessions.",
};

const jsonLd = {
  "@context": "http://schema.org",
  "@type": [
    "WebPage",
    "LocalBusiness",
    "MedicalBusiness",
    "HealthAndBeautyBusiness",
  ],
  name: "Young Sprouts Child, Teen and Family Therapy - FAQ",
  description:
    "Find answers to questions about Young Sprouts Child, Teen and Family Therapy. Explore our FAQ page for insights into the therapy process, what to expect in sessions, and more.",
  url: "https://www.youngsproutstherapy.com/faq",
  mainEntity: {
    "@type": "Question",
    name: "Frequently Asked Questions",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For specific questions not listed on the FAQ page, you can send a message through the Contact page or e-mail at info@youngsproutstherapy.com.",
    },
  },
  author: {
    "@type": "Organization",
    name: "Young Sprouts Therapy",
  },
  publisher: {
    "@type": "Organization",
    name: "Young Sprouts Therapy",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1137 Centre Street, Suite #204",
    addressLocality: "Thornhill",
    addressRegion: "ON",
    postalCode: "L4J 3M6",
    addressCountry: "CA",
  },
  telephone: "(289) 579-4769",
};
