import { Button } from "@/components/ui/button";
import { ServiceAccordion } from "../ServiceAccordion";
import Link from "next/link";

type AccordionDataType = {
  title: string;
  description: string;
};

type DataType = {
  description?: string;
  accordion: AccordionDataType[];
};

type Props = {
  data: DataType;
  title?: string;
  showButtons?: boolean;
};

export function Faq({ data, title = "FAQs", showButtons = true }: Props) {
  return (
    <section className="~pt-16/24 flex flex-col gap-8 lg:gap-9 w-full">
      <h2 className="text-primary font-medium ~text-2xl/3xl text-center">
        {title}
      </h2>
      <ServiceAccordion props={data.accordion} />
      {data?.description && (
        <p className="text-center leading-6 text-[#000]">{data.description}</p>
      )}

      {showButtons && (
        <div className="flex-col flex lg:flex-row gap-6 items-center w-full justify-center">
          <Button asChild variant={"default"} className="max-w-[270px] w-full">
            <Link
              href={
                "https://calendly.com/youngsproutstherapy/15-minute-consult"
              }
              target="_blank"
            >
              Book a Free Consult
            </Link>
          </Button>

          <Button asChild variant={"outline"} className="max-w-[270px] w-full">
            <Link href={`tel:(647)370-7622`}>Call Now -(647)370-7622</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
