import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import {
  education,
  experience,
  profile,
  projects,
  skills,
  softSkills,
} from "../data/portfolio";
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
export function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="show" variants={reveal}>
            <span className="eyebrow">
              <i className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </span>
            <h1>
              Building digital
              <br />
              <span className="gradient-text">experiences</span> that
              <br />
              make an impact<span className="accent">.</span>
            </h1>
            <p className="hero-lead">
              I'm <strong>Hetal Mistry</strong>, a MERN Stack Developer crafting
              thoughtful, scalable and user-friendly web applications.
            </p>
            <div className="hero-buttons">
              <a className="button" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a
                className="button button-ghost"
                href="/Hetal-Mistry-Resume.pdf"
                download
              >
                <Download size={16} /> Download CV
              </a>
            </div>
            <div className="hero-social">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <span>
                <MapPin size={16} /> Ahmedabad, India
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-glow" />
          <div className="code-card">
            <div className="code-top">
              <span />
              <span />
              <span />
              <small>developer.js</small>
            </div>
            <pre>
              <span className="code-purple">const</span> developer = {"{"}
              {"\n"} name: <span className="code-green">'Hetal Mistry'</span>,
              {"\n"} role: <span className="code-green">'MERN Developer'</span>,
              {"\n"} experience: <span className="code-orange">'3 years'</span>,
              {"\n"} passion:{" "}
              <span className="code-green">'Building web apps'</span>
              {"\n"}
              {"}"};
            </pre>
            <div className="code-bottom">
              <span className="status-dot" /> Open to exciting projects
            </div>
          </div>
          <div className="float-chip chip-react">⚛ React.js</div>
          <div className="float-chip chip-node">⬡ Node.js</div>
          <div className="float-chip chip-db">◈ MongoDB</div>
        </motion.div>
        <a href="#about" className="scroll-cue">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </a>
      </section>
      <section id="about" className="section container">
        <div className="section-heading">
          <span className="eyebrow">01 / ABOUT ME</span>
          <h2>
            A little about <span className="gradient-text">what I do.</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="large-copy">
              I turn ideas into reliable digital products — from polished
              interfaces to the APIs and data systems behind them.
            </p>
            <p>{profile.summary}</p>
            <p>
              I enjoy solving problems, writing clean code, collaborating with
              teams and continuously exploring better ways to build for the web.
            </p>
            <div className="about-details">
              <h3>Education</h3>
              {education.map((item) => (
                <div className="about-detail-row" key={item.degree}>
                  <strong>{item.degree}</strong>
                  <span>{item.institution}</span>
                  <small>
                    {item.result} · {item.period}
                  </small>
                </div>
              ))}
            </div>
            <a className="text-link" href="/Hetal-Mistry-Resume.pdf" download>
              More about my journey <Download size={16} />
            </a>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <strong>
                03<span>+</span>
              </strong>
              <small>Years of experience</small>
            </div>
            <div className="stat-card">
              <strong>06</strong>
              <small>Industry projects</small>
            </div>
            <div className="stat-card">
              <strong>04</strong>
              <small>Core skill areas</small>
            </div>
            <div className="stat-card stat-note">
              <Sparkles />
              <small>
                Curious mind.
                <br />
                Continuous learner.
              </small>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">02 / TOOLKIT</span>
            <h2>
              Technologies I <span className="gradient-text">work with.</span>
            </h2>
            <p>Tools and technologies I use to bring products to life.</p>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <motion.div
                className="skill-card"
                key={s.group}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={reveal}
              >
                <span className="skill-number">0{i + 1}</span>
                <h3>{s.group}</h3>
                <div className="skill-tags">
                  {s.items.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </motion.div>
            ))}
            <motion.div
              className="skill-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              <span className="skill-number">05</span>
              <h3>Professional Strengths</h3>
              <div className="skill-tags">
                {softSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="experience" className="section container">
        <div className="section-heading">
          <span className="eyebrow">03 / EXPERIENCE</span>
          <h2>
            Where I've <span className="gradient-text">grown.</span>
          </h2>
        </div>
        <div className="timeline">
          {experience.map((job, i) => (
            <motion.article
              className="timeline-item"
              key={job.company}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <ul>
                  {job.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="resume-note">
          Experience dates and responsibilities are presented as listed in the
          supplied resume.
        </p>
      </section>
      <section id="projects" className="section section-muted">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <span className="eyebrow">04 / SELECTED WORK</span>
              <h2>
                Projects I've <span className="gradient-text">worked on.</span>
              </h2>
              <p>
                A selection of real-world applications from my professional
                experience.
              </p>
            </div>
            <Link className="text-link" to="/projects">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="section container">
        <div className="contact-banner">
          <div>
            <span className="eyebrow">05 / GET IN TOUCH</span>
            <h2>
              Have a project in
              <br />
              <span className="gradient-text">mind?</span> Let's talk.
            </h2>
            <p>
              I'm open to discussing new opportunities, interesting projects and
              collaborations.
            </p>
          </div>
          <div className="contact-cta">
            <a className="button" href={`mailto:${profile.email}`}>
              Say hello <ArrowUpRight size={17} />
            </a>
            <a href={`mailto:${profile.email}`} className="contact-email">
              <Mail size={16} />
              {profile.email}
            </a>
          </div>
          <div className="banner-orb" />
        </div>
      </section>
    </>
  );
}
