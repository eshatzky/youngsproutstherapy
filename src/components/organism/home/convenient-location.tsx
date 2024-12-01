import Image from "next/image";

export function ConvenientLocation() {
  return (
    <>
      <section className="~py-16/20 max-w-[1050px] w-full mx-auto  ~px-5/16 flex flex-col gap-14 lg:gap-12 overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
          <Image
            src={"/images/why-choose-us-section.webp"}
            width={1000}
            height={1000}
            alt="why choose us"
            className="w-full lg:max-w-[565px]"
          />

          <div className="space-y-5 w-full">
            <p className="text-primary ~text-base/3xl text-center lg:text-left">
              Convenient Location in Vaughan
            </p>
            <p className="text-[#333333] ~text-base/lg text-center lg:text-left">
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
