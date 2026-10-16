import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ProjectPath } from "@/lib/site";

export type ModuleItem = {
  icon: LucideIcon;
  t: string;
  d: ReactNode;
  link?: { to: ProjectPath; label: string };
};

/** Grilla numerada de módulos con ícono. `size="lg"` es la variante de cadena de actores. */
export function ModuleGrid({
  items,
  size = "md",
  cols = "sm:grid-cols-2 lg:grid-cols-4",
}: {
  items: ModuleItem[];
  size?: "md" | "lg";
  cols?: string;
}) {
  const lg = size === "lg";
  return (
    <div className="grid-frame alt mt-14">
      <div className={`grid ${cols} gap-3.5`}>
        {items.map((m, i) => (
          <div key={m.t} className={`group rounded-lg border border-border bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-primary/45 ${lg ? "p-7" : "p-6"}`}>
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-secondary text-primary">
                <m.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className={`font-bold leading-snug tracking-[-0.015em] ${lg ? "mt-7 text-lg" : "mt-6 text-base"}`}>{m.t}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{m.d}</p>
            {m.link && (
              <Link to={m.link.to} className="mt-4 inline-flex text-sm font-semibold text-earth underline-offset-4 hover:underline">
                {m.link.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
