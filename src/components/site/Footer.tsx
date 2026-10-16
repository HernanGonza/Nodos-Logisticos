import { Link } from "@tanstack/react-router";
import { Globe, Info } from "lucide-react";
import { TacuaraBrand } from "./TacuaraBrand";
import { DOC_VERSION, ORG_URL, PROJECTS, SITE_TITLE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-deep-foreground/75">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
        <div className="relative z-10 grid gap-10 border-b border-dashed border-deep-foreground/30 py-12 md:grid-cols-2">
          <div>
            <a href={ORG_URL} target="_blank" rel="noopener noreferrer" aria-label="Tacuara (se abre en una pestaña nueva)" className="inline-flex min-h-11 items-center transition-opacity hover:opacity-80">
              <TacuaraBrand tone="light" />
            </a>
            <div className="mt-6 font-semibold text-deep-foreground">{SITE_TITLE}</div>
            <div className="mt-1 text-sm">Programa Provincial · {DOC_VERSION}</div>
            <a href={ORG_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-deep-foreground underline decoration-transparent underline-offset-4 transition hover:text-accent hover:decoration-current">
              <Globe size={18} aria-hidden="true" /> www.tacuara.com.ar
            </a>
          </div>
          <nav aria-label="Proyectos del programa">
            <div className="eyebrow !text-accent">Proyectos</div>
            <ul className="space-y-1 text-[0.95rem]">
              <li>
                <Link to="/" className="inline-flex min-h-9 items-center text-deep-foreground underline decoration-transparent underline-offset-4 transition hover:text-accent hover:decoration-current">
                  Inicio
                </Link>
              </li>
              {PROJECTS.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="inline-flex min-h-9 items-center text-deep-foreground underline decoration-transparent underline-offset-4 transition hover:text-accent hover:decoration-current">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="relative z-10 flex flex-col gap-3 pb-2 pt-6 font-mono text-[0.74rem] uppercase tracking-[0.04em] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Tacuara · Propuesta elaborada en 2026</span>
          <span className="flex items-center gap-2">
            <Info size={14} aria-hidden="true" /> Propuesta de proveedor. No es un sitio oficial del Gobierno.
          </span>
        </div>
      </div>
      <p className="footer-wordmark" aria-hidden="true">
        tacuara
      </p>
    </footer>
  );
}
