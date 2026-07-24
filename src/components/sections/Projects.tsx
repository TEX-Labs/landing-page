"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Meteors } from "@/components/Meteors/meteors";
import { projects } from "@/config/site";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/5 py-28">
      <div className="container-tex">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-4 text-slate-400">
            Products and infrastructure we&apos;ve shipped across the Web3 and
            data ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projects.map((p, i) => {
            const isLive = Boolean(p.href && p.href !== "#");
            const inner = (
              <>
                {/* Meteor shower layer */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Meteors number={12} />
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-400">
                    {p.category}
                  </span>
                  {isLive && (
                    <IconArrowUpRight
                      size={18}
                      className="text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  )}
                </div>
                <h3 className="relative z-10 mt-4 font-display text-xl font-semibold text-white">
                  {p.name}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
              </>
            );
            const className =
              "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_0_40px_-12px] hover:shadow-brand-500/40";
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {isLive ? (
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
