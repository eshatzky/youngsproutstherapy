/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { previewClient } from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { _id, name, email = "Not provided", comment } = await req.json();

  try {
    await previewClient.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Couldn't submit comment", err },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Comment submitted" });
}
