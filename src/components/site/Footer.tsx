import { Link } from "@tanstack/react-router";
import { TacuaraBrand } from "./TacuaraBrand";
import { DOC_VERSION, ORG_URL, PROJECTS, SITE_TITLE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 md:grid-cols-2">
        <div>
          <div className="font-display font-semibold">{SITE_TITLE}</div>
          <div className="text-sm text-muted-foreground mt-1">Programa Provincial · {DOC_VERSION}</div>
          <div className="mt-6 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Un proyecto de</div>
          <a href={ORG_URL} target="_blank" rel="noopener noreferrer" aria-label="Tacuara (se abre en una pestaña nueva)" className="mt-3 inline-flex hover:opacity-80 transition">
            <TacuaraBrand />
          </a>
          <div className="text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} Provincia de Misiones · Argentina</div>
        </div>
        <nav aria-label="Proyectos del programa">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3">Proyectos</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition">Inicio</Link>
            </li>
            {PROJECTS.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="text-muted-foreground hover:text-foreground transition">{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
