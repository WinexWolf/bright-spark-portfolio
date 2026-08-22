import { Reveal } from "./Reveal";

const PINS = [
  { id: "del", name: "Delhi", x: 60, y: 44, eat: "Karim's · kebabs" },
  { id: "lon", name: "London", x: 34, y: 20, eat: "Dishoom · bacon naan" },
  { id: "nyc", name: "New York", x: 10, y: 30, eat: "Superiority Burger" },
  { id: "tok", name: "Tokyo", x: 80, y: 26, eat: "Fuglen · coffee" },
  { id: "lis", name: "Lisbon", x: 24, y: 48, eat: "Time Out Market" },
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

const SWEAR_TINTS = [
  "bg-primary/12 text-primary",
  "bg-grape/12 text-grape",
  "bg-sky/15 text-sky",
  "bg-mint/30 text-foreground",
  "bg-citrus/35 text-foreground",
  "bg-blush/25 text-foreground",
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
    <section id="off-the-clock" className="relative px-6 py-24 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 -z-10 size-96 animate-blob rounded-full bg-blush/25 blur-3xl"
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Off the <span className="text-gradient">clock</span>
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">
            Places I&apos;ve been, places next, and the things I keep coming back to.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-soft">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-40"
            />
            <svg
              viewBox="0 0 100 60"
              className="relative h-full w-full"
              role="img"
              aria-label="Illustrated travel map with animated flight paths"
            >
              <defs>
                <pattern id="dots" width="2" height="2" patternUnits="userSpaceOnUse">
                  <circle cx="0.5" cy="0.5" r="0.22" className="fill-border" />
                </pattern>
                <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="50%" stopColor="var(--grape)" />
                  <stop offset="100%" stopColor="var(--sky)" />
                </linearGradient>
              </defs>
              <rect width="100" height="60" fill="url(#dots)" opacity="0.7" />

              {ROUTES.map(([a, b]) => (
                <g key={`${a}-${b}`}>
                  <path
                    id={`path-${a}-${b}`}
                    d={arc(a, b)}
                    fill="none"
                    stroke="url(#route)"
                    strokeWidth="0.45"
                    strokeLinecap="round"
                    strokeDasharray="2 2"
                    className="animate-dash-fly"
                  />
                  <circle r="0.7" className="fill-primary">
                    <animateMotion dur="6s" repeatCount="indefinite" path={arc(a, b)} />
                  </circle>
                </g>
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
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={120} className="rounded-[2rem] border border-border bg-card p-8">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                Next on the list
              </h3>
              <ul className="mt-5 divide-y divide-border">
                {WISHLIST.map((w) => (
                  <li
                    key={w.place}
                    className="flex items-baseline justify-between gap-4 py-3.5 transition-all hover:translate-x-1.5"
                  >
                    <span className="font-semibold">{w.place}</span>
                    <span className="text-sm text-muted-foreground">{w.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="overflow-hidden rounded-[2rem] bg-secondary/70 p-8">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                Things I swear by
              </h3>
              <div className="mt-5 -mx-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex w-max animate-marquee-x gap-2.5 px-8">
                  {[...SWEAR_BY, ...SWEAR_BY].map((s, i) => (
                    <span
                      key={`${s}-${i}`}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium shadow-soft ${SWEAR_TINTS[i % SWEAR_TINTS.length]}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
