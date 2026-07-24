"use client";
import React from "react";
import { IconMail } from "@tabler/icons-react";
import { Illustration } from "@/components/GlowingStars/GlowingStars";
import { HoverBorderGradient } from "@/components/HoverButton/HoverButton";
import { site } from "@/config/site";

export function Contact() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="container-tex">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-800 px-6 pb-16 pt-10 sm:px-12 sm:pb-20 sm:pt-14"
        >
          {/* Full-width glowing-stars dot matrix behind the content */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 [mask-image:linear-gradient(to_bottom,black,transparent)]">
            <Illustration mouseEnter={hovered} />
          </div>
          {/* Subtle grid + brand glow to match the rest of the site */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[110px]" />

          <div className="relative z-10 flex flex-col items-center pt-28 text-center sm:pt-36">
            <p className="eyebrow">Let&apos;s build</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
              Have a platform, product or Web3 problem?
            </h2>

            <div className="mt-9">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center gap-2 bg-black text-white"
              >
                <IconMail stroke={1.5} size={18} />
                <a href={`mailto:${site.email}`}>Send Message</a>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
