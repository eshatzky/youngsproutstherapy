import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqPage() {
  return (
    <>
      <div className="px-5 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-1"
            className="border rounded-lg bg-[#f8fffc]"
          >
            <AccordionTrigger className="px-4 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <span className="text-sm font-medium text-muted-foreground">
                  1
                </span>
                <h3 className="font-medium">
                  Are your services covered by insurance?
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-muted-foreground">
              Most of our services are covered by common workplace benefits
              plans. Please check with your employer for coverage details under
              social work and registered psychotherapists.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border rounded-lg bg-[#f8fffc]"
          >
            <AccordionTrigger className="px-4 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <span className="text-sm font-medium text-muted-foreground">
                  2
                </span>
                <h3 className="font-medium">
                  What is the therapy process like?
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-muted-foreground">
              The therapy process is a collaborative journey where we work
              together to address your concerns.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border rounded-lg bg-[#f8fffc]"
          >
            <AccordionTrigger className="px-4 hover:no-underline ">
              <div className="flex items-center gap-4 text-left">
                <span className="text-sm font-medium text-muted-foreground">
                  3
                </span>
                <h3 className="font-medium">
                  What is your therapeutic method?
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-muted-foreground">
              We use a variety of evidence-based approaches tailored to each
              individual&apos;s needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border rounded-lg bg-[#f8fffc]"
          >
            <AccordionTrigger className="px-4 hover:no-underline ">
              <div className="flex items-center gap-4 text-left">
                <span className="text-sm font-medium text-muted-foreground">
                  4
                </span>
                <h3 className="font-medium">
                  How long does the therapy process take?
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-muted-foreground">
              The length of therapy varies depending on the individual&&apos;s
              needs and goals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border rounded-lg bg-[#f8fffc]"
          >
            <AccordionTrigger className="px-4 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <span className="text-sm font-medium text-muted-foreground">
                  5
                </span>
                <h3 className="font-medium">
                  What is your cancellation policy?
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-muted-foreground">
              We require 24 hours notice for cancellations to avoid being
              charged for the session.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="text-center mt-8 text-muted-foreground">
          Don&apos;t see your question here? Send us a message through our
          <Link href="/contact-us" className="text-primary hover:underline">
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
