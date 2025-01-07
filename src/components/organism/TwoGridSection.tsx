import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface TwoGridSectionProps {
  renderComponent: () => JSX.Element;
  image: StaticImageData | string;
  className?: string;
  row?: 3 | 4 | 5;
  roundedRight?: boolean;
  rtl?: boolean;
}

export function TwoGridSection({
  renderComponent,
  image,
  className,
  roundedRight,
  row,
  rtl = false,
}: TwoGridSectionProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-[44px] lg:gap-20 relative z-30",
        className,
        row === 5 ? "grid grid-cols-1 lg:grid-cols-5" : ""
      )}
    >
      <article
        className={cn(
          "order-2 lg:order-1 h-full flex lg:items-center lg:justify-center max-lg:-mt-10",
          row === 5 ? "grid-cols-1 lg:col-span-3" : "",
          rtl ? "order-2 lg:order-2" : ""
        )}
      >
        {renderComponent()}
      </article>
      <div
        className={cn(
          "relative w-full max-lg:h-[322px] lg:min-h-[500px] h-full rounded-3xl overflow-hidden order-1 lg:order-2",
          row === 5 ? "grid-cols-1 lg:col-span-2" : "",
          roundedRight ? "rounded-3xl rounded-tr-none  " : "",
          rtl ? "order-1 lg:order-1" : ""
        )}
      >
        <Image
          src={image}
          alt="section_image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          objectPosition="top"
          className="w-full object-cover object-center "
        />
      </div>
    </section>
  );
}
