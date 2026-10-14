import { PROJECTS, type ProjectPath } from "@/lib/site";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

/** Bloque de cierre de cada página de proyecto. */
export function OtherProjects({ current }: { current: ProjectPath }) {
  const others = PROJECTS.filter((p) => p.to !== current);
  return (
    <section id="otros-proyectos" className="py-24 lg:py-32 border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader label="Soberanía Económica de Misiones">
          Otros proyectos <span className="font-serif italic font-light">del programa.</span>
        </SectionHeader>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {others.map((p) => (
            <ProjectCard key={p.to} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
