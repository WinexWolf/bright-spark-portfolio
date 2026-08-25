import {
  ArrowUpRight,
  CreditCard,
  ShieldCheck,
  Repeat,
  Bot,
  Boxes,
  Github,
  Palette,
} from "lucide-react";
import { Reveal } from "./Reveal";

const FINTECH = [
  {
    icon: CreditCard,
    title: "Payments orchestration",
    line: "Rebuilt a card-payment flow so retries and refunds stopped leaking money.",
    tint: "bg-primary/12 text-primary",
    bar: "from-primary to-blush",
  },
  {
    icon: ShieldCheck,
    title: "Risk & compliance tooling",
    line: "Internal console that cut manual review time for flagged transactions.",
    tint: "bg-sky/20 text-sky",
    bar: "from-sky to-mint",
  },
  {
    icon: Repeat,
    title: "Ledger reconciliation",
    line: "Event-driven reconciliation that made end-of-day balances self-explaining.",
    tint: "bg-grape/15 text-grape",
    bar: "from-grape to-primary",
  },
];

const OTHER = [
  {
    icon: Github,
    title: "Reweave",
    line: "Open-source project that reweaves messy inputs into structured, usable output.",
    href: "https://github.com/WinexWolf/reweave",
    tint: "bg-matcha/50 text-matcha-deep",
  },
  {
    icon: Bot,
    title: "Research agent",
    line: "LLM pipeline that summarises dermatology papers into product rules.",
    href: "https://winexwolf.github.io/anukriti-portfolio/#project",
    tint: "bg-mint/30 text-foreground",
  },
  {
    icon: Boxes,
    title: "Design-system starter",
    line: "Token-first component kit reused across my side projects.",
    href: "https://winexwolf.github.io/anukriti-portfolio/#project",
    tint: "bg-citrus/40 text-foreground",
  },
  {
    icon: Palette,
    title: "Design work",
    line: "Visual explorations, brand studies and interface concepts.",
    href: "https://winexwolf.github.io/anukriti-portfolio/#designs",
    tint: "bg-blush/30 text-foreground",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="relative px-6 py-24 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 right-0 -z-10 size-80 animate-blob rounded-full bg-sky/20 blur-3xl"
      />
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Case <span className="text-gradient">studies</span>
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Fintech work where the product question mattered as much as the code.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FINTECH.map(({ icon: Icon, title, line, tint, bar }, idx) => (
            <Reveal key={title} delay={idx * 110}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow">
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${bar} transition-transform duration-500 group-hover:scale-x-100`}
                />
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tint}`}
                >
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{line}</p>
                <a
                  href="#work"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                >
                  Read more <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            Other tech & design projects
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {OTHER.map(({ icon: Icon, title, line, tint, href }, idx) => (
            <Reveal key={title} delay={idx * 120}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full items-start gap-5 rounded-3xl bg-secondary/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:shadow-soft"
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-6 ${tint}`}
                >
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="flex items-center gap-1.5 font-semibold">
                    {title}
                    <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">{line}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
