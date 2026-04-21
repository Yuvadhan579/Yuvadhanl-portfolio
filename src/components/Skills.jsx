import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Skills({ skillGroups }) {
  return (
    <section className="page-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A balanced toolkit across programming, UI, and machine learning."
          description="I work comfortably across languages, frontend tools, and the data-oriented skills needed to prototype and ship ideas."
        />

        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <div className="col-md-6 col-lg-4" key={group.title}>
              <Reveal className="skill-card" delay={80 + index * 100} variant="scale">
                <span className="card-label">Skill Group</span>
                <h3>{group.title}</h3>
                <p className="skill-summary">{group.summary}</p>
                <div className="skill-pills">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
