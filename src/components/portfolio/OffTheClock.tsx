const PINS = [
  { id: "del", name: "Delhi", x: 68, y: 46, eat: "Karim's · kebabs" },
  { id: "lon", name: "London", x: 45, y: 28, eat: "Dishoom · bacon naan" },
  { id: "nyc", name: "New York", x: 24, y: 36, eat: "Superiority Burger" },
  { id: "tok", name: "Tokyo", x: 85, y: 40, eat: "Fuglen · coffee" },
  { id: "lis", name: "Lisbon", x: 40, y: 40, eat: "Time Out Market" },
];

const ROUTES = [
  ["nyc", "lon"],
  ["lon", "del"],
  ["del", "tok"],
  ["lis", "nyc"],
] as const;

const WISHLIST = [
  { place: "Patagonia", note: "Torres del Paine trek" },
  { place: "Seoul", note: "Gwangjang night market" },
  { place: "Reykjavík", note: "Northern lights + Brauð & Co" },
];

const SWEAR_BY = [
  "Acquired",
  "Lenny's Podcast",
  "How I Built This",
  "Huberman Lab",
  "Oura Ring",
  "Filter coffee",
];

function pin(id: string) {
  return PINS.find((p) => p.id === id)!;
}

function arc(aId: string, bId: string) {
  const a = pin(aId);
  const b = pin(bId);
  const mx = (a.x + b.x) / 2;
  const my = Math.min(a.y, b.y) - Math.abs(b.x - a.x) * 0.22 - 4;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

export function OffTheClock() {
  return (
    <section id="off-the-clock" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-semibold lg:text-5xl">Off the clock</h2>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          Places I&apos;ve been, places next, and the things I keep coming back to.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-soft">
            <svg
              viewBox="0 0 100 60"
              className="h-full w-full"
              role="img"
              aria-label="Illustrated travel map with animated flight paths"
            >
              <defs>
                <pattern id="dots" width="2" height="2" patternUnits="userSpaceOnUse">
                  <circle cx="0.5" cy="0.5" r="0.22" className="fill-border" />
                </pattern>
              </defs>
              <rect width="100" height="60" fill="url(#dots)" opacity="0.7" />

              {ROUTES.map(([a, b]) => (
                <path
                  key={`${a}-${b}`}
                  d={arc(a, b)}
                  fill="none"
                  strokeWidth="0.45"
                  strokeLinecap="round"
                  strokeDasharray="2 2"
                  className="animate-dash-fly stroke-primary/70"
                />
              ))}

              {PINS.map((p) => (
                <g key={p.id} className="group">
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="1.1"
                    className="origin-center animate-pin-pulse fill-primary/40"
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                  <circle cx={p.x} cy={p.y} r="1.1" className="fill-primary" />
                  <text
                    x={p.x + 2}
                    y={p.y + 0.6}
                    className="fill-foreground text-[2px] font-semibold"
                  >
                    {p.name}
                  </text>
                  <text
                    x={p.x + 2}
                    y={p.y + 3.2}
                    className="fill-muted-foreground text-[1.6px]"
                  >
                    {p.eat}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-border bg-card p-8">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                Next on the list
              </h3>
              <ul className="mt-5 divide-y divide-border">
                {WISHLIST.map((w) => (
                  <li key={w.place} className="flex items-baseline justify-between gap-4 py-3.5">
                    <span className="font-semibold">{w.place}</span>
                    <span className="text-sm text-muted-foreground">{w.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-secondary/70 p-8">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                Things I swear by
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {SWEAR_BY.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
