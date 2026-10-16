import { PROJECTS, type ProjectPath } from "@/lib/site";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

/** Bloque de cierre de cada página de proyecto. */
export function OtherProjects({ current }: { current: ProjectPath }) {
  const others = PROJECTS.filter((p) => p.to !== current);
  return (
    <section id="otros-proyectos" className="py-24 lg:py-28 border-t border-dashed border-border bg-muted">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
        <SectionHeader label="Soberanía Económica de Misiones">
          Otros proyectos <span className="hl">del programa.</span>
        </SectionHeader>
        <div className="grid-frame mt-14"><div className="grid gap-3.5 md:grid-cols-3">
          {others.map((p) => (
            <ProjectCard key={p.to} project={p} />
          ))}
        </div></div>
      </div>
    </section>
  );
}
