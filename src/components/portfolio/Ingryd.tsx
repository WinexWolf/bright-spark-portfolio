import screen from "@/assets/ingryd-screen.png";

const HIGHLIGHTS = [
  { k: "Skin score", v: "Daily signal from photos + habits" },
  { k: "Ingredient IQ", v: "Parses labels, flags irritants" },
  { k: "Progress", v: "Trends that survive real routines" },
];

export function Ingryd() {
  return (
    <section id="ingryd" className="px-6 py-24 lg:px-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-ink-foreground lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-20 size-96 rounded-full bg-gradient-warm opacity-25 blur-3xl"
        />
        <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_360px]">
          <div>
            <span className="inline-block rounded-full bg-citrus px-4 py-1.5 text-xs font-bold tracking-widest text-ink uppercase">
              Flagship · in build
            </span>
            <h2 className="mt-6 text-5xl leading-tight font-semibold lg:text-6xl">
              Ingryd
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-foreground/70">
              A skin health intelligence app. It reads your products, your
              routine and your skin over time, then tells you what is actually
              working — instead of another shelf of guesses.
            </p>

            <dl className="mt-10 space-y-5">
              {HIGHLIGHTS.map((h) => (
                <div key={h.k} className="flex gap-5 border-t border-ink-foreground/15 pt-5">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-citrus">
                    {h.k}
                  </dt>
                  <dd className="text-sm text-ink-foreground/70">{h.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-2">
              {["React Native", "Vision models", "Supabase", "Design system"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink-foreground/20 px-3 py-1.5 text-xs font-medium text-ink-foreground/80"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl"
            />
            <img
              src={screen}
              alt="Ingryd app showing a skin score and ingredient analysis"
              width={720}
              height={1472}
              loading="lazy"
              className="relative w-64 animate-float-y drop-shadow-2xl lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
