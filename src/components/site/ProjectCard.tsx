import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={project.to}
      className="group flex flex-col rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-primary/45"
    >
      <div className="grid h-12 w-12 place-items-center rounded-md bg-secondary text-primary">
        <project.icon className="h-6 w-6" strokeWidth={1.7} />
      </div>
      <h3 className="mt-7 text-xl font-bold leading-snug tracking-[-0.015em]">{project.name}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{project.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-earth">
        Ver el proyecto <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
