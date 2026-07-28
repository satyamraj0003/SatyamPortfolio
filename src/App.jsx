import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';
import Galaxy from './Galaxy';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import myProfileImage from './assets/satyam.jpg';

function App() {
  const mainRef = useRef(null);
  const logoRef = useRef(null);
  const navContainerRef = useRef(null);
  const textContentRef = useRef(null);
  const imageWrapperRef = useRef(null);

  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    const sectionIds = ['hero', 'about', 'skills', 'project', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const visibleRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        visibleRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) setActiveSection(bestId);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(logoRef.current, { y: -20, opacity: 0, duration: 0.6, delay: 0.2 })
        .from(navContainerRef.current, { y: -20, opacity: 0, duration: 0.6 }, "-=0.3");

      tl.fromTo(imageWrapperRef.current, { x: -60, opacity: 0, scale: 0.95 }, { x: 0, opacity: 1, scale: 1, duration: 0.8 }, "-=0.2");
      tl.fromTo(textContentRef.current.children, { x: 60, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.12, duration: 0.8 }, "-=0.6");
    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.site-navbar')) setMenuOpen(false);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setActiveSection(id); // Immediate highlight state update on click
    setMenuOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${id}`, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
    }
  };

  return (
    <div ref={mainRef} style={{ position: 'relative', width: '100%', backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1, backgroundColor: '#000', pointerEvents: 'none' }}>
        <Galaxy />
      </div>

      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100vh', 
        zIndex: 2, 
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)',
        pointerEvents: 'none'
      }} />

      {/* NAVBAR */}
      <nav className="site-navbar">
        <h2 
          ref={logoRef} 
          className="bright-text nav-logo" 
          onClick={() => scrollToSection('hero')}
        >
          PORTFOLIO
        </h2>

        <div ref={navContainerRef} className="nav-pills">
          <button 
            onClick={() => scrollToSection('about')}
            className={`nav-pill-btn ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>

          <button 
            onClick={() => scrollToSection('skills')}
            className={`nav-pill-btn ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>

          <button 
            onClick={() => scrollToSection('project')}
            className={`nav-pill-btn ${activeSection === 'project' ? 'active' : ''}`}
          >
            Project
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className={`nav-pill-btn ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </div>

        {/* HAMBURGER — shown only on small screens via CSS */}
        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* MOBILE DROPDOWN MENU */}
        <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
          <button
            onClick={() => scrollToSection('about')}
            className={`nav-mobile-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`nav-mobile-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('project')}
            className={`nav-mobile-link ${activeSection === 'project' ? 'active' : ''}`}
          >
            Project
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`nav-mobile-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main id="hero" className="hero-section">
        <div className="hero-image-side">
          <div 
            ref={imageWrapperRef}
            className="profile-image-wrapper hero-image-circle"
          >
            <img 
              src={myProfileImage} 
              alt="Satyam Raj"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div ref={textContentRef} className="bright-text hero-text-side">
          <h3 className="hero-eyebrow">
            Welcome to my space
          </h3>
          <h1 className="hero-title">
            Hello, I am <br />
            <span className="highlight-blue">Satyam Raj</span>
          </h1>
          <p className="hero-desc">
            A creative Full-Stack Developer specialized in building interactive front-ends and high-performance backend web architectures.
          </p>
        </div>
      </main>

      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;