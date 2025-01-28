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
    title: " What is the therapy process like?",
    description:
      "The therapy process typically begins with an intake session, during which the therapist will gather information about the child's and family's history, current concerns, and goals for therapy. This will involve completing intake forms, as well as an in-person or virtual meeting with the therapist. For children under 12, the initial intake session will be with the caregiver(s). Children 12 and up can complete the intake form and first session on their own. 


After the intake session, the therapist will typically schedule regular therapy sessions with the child and family. The frequency and duration of these sessions may vary depending on the child's and family's needs, and may be adjusted over time as progress is made.


Therapy sessions may be booked for the child individually, child and caregiver(s), and/or for the caregiver(s). During therapy sessions, the therapist will work with the child and/or parents to address the identified concerns and goals for therapy. Depending on the presenting issues, the therapist may use a variety of evidence-based modalities, such as cognitive-behavioural therapy, dialectical behavioural therapy, solution-focused therapy, play therapy, art therapy, and/or narrative therapy.


Throughout the therapy process, the therapist will also work closely with the child's caregivers to ensure that they are supported in their role and have the tools and resources they need to promote their child's mental health and wellbeing outside of therapy sessions. As therapy progresses, the therapist will continually assess the child's and family's progress and adjust the treatment plan as needed. 


The ultimate goal of child and family therapy is to help the child and family achieve positive changes, build resilience, and develop the skills and tools they need to navigate life's challenges.",
  },
  {
    title: " What is your therapeutic method? ",
    description:
      "At Young Sprouts, we offer an integrative and holistic approach to therapy and counseling for children, teens and families. Our therapists are trained in a variety of modalities, including but not limited to cognitive-behavioural therapy, dialectical behavioural therapy, solution-focused therapy, play therapy, art therapy, and narrative therapy. We work collaboratively with the child and their family to develop individualized treatment plans that address their unique needs and concerns. Our therapists prioritize building strong therapeutic relationships with both the child and family, and creating a safe and non-judgmental space for exploration and growth. Our goal is to help children and families achieve positive changes and build resilience through evidence-based interventions and support.",
  },
  {
    title: " How long does the therapy process take?",
    description:
      "The length of the therapy process can vary depending on the issues being addressed, goals of therapy, and progress being made. Some families may require only a few sessions, while others may benefit from longer-term therapy. Therapists work collaboratively with families to set goals and develop a treatment plan, but estimates can change based on progress and evolving needs. The duration ultimately depends on the unique needs of the family and the goals of therapy, and open communication with the therapist can help ensure families receive the support needed to achieve their goals.

",
  },
  {
    title: "What is your cancellation policy?",
    description:
      "Your appointment time is reserved just for you. As such, we require 48 hours notice for any cancellations or changes to your appointment. Clients who provide less than 48 hours notice, or miss their appointment, will be charged the session’s fee. When possible, in person appointments can be changed to virtual sessions if you or your child are experiencing any symptoms.",
  },
];

export function FaqPage() {
  return (
    <>
      <div className="px-5 py-12  mx-auto">
        <HomepageFaq faqData={FaqData} title={"Frequently Asked Questions"} />

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
