import Image from "next/image";

export function PositiveOutcomes() {
  return (
    <section className="~py-14/24 max-w-[1440px] mx-auto ~px-5/16 flex flex-col gap-14 lg:gap-12 overflow-hidden">
      <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-28">
        <div className="w-full space-y-4">
          <div className="flex gap-4 items-center">
            <h2 className="text-primary font-bold text-2xl lg:text-6xl text-center lg:text-left">
              Positive Outcomes
            </h2>
            <Image
              src={"/images/ronuded-arrow-icon.svg"}
              width={100}
              height={100}
              alt="why choose us"
              className="w-16"
            />
          </div>
          <p className="text-[#333333] ~text-base/lg">
            Through our expert led child and family counselling, we aim to help
            children, teens, and families achieve positive, lasting outcomes.
            Through evidence-based practices and a supportive therapeutic
            environment, we empower you to overcome challenges and build a
            brighter, healthier future.
          </p>
        </div>
        <Image
          src={"/images/positive-outcome.webp"}
          width={1000}
          height={1000}
          alt="why choose us"
          className="w-full lg:w-8/12"
        />
      </div>
    </section>
  );
}
