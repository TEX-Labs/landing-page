"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const currentWord = words[index % words.length];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, duration);
    return () => clearInterval(id);
  }, [duration, words.length]);

  return (
    // mode="wait" guarantees only ONE word is ever mounted at a time, so the
    // words can never pile up / concatenate (e.g. after the tab is throttled
    // in the background and multiple ticks queue up).
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWord}
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn("inline-block whitespace-nowrap", className)}
      >
        {currentWord}
      </motion.span>
    </AnimatePresence>
  );
};
