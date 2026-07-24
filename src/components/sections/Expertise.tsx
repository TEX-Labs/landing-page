"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconStack2,
  IconCloud,
  IconLayoutDashboard,
  IconCube,
  IconSparkles,
  IconProps,
} from "@tabler/icons-react";
import { CanvasRevealEffect } from "@/components/CanvasRevealEffect/CanvasRevealEffect";
import { expertise } from "@/config/site";

const icons: Record<string, React.FC<IconProps>> = {
  platform: IconStack2,
  cloud: IconCloud,
  saas: IconLayoutDashboard,
  blockchain: IconCube,
  ai: IconSparkles,
};

const colors: Record<string, { container: string; dots: number[][] }> = {
  platform: { container: "bg-brand-600", dots: [[124, 92, 255]] },
  cloud: { container: "bg-sky-700", dots: [[56, 189, 248]] },
  saas: { container: "bg-emerald-800", dots: [[16, 185, 129]] },
  blockchain: { container: "bg-violet-800", dots: [[167, 139, 250]] },
  ai: {
    container: "bg-black",
    dots: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },
};

export function Expertise() {
  return (
    <section id="expertise" className="relative border-t border-white/5 py-28">
      <div className="container-tex">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Areas of expertise
          </h2>
          <p className="mt-4 text-slate-400">
            From distributed backends to cloud operations and emerging Web3 and
            AI systems — a full stack of engineering capability. Hover to
            explore.
          </p>
        </div>

        {/* 6-col grid on desktop: first 3 cards span 2 (row of 3),
            last 2 cards span 3 (row of 2) — no empty gaps.
            On tablet (2 cols) the odd last card spans full width. */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {expertise.map((exp, i) => {
            const Icon = icons[exp.key] ?? IconStack2;
            const color = colors[exp.key];
            const isLast = i === expertise.length - 1;
            const oddLast = isLast && expertise.length % 2 === 1;
            const lgSpan = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
            return (
              <ExpertiseCard
                key={exp.key}
                title={exp.title}
                summary={exp.summary}
                Icon={Icon}
                color={color}
                className={`${oddLast ? "sm:col-span-2" : ""} ${lgSpan}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({
  title,
  summary,
  Icon,
  color,
  className,
}: {
  title: string;
  summary: string;
  Icon: React.FC<IconProps>;
  color: { container: string; dots: number[][] };
  className?: string;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex min-h-[16rem] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/25 ${className}`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full"
          >
            <CanvasRevealEffect
              animationSpeed={3.5}
              containerClassName={color.container}
              colors={color.dots}
              dotSize={2}
            />
            <div className="absolute inset-0 bg-ink/60 [mask-image:radial-gradient(circle_at_center,transparent,black_80%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-brand-500/10 text-brand-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-white/10 group-hover:text-white">
        <Icon size={22} stroke={1.6} />
      </div>
      <div className="relative z-10 mt-5">
        <h3 className="font-display text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-200">
          {summary}
        </p>
      </div>
    </div>
  );
}
