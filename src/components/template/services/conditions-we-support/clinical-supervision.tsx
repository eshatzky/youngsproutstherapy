import {
  BlockWithPoints,
  Faq,
  HeroSection,
  TimeLine,
  TwoFlexSection,
  WhatIsSection,
  WhyChooseUs,
} from "@/components/organism/services";

import clinicalheroimage from "/public/services/clinicalheroimage.webp";
import Clinicaltherapymobile from "/public/services/Clinicaltherapymobile.png";
import benefitsofclinicalsupervision from "../../../../../public/services/supervision/supervision.jpg";
import SupervisoinImage from "../../../../../public/services/supervision/supervisionv1.jpg";
import ourApproachtoclinical from "../../../../../public/services/supervision/supervisionv2.jpg";

export function ClinicalTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col lg:gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10">
        <div className="hidden lg:block">
          <HeroSection props={HeroSectionData} />
        </div>
        <div className="block lg:hidden">
          <HeroSection props={HeroSectionDataMobile} />
        </div>
        <WhatIsSection data={WhatIsClinicalTherapy} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={BenefitsofClinicalTherapyData} />
          )}
          image={benefitsofclinicalsupervision}
        />
      </div>
      <div className="pt-4">
        <WhyChooseUs data={SocialSkillsDevelopment} row={3} />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={ourApproachtoClinical} />
          )}
          image={ourApproachtoclinical}
        />
      </div>
      <div className="max-w-[1440px] w-full mx-auto ~px-4/10 ~py-10/16 max-lg:pt-0">
        <TwoFlexSection
          renderComponent={() => (
            <BlockWithPoints data={SupervisionForPsychotherapy} />
          )}
          image={SupervisoinImage}
          rtl={true}
        />
      </div>

      <div className="flex flex-col gap-8  overflow-hidden max-w-[1250.5px] mx-auto w-full ~pt-10/16 ~px-4/10 max-lg:pt-0">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium ~text-2xl/3xl text-center text-primary ">
            Clinical Supervision for Social Workers
          </h2>
          <p className="text-center leading-6 max-w-[846px] mx-auto">
            For social workers, our clinical supervision services help you
            manage case management and client interventions:
          </p>
        </div>
        <TimeLine props={TimeLineSectionData} />
      </div>

      <div className=" max-w-[1440px] w-full mx-auto ~px-4/10">
        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: clinicalheroimage,
  title:
    "Clinical Supervision for Psychotherapists & Social Workers in Vaughan & Thornhill",
  description:
    "Offering clinical supervision in Thornhill, Vaughan for therapists specializing in children, teens, and families. Elevate your practice with Young Sprouts' expertise.",
};
const HeroSectionDataMobile = {
  image: Clinicaltherapymobile,
  title:
    "Clinical Supervision for Psychotherapists & Social Workers in Vaughan & Thornhill",
  description:
    "Offering clinical supervision in Thornhill, Vaughan for therapists specializing in children, teens, and families. Elevate your practice with Young Sprouts' expertise.",
};

const WhatIsClinicalTherapy = {
  title: "What Is Clinical Supervision?",
  description:
    "Clinical supervision is a professional, reflective relationship between a supervisor and a psychotherapist or social worker, designed to support the development of clinical skills, ethical decision-making, and emotional resilience. Supervision offers a confidential space to discuss cases, develop new strategies, and navigate complex client issues. At Young Sprouts Therapy, we provide clinical supervision for registered psychotherapists and social workers, offering guidance that focuses on ethical practice, clinical growth, and best practices for working with diverse client populations, including children, teens, and families.",
};

const SocialSkillsDevelopment = {
  title: "Specializing in Children, Teens, and Families",
  description:
    "At Young Sprouts Therapy, we have extensive experience in clinical supervision for therapists and social workers who work with children, teens, and families. Our supervision sessions focus on:",
  list: [
    {
      title: "Working with Youth:",
      description:
        "Learn effective therapeutic strategies for engaging with children and teens, helping them navigate emotional, behavioural, and developmental challenges.",
    },
    {
      title: "Family Dynamics:",
      description:
        "Get guidance on family systems, managing parent-child dynamics, and supporting families in conflict or distress.",
    },
    {
      title: "Trauma-Informed Care for Youth:",
      description:
        "Develop skills to support children and teens dealing with trauma, anxiety, and behavioural challenges.",
    },
  ],
};

