import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
  className?: string;
  size: "big" | "medium" | "small";
  type?: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

const sizeStyles = {
  big: `
     text-xl lg:text-6xl font-bold lg:leading-[81.5px]
  `,
  medium: `
   text-lg lg:text-5xl font-semibold
  `,
  small: `
  text-3xl font-medium
`,
};

const Title: React.FC<TitleProps> = ({
  className,
  size,
  type = "h2",
  children,
}) => {
  const Component = type as keyof JSX.IntrinsicElements;
  const baseStyles = sizeStyles[size];

  return (
    <Component className={cn(baseStyles, className)}>{children}</Component>
  );
};

export default Title;
