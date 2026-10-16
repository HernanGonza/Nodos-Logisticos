import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

/** Bajada bajo el título de sección. */
export function Lead({ children }: { children: ReactNode }) {
  return <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{children}</p>;
}

/** Párrafo de cuerpo. */
export function P({ children, className = "mt-6" }: { children: ReactNode; className?: string }) {
  return <p className={`max-w-3xl text-muted-foreground leading-relaxed ${className}`}>{children}</p>;
}

/** Énfasis dentro de un párrafo. */
export function Em({ children }: { children: ReactNode }) {
  return <span className="text-foreground font-medium">{children}</span>;
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-10 divide-y divide-dashed divide-border border-y border-dashed border-border">
      {items.map((o, i) => (
        <li key={i} className="flex items-start gap-4 py-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span className="text-foreground">{o}</span>
        </li>
      ))}
    </ul>
  );
}

/** Rótulo de campo con ícono, usado dentro de tarjetas. */
export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded border border-border bg-secondary px-3 py-1.5 font-mono text-[0.76rem] text-secondary-foreground">{children}</span>;
}

/** Aviso de que un contenido es ilustrativo o está por validar. */
export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 inline-flex rounded border border-dashed border-foreground/40 px-4 py-1.5 font-mono text-[0.74rem] uppercase tracking-[0.04em] text-muted-foreground">
      {children}
    </p>
  );
}
