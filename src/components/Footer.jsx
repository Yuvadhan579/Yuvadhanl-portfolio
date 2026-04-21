import Reveal from './Reveal';

function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <Reveal className="footer-shell">
          <div>
            <p className="footer-title">{name} Portfolio</p>
            <p className="footer-note">Built with React.js, Bootstrap, and a modern dark interface.</p>
          </div>
          <a className="footer-top-link" href="#home">
            Back to top
          </a>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;
