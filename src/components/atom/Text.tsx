import { cn } from "@/lib/utils";
import React from "react";

interface TextProps {
  className?: string;
  size: "big" | "medium" | "small";
  type?: "p" | "div" | "span";
  children: React.ReactNode;
}

const sizeStyles = {
  big: `
     text-base lg:text-lg font-normal ~leading-2xl/3xl
  `,
  medium: `
   text-base font-normal leading-2xl
  `,
  small: `
  text-sm leading-[150%] 
`,
};

const Text: React.FC<TextProps> = ({
  className,
  size,
  type = "p",
  children,
}) => {
  const Component = type as keyof JSX.IntrinsicElements;
  const baseStyles = sizeStyles[size];

  return (
    <Component className={cn(baseStyles, className)}>{children}</Component>
  );
};

export default Text;
