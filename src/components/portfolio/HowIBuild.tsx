import { Reveal } from "./Reveal";

const GROUPS = [
  {
    label: "AI & productivity",
    tone: "primary" as const,
    items: ["Cursor", "Claude", "Lovable", "Raycast", "Linear", "Notion", "Figma"],
  },
  {
    label: "Technical stack",
    tone: "ink" as const,
    items: [
      "TypeScript",
      "React",
      "Node",
      "Python",
      "PostgreSQL",
      "Kafka",
      "AWS",
      "Docker",
    ],
  },
];

const CHIP_TINTS = [
  "border-primary/25 bg-primary/10 text-primary",
  "border-grape/25 bg-grape/10 text-grape",
  "border-sky/30 bg-sky/12 text-sky",
  "border-mint/40 bg-mint/25 text-foreground",
  "border-citrus/50 bg-citrus/30 text-foreground",
];

export function HowIBuild() {
  return (
    <section id="method" className="relative px-6 py-24 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 -z-10 size-72 animate-blob rounded-full bg-citrus/30 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="text-4xl font-semibold lg:text-5xl">
            How I <span className="text-gradient">build</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            Start from the user&apos;s messy reality, sketch the smallest honest
            version, ship it, then let the data argue back. AI handles the
            drafting so I can spend my time on the decisions.
          </p>
        </Reveal>

        <div className="space-y-10">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.label} delay={gi * 120}>
              <h3 className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                {g.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((item, i) => (
                  <span
                    key={item}
                    className={
                      g.tone === "primary"
                        ? `cursor-default rounded-full border px-4 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-1 hover:rotate-2 ${CHIP_TINTS[i % CHIP_TINTS.length]}`
                        : "cursor-default rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:-rotate-2 hover:shadow-lift"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
