import { useEffect, useState } from "react";
import portrait from "@/assets/portrait.jpg";

const ROLES = [
  "product-minded builder",
  "fintech software engineer",
  "founder of Ingryd",
  "0-to-1 problem solver",
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="relative overflow-hidden px-6 pt-16 pb-24 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 size-[34rem] rounded-full bg-gradient-warm opacity-60 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-rise-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <span className="size-2 rounded-full bg-primary" />
            Engineer moving into product
          </span>

          <h1 className="mt-7 text-6xl leading-[0.92] font-semibold text-balance lg:text-8xl">
            Anukriti
          </h1>

          <p className="mt-6 flex flex-wrap items-baseline gap-2 text-2xl lg:text-3xl">
            <span className="text-muted-foreground">I&apos;m a</span>
            <span
              key={i}
              className="animate-rise-in font-display font-semibold text-primary italic"
            >
              {ROLES[i]}
            </span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I ship payment-grade systems by day and build Ingryd — a skin health
            intelligence app — by night. Now translating that engineering depth
            into product ownership.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#ingryd"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              See Ingryd
            </a>
            <a
              href="#work"
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Read case studies
            </a>
          </div>
        </div>

        <div className="relative animate-rise-in [animation-delay:150ms]">
          <div className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-gradient-warm opacity-70" />
          <img
            src={portrait}
            alt="Portrait of Anukriti"
            width={912}
            height={1104}
            className="relative aspect-4/5 w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Currently
            </p>
            <p className="text-sm font-semibold">Fintech SWE · Building Ingryd</p>
          </div>
        </div>
      </div>
    </header>
  );
}
