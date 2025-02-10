import { TeamPage } from "@/components/pages/team";
import { getAllTeamList } from "@/lib/client";
import { Suspense } from "react";

export default async function page() {
  const teams = await getAllTeamList();
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense>
        <TeamPage teams={teams} />
      </Suspense>
    </section>
  );
}

export const metadata = {
  title: "Our Team | Expert Child & Teen Therapists in Vaughan",
  description:
    "Meet our dedicated team of child & teen therapists at Young Sprouts Therapy in Vaughan. Specializing in CBT, play therapy, art therapy, and more.",
  alternates: {
    canonical: "https://www.youngsproutstherapy.com/team",
  },
};

const jsonLd = {
  "@context": "http://schema.org",
  "@type": [
    "Organization",
    "LocalBusiness",
    "MedicalBusiness",
    "HealthAndBeautyBusiness",
  ],
  name: "Young Sprouts Child, Teen and Family Therapy",
  description:
    "Meet our dedicated team of therapists at Young Sprouts Child, Teen and Family Therapy. Our therapists are experienced in modalities such as CBT, play therapy, art therapy, narrative therapy and more. Discover the right therapist to support you and your family's mental health journey.",
  url: "https://www.youngsproutstherapy.com/team",
  telephone: "(289) 579-4769",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1137 Centre Street, Suite #204",
    addressLocality: "Thornhill",
    addressRegion: "ON",
    postalCode: "L4J 3M6",
    addressCountry: "CA",
  },
  member: [
    {
      "@type": "Person",
      name: "Daniela Shulman",
      jobTitle: "Clinical Director",
      description:
        "Daniela is a child and family therapist with over a decade of experience working with children and families. She uses a collaborative approach when working with families in order to foster positive changes in their lives.",
    },
    {
      "@type": "Person",
      name: "Jessica Shock",
      jobTitle: "RSW, MSW",
      description:
        "Jessica Shock is a clinical registered social worker and psychotherapist with a Masters of Social Work from the University of Windsor. Jessica has a passion for working with children, youth, and adults.",
    },
    {
      "@type": "Person",
      name: "Nikki Bianchi",
      jobTitle: "Registered Psychotherapist (Qualifying)",
      description:
        "Nikki Bianchi is a Registered Psychotherapist and MACP (Qualifying). Her practice is focused on nurturing the mental health and well-being of women and girls through the lifecycle.",
    },
    {
      "@type": "Person",
      name: "Sivan Ibragimov",
      jobTitle: "Registered Psychotherapist (Qualifying)",
      description:
        "Sivan enjoys working with different populations and age groups, especially with teenagers, adults and families.",
    },
    {
      "@type": "Person",
      name: "Elizabeth Warner",
      jobTitle: "RSW, MSW",
      description:
        "Elizabeth Warner is a clinical social worker and psychotherapist with a Masters degree from the University of Windsor. Elizabeth is passionate about working with children, youth and their families.",
    },
  ],
};
