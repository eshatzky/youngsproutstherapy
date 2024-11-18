import {
  AdhdTherapy,
  AnxietyTherapy,
  AutismTherapy,
  BehavioralTherapy,
  BurnOutTherapy,
  ClinicalTherapy,
  DepressionTherapy,
  GriefTherapy,
  TraumaTherapy,
} from "@/components/pages/services/conditions-we-support";

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
  "adhd-therapy": {
    title: "ADHD Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy helps children and teens with ADHD thrive. Our Vaughan therapists use evidence-based approaches to improve attention, focus, organization, and emotional regulation.",
  },
  "anxiety-therapy": {
    title: "Anxiety Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy provides specialized anxiety therapy for children and teenagers in Vaughan. Learn how our expert therapists can help your child manage anxiety with play therapy, CBT, and more.",
  },
  "burnout-therapy": {
    title: "Burnout Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Recover from work-related stress and find balance through burnout therapy.",
  },
  "behavioral-therapy": {
    title: "Behaviour Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers effective behaviour therapy for children and teens in Vaughan. Our therapists help with challenging behaviours, improving emotional regulation, and social skills.",
  },
  "depression-therapy": {
    title: "Depression Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Compassionate care to address and overcome symptoms of depression.",
  },
  "grief-therapy": {
    title: "Grief Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers supportive grief therapy for children and teens in Vaughan. We help kids and teens process their feelings of loss and move forward with strength and resilience",
  },
  "trauma-therapy": {
    title: "Trauma Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers compassionate trauma-informed therapy for children and teens in Vaughan. Our expert therapists help kids and teens process traumatic experiences and develop healthy coping skills.",
  },
  "autism-therapy": {
    title: "ASD Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy helps children and teens with ASD thrive. Our Vaughan therapists use evidence-based approaches to enhance communication, behaviour, and daily living skills.",
  },
  "clinical-supervision": {
    title: "Clinical Supervision | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers clinical supervision to therapists-in-training in Vaughan. Our experienced supervisors provide guidance and support to help young professionals develop their skills and expertise",
  },
};

export async function generateMetadata({ params }: TherapyTypeProps) {
  const service = serviceData[params.slug] || {
    title: "Young Sprouts Therapy",
    description:
      "Professional therapy services for individuals, families, and groups.",
  };

  return {
    title: `Young Sprouts Therapy - ${service.title}`,
    description: service.description,
  };
}

export default async function ConditionsWeSupportPage({
  params: { slug },
}: TherapyTypeProps) {
  let content: React.ReactNode | null = null;

  const service = serviceData[slug];
  const title = service?.title || "Young Sprouts Therapy";
  const description =
    service?.description || "Default description for services.";

  switch (slug) {
    case "adhd-therapy":
      content = <AdhdTherapy />;
      break;
    case "anxiety-therapy":
      content = <AnxietyTherapy />;
      break;
    case "burnout-therapy":
      content = <BurnOutTherapy />;
      break;
    case "behavioral-therapy":
      content = <BehavioralTherapy />;
      break;
    case "depression-therapy":
      content = <DepressionTherapy />;
      break;
    case "grief-therapy":
      content = <GriefTherapy />;
      break;
    case "trauma-therapy":
      content = <TraumaTherapy />;
      break;
    case "autism-therapy":
      content = <AutismTherapy />;
      break;
    case "clinical-supervision":
      content = <ClinicalTherapy />;
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
      "@id": `https://www.youngsproutstherapy.com/services/conditions-we-support/${slug}`,
    },

    name: title,
    description: description,
    url: `https://www.youngsproutstherapy.com/services/conditions-we-support/${slug}`,
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
