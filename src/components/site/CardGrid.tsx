import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { ProjectPath } from "@/lib/site";

export type CardItem = {
  t: string;
  d: ReactNode;
  link?: { to: ProjectPath; label: string };
};

/** Tarjetas numeradas de diagnóstico o de contenido. */
export function CardGrid({ items, cols = "md:grid-cols-3" }: { items: CardItem[]; cols?: string }) {
  return (
    <div className={`mt-16 grid ${cols} gap-5`}>
      {items.map((it, i) => (
        <div key={it.t} className="rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-elegant)] transition">
          <div className="font-serif text-5xl text-[var(--gold-deep)] leading-none">0{i + 1}</div>
          <h3 className="mt-6 font-display text-xl font-semibold">{it.t}</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
          {it.link && (
            <Link to={it.link.to} className="mt-4 inline-flex text-sm font-medium text-[var(--clay)] hover:underline underline-offset-4">
              {it.link.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
