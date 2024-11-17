import Image from "next/image";

export function TherapyCanHelp() {
  return (
    <section className="~py-6/16 flex flex-col gap-7 w-full bg-[#F4FDFF]">
      <h2 className="font-medium text-center ~text-2xl/3xl text-primary">
        Therapy can help you and your teen:
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-[1000px] mx-auto ">
        {TherapyInfo.map((item, index) => (
          <li
            key={index}
            className="flex flex-col gap-4 items-center justify-center py-7 px-2.5 bg-[#0196af] rounded-lg shadow"
          >
            <Image
              src={"/svg/flower.svg"}
              width={48}
              height={48}
              alt="flower"
              className="w-12 h-12"
            />
            <p className="text-white text-xl ">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const TherapyInfo = [
  {
    title: " Develop Healthy Coping Skills",
  },
  {
    title: " Understand Their Emotions",
  },
  {
    title: "Live With More Confidence",
  },
];
