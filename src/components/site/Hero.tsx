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
    <section id="top" className="relative overflow-hidden bg-background pb-20 pt-32 lg:pb-24 lg:pt-44">
      {/* Formas de la marca: cuadrado terracota y círculo lima. */}
      <span aria-hidden="true" className="pointer-events-none absolute bottom-16 right-[6%] hidden h-[74px] w-[74px] bg-earth lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-[14%] top-36 hidden h-14 w-14 rounded-full bg-accent lg:block" />
      <div className="relative mx-auto w-[min(1180px,calc(100%-48px))]">
        <div className="eyebrow max-w-full">{badge}</div>

        <h1
          className={`max-w-5xl break-words font-extrabold ${
            size === "xl" ? "text-[clamp(2.6rem,6.4vw,5.2rem)] leading-[1.02] tracking-[-0.04em]" : "text-[clamp(2.2rem,5.2vw,4.4rem)] leading-[1.04] tracking-[-0.04em]"
          }`}
        >
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">{lead}</p>

        {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        {children}
      </div>
    </section>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center gap-2 rounded-md border border-primary/60 bg-transparent px-6 text-base font-semibold text-primary transition-colors hover:bg-secondary"
    >
      {children}
    </a>
  );
}
