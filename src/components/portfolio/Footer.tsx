const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anukritijaiswal/",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "GitHub",
    href: "https://github.com/WinexWolf/",
    path: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.4 4 18.4 4.3 18.4 4.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z",
  },
  {
    label: "Medium",
    href: "https://medium.com/@anukritj",
    path: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12c0-3.54 1.51-6.42 3.38-6.42S20.96 8.46 20.96 12ZM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 py-14 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-vivid animate-gradient-pan"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 size-96 -translate-x-1/2 animate-blob rounded-full bg-gradient-warm opacity-50 blur-3xl"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display text-xl font-semibold">
          Let&apos;s build something <span className="text-gradient">worth using</span>.
        </p>
        <nav className="flex flex-wrap items-center gap-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={l.label}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-lift"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="size-4 fill-current transition-transform duration-300 group-hover:scale-110"
              >
                <path d={l.path} />
              </svg>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Anukriti. Built with curiosity.
      </p>
    </footer>
  );
}
