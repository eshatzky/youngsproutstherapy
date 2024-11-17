"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useState } from "react";
import { SearchTermContext } from "../hooks/useSearchTerm";

type Props = {
  children: React.ReactNode;
};

export default function MotionWrapper({ children }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
      <ProgressBar
        height="4px"
        color="#b3e2d7"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </SearchTermContext.Provider>
  );
}
