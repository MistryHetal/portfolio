import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";
export function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p)
    return (
      <section className="section container page-top">
        <h1>Project not found</h1>
        <Link to="/projects" className="text-link">
          Back to projects <ArrowUpRight />
        </Link>
      </section>
    );
  return (
    <section className="section container page-top">
      <Link to="/projects" className="back-link">
        <ArrowLeft size={16} /> All projects
      </Link>
      <div className={`detail-hero ${p.accent}`}>
        <span className="eyebrow">{p.category} / CASE STUDY</span>
        <h1>
          {p.name}
          <span className="accent">.</span>
        </h1>
        <p>{p.summary}</p>
        <div className="detail-meta">
          <span>
            <small>COMPANY</small>
            {p.company}
          </span>
          <span>
            <small>ROLE</small>
            {p.role}
          </span>
        </div>
        <img className="detail-art" src={p.image} alt={p.imageAlt} />
      </div>
      <div className="detail-grid">
        <article>
          <span className="eyebrow">OVERVIEW</span>
          <h2>About the project</h2>
          <p>{p.description}</p>
          <h2>Key contributions</h2>
          <ul className="feature-list">
            {p.features.map((f) => (
              <li key={f}>
                <CheckCircle2 size={18} />
                {f}
              </li>
            ))}
          </ul>
        </article>
        <aside className="detail-sidebar">
          <span className="eyebrow">TECH STACK</span>
          <h3>Tools & technologies</h3>
          <div className="skill-tags">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <p className="disclaimer">
            This case study summarizes the project scope described in the
            supplied resume. Additional implementation specifics can be added
            when you provide them.
          </p>
        </aside>
      </div>
      <Link to="/projects" className="text-link">
        <ArrowLeft size={16} /> Back to all projects
      </Link>
    </section>
  );
}
