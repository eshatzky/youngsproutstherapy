import Image from "next/image";

export function ConvenientLocation() {
  return (
    <>
      <section className="~py-16/20 max-w-[1440px] w-full mx-auto ~px-4/16 flex flex-col gap-14 lg:gap-12 overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-28">
          <Image
            src={"/images/why-choose-us-section.webp"}
            width={1000}
            height={1000}
            alt="why choose us"
            className="w-full lg:max-w-[565px]"
          />

          <div className="space-y-5 w-full">
            <p className="text-primary ~text-xl/3xl font-medium text-left">
              Convenient Location in Vaughan
            </p>
            <p className="text-[#333333] ~text-base/lg text-left">
              Located in the heart of Thornhill, our clinic is easily accessible
              from Vaughan, Thornhill, Richmond Hill, Markham, Aurora,
              Newmarket, North York and surrounding areas. We also offer
              flexible online therapy sessions to accommodate busy schedules,
              ensuring that high-quality care is always within reach.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
