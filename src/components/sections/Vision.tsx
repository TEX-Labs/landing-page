"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/LampContainer/LampContainter";

export function Vision() {
  return (
    <section className="relative">
      <LampContainer className="bg-ink">
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mb-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-brand-400"
        >
          Where we&apos;re headed
        </motion.p>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="mx-auto max-w-3xl py-2 text-center font-display text-2xl font-medium leading-snug tracking-tight text-slate-100 sm:text-4xl"
        >
          Scalable platforms and infrastructure — growing products across SaaS,
          Blockchain, DeFi and AI that create real, lasting value.
        </motion.h2>
      </LampContainer>
    </section>
  );
}
