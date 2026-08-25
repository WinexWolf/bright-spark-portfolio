import { useEffect, useState } from "react";
import portrait from "@/assets/anukriti.jpg.asset.json";

const ROLES = [
  "product-minded builder",
  "fintech software engineer",
  "0-to-1 problem solver",
  "systems thinker, user first",
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
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-mesh opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 size-[34rem] animate-blob rounded-full bg-gradient-warm opacity-70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -left-32 size-[30rem] animate-blob rounded-full bg-grape/25 blur-3xl [animation-delay:-6s]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-rise-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Engineer moving into product
          </span>

          <h1 className="text-gradient mt-7 text-6xl leading-[0.92] font-semibold text-balance lg:text-8xl">
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
            By day I move other people&apos;s money without losing a cent —
            payment rails, ledgers, the unglamorous plumbing that has to be
            right the first time. By night I build my own thing, from blank file
            to something strangers actually use. Same rigour, wider remit: I
            want to own the <span className="text-foreground font-semibold">why</span>,
            not just the how.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#ingryd"
              className="group relative overflow-hidden rounded-full bg-gradient-vivid animate-gradient-pan px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">See what I&apos;m building</span>
              <span
                aria-hidden
                className="absolute inset-y-0 -left-1/3 w-1/3 animate-shimmer-x bg-card/40 blur-md"
              />
            </a>
            <a
              href="#work"
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary hover:shadow-soft"
            >
              Read case studies
            </a>
          </div>
        </div>

        <div className="group relative animate-rise-in [animation-delay:150ms]">
          <div className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-gradient-vivid animate-gradient-pan opacity-70 blur-[2px] transition-transform duration-500 group-hover:rotate-2" />
          <img
            src={portrait.url}
            alt="Portrait of Anukriti"
            width={1024}
            height={1365}
            className="relative aspect-4/5 w-full rounded-[2rem] object-cover object-top shadow-lift transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.01]"
          />
          <div className="absolute -bottom-6 -left-6 animate-float-y rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Currently
            </p>
            <p className="text-sm font-semibold">Fintech SWE · Building solo</p>
          </div>
          <div
            aria-hidden
            className="absolute -top-5 -right-4 size-16 animate-wiggle rounded-2xl bg-citrus shadow-soft"
          />
        </div>
      </div>
    </header>
  );
}
