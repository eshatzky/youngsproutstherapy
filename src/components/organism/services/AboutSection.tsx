import { Button } from "@/components/ui/button";

type About = {
  title: string;
  subtitle: string;
  description: string;
  subDescription: string;
};

type PropsType = {
  props: About;
};

export function AboutSection({ props }: PropsType) {
  return (
    <section className="flex flex-col gap-6 lg:gap-8">
      <article className="flex flex-col gap-6 ">
        <h2 className="font-medium ~text-lg/3xl text-primary">
          {props?.title}
        </h2>
        <p className="leading-6">{props?.description}</p>
      </article>
      <article className="flex flex-col gap-6">
        <h2 className="font-medium ~text-lg/3xl text-primary">
          {props?.subtitle}
        </h2>
        <p className="leading-6 ">{props?.subDescription}</p>
      </article>
      <Button className="sm:w-fit text-sm lg:text-base ~px-10/16">
        Book a Free Consult
      </Button>
    </section>
  );
}
