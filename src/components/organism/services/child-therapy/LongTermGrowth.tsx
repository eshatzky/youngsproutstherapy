import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LongTermGrowth() {
  return (
    <section className="flex flex-col gap-6 ">
      <h2 className="font-medium ~text-2xl/3xl text-primary">
        Therapy Tailored for Long-term Growth
      </h2>
      <p className="leading-6">
        We understand that every child is unique, which is why we use a
        combination of therapeutic modalities to create a personalized plan.
        Whether your child benefits from traditional talk therapy, play therapy,
        or art therapy, we will tailor our approach to best meet their needs.
        Our therapists also work closely with parents to ensure that progress
        made in therapy is supported at home.
      </p>
      <h2 className="font-medium ~text-2xl/3xl text-primary">
        Book a Child Therapy Session in Vaughan & Thornhill
      </h2>
      <p className="leading-6">
        Are you ready to help your child navigate emotional and behavioural
        challenges? Contact us today to book a session at our Vaughan or
        Thornhill office. We offer both in-person and virtual appointments to
        meet your family’s needs. Fill out our online contact form or schedule a
        free consultation to get started.
      </p>
      <div className="flex flex-col max-lg:items-center lg:flex-row gap-6 mt-4 lg:mt-8 w-full">
        <Button asChild className="max-w-[270px] w-full py-3">
          <Link
            href={"https://calendly.com/youngsproutstherapy/15-minute-consult"}
            target="_blank"
          >
            Book a Free Consult
          </Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          className="max-w-[270px] w-full py-3"
        >
          <Link href="tel:+(647)370-7622">Call Now -(647)370-7622</Link>
        </Button>
      </div>
    </section>
  );
}
