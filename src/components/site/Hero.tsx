import type { ReactNode } from "react";

export function Hero({
  badge,
  title,
  lead,
  actions,
  size = "xl",
  children,
}: {
  badge: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  /** "xl" para la home y Nodos; "lg" para títulos largos. */
  size?: "xl" | "lg";
  children?: ReactNode;
}) {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold-deep)] animate-pulse" />
          <span>{badge}</span>
        </div>

        <h1
          className={`mt-8 font-display font-bold leading-[0.95] tracking-tight break-words ${
            size === "xl" ? "text-[clamp(2.75rem,8vw,7rem)] leading-[0.92]" : "text-[clamp(2.25rem,6.5vw,5.5rem)]"
          }`}
        >
          {title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg lg:text-xl text-muted-foreground leading-relaxed">{lead}</p>

        {actions && <div className="mt-10 flex flex-wrap gap-3">{actions}</div>}
        {children}
      </div>
    </section>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-elegant)]"
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium hover:bg-muted transition"
    >
      {children}
    </a>
  );
}
