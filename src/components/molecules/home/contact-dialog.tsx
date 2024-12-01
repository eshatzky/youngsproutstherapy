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

export function ContactDialog() {
  const form = React.useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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
      } catch (error) {
        console.warn(error);
        toast.error("Failed to send message. Please try again.");
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Get Started</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[690px] w-full bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-800">
            Get Started With Us
          </DialogTitle>
        </DialogHeader>
        <div className="text-gray-600 pb-4 border-b border-primary">
          Send us a message, and we&apos;ll be in touch shortly.
        </div>
        <form
          className=" grid grid-cols-1 sm:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="space-y-1.5">
            <Label htmlFor="first_name">First Name*</Label>
            <Input
              className="py-5 "
              placeholder="Enter first name"
              id="first_name"
              name="first_name"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="last_name">Last Name*</Label>
            <Input
              className="py-5 "
              placeholder="Enter last name"
              id="last_name"
              name="last_name"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email*</Label>
            <Input
              className="py-5 "
              placeholder="Enter email address"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone Number*</Label>
            <Input
              className="py-5 "
              placeholder="Enter phone number"
              id="phone"
              name="phone"
              required
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
      </DialogContent>
    </Dialog>
  );
}
