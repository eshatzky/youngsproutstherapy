"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendGAEvent } from "@next/third-parties/google";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function ContactDialog({ className }: { className?: string }) {
  const form = React.useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // State to track focus of fields
  // const [fieldFocus, setFieldFocus] = React.useState({
  //   first_name: false,
  //   last_name: false,
  //   email: false,
  //   phone: false,
  //   message: false,
  // });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_cwiihbb",
          "template_0s2nneh",
          form.current,
          "_O-IBWyLZwt2kHPs5"
        );
        toast.success("Message sent successfully!");
        triggerGoogleAdsConversion();
        sendGAEvent("submit_form", {
          category: "Contact",
          label: "Form Submission",
        });
        form.current.reset();
        setIsSubmitted(true);
      } catch (error) {
        toast.error(String(error));
      }
    }

    setIsSubmitting(false);
  };

  const triggerGoogleAdsConversion = () => {
    const gtagScript = document.createElement("script");
    gtagScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('event', 'conversion', {'send_to': 'AW-YOUR_CONVERSION_ID/YOUR_CONVERSION_LABEL'});
      `;
    document.head.appendChild(gtagScript);
  };

  // const handleFocus = (field: string) => {
  //   setFieldFocus((prev) => ({ ...prev, [field]: true }));
  // };

  // const handleBlur = (field: string) => {
  //   setFieldFocus((prev) => ({ ...prev, [field]: false }));
  // };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) setIsSubmitted(false); // Reset form state when dialog closes
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="default"
          className={cn("max-w-[260px] w-full", className)}
        >
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn(
          "w-full bg-white px-4 max-sm:h-auto border border-red-500 overflow-auto", // Default shared classes
          "max-sm:max-h-[60vh] overflow-y-auto" // Ensure the content is scrollable
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-800 px-2">
            Get Started With Us
          </DialogTitle>
        </DialogHeader>
        <div
          className={cn(
            "text-gray-600 pb-4 mx-2 h-auto overflow-y-auto",
            isSubmitted ? "border-none" : ""
          )}
        >
          {isSubmitted ? (
            <p className="text-lg">
              Thank you for sending your message! We will be in touch as soon as
              we can.
            </p>
          ) : (
            <>
              <p className="pb-3 border-b border-primary">
                Send us a message, and we&apos;ll be in touch shortly.
              </p>
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-6 px-2 mt-2"
                onSubmit={handleSubmit}
                ref={form}
              >
                <div className="space-y-1.5">
                  <Label htmlFor="first_name">First Name*</Label>
                  <Input
                    className="py-5"
                    placeholder="Enter first name"
                    id="first_name"
                    name="first_name"
                    required
                    type="text"
                    inputMode="text"
                    autoComplete="given-name"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="last_name">Last Name*</Label>
                  <Input
                    className="py-5"
                    placeholder="Enter last name"
                    id="last_name"
                    name="last_name"
                    required
                    type="text"
                    inputMode="text"
                    autoComplete="family-name"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    className="py-5"
                    placeholder="Enter email address"
                    id="email"
                    name="email"
                    required
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input
                    className="py-5"
                    placeholder="Enter phone number"
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>
                <div className="space-y-1.5 col-span-1 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="col-span-1 sm:col-span-2"
                    placeholder="Enter message"
                    id="message"
                    name="message"
                    required
                    rows={4}
                  />
                </div>

                <div className="w-full col-span-1 sm:col-span-2">
                  <Button
                    className="w-full lg:max-w-full rounded-lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
