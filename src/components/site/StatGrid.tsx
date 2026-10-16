export type Stat = { v: string; l: string; small?: boolean };

/** Separa las clases de margen (van al marco) de las de grilla (van a la grilla). */
export function splitMargin(className: string) {
  const parts = className.split(/\s+/).filter(Boolean);
  return {
    margin: parts.filter((c) => /^(-?m[trblxy]?-|[a-z]+:-?m[trblxy]?-)/.test(c)).join(" "),
    rest: parts.filter((c) => !/^(-?m[trblxy]?-|[a-z]+:-?m[trblxy]?-)/.test(c)).join(" "),
  };
}

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
  const { margin, rest } = splitMargin(className);
  return (
    <div className={`grid-frame ${margin}`}>
      <div className={`grid gap-px overflow-hidden rounded-md border border-border bg-border ${rest}`}>
        {stats.map((s) => (
          <div key={s.l} className="bg-card p-6 lg:p-7">
            <div
              className={`font-extrabold tracking-[-0.03em] text-primary ${
                size === "lg"
                  ? `whitespace-nowrap ${s.small ? "text-2xl lg:text-4xl" : "text-3xl lg:text-5xl"}`
                  : "text-3xl lg:text-4xl"
              }`}
            >
              {s.v}
            </div>
            <div className="mt-2 text-xs text-muted-foreground lg:text-sm">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
