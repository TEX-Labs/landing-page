"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import { FlipWords } from "../FilpWord/FlipWords";

export function CanvasRevealEffectDemo3() {
  const Words = ["revolutionize"];
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[60rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
    >
      <div className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
        Our mission is to deliver end-to-end DeFi solutions to users by building
        real-time infrastructure like sockets and Telegram bots for alerts,
        tracking, and trading. Alongside that, we explore the integration of
        blockchain and AI through innovations such as smart contract scanning
        bots and AI meeting assistants that store summaries on-chain. Our goal
        is to make DeFi smarter, more accessible, and AI-enhanced.
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
