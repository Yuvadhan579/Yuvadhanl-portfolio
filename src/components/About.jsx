import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function About({ about, focusAreas, email, location, role }) {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Curious about systems, serious about building them well."
          description="I enjoy learning through hands-on projects and turning technical ideas into clear, usable applications."
        />

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <Reveal className="about-card" delay={80}>
              <span className="card-label">Profile</span>
              <h3>Who I Am</h3>
              <p className="section-copy">{about}</p>
              <p className="section-copy mb-0">
                My interests sit at the intersection of artificial intelligence, machine
                learning, and modern web development. I like building solutions that are not
                only functional, but also intuitive, efficient, and thoughtfully presented.
              </p>

              <div className="detail-grid">
                <div className="detail-stat">
                  <span>Role</span>
                  <strong>{role}</strong>
                </div>
                <div className="detail-stat">
                  <span>Location</span>
                  <strong>{location}</strong>
                </div>
                <div className="detail-stat">
                  <span>Email</span>
                  <strong>{email}</strong>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal className="insight-card" delay={160} variant="right">
              <span className="card-label">Approach</span>
              <h3>How I Work</h3>
              <ul className="about-list">
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
