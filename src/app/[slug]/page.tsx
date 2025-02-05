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
import {
  ChildTherapy,
  CouplesTherapy,
  GroupTherapy,
  ParentingCounselling,
  TeenTherapy,
} from "@/components/pages/services/type-of-therapy";
import { MusicTherapy } from "@/components/template/services/therapy-modalities/music-therapy";

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
  "couples-counselling": {
    title: "Couples Counselling | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers couples counselling in Vaughan to help partners improve communication, resolve conflict, and strengthen their relationships.",
  },
  "group-therapy": {
    title: "Group Therapy for Kids and Families | Young Sprouts Therapy",
    description:
      "Young Sprouts Therapy offers group therapy for kids, teens, and families in Vaughan. Our groups provide a supportive environment to learn social skills, build connections, and address common challenges.",
  },
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
      "Help your child express emotions, reduce stress, and build confidence through music therapy. Our Vaughan and Thornhill therapists use rhythm, melody, and songwriting to support emotional and social development.",
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
    alternates: {
      canonical: `https://www.youngsproutstherapy.com/${params.slug}`,
    },
  };
}

export default async function ServicePage({
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
    case "couples-counselling":
      content = <CouplesTherapy />;
      break;
    case "group-therapy":
      content = <GroupTherapy />;
      break;

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

    case "art-therapy":
      content = <ArtTherapy />;
      break;
    case "acceptance-commitment-therapy":
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
      "@id": `https://www.youngsproutstherapy.com/${slug}`,
    },

    name: title,
    description: description,
    url: `https://www.youngsproutstherapy.com/${slug}`,
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
