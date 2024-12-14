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
      "The therapy process is a collaborative journey where we work together to address your concerns.",
  },
  {
    title: " What is your therapeutic method? ",
    description:
      "We use a variety of evidence-based approaches tailored to each individual&apos;s needs.",
  },
  {
    title: " How long does the therapy process take?",
    description:
      " The length of therapy varies depending on the individual's needs and goals.",
  },
  {
    title: "What is your cancellation policy?",
    description:
      " We require 24 hours notice for cancellations to avoid being charged for the session.",
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
