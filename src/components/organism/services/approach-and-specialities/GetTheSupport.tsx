import Image from "next/image";

export function GetTheSupport() {
  return (
    <section className="flex flex-col gap-7 w-full bg-[#F4FDFF]">
      <h2 className="font-medium text-center ~text-2xl/3xl text-secondary">
        Get the support you need to:
      </h2>
      <ul className="grid grid-cols-1  lg:grid-cols-3 gap-9 max-w-[1000px] mx-auto ">
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
            <p className="text-white text-xl text-center ">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const TherapyInfo = [
  {
    title: "Gain Emotional Relief",
  },
  {
    title: "Feel Empowered",
  },
  {
    title: "Develop Healthy Coping Skills",
  },
];
