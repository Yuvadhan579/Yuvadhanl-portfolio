import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Contact({ email, location, role, socialLinks }) {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect for internships, collaborations, and project opportunities."
          description="If you are looking for someone who enjoys learning fast and building thoughtfully, I would be glad to connect."
        />

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <Reveal className="contact-card" delay={80}>
              <span className="card-label">Get In Touch</span>
              <h3>Start a conversation</h3>
              <p className="contact-description">
                I am interested in opportunities related to machine learning, AI, web
                development, and student-friendly collaboration projects.
              </p>
              <a className="contact-button d-inline-flex align-items-center" href={`mailto:${email}`}>
                Email Me
              </a>

              <div className="social-wrap">
                {socialLinks.map((link) => (
                  <a
                    className="social-link"
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <div className="contact-grid">
              <Reveal className="contact-link" delay={140} variant="right" as="a" href={`mailto:${email}`}>
                <span className="contact-label">Email</span>
                <span className="contact-value">{email}</span>
              </Reveal>
              <Reveal className="contact-link" delay={220} variant="right">
                <span className="contact-label">Location</span>
                <span className="contact-value">{location}</span>
              </Reveal>
              <Reveal className="contact-link" delay={300} variant="right">
                <span className="contact-label">Role</span>
                <span className="contact-value">{role}</span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
