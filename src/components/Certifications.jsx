import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Certifications({ certifications }) {
  return (
    <section className="page-section" id="certifications">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Coursework and certifications that support my technical growth."
          description="These learning tracks reflect my focus on programming depth, applied machine learning, and career-ready development skills."
        />

        <div className="row g-4">
          {certifications.map((certification, index) => (
            <div className="col-md-6" key={certification.title}>
              <Reveal className="cert-card" delay={80 + index * 90} variant="up">
                <span className="cert-number">{`0${index + 1}`}</span>
                <div className="cert-copy">
                  <p className="cert-meta">{certification.issuer}</p>
                  <h3>{certification.title}</h3>
                  <p className="mb-0 section-copy">{certification.description}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
