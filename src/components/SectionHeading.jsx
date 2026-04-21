import Reveal from './Reveal';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal as="div" className="section-heading" variant="left">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </Reveal>
  );
}

export default SectionHeading;
