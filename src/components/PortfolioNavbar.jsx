import { useEffect, useState } from 'react';

function PortfolioNavbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveHref(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-28% 0px -42% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [links]);

  const handleLinkClick = (href) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top glass-nav ${isScrolled ? 'glass-nav-scrolled' : ''}`}>
      <div className="container py-2">
        <a className="navbar-brand" href="#home" onClick={() => handleLinkClick('#home')}>
          <span className="brand-mark">YL</span>
          <span className="brand-copy">
            <span className="brand-name">Yuvadhan L</span>
            <span className="brand-role">Developer Portfolio</span>
          </span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-controls="portfolio-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}
          id="portfolio-navigation"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-2 ms-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link ${activeHref === link.href ? 'active' : ''}`}
                  href={link.href}
                  aria-current={activeHref === link.href ? 'page' : undefined}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-cta d-lg-inline-flex d-none ms-lg-3" href="#contact" onClick={() => handleLinkClick('#contact')}>
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}

export default PortfolioNavbar;
