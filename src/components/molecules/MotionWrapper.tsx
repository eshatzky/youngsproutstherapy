"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

type Props = {
  children: React.ReactNode;
};

export default function MotionWrapper({ children }: Props) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#0196AF"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
