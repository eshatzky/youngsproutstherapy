import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionType = {
  title: string;
  description: string;
};

type PropType = {
  props: AccordionType[];
};

export function ServiceAccordion({ props }: PropType) {
  return (
    <Accordion type="multiple">
      {props.map((item, index) => (
        <AccordionItem
          key={index}
          value={item.title}
          className="flex flex-col "
        >
          <AccordionTrigger className="text-left ~text-base/xl !font-medium text-black">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="leading-6">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
