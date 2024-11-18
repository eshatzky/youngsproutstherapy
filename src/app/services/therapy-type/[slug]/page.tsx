import {
  ChildTherapy,
  CouplesTherapy,
  GroupTherapy,
  ParentingCounselling,
  TeenTherapy,
} from "@/components/pages/services/type-of-therapy";

interface TherapyTypeProps {
  params: {
    slug: string;
  };
}

interface ServiceConfig {
  title: string;
  description: string;
}

const serviceData: Record<string, ServiceConfig> = {
  "parenting-counselling": {
    title: "Therapy for Parents of Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers supportive therapy for parents of children and teens in Vaughan. We help parents build skills, gain confidence, and navigate the challenges of parenting.",
  },
  "child-therapy": {
    title: "Child Therapy | Young Sprouts Therapy",
    description:
      "Specialized therapy for children to address anxiety, behavior issues, and emotional challenges in a nurturing environment.",
  },
  "teen-therapy": {
    title: "Teen Therapy | Young Sprouts Therapy",
    description:
      "Support your teen's mental health with therapy designed to navigate adolescence, anxiety, and emotional well-being.",
  },
  "couples-therapy": {
    title: "Couples Counseling | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers couples counseling in Vaughan to help partners improve communication, resolve conflict, and strengthen their relationships.",
  },
  "group-therapy": {
    title: "Group Therapy for Kids and Families | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers group therapy for kids, teens, and families in Vaughan. Our groups provide a supportive environment to learn social skills, build connections, and address common challenges.",
  },
};

export async function generateMetadata({ params }: TherapyTypeProps) {
  const service = serviceData[params.slug] || {
    title: "Young Sprouts Therapy",
    description:
      "Professional therapy services for individuals, families, and groups.",
  };

  return {
    title: `${service.title}`,
    description: service.description,
  };
}

export default async function TherapyTypePage({
  params: { slug },
}: TherapyTypeProps) {
  let content: React.ReactNode | null = null;

  const service = serviceData[slug];
  const title = service?.title || "Young Sprouts Therapy";
  const description =
    service?.description || "Default description for services.";

  switch (slug) {
    case "parenting-counselling":
      content = <ParentingCounselling />;
      break;
    case "child-therapy":
      content = <ChildTherapy />;
      break;
    case "teen-therapy":
      content = <TeenTherapy />;
      break;
    case "couples-therapy":
      content = <CouplesTherapy />;
      break;
    case "group-therapy":
      content = <GroupTherapy />;
      break;

    default:
      content = null;
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
      "@id": `https://www.youngsproutstherapy.com/services/therapy-type/${slug}`,
    },

    name: title,
    description: description,
    url: `https://www.youngsproutstherapy.com/services/therapy-type/${slug}`,
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
      name: title,
      description: description,
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

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {content}
    </section>
  );
}
