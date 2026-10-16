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
    <div className="grid-frame mt-14">
      <div className={`grid ${cols} gap-3.5`}>
        {items.map((it, i) => (
          <div key={it.t} className="rounded-lg border border-dashed border-foreground/40 p-7 transition-colors hover:border-primary/50">
            <div className="font-mono text-sm font-medium text-earth">0{i + 1}</div>
            <h3 className="mt-5 text-xl font-bold leading-snug tracking-[-0.015em]">{it.t}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{it.d}</p>
            {it.link && (
              <Link to={it.link.to} className="mt-4 inline-flex text-sm font-semibold text-earth underline-offset-4 hover:underline">
                {it.link.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
