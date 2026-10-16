import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">{children}</div>
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
        {inverse ? <span className="text-deep-foreground/60">{label}</span> : label}
      </SectionLabel>
      <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.08] tracking-[-0.035em] max-w-4xl break-words">
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
    <section id={id} className={`py-24 lg:py-28 border-t border-dashed border-border ${alt ? "bg-muted" : ""}`}>
      <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
        <SectionHeader label={label}>{title}</SectionHeader>
        {children}
      </div>
    </section>
  );
}
