import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={project.to}
      className="group flex flex-col rounded-3xl border border-border bg-card p-7 hover:shadow-[var(--shadow-elegant)] hover:border-primary transition"
    >
      <div className="h-12 w-12 rounded-xl bg-primary/5 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
        <project.icon className="h-5 w-5" />
      </div>
      <h3 className="mt-8 font-display text-xl font-semibold leading-snug">{project.name}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
      <span className="mt-auto pt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--clay)]">
        Ver el proyecto <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
