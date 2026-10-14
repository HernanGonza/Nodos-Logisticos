import type { ReactNode } from "react";

const TONES = {
  clay: "border-[var(--clay)] bg-[var(--clay)]/5",
  gold: "border-[var(--gold-deep)] bg-[var(--gold)]/5",
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
    <div className={`${className} rounded-2xl border-l-4 ${TONES[tone]} ${padding === "lg" ? "p-7 lg:p-9" : "p-7"}`}>
      {children}
    </div>
  );
}

/** Cita en serif cursiva, para usar dentro de Quote. */
export function QuoteText({ children }: { children: ReactNode }) {
  return <p className="font-serif italic text-xl lg:text-2xl text-foreground leading-snug">{children}</p>;
}
