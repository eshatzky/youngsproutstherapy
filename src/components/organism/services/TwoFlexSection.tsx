import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface TwoGridSectionProps {
  renderComponent: () => JSX.Element;
  image: StaticImageData | string;
  className?: string;
  rtl?: boolean;
}

export function TwoFlexSection({
  renderComponent,
  image,
  className,
  rtl = false,
}: TwoGridSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col-reverse w-full lg:flex-row gap-[44px] lg:gap-14",
        rtl ? "flex-col max-lg:flex-col-reverse lg:flex-row-reverse" : "",
        className
      )}
    >
      <article className={cn("w-full lg:max-w-[765px] max-lg:-mt-2")}>
        {renderComponent()}
      </article>
      <div
        className={cn(
          "relative w-full max-lg:h-[321px] rounded-3xl overflow-hidden lg:max-h-[589px] lg:max-w-[600px]"
        )}
      >
        <Image
          src={image}
          alt="section_image"
          layout="fill"
          loading="lazy"
          decoding="async"
          quality={85}
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
          className="w-full object-cover object-center h-full "
        />
      </div>
    </section>
  );
}
