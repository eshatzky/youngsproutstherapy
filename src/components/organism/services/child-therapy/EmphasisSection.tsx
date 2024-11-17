import Image from "next/image";

type List = {
  title: string;
  description: string;
};

type EmphasisData = {
  title: string;
  description: string;
  subTitle: string;
  subDescription: string;
  list: List[];
};

type PropsType = {
  props: EmphasisData;
};
export function EmphasisSection({ props }: PropsType) {
  return (
    <article className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-4">
        <h2 className="~text-2xl/3xl font-medium text-primary">
          {props.title}
        </h2>
        <p className="leading-6">{props.description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="~text-2xl/3xl font-medium text-primary">
          {props.subTitle}
        </h2>
        <p className="leading-6">{props.subDescription}</p>
      </div>
      <ul className="flex flex-col gap-4">
        {props.list.map((item, key) => (
          <li key={key} className="flex flex-col gap-4">
            <h3 className="text-primary text-lg flex gap-2.5 items-center">
              <Image
                src={"/svg/magicicon.svg"}
                width={10}
                height={10}
                alt="icon"
                className="w-3 h-3 aspect-auto flex-shrink-0"
              />
              {item.title}
            </h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
