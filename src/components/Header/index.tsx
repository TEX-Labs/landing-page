"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { nav, site } from "@/config/site";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-tex mt-4">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-ink-800/70 px-4 py-2.5 backdrop-blur-xl">
          <Link
            href="#top"
            className="flex items-center gap-2"
            aria-label="TEX Labs home"
          >
            <Image src="/tex.png" width={36} height={36} alt="TEX Labs logo" />
            <span className="font-display text-sm font-bold tracking-wide text-white">
              TEX&nbsp;Labs
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 md:flex">
            {nav.slice(0, -1).map((item) => (
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

          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] md:inline-block"
            >
              Work with us
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            >
              {open ? <IconX size={18} /> : <IconMenu2 size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-ink-800/95 p-3 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-1 px-1">
                <Link
                  href={`mailto:${site.email}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-white px-3 py-2.5 text-center text-sm font-semibold text-ink"
                >
                  Work with us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