const TimeLineSectionData = [
  {
    title: "Trauma-Informed Practice:",
    description:
      "Supervision helps social workers integrate trauma-informed care into their daily practice, ensuring the safety and emotional well-being of vulnerable clients.",
  },
  {
    title: "Family and Child Social Work:",
    description:
      "Supervision focuses on managing family dynamics, protecting child welfare, and addressing the complexities of working with at-risk children.",
  },
  {
    title: "Ethical Practice:",
    description:
      "Receive guidance on navigating the ethical complexities of social work, such as client autonomy, confidentiality, and mandated reporting.",
  },
];

const BenefitsofClinicalTherapyData = {
  title: "Benefits of Clinical Supervision",
  description:
    "Our supervision services are tailored to enhance your practice:",
  list: [
    {
      title: "Professional Development:",
      description:
        "Regular supervision ensures you continually refine your clinical skills and grow as a practitioner.",
    },
    {
      title: "Ethical Decision-Making:",
      description:
        "Receive support navigating complex ethical issues such as confidentiality, dual relationships, and boundaries.",
    },
    {
      title: "Emotional Support:",
      description:
        "Supervision provides a reflective space to process difficult cases, manage stress, and prevent burnout in your practice.",
    },
  ],
};

const ourApproachtoClinical = {
  title: "Our Approach to Clinical Supervision",
  description:
    "Our supervision process is collaborative and reflective, focusing on building your skills as a practitioner:",
  list: [
    {
      title: "Individualized Supervision Plans:",
      description:
        "We tailor our supervision sessions to your specific professional goals, areas of expertise, and clinical challenges.",
    },
    {
      title: "Focus on Ethics and Best Practices:",
      description:
        "Ethical issues are a significant part of supervision, ensuring your practice meets the highest standards of care.",
    },
    {
      title: "Reflective Supervision:",
      description:
        "We provide a safe and supportive environment to explore your emotional responses to challenging cases and enhance your self-awareness as a practitioner.",
    },
  ],
};
const SupervisionForPsychotherapy = {
  title: "Supervision for Psychotherapists",
  description:
    "Our clinical supervision for psychotherapists focuses on helping you navigate clinical challenges in psychotherapy:",
  list: [
    {
      title: "Deepening Therapeutic Techniques:",
      description:
        "Get feedback on clinical approaches, treatment plans, and intervention strategies to enhance your therapeutic work with clients.",
    },
    {
      title: "Managing Complex Client Cases:",
      description:
        "Receive guidance on navigating complex issues such as trauma, grief, and mental health disorders in a therapeutic context.",
    },
    {
      title: "Ethical Supervision:",
      description:
        "Ethical dilemmas are central to supervision, helping you manage difficult cases while maintaining professional boundaries and standards.",
    },
  ],
};

const FaqData = {
  description:
    "Book a Clinical Supervision Session in Vaughan & Thornhill If you’re looking for clinical supervision to enhance your practice, contact us today to schedule a session. We offer in-person and virtual supervision for registered psychotherapists and social workers. Fill out our online contact form or schedule a free consultation to start your supervision journey.",
  accordion: [
    {
      title: "How often should I attend clinical supervision?",
      description:
        "The frequency depends on your professional needs. Most psychotherapists and social workers benefit from monthly sessions, though those handling complex cases may opt for more frequent supervision.",
    },
    {
      title: "Is virtual supervision available?",
      description:
        "Yes, we offer virtual clinical supervision for psychotherapists and social workers across Ontario, ensuring flexibility and accessibility.",
    },
    {
      title: "Does clinical supervision meet professional standards?",
      description:
        "Our supervision services meet the requirements for professional development and regulatory board standards for both psychotherapists and social workers.",
    },
  ],
};
