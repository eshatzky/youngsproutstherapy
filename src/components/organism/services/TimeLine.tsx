import { Card } from "@/components/ui/card";

type TimeLineType = {
  title: string;
  description: string;
};

type PropsType = {
  props: TimeLineType[];
};

export function TimeLine({ props }: PropsType) {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-14 relative before:absolute before:content-[url('/svg/howtherapyworkmobile.svg')] before:-top-8 before:bottom-0 before:left-6 lg:before:content-[url('/svg/howtherapywork.svg')]  lg:before:-left-8 lg:before:-right-16 before:w-full lg:before:-top-12 before:h-full before:bg-no-repeat before:z-10">
      {props.slice(0, 3).map((item, index) => (
        <Card key={index} className="flex flex-col gap-2 px-4 py-11 z-20">
          <h3 className="text-2xl font-medium text-primary text-center">
            {item.title}
          </h3>
          <p className="text-base leading-6 text-center">{item.description}</p>
        </Card>
      ))}
    </ul>
  );
}
