import { values } from "@/config/site";
import { Reveal } from "./Reveal";

export function Values() {
  return (
    <section className="relative border-t border-white/5 py-28">
      <div className="container-tex">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">How we work</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Core values
          </h2>
          <p className="mt-4 text-slate-400">
            The principles that guide every system we design and every product
            we ship.
          </p>
        </Reveal>

        <ol className="mt-14 border-t border-white/10">
          {values.map((v, i) => (
            <Reveal
              as="li"
              key={v}
              delay={i * 0.07}
              className="group border-b border-white/10"
            >
              <div className="grid grid-cols-[3rem_1fr] items-baseline gap-5 py-7 transition-transform duration-300 group-hover:translate-x-1.5 sm:grid-cols-[5rem_1fr] sm:gap-10 sm:py-8">
                <span className="font-mono text-2xl font-medium tabular-nums text-white/15 transition-colors duration-300 group-hover:text-brand-400 sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl font-medium leading-snug text-slate-400 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                  {v}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
