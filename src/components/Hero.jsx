import Reveal from './Reveal';

function Hero({ data }) {
  const terminalLines = [
    'const developer = {',
    `  name: '${data.name}',`,
    `  role: '${data.role}',`,
    "  focus: ['ML', 'AI', 'Web Apps'],",
    `  location: '${data.location}',`,
    "  status: 'Open to internships'",
    '};',
  ];

  return (
    <section className="hero-section page-section" id="home">
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-lg-7">
            <Reveal className="hero-copy" delay={80}>
              <span className="hero-badge">Machine Learning + Full-Stack Development</span>
              <p className="hero-kicker">Hello, I am</p>
              <h1 className="hero-title">{data.name}</h1>
              <p className="hero-subtitle">{data.role}</p>
              <p className="hero-description">{data.intro}</p>

              <div className="hero-meta">
                <span>{data.location}</span>
                <span>{data.email}</span>
                <span>{data.availability}</span>
              </div>

              <div className="hero-actions d-flex flex-wrap gap-3">
                <a className="btn btn-brand d-inline-flex align-items-center" href="#projects">
                  View Projects
                </a>
                <a
                  className="btn btn-outline-brand d-inline-flex align-items-center"
                  href={data.resumeHref}
                  download
                >
                  Download Resume
                </a>
              </div>

              <div className="social-wrap hero-social-wrap">
                {data.socialLinks.map((link) => (
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

              <div className="row g-3 hero-stats">
                {data.stats.map((stat, index) => (
                  <div className="col-6 col-md-4" key={stat.label}>
                    <Reveal className="metric-card" delay={160 + index * 90} variant="scale">
                      <span className="metric-value">{stat.value}</span>
                      <span className="metric-label">{stat.label}</span>
                    </Reveal>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal className="hero-panel hero-terminal" delay={180} variant="right">
              <div className="terminal-top">
                <span />
                <span />
                <span />
              </div>

              <div className="terminal-screen">
                <p className="terminal-command">$ developer.profile()</p>
                <div className="terminal-code">
                  {terminalLines.map((line) => (
                    <code key={line}>{line}</code>
                  ))}
                </div>
              </div>

              <div className="hero-panel-footer">
                <p className="panel-label">Current Focus</p>
                <ul className="hero-list">
                  {data.focusAreas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
