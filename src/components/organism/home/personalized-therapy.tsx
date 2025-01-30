import Image from "next/image";

export function PersonalizedTherapy() {
  return (
    <>
      <section className="~py-14/24 max-w-[1440px] w-full mx-auto ~px-5/16 flex flex-col gap-14 lg:gap-12 overflow-hidden">
        <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-28">
          <div className="space-y-5 w-full">
            <h2 className="text-primary font-medium ~text-xl/3xl text-left">
              Personalized Therapy
            </h2>
            <p className="text-[#333333] ~text-base/lg text-left">
              At Young Sprouts, we understand that every family is unique.
              That’s why our mental health therapists take the time to get to
              know you and your needs, crafting a personalized therapy and
              counselling plan that aligns with your goals and values. Our
              client-centred approach ensures that you receive care that is not
              only effective but also resonates with your family&apos;s
              dynamics.
            </p>
          </div>
          <Image
            src={"/images/heart.png"}
            width={1000}
            height={1000}
            alt="why choose us"
            className="w-full lg:max-w-[405px]"
          />
        </div>
      </section>
    </>
  );
}
