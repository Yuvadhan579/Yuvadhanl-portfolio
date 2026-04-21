import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Projects({ projects }) {
  const featuredProject = projects[0];

  return (
    <section className="page-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that reflects my ML and application-building mindset."
          description="A focused project portfolio that shows how I approach data, modeling, and user-facing presentation."
        />

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-8">
            <Reveal className="project-card" delay={80}>
              <span className="project-kicker">Featured Project</span>
              <h3 className="mt-3">{featuredProject.title}</h3>
              <p className="project-subtitle">{featuredProject.subtitle}</p>
              <p className="project-description">{featuredProject.description}</p>

              <div className="project-meta-grid">
                {featuredProject.meta.map((item) => (
                  <div className="project-meta-item" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>

              <div className="stack-wrap mb-4">
                {featuredProject.stack.map((item) => (
                  <span className="tech-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="detail-card">
                    <h4>Highlights</h4>
                    <ul className="project-list">
                      {featuredProject.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="detail-card">
                    <h4>Impact</h4>
                    <p>{featuredProject.impact}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-4">
            <Reveal className="project-note" delay={170} variant="right">
              <span className="card-label">Case Study</span>
              <h3>From data to demo</h3>
              <p>
                This project reflects a complete mini workflow: data handling, model
                experimentation, result comparison, and a clean presentation layer.
              </p>
              <div className="note-grid">
                <div>
                  <span className="note-metric">2</span>
                  <span className="note-caption">models compared</span>
                </div>
                <div>
                  <span className="note-metric">1</span>
                  <span className="note-caption">interactive app</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
