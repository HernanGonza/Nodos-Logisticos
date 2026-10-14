import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ORG_NAME, PROJECTS, SITE_TITLE } from "@/lib/site";
import { TacuaraBrand } from "./TacuaraBrand";

export type NavSection = { href: string; label: string };

const linkClass = "hover:text-foreground transition";
const activeClass = { className: "text-foreground font-medium" };

/**
 * Navegación global del sitio. Con `sections` agrega la navegación interna por anclas
 * de la página (barra secundaria en escritorio, dentro del menú en mobile).
 */
export function SiteNav({ sections = [] }: { sections?: NavSection[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        <Link to="/" onClick={close} aria-label={`${ORG_NAME} — ${SITE_TITLE}, inicio`}>
          <TacuaraBrand />
        </Link>

        <nav className="hidden xl:flex items-center gap-7 text-sm text-muted-foreground" aria-label="Proyectos">
          <Link to="/" activeOptions={{ exact: true }} activeProps={activeClass} className={linkClass}>
            Inicio
          </Link>
          {PROJECTS.map((p) => (
            <Link key={p.to} to={p.to} activeProps={activeClass} className={linkClass}>
              {p.short}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="xl:hidden -mr-2 h-10 w-10 grid place-items-center rounded-lg hover:bg-muted transition"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {sections.length > 0 && (
        <div className="hidden xl:block border-t border-border/40">
          <nav className="mx-auto max-w-7xl px-10 h-11 flex items-center gap-7 text-xs text-muted-foreground" aria-label="En esta página">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className={linkClass}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {open && (
        <div id="menu-movil" className="xl:hidden border-t border-border/40 bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="mx-auto max-w-7xl px-6 py-5 space-y-6">
            <nav className="flex flex-col" aria-label="Proyectos">
              <Link to="/" activeOptions={{ exact: true }} activeProps={activeClass} onClick={close} className="py-3 border-b border-border text-sm text-muted-foreground">
                Inicio
              </Link>
              {PROJECTS.map((p) => (
                <Link key={p.to} to={p.to} activeProps={activeClass} onClick={close} className="py-3 border-b border-border text-sm text-muted-foreground">
                  {p.name}
                </Link>
              ))}
            </nav>
            {sections.length > 0 && (
              <nav aria-label="En esta página">
                <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">En esta página</div>
                <div className="flex flex-col">
                  {sections.map((s) => (
                    <a key={s.href} href={s.href} onClick={close} className="py-2.5 text-sm text-muted-foreground hover:text-foreground">
                      {s.label}
                    </a>
                  ))}
                </div>
              </nav>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
