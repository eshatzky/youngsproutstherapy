import {
  AcceptanceTherapy,
  ArtTherapy,
  CognitiveTherapy,
  DialecticalTherapy,
  EmotionFocusedTherapy,
  NarrativeTherapy,
  ParentChildTherapy,
  PlayTherapy,
  SolutionFocusedTherapy,
} from "@/components/pages/services/therapy-modalities";
import { MusicTherapy } from "@/components/template/services/therapy-modalities/music-therapy";

interface ContidionsWeSupportTypeProps {
  params: {
    slug: string;
  };
}

interface ServiceConfig {
  title: string;
  description: string;
}

const serviceData: Record<string, ServiceConfig> = {
  "art-therapy": {
    title: "Art Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Engage in creative expression through art therapy to explore emotions and improve mental well-being.",
  },
  "acceptance-commitment-therapy": {
    title:
      "Acceptance Commitment Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Learn to accept thoughts and feelings while committing to meaningful actions with ACT.",
  },
  "cognitive-behavioral-therapy": {
    title:
      "Cognitive Behavioral Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "A structured approach to address negative thought patterns and improve emotional regulation.",
  },
  "dialectical-behavioral-therapy": {
    title:
      "Dialectical Behavioral Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Enhance emotional and interpersonal skills through DBT's practical techniques.",
  },
  "emotion-focused-therapy": {
    title: "Emotion Focused Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Discover the role of emotions in relationships and personal growth with EFT.",
  },
  "narrative-therapy": {
    title: "Narrative Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Reframe and reshape your personal story to empower change and healing.",
  },
  "play-therapy": {
    title: "Play Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "A child-centered approach using play to help children express and resolve challenges.",
  },
  "parent-child-therapy": {
    title: "Parent Child Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Strengthen the bond between parents and children through guided therapeutic interactions.",
  },
  "solution-focused-therapy": {
    title:
      "Solution-Focused Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Focus on solutions and achieve goals through a positive and future-oriented approach.",
  },
  "music-therapy": {
    title: "Music Therapy for Kids and Teens | Young Sprouts Therapy",
    description:
      "Focus on solutions and achieve goals through a positive and future-oriented approach.",
  },
};

export async function generateMetadata({
  params,
}: ContidionsWeSupportTypeProps) {
  const service = serviceData[params.slug] || {
    title: "Young Sprouts Therapy",
    description:
      "Professional therapy services for individuals, families, and groups.",
  };

  return {
    title: `${service.title}`,
    description: service.description,
    alternates: {
      canonical: `https://www.youngsproutstherapy.com/services/therapy-modalities/${params.slug}`,
    },
  };
}

export default async function ConditionsWeSupportPage({
  params: { slug },
}: ContidionsWeSupportTypeProps) {
  let content: React.ReactNode | null = null;

  const service = serviceData[slug];
  const title = service?.title || "Young Sprouts Therapy";
  const description =
    service?.description || "Default description for services.";

  switch (slug) {
    case "art-therapy":
      content = <ArtTherapy />;
      break;
    case "Acceptance-commitment-therapy":
      content = <AcceptanceTherapy />;
      break;
    case "cognitive-behavioral-therapy":
      content = <CognitiveTherapy />;
      break;
    case "dialectical-behavioral-therapy":
      content = <DialecticalTherapy />;
      break;
    case "emotion-focused-therapy":
      content = <EmotionFocusedTherapy />;
      break;
    case "narrative-therapy":
      content = <NarrativeTherapy />;
      break;
    case "play-therapy":
      content = <PlayTherapy />;
      break;
    case "parent-child-therapy":
      content = <ParentChildTherapy />;
      break;
    case "solution-focused-therapy":
      content = <SolutionFocusedTherapy />;
      break;
    case "music-therapy":
      content = <MusicTherapy />;
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
      "@id": `https://www.youngsproutstherapy.com/services/therapy-modalities/${slug}`,
    },

    name: title,
    description: description,
    url: `https://www.youngsproutstherapy.com/services/therapy-modalities/${slug}`,
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
