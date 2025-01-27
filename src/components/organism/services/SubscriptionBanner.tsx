"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { useState, useTransition } from "react";
import { toast } from "sonner";

type data = {
  image: StaticImageData | string;
  title: string;
  description: string;
};

type Props = {
  data: data;
};

export function SubscriptionBanner({ data }: Props) {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/createSubscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        await response.json();

        toast.success("Successfully Subscribed");
      } catch (error) {
        toast.error(String(error));
      }

      setEmail("");
    });
  };
  return (
    <section className="relative lg:min-h-[303px] h-auto rounded-3xl overflow-hidden">
      <Image
        src={data.image}
        alt={data.title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="w-full -z-10"
        placeholder="blur"
      />
      <div className="flex flex-col gap-9 items-center justify-center ~py-7/12 px-5">
        <h2 className="text-3xl font-medium text-center text-white">
          {data.title}
        </h2>
        <p className="max-w-[1016px] mx-auto text-center leading-7 text-lg text-white">
          {data.description}
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex pl-11 max-w-lg w-full flex-row justify-center items-center gap-6 bg-transparent border border-white rounded-full"
        >
          <input
            type="email"
            required
            value={email}
            disabled={isPending}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="py-3 ~text-sm/xl placeholder:~text-sm/xl focus-within:outline-none visited:outline-none focus:border-none focus:outline-none bg-transparent border-none !outline-none placeholder:text-white outline-transparent text-white w-full font-medium rounded-l-full"
          />
          <Button
            disabled={isPending}
            type="submit"
            className="max-w-[134px] lg:py-3 w-full bg-white text-primary hover:text-white hover:bg-primary font-semibold"
          >
            {isPending ? <span className="">Loading...</span> : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
