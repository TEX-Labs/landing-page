"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

type MeteorStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const count = number || 20;
  const [styles, setStyles] = useState<MeteorStyle[]>([]);

  // Randomised positions are generated only on the client, after mount,
  // to avoid a server/client hydration mismatch.
  useEffect(() => {
    setStyles(
      new Array(count).fill(true).map(() => ({
        left: Math.floor(Math.random() * 800 - 400) + "px",
        animationDelay: Math.random() * 0.6 + 0.2 + "s",
        animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
      })),
    );
  }, [count]);

  return (
    <>
      {styles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className,
          )}
          style={{ top: 0, ...style }}
        />
      ))}
    </>
  );
};
