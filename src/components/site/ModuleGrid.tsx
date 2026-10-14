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
    <div className={`mt-16 grid ${cols} gap-px bg-border ${lg ? "rounded-3xl" : "rounded-3xl"} overflow-hidden border border-border`}>
      {items.map((m, i) => (
        <div key={m.t} className={`bg-card group ${lg ? "p-7 lg:p-9" : "p-7"}`}>
          <div className="flex items-center justify-between">
            <div
              className={`${lg ? "h-12 w-12" : "h-11 w-11"} rounded-xl bg-primary/5 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition`}
            >
              <m.icon className="h-5 w-5" />
            </div>
            <span className={`font-serif text-[var(--gold-deep)] ${lg ? "text-3xl" : "text-2xl"}`}>0{i + 1}</span>
          </div>
          <h3 className={`font-display font-semibold ${lg ? "mt-8 text-lg" : "mt-6 text-base"}`}>{m.t}</h3>
          <p className={`text-sm text-muted-foreground leading-relaxed ${lg ? "mt-3" : "mt-2"}`}>{m.d}</p>
          {m.link && (
            <Link to={m.link.to} className="mt-4 inline-flex text-sm font-medium text-[var(--clay)] hover:underline underline-offset-4">
              {m.link.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
