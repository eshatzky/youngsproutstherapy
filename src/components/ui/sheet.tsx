"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <div className="bg-primary text-white text-center w-full ">
        <div className="max-w-[1440px] mx-auto w-full ~px-5/10 pb-4  flex flex-col lg:flex-row items-center justify-between gap-2">
          <div className="hidden lg:block">
            <p className="text-sm text-white opacity-0">
              (289) 579-4769 (GROW)
            </p>
          </div>
          <Link href={"/#"} target="_blank" className="text-sm flex flex-col">
            <span> Ready to schedule an appointment ? </span>
            <span className="underline font-medium">Click Here</span>
          </Link>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M5.53325 7.38992C6.05525 8.47714 6.76684 9.49612 7.66803 10.3973C8.56921 11.2985 9.58819 12.0101 10.6754 12.5321C10.7689 12.577 10.8157 12.5994 10.8749 12.6167C11.0851 12.678 11.3433 12.6339 11.5214 12.5064C11.5715 12.4706 11.6144 12.4277 11.7001 12.3419C11.9623 12.0797 12.0934 11.9486 12.2252 11.8629C12.7224 11.5397 13.3633 11.5397 13.8605 11.8629C13.9923 11.9486 14.1234 12.0797 14.3856 12.3419L14.5318 12.4881C14.9304 12.8867 15.1297 13.086 15.2379 13.3C15.4532 13.7257 15.4532 14.2284 15.2379 14.6541C15.1297 14.8681 14.9304 15.0674 14.5318 15.466L14.4136 15.5842C14.0164 15.9814 13.8177 16.18 13.5477 16.3317C13.2481 16.5 12.7827 16.621 12.4391 16.62C12.1293 16.6191 11.9177 16.559 11.4943 16.4389C9.2193 15.7931 7.07253 14.5748 5.28154 12.7838C3.49056 10.9928 2.2722 8.84603 1.62647 6.57098C1.50632 6.14765 1.44624 5.93598 1.44532 5.62627C1.4443 5.28261 1.56532 4.81724 1.73363 4.51761C1.88532 4.24758 2.08393 4.04897 2.48114 3.65176L2.59937 3.53353C2.99795 3.13495 3.19724 2.93566 3.41128 2.8274C3.83695 2.6121 4.33965 2.6121 4.76532 2.8274C4.97935 2.93566 5.17865 3.13495 5.57723 3.53353L5.72338 3.67968C5.98559 3.94189 6.11669 4.07299 6.2024 4.20482C6.52565 4.70199 6.52565 5.34293 6.2024 5.8401C6.11669 5.97193 5.98558 6.10303 5.72338 6.36524C5.63765 6.45097 5.59478 6.49384 5.5589 6.54395C5.43139 6.72202 5.38736 6.98021 5.44866 7.19048C5.4659 7.24965 5.48835 7.2964 5.53325 7.38992Z"
                fill="white"
              />
              <path
                d="M10.5353 4.5C11.2678 4.64292 11.9411 5.00119 12.4688 5.52895C12.9966 6.05671 13.3549 6.72995 13.4978 7.4625M10.5353 1.5C12.0572 1.66908 13.4765 2.35063 14.56 3.43276C15.6435 4.51488 16.3268 5.93326 16.4978 7.455M7.66803 10.3973C6.76684 9.49612 6.05525 8.47714 5.53325 7.38992C5.48835 7.29641 5.4659 7.24965 5.44866 7.19048C5.38736 6.98021 5.43139 6.72202 5.5589 6.54395C5.59478 6.49384 5.63765 6.45097 5.72338 6.36524C5.98558 6.10303 6.11669 5.97193 6.2024 5.8401C6.52565 5.34293 6.52565 4.70199 6.2024 4.20482C6.11669 4.07299 5.98559 3.94189 5.72338 3.67968L5.57723 3.53353C5.17865 3.13495 4.97935 2.93566 4.76532 2.8274C4.33965 2.6121 3.83695 2.6121 3.41128 2.8274C3.19724 2.93566 2.99795 3.13495 2.59937 3.53353L2.48114 3.65176C2.08393 4.04897 1.88532 4.24758 1.73363 4.51761C1.56532 4.81724 1.4443 5.28261 1.44532 5.62627C1.44624 5.93598 1.50632 6.14765 1.62647 6.57098C2.2722 8.84603 3.49056 10.9928 5.28154 12.7838C7.07253 14.5748 9.2193 15.7931 11.4943 16.4389C11.9177 16.559 12.1293 16.6191 12.4391 16.62C12.7827 16.621 13.2481 16.5 13.5477 16.3317C13.8177 16.18 14.0164 15.9814 14.4136 15.5842L14.5318 15.466C14.9304 15.0674 15.1297 14.8681 15.2379 14.6541C15.4532 14.2284 15.4532 13.7257 15.2379 13.3C15.1297 13.086 14.9304 12.8867 14.5318 12.4881L14.3856 12.3419C14.1234 12.0797 13.9923 11.9486 13.8605 11.8629C13.3633 11.5397 12.7224 11.5397 12.2252 11.8629C12.0934 11.9486 11.9623 12.0797 11.7001 12.3419C11.6144 12.4277 11.5715 12.4706 11.5214 12.5064C11.3433 12.6339 11.0851 12.678 10.8749 12.6167C10.8157 12.5994 10.7689 12.577 10.6754 12.5321C9.58819 12.0101 8.56921 11.2985 7.66803 10.3973Z"
                stroke="white"
                stroke-width="0.6"
                strokeLinecapp="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm text-white font-medium">
              (289) 579-4769 (GROW)
            </p>
          </div>
        </div>
      </div>
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-28 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
        <X className="h-6 w-6 text-white" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold text-slate-950 dark:text-slate-50",
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
