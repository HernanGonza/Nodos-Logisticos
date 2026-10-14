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
    <ul className="mt-10 divide-y divide-border border-y border-border">
      {items.map((o, i) => (
        <li key={i} className="flex items-start gap-4 py-4">
          <CheckCircle2 className="h-5 w-5 text-[var(--leaf)] shrink-0 mt-0.5" />
          <span className="text-foreground">{o}</span>
        </li>
      ))}
    </ul>
  );
}

/** Rótulo de campo con ícono, usado dentro de tarjetas. */
export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs">{children}</span>;
}

/** Aviso de que un contenido es ilustrativo o está por validar. */
export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 inline-flex rounded-full border border-dashed border-border px-4 py-1.5 text-xs text-muted-foreground">
      {children}
    </p>
  );
}
