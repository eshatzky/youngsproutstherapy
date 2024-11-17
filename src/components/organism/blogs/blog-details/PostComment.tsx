"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export function PostComment({ post }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isTimeoutActive, setIsTimeoutActive] = useState(false);

  const handleComment = async (event) => {
    event.preventDefault();
    if (!comment.length) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/createComment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: post?._id,
          name,
          email,
          comment,
          slug: post?.slug?.current,
        }),
      });

      const data = await response.json();

      if (data.message === "Comment submitted") {
        setMessage("Thank you for your comment!");
        setComment("");
        setName("");
        setEmail("");
        setIsTimeoutActive(true);

        // Simulate a 3-second timeout for displaying the message
        setTimeout(() => setIsTimeoutActive(false), 15000);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full">
      <h2 className="text-2xl font-medium text-primary text-center">
        Let us know your thought
      </h2>
      <div className="py-10 max-w-2xl mx-auto px-6 flex flex-col gap-6 ">
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">First name*</Label>
            <input
              type="text"
              id="name"
              placeholder="Your name…"
              className=" border border-gray-300 focus-within:ring outline-none focus-within:border-none focus-within:ring-[#f0e4e4] rounded px-3 py-2 w-full"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email address (optional)</Label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email (optional)…"
              className="border border-gray-300 rounded focus-within:ring outline-none focus-within:border-none focus-within:ring-[#f0e4e4] px-3 py-2 w-full"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>

            <textarea
              id="message"
              name="message"
              placeholder="Write a comment…"
              className=" focus-within:ring outline-none p-3 rounded-md focus-within:border-none focus-within:ring-[#f0e4e4] border border-gray-300"
              onChange={(event) => setComment(event.target.value)}
              value={comment}
            />
          </div>
        </div>

        <Button
          className={` ${
            isSubmitting ? "!bg-primary" : "!bg-primary"
          } !text-white w-full mx-auto  rounded-lg transition-all duration-300 ease-in-out`}
          disabled={!comment.length || isSubmitting}
          onClick={handleComment}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
        {!message && !isTimeoutActive && (
          <p className="mt-4 text-center text-[#ade1d4] font-bold tracking-tighter">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
