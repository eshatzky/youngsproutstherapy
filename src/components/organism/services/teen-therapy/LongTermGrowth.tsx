"use client";

import { Button } from "@/components/ui/button";

export function LongTermGrowth() {
  return (
    <article className="flex flex-col gap-4 lg:items-center lg:justify-center lg:min-h-[589px] h-full">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Therapy Tailored for Long-term Growth
        </h2>
        <p className="leading-6">
          We believe in creating lasting change through therapy. Our therapists
          use a combination of talk therapy, creative outlets like art therapy,
          and mindfulness practices to develop a personalized plan for each
          teen. This tailored approach ensures that teens not only see
          improvements during therapy but also continue to grow emotionally long
          after their sessions end. Our therapy is designed to provide teens
          with the tools they need to manage future challenges, improve their
          relationships, and maintain their emotional well-being.
        </p>
      </div>

      <div className="flex-col flex lg:flex-row gap-6 items-center w-full mt-6">
        <Button className="lg:max-w-[270px] w-full">Book a Free Consult</Button>
        <Button variant={"outline"} className="lg:max-w-[270px] w-full">
          Call Now -(647)370-7622
        </Button>
      </div>
    </article>
  );
}
