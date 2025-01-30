import Image from "next/image";

const InsuranceCoverageImages = [
  {
    id: 1,
    src: "/images/manulife.webp",
    alt: "Manulife ",
  },
  {
    id: 2,
    src: "/images/sunlife.webp",
    alt: "Sun life",
  },
  {
    id: 3,
    src: "/images/desjardins.webp",
    alt: "desjardins",
  },
];

export function InsuranceCoverage() {
  return (
    <section className='relative bg-[url("/images/insurance-coverage-image.webp")] bg-no-repeat bg-cover bg-center'>
      <div className="absolute inset-0 bg-[#0196AFCF] opacity-90"></div>
      <div className="relative z-[10] ~py-16/28 max-w-[1440px] mx-auto ~px-5/16 flex flex-col ~gap-6/12 overflow-hidden text-center">
        <h2 className="~text-xl/5xl text-white">Insurance Coverage</h2>
        <p className="text-white">
          We believe that access to quality mental health care should be both
          easy and affordable. That’s why we accept coverage from most major
          insurance providers, reducing the financial burden so that you can
          focus on what truly matters—your family&apos;s well-being.
        </p>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
          {InsuranceCoverageImages.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={500}
              height={250}
              className="w-full h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
