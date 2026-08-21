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

export function HowIBuild() {
  return (
    <section id="method" className="px-6 py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-semibold lg:text-5xl">How I build</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            Start from the user's messy reality, sketch the smallest honest
            version, ship it, then let the data argue back. AI handles the
            drafting so I can spend my time on the decisions.
          </p>
        </div>

        <div className="space-y-10">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <h3 className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                {g.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className={
                      g.tone === "primary"
                        ? "rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-medium text-primary"
                        : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
