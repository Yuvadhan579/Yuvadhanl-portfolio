import './App.css';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PortfolioNavbar from './components/PortfolioNavbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="app-shell">
      <PortfolioNavbar links={portfolioData.navLinks} />
      <main>
        <Hero data={portfolioData} />
        <About
          about={portfolioData.about}
          focusAreas={portfolioData.focusAreas}
          email={portfolioData.email}
          location={portfolioData.location}
          role={portfolioData.role}
        />
        <Projects projects={portfolioData.projects} />
        <Skills skillGroups={portfolioData.skillGroups} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact
          email={portfolioData.email}
          location={portfolioData.location}
          role={portfolioData.role}
          socialLinks={portfolioData.socialLinks}
        />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}

export default App;
