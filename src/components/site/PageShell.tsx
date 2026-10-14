import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { SiteNav, type NavSection } from "./SiteNav";

/** Estructura común de todas las páginas: nav global, contenido y footer. */
export function PageShell({ sections, children }: { sections?: NavSection[]; children: ReactNode }) {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <SiteNav sections={sections} />
      {children}
      <Footer />
    </main>
  );
}
