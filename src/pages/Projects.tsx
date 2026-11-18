import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/portfolio";
export function Projects() {
  return (
    <section className="section container page-top">
      <div className="section-heading">
        <span className="eyebrow">SELECTED WORK / 06 PROJECTS</span>
        <h1>
          Things I've <span className="gradient-text">helped build.</span>
        </h1>
        <p>
          Industry projects across frontend development, backend engineering and
          full-stack application development.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
