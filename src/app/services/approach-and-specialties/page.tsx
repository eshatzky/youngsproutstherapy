import { ApproachPage } from "@/components/pages/services/approach-and-specialties";

export const metadata = {
  title:
    "Young Sprouts Child, Teen and Family Therapy - Our Approach and Specialties",
  description:
    "Discover our comprehensive approach to therapy for children, teens, and families at Young Sprouts. We specialize in a range of modalities including play therapy, art therapy, CBT, and more.",

  alternates: {
    canonical: `https://www.youngsproutstherapy.com/services/approach-and-specialties`,
  },
};

export default function page() {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApproachPage />
    </section>
  );
}

const jsonLd = {
  "@context": "http://schema.org",
  "@type": [
    "MedicalWebPage",
    "WebPage",
    "LocalBusiness",
    "MedicalBusiness",
    "HealthAndBeautyBusiness",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.youngsproutstherapy.com/services/approach-and-specialties`,
  },

  name: "Young Sprouts Child, Teen and Family Therapy - Our Approach and Specialties",
  description:
    "Discover our comprehensive approach to therapy for children, teens, and families at Young Sprouts. We specialize in a range of modalities including play therapy, art therapy, CBT, and more.",
  url: `https://www.youngsproutstherapy.com/services/approach-and-specialties`,
  author: {
    "@type": "Organization",
    name: "Young Sprouts Therapy",
  },
  publisher: {
    "@type": "Organization",
    name: "Young Sprouts Therapy",
    logo: {
      "@type": "ImageObject",
      url: "https://www.youngsproutstherapy.com/images/logo.png",
    },
  },
  inLanguage: "en-CA",
  about: {
    "@type": "Thing",
    name: "Young Sprouts Child, Teen and Family Therapy - Our Approach and Specialties",
    description:
      "Discover our comprehensive approach to therapy for children, teens, and families at Young Sprouts. We specialize in a range of modalities including play therapy, art therapy, CBT, and more.",
    sameAs: "https://en.wikipedia.org/wiki/Anxiety_disorder",
  },
  keywords: [
    "anxiety therapy",
    "child anxiety",
    "teen anxiety",
    "Vaughan anxiety therapist",
  ],

  mainEntity: {
    "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
    name: "Young Sprouts Therapy",
    telephone: "(289) 579-4769",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1137 Centre Street, Suite #204",
      addressLocality: "Thornhill",
      addressRegion: "ON",
      postalCode: "L4J 3M6",
      addressCountry: "CA",
    },
    description:
      "At Young Sprouts Therapy, we offer specialized psychological services for children, teens, and families, including Cognitive Behavioural Therapy (CBT), Play Therapy, Art Therapy, and more.",
    areaServed: [
      {
        "@type": "Place",
        name: "Thornhill",
      },
      {
        "@type": "Place",
        name: "Richmond Hill",
      },
      {
        "@type": "Place",
        name: "Vaughan",
      },
      {
        "@type": "Place",
        name: "Aurora",
      },
      {
        "@type": "Place",
        name: "Newmarket",
      },
      {
        "@type": "Place",
        name: "Toronto",
      },
      {
        "@type": "Place",
        name: "North York",
      },
      {
        "@type": "Place",
        name: "Markham",
      },
    ],
  },
};
