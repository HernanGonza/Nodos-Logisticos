export type Stat = { v: string; l: string; small?: boolean };

/** Tarjetas de estadísticas. Cada valor debe tener fuente citada en la página. */
export function StatGrid({
  stats,
  size = "md",
  className,
}: {
  stats: Stat[];
  size?: "md" | "lg";
  className: string;
}) {
  return (
    <div className={`grid gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-sm ${className}`}>
      {stats.map((s) => (
        <div key={s.l} className="bg-card p-6 lg:p-8">
          <div
            className={`font-display font-bold text-gradient-hero ${
              size === "lg"
                ? `whitespace-nowrap ${s.small ? "text-2xl lg:text-4xl" : "text-3xl lg:text-5xl"}`
                : "text-3xl lg:text-4xl"
            }`}
          >
            {s.v}
          </div>
          <div className="mt-2 text-xs lg:text-sm text-muted-foreground">{s.l}</div>
        </div>
      ))}
    </div>
  );
}
