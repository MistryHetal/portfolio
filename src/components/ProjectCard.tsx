import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/portfolio";
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card ${project.accent}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="project-visual">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="visual-index">0{index + 1}</span>
        <span className="project-arrow">
          <ArrowUpRight />
        </span>
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.company}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.stack.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
