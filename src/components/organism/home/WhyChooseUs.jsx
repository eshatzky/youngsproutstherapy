import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section className="~py-16/20 max-w-[1440px] mx-auto ~px-5/16 flex flex-col gap-14 lg:gap-12 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-14">
        <Image
          src={"/images/why-choose-us-section.webp"}
          width={1000}
          height={1000}
          alt="why choose us"
          className="w-full lg:w-8/12"
        />

        <div className="space-y-5 w-full">
          <h2 className="text-primary font-bold ~text-xl/5xl text-center lg:text-left">
            Why Choose Us?
          </h2>
          <p className="text-[#91818A] ~text-base/3xl text-center lg:text-left">
            Caring Team of Child and Family Therapists
          </p>
          <p className="text-[#333333] ~text-base/lg text-center lg:text-left">
            Our team of licensed family and child therapists in Vaughan is
            composed of experienced professionals dedicated to your
            family&apos;s well-being. Each therapist brings extensive experience
            in understanding child behaviour, counselling, adolescent mental
            health, and family dynamics, ensuring that you receive the highest
            standard of care.
          </p>
        </div>
      </div>
    </section>
  );
}
