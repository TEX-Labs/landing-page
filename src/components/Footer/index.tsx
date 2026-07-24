import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandX, IconMail } from "@tabler/icons-react";
import { site, socials, nav } from "@/config/site";

const Footer = () => {
  const year = 2026;
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="container-tex">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <Image
                src="/tex.png"
                width={32}
                height={32}
                alt="TEX Labs logo"
              />
              <span className="font-display text-base font-bold text-white">
                TEX Labs
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Platform engineering, cloud infrastructure and SaaS — with deep
              expertise in Blockchain and AI.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Explore
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Get in touch
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <Link
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <IconMail
                      size={16}
                      className="text-slate-500 transition-colors group-hover:text-white"
                    />
                    {site.email}
                  </Link>
                </li>
                {(socials.x as string) !== "#" && (
                  <li>
                    <Link
                      href={socials.x}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      <IconBrandX
                        size={16}
                        className="text-slate-500 transition-colors group-hover:text-white"
                      />
                      @texlabsorg
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
