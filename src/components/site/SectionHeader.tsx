import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
      {children}
    </div>
  );
}

/** Etiqueta numerada ("00 — …") más título de sección. */
export function SectionHeader({
  label,
  children,
  inverse = false,
}: {
  label: ReactNode;
  children: ReactNode;
  inverse?: boolean;
}) {
  return (
    <>
      <SectionLabel>
        {inverse ? <span className="text-primary-foreground/60">{label}</span> : label}
      </SectionLabel>
      <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl break-words">
        {children}
      </h2>
    </>
  );
}

/** Sección estándar de una página de proyecto. */
export function ContentSection({
  id,
  label,
  title,
  alt = false,
  children,
}: {
  id?: string;
  label: ReactNode;
  title: ReactNode;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-28 lg:py-36 border-t border-border ${alt ? "bg-card/40" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader label={label}>{title}</SectionHeader>
        {children}
      </div>
    </section>
  );
}
