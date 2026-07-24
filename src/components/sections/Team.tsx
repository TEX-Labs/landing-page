import Image from "next/image";
import { team } from "@/config/site";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="team" className="relative border-t border-white/5 py-28">
      <div className="container-tex">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">The people</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Meet the team
          </h2>
          <p className="mt-4 text-slate-400">
            A small, senior team that owns the work end to end.
          </p>
        </Reveal>

        {/* 5 members on a single row at desktop (each ~20% wide);
            2 per row on tablet, 1 on mobile. flex-wrap + justify-center
            keeps any odd last row centered. */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {team.map((member, i) => (
            <Reveal
              as="article"
              key={member.name}
              delay={i * 0.1}
              className="card-surface group w-full overflow-hidden p-0 sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-0.8rem)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-semibold leading-tight text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-brand-400">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
