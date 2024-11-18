import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type data = {
  image: StaticImageData | string;
  title: string;
  description: string;
};

type Props = {
  data: data;
};

export function Banner({ data }: Props) {
  return (
    <section className="relative lg:min-h-[404px] h-auto rounded-3xl overflow-hidden ">
      <Image
        src={data.image}
        alt={data.title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="w-full -z-20"
        placeholder="blur"
      />
      <div className="flex flex-col gap-9 items-center justify-center ~py-7/12 px-5 z-30">
        <h2 className="text-3xl font-medium text-center text-white">
          {data.title}
        </h2>
        <p className="max-w-[1016px] mx-auto text-center leading-7 text-lg text-white">
          {data.description}
        </p>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-6 z-30">
          <Button
            asChild
            className="max-w-[270px] w-full bg-white  text-primary font-semibold"
          >
            <Link
              href={
                "https://calendly.com/youngsproutstherapy/15-minute-consult"
              }
              target="_blank"
            >
              Book a Free Consult
            </Link>
          </Button>
          <Button
            asChild
            className="max-w-[270px] w-full  text-white border border-white hover:border-none font-semibold"
            variant={"outline"}
          >
            <Link href="tel:+(647)370-7622">Call Now -(647)370-7622</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
