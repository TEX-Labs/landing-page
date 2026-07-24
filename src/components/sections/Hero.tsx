"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { AuroraBackground } from "@/components/AuroraBackground/aurora-background";
import { Spotlight } from "@/components/Spotlight/Spotlight";
import { FlipWords } from "@/components/FilpWord/FlipWords";
import { site } from "@/config/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative">
      <AuroraBackground className="dark min-h-screen">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="container-tex relative z-10 pt-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl pt-8 text-center"
          >
            <motion.h1
              variants={item}
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Platform engineering for products built to{" "}
              <span className="inline-block align-baseline">
                <FlipWords
                  words={["scale.", "last.", "ship.", "endure."]}
                  duration={2200}
                  className="px-0 font-extrabold text-glow-brand"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {site.name} designs and operates backend systems, cloud
              infrastructure and SaaS platforms — with deep expertise in
              Blockchain and AI. Simple, stable, and production-ready by design.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                Work with us
                <IconArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-white/40 hover:text-white"
              >
                Explore our work
              </Link>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-slate-500"
            >
              {[
                "Platform Engineering",
                "Cloud Infrastructure",
                "SaaS",
                "Blockchain & DeFi",
                "AI",
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}
