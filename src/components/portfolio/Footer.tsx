const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/winexwolf" },
  { label: "X", href: "https://x.com/" },
  { label: "Email", href: "mailto:hello@anukriti.dev" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display text-xl font-semibold">
          Let&apos;s build something worth using.
        </p>
        <nav className="flex flex-wrap gap-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
