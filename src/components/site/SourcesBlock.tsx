import type { ReactNode } from "react";

export type Source = { label: ReactNode; href?: string };

/**
 * Bloque de fuentes de una página. Toda cifra que se muestra debe figurar acá.
 * Las fuentes con `href` se enlazan.
 */
export function SourcesBlock({ sources, note, className = "mt-8" }: { sources: Source[]; note?: ReactNode; className?: string }) {
  return (
    <div className={`${className} text-xs text-muted-foreground/70 leading-relaxed`}>
      <p>
        Fuentes:{" "}
        {sources.map((s, i) => (
          <span key={i}>
            {i > 0 && " · "}
            {s.href ? (
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground break-words">
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </span>
        ))}
      </p>
      {note && <p className="mt-2">{note}</p>}
    </div>
  );
}
