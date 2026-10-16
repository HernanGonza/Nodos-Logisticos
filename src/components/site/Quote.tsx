import type { ReactNode } from "react";

const TONES = {
  clay: "border-l-earth",
  gold: "border-l-accent",
} as const;

/** Bloque destacado con borde lateral. El contenido es libre. */
export function Quote({
  tone = "clay",
  padding = "md",
  className = "mt-12",
  children,
}: {
  tone?: keyof typeof TONES;
  padding?: "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`${className} rounded-md border border-dashed border-foreground/40 border-l-[6px] ${TONES[tone]} bg-secondary/50 ${padding === "lg" ? "p-7 lg:p-9" : "p-7"}`}>
      {children}
    </div>
  );
}

/** Cita destacada, para usar dentro de Quote. */
export function QuoteText({ children }: { children: ReactNode }) {
  return <p className="text-xl font-bold leading-snug tracking-[-0.02em] text-foreground lg:text-2xl">{children}</p>;
}
