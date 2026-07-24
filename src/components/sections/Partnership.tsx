"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconShieldCheck, IconArrowUpRight } from "@tabler/icons-react";
import { Meteors } from "@/components/Meteors/meteors";
import { partner } from "@/config/site";

export function Partnership() {
  const isLive = Boolean(partner.href && partner.href !== "#");
  return (
    <section id="partnership" className="relative py-16">
      <div className="container-tex">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 via-ink-700 to-accent-500/10 px-6 py-14 sm:px-12"
        >
          {/* Meteors + glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Meteors number={18} />
          </div>
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-500/20 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent-400 backdrop-blur">
              <IconShieldCheck size={14} />
              Official Partner
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
              Building with the{" "}
              <span className="accent-underline text-white">
                {partner.name}
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              {partner.blurb}
            </p>
            {isLive && (
              <Link
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn more
                <IconArrowUpRight size={16} />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
