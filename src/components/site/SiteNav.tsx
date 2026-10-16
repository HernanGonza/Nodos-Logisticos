import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ORG_NAME, PROJECTS, SITE_TITLE } from "@/lib/site";
import { TacuaraBrand } from "./TacuaraBrand";

export type NavSection = { href: string; label: string };

const linkClass =
  "inline-flex min-h-11 items-center rounded-md px-3.5 text-[0.95rem] font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary";
const activeClass = { className: "bg-secondary text-primary" };

/**
 * Navegación global del sitio. Con `sections` agrega la navegación interna por anclas
 * de la página (barra secundaria en escritorio, dentro del menú en mobile).
 */
export function SiteNav({ sections = [] }: { sections?: NavSection[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#top">
        Saltar al contenido
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-dashed border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] w-[min(1180px,calc(100%-48px))] items-center justify-between gap-6">
          <Link to="/" onClick={close} aria-label={`${ORG_NAME} — ${SITE_TITLE}, inicio`}>
            <TacuaraBrand sub="Soberanía Económica · Misiones" />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Proyectos">
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
            className="-mr-2 grid h-11 w-11 place-items-center rounded-md transition-colors hover:bg-secondary xl:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {sections.length > 0 && (
          <div className="hidden border-t border-dashed border-border bg-secondary/60 xl:block">
            <nav className="mx-auto flex h-11 w-[min(1180px,calc(100%-48px))] items-center gap-6 font-mono text-[0.72rem] uppercase tracking-[0.05em] text-muted-foreground" aria-label="En esta página">
              {sections.map((s) => (
                <a key={s.href} href={s.href} className="transition-colors hover:text-primary">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        )}

        {open && (
          <div id="menu-movil" className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-dashed border-border bg-background xl:hidden">
            <div className="mx-auto w-[min(1180px,calc(100%-36px))] space-y-6 py-5">
              <nav className="flex flex-col" aria-label="Proyectos">
                <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} onClick={close} className="flex min-h-12 items-center border-b border-dashed border-border font-semibold">
                  Inicio
                </Link>
                {PROJECTS.map((p) => (
                  <Link key={p.to} to={p.to} activeProps={{ className: "text-primary" }} onClick={close} className="flex min-h-12 items-center border-b border-dashed border-border font-semibold">
                    {p.name}
                  </Link>
                ))}
              </nav>
              {sections.length > 0 && (
                <nav aria-label="En esta página">
                  <div className="eyebrow">En esta página</div>
                  <div className="flex flex-col">
                    {sections.map((s) => (
                      <a key={s.href} href={s.href} onClick={close} className="flex min-h-11 items-center text-sm text-muted-foreground hover:text-primary">
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
    </>
  );
}
