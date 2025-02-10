import Link from "next/link";
import React from "react";

import { HomepageFaq } from "@/components/organism/services/Faq";

const FaqData = [
  {
    title: "Are your services covered by insurance?",
    description:
      "Most of our services are covered by common workplace benefits plans. Please check with your employer for coverage details under social work and registered psychotherapists.",
  },
  {
    title: "What is the therapy process like?",
    description:
      "The therapy process typically begins with an intake session, during which the therapist gathers information about the child's and family's history, current concerns, and therapy goals. This involves completing intake forms and attending an in-person or virtual meeting with the therapist. For children under 12, the initial intake session is with the caregiver(s). Children 12 and older can complete the intake form and first session on their own.\n\n" +
      "After the intake session, the therapist schedules regular therapy sessions with the child and family. The frequency and duration of these sessions vary depending on the child’s and family’s needs and may be adjusted as progress is made.\n\n" +
      "Therapy sessions may involve the child individually, the child and caregiver(s), and/or the caregiver(s). During these sessions, the therapist addresses the identified concerns and goals using various evidence-based modalities, such as cognitive-behavioural therapy, dialectical behavioural therapy, solution-focused therapy, play therapy, art therapy, and narrative therapy.\n\n" +
      "Throughout the process, the therapist works closely with the child's caregivers to ensure they are supported in their role and equipped with tools and resources to promote the child’s mental health outside of therapy. The therapist continually assesses progress and adjusts the treatment plan as needed.\n\n" +
      "The ultimate goal of child and family therapy is to help the child and family achieve positive changes, build resilience, and develop the skills needed to navigate life's challenges.",
  },
  {
    title: "What is your therapeutic method?",
    description:
      "At Young Sprouts, we offer an integrative and holistic approach to therapy and counseling for children, teens, and families. Our therapists are trained in a variety of modalities, including cognitive-behavioural therapy, dialectical behavioural therapy, solution-focused therapy, play therapy, art therapy, and narrative therapy. We work collaboratively with the child and their family to develop individualized treatment plans that address their unique needs and concerns. Our therapists prioritize building strong therapeutic relationships with both the child and family, creating a safe and non-judgmental space for exploration and growth. Our goal is to help children and families achieve positive changes and build resilience through evidence-based interventions and support.",
  },
  {
    title: "How long does the therapy process take?",
    description:
      "The length of the therapy process varies depending on the issues being addressed, therapy goals, and progress made. Some families may require only a few sessions, while others benefit from longer-term therapy. Therapists work collaboratively with families to set goals and develop a treatment plan. However, the duration depends on the unique needs of the family and evolving circumstances. Open communication with the therapist helps ensure families receive the support they need to achieve their goals.",
  },
  {
    title: "What is your cancellation policy?",
    description:
      "Your appointment time is reserved just for you. We require 48 hours' notice for any cancellations or changes to your appointment. Clients who provide less than 48 hours' notice or miss their appointment will be charged the session fee. When possible, in-person appointments can be changed to virtual sessions if you or your child are experiencing any symptoms.",
  },
];

export function FaqPage() {
  return (
    <>
      <div className="px-5 py-12  mx-auto">
        <h1 className="text-primary ~text-2xl/3xl font-medium text-center mb-6">
          Frequently Asked Questions
        </h1>
        <HomepageFaq faqData={FaqData} showFaq={false} />

        <p className="text-center mt-8 text-muted-foreground">
          Don&apos;t see your question here? Send us a message through our
          <Link
            href="/contact-us"
            className="text-primary hover:underline mx-0.5"
          >
            Contact
          </Link>
          page, or e-mail us at{" "}
          <Link
            href="mailto:info@youngsproutstherapy.com"
            className="text-primary hover:underline"
          >
            info@youngsproutstherapy.com
          </Link>
          .
        </p>
      </div>
    </>
  );
}
