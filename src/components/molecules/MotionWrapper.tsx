"use client";
import { AnimatePresence, motion } from "framer-motion";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import { SearchTermContext } from "../hooks/useSearchTerm";

type Props = {
  children: React.ReactNode;
};

export default function MotionWrapper({ children }: Props) {
  useEffect(() => {
    function onWindowResize() {
      document.body.style.setProperty("--vh", window.innerHeight + "px");
    }
    window.addEventListener("resize", onWindowResize);
    onWindowResize();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      <AnimatePresence
        initial={true}
        mode="wait"
        onExitComplete={() => {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}
      >
        <motion.div
          key={0}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <ProgressBar
        height="4px"
        color="#b3e2d7"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </SearchTermContext.Provider>
  );
}
