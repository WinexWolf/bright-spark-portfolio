import { ArrowUpRight, CreditCard, ShieldCheck, Repeat, Bot, Boxes } from "lucide-react";

const FINTECH = [
  {
    icon: CreditCard,
    title: "Payments orchestration",
    line: "Rebuilt a card-payment flow so retries and refunds stopped leaking money.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & compliance tooling",
    line: "Internal console that cut manual review time for flagged transactions.",
  },
  {
    icon: Repeat,
    title: "Ledger reconciliation",
    line: "Event-driven reconciliation that made end-of-day balances self-explaining.",
  },
];

const OTHER = [
  { icon: Bot, title: "Ingryd research agent", line: "LLM pipeline that summarises dermatology papers into product rules." },
  { icon: Boxes, title: "Design-system starter", line: "Token-first component kit reused across my side projects." },
];

export function CaseStudies() {
  return (
    <section id="work" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <h2 className="text-4xl font-semibold lg:text-5xl">Case studies</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Fintech work where the product question mattered as much as the code.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FINTECH.map(({ icon: Icon, title, line }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
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
          ))}
        </div>

        <h3 className="mt-16 text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
          Other tech projects
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {OTHER.map(({ icon: Icon, title, line }) => (
            <article
              key={title}
              className="flex items-start gap-5 rounded-3xl bg-secondary/60 p-7 transition-colors hover:bg-secondary"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-card text-primary">
                <Icon className="size-5" strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
