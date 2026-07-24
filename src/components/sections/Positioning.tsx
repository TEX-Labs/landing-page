import { Reveal } from "./Reveal";

export function Positioning() {
  const stats = [
    {
      stat: "165K ADA",
      label: "≈ $200K raised via Project Catalyst in 2024 for RWA & Healthcare",
    },
    {
      stat: "~$1.5B",
      label: "Midnight Network ecosystem market cap (2026)",
    },
    {
      stat: "Production-first",
      label: "Systems built to be stable and ready to scale",
    },
  ];

  return (
    <section id="about" className="relative py-28">
      <div className="container-tex">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6">Who we are</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold leading-snug text-white sm:text-4xl">
              TEX Labs is{" "}
              <span className="text-slate-500 line-through decoration-brand-500/60">
                not
              </span>{" "}
              a software outsourcing company.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              We build products, platforms and technical infrastructure designed
              to scale — while researching and applying emerging technology to
              solve real-world problems. We own the systems we build, from
              architecture to production.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-3">
            {stats.map((item, i) => (
              <Reveal key={item.stat} delay={0.15 + i * 0.1} className="bg-ink">
                <div className="h-full px-6 py-8">
                  <div className="font-display text-2xl font-bold text-glow-brand">
                    {item.stat}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
