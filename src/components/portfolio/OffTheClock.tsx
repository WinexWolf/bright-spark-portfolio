import { Reveal } from "./Reveal";

const PINS = [
  { id: "nyc", name: "New York", x: 12, y: 27, eat: "Superiority Burger" },
  { id: "sfo", name: "San Francisco", x: 5, y: 33, eat: "Tartine · morning bun" },
  { id: "lon", name: "London", x: 33, y: 19, eat: "Dishoom · bacon naan" },
  { id: "lis", name: "Lisbon", x: 26, y: 31, eat: "Time Out Market" },
  { id: "par", name: "Paris", x: 37, y: 26, eat: "Du Pain et des Idées" },
  { id: "ist", name: "Istanbul", x: 46, y: 30, eat: "Karaköy Güllüoğlu" },
  { id: "dxb", name: "Dubai", x: 54, y: 38, eat: "Al Ustad Special Kabab" },
  { id: "del", name: "Delhi", x: 62, y: 36, eat: "Karim's · kebabs" },
  { id: "bom", name: "Mumbai", x: 60, y: 45, eat: "Britannia · berry pulao" },
  { id: "sin", name: "Singapore", x: 74, y: 49, eat: "Tiong Bahru laksa" },
  { id: "tok", name: "Tokyo", x: 85, y: 27, eat: "Fuglen · coffee" },
  { id: "syd", name: "Sydney", x: 88, y: 52, eat: "Bourke St Bakery" },
];

const ROUTES = [
  ["sfo", "nyc"],
  ["nyc", "lon"],
  ["lon", "par"],
  ["par", "ist"],
  ["ist", "dxb"],
  ["dxb", "del"],
  ["del", "bom"],
  ["bom", "sin"],
  ["sin", "tok"],
  ["sin", "syd"],
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

const BOOKS = [
  { title: "The Twentieth Wife", tint: "bg-primary/85 text-primary-foreground", h: 92, w: 34 },
  { title: "The Palace of Illusions", tint: "bg-grape/80 text-primary-foreground", h: 100, w: 30 },
  { title: "The Lady of the Rivers", tint: "bg-sky/80 text-primary-foreground", h: 88, w: 36 },
  { title: "A Thousand Splendid Suns", tint: "bg-strawberry/90 text-foreground", h: 96, w: 32 },
  { title: "Norse Mythology", tint: "bg-ink text-ink-foreground", h: 84, w: 28 },
  { title: "Cleopatra VII · Royal Diaries", tint: "bg-citrus text-foreground", h: 98, w: 34 },
  { title: "The Merchant of Venice", tint: "bg-matcha-deep/90 text-primary-foreground", h: 90, w: 26 },
  { title: "Animal Farm", tint: "bg-blush/90 text-foreground", h: 82, w: 24 },
  { title: "The Chronicles of Narnia", tint: "bg-mint text-foreground", h: 100, w: 38 },
  { title: "The Hobbit", tint: "bg-matcha text-foreground", h: 94, w: 30 },
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
            Places I&apos;ve been, places next, and the shelf I keep going back to.
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
              aria-label="Illustrated travel map with animated flight paths between cities"
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
                    d={arc(a, b)}
                    fill="none"
                    stroke="url(#route)"
                    strokeWidth="0.35"
                    strokeLinecap="round"
                    strokeDasharray="2 2"
                    className="animate-dash-fly"
                  />
                  <circle r="0.55" className="fill-primary">
                    <animateMotion dur="7s" repeatCount="indefinite" path={arc(a, b)} />
                  </circle>
                </g>
              ))}

              {PINS.map((p) => (
                <g key={p.id} className="group">
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="0.9"
                    className="origin-center animate-pin-pulse fill-primary/40"
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                  <circle cx={p.x} cy={p.y} r="0.85" className="fill-primary" />
                  <text
                    x={p.x + 1.5}
                    y={p.y + 0.4}
                    className="fill-foreground text-[1.7px] font-semibold"
                  >
                    {p.name}
                  </text>
                  <text
                    x={p.x + 1.5}
                    y={p.y + 2.4}
                    className="fill-muted-foreground text-[1.4px]"
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

        <Reveal delay={120} className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft">
          <h3 className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            On the shelf
          </h3>
          <div className="mt-8 flex items-end justify-center gap-2 overflow-x-auto pb-1 sm:gap-3">
            {BOOKS.map((b, i) => (
              <div
                key={b.title}
                title={b.title}
                style={{
                  height: `${b.h * 2.4}px`,
                  width: `${b.w * 1.35}px`,
                  animationDelay: `${i * 240}ms`,
                }}
                className={`group relative flex shrink-0 origin-bottom animate-book-sway cursor-default items-center justify-center rounded-t-md border border-foreground/10 shadow-lift transition-all duration-300 hover:-translate-y-3 hover:rotate-1 ${b.tint}`}
              >
                <span
                  aria-hidden
                  className="absolute inset-y-2 left-1 w-px bg-current opacity-30"
                />
                <span
                  aria-hidden
                  className="absolute inset-y-2 right-1 w-px bg-current opacity-30"
                />
                <span className="[writing-mode:vertical-rl] rotate-180 px-1 text-center text-[0.7rem] leading-none font-semibold tracking-wide whitespace-nowrap">
                  {b.title}
                </span>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-0 h-3 rounded-b-xl bg-gradient-to-r from-ink/80 via-ink to-ink/80 shadow-lift" />
        </Reveal>
      </div>
    </section>
  );
}
