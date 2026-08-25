import screen from "@/assets/ingryd-screen.png";
import { Reveal } from "./Reveal";

const HIGHLIGHTS = [
  { k: "Skin score", v: "Daily signal from photos + habits" },
  { k: "Ingredient IQ", v: "Parses labels, flags irritants" },
  { k: "Progress", v: "Trends that survive real routines" },
];

export function Ingryd() {
  return (
    <section id="ingryd" className="px-6 py-16 lg:px-12">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-matcha/50 bg-gradient-matcha px-7 py-10 lg:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-16 size-72 animate-blob rounded-full bg-strawberry/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-16 size-72 animate-blob rounded-full bg-matcha-deep/25 blur-3xl [animation-delay:-8s]"
        />

        <div className="relative grid items-center gap-8 sm:grid-cols-[1fr_180px]">
          <Reveal>
            <span className="inline-block animate-wiggle rounded-full bg-strawberry-deep px-3.5 py-1 text-[0.65rem] font-bold tracking-widest text-primary-foreground uppercase">
              Flagship · in build
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-matcha-deep">
              Ingryd
            </h2>
            <p className="mt-3 max-w-lg leading-relaxed text-foreground/75">
              A skin health intelligence app. It reads your products, your
              routine and your skin over time, then tells you what is actually
              working.
            </p>

            <dl className="mt-7 space-y-3.5">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.k}
                  className="group flex gap-4 border-t border-matcha-deep/20 pt-3.5 transition-transform duration-300 hover:translate-x-1.5"
                >
                  <dt className="w-32 shrink-0 text-sm font-semibold text-strawberry-deep transition-colors group-hover:text-matcha-deep">
                    {h.k}
                  </dt>
                  <dd className="text-sm text-foreground/70">{h.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="relative flex justify-center">
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 size-48 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full bg-strawberry/50 blur-2xl"
            />
            <img
              src={screen}
              alt="Ingryd app showing a skin score and ingredient analysis"
              width={720}
              height={1472}
              loading="lazy"
              className="relative w-36 animate-float-y drop-shadow-2xl sm:w-44"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
