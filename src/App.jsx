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

    // Fixed Scroll Highlight Handler including Contact
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const about = document.getElementById('about');
      const skills = document.getElementById('skills');
      const project = document.getElementById('project');
      const contact = document.getElementById('contact');

      if (contact && scrollPos >= contact.offsetTop) {
        setActiveSection('contact');
      } else if (project && scrollPos >= project.offsetTop) {
        setActiveSection('project');
      } else if (skills && scrollPos >= skills.offsetTop) {
        setActiveSection('skills');
      } else if (about && scrollPos >= about.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id); // Immediate highlight state update on click
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${id}`, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
    }
  };

  return (
    <div ref={mainRef} style={{ position: 'relative', width: '100%', backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1, backgroundColor: '#000' }}>
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
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 10, 
        padding: '25px 60px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        <h2 
          ref={logoRef} 
          className="bright-text" 
          style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '1px', margin: 0, cursor: 'pointer' }} 
          onClick={() => scrollToSection('hero')}
        >
          PORTFOLIO
        </h2>

        <div 
          ref={navContainerRef}
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '8px', 
            fontSize: '15px', 
            fontWeight: '700', 
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            padding: '6px',
            borderRadius: '40px',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <button 
            onClick={() => scrollToSection('about')}
            style={{
              background: activeSection === 'about' ? '#00d2ff' : 'transparent',
              color: activeSection === 'about' ? '#000000' : '#ffffff',
              border: 'none',
              padding: '9px 24px',
              borderRadius: '30px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: activeSection === 'about' ? '0 0 15px rgba(0, 210, 255, 0.8)' : 'none',
              outline: 'none'
            }}
          >
            About
          </button>

          <button 
            onClick={() => scrollToSection('skills')}
            style={{
              background: activeSection === 'skills' ? '#00d2ff' : 'transparent',
              color: activeSection === 'skills' ? '#000000' : '#ffffff',
              border: 'none',
              padding: '9px 24px',
              borderRadius: '30px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: activeSection === 'skills' ? '0 0 15px rgba(0, 210, 255, 0.8)' : 'none',
              outline: 'none'
            }}
          >
            Skills
          </button>

          <button 
            onClick={() => scrollToSection('project')}
            style={{
              background: activeSection === 'project' ? '#00d2ff' : 'transparent',
              color: activeSection === 'project' ? '#000000' : '#ffffff',
              border: 'none',
              padding: '9px 24px',
              borderRadius: '30px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: activeSection === 'project' ? '0 0 15px rgba(0, 210, 255, 0.8)' : 'none',
              outline: 'none'
            }}
          >
            Project
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            style={{
              background: activeSection === 'contact' ? '#00d2ff' : 'transparent',
              color: activeSection === 'contact' ? '#000000' : '#ffffff',
              border: 'none',
              padding: '9px 24px',
              borderRadius: '30px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: activeSection === 'contact' ? '0 0 15px rgba(0, 210, 255, 0.8)' : 'none',
              outline: 'none'
            }}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main id="hero" style={{ 
        position: 'relative', 
        zIndex: 5, 
        width: '100%', 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0 80px',
        boxSizing: 'border-box'
      }}>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <div 
            ref={imageWrapperRef}
            className="profile-image-wrapper"
            style={{ 
              width: '420px', 
              height: '420px', 
              borderRadius: '50%',
              overflow: 'hidden', 
              border: '3px solid rgba(0, 210, 255, 0.5)',
              boxSizing: 'border-box',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              backgroundColor: '#050505'
            }}
          >
            <img 
              src={myProfileImage} 
              alt="Satyam Raj"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div ref={textContentRef} className="bright-text" style={{ flex: '1.2', display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '40px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#00d2ff', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
            Welcome to my space
          </h3>
          <h1 style={{ fontSize: '62px', fontWeight: '900', lineHeight: '1.1', margin: 0, color: '#ffffff' }}>
            Hello, I am <br />
            <span className="highlight-blue">Satyam Raj</span>
          </h1>
          <p style={{ fontSize: '19px', lineHeight: '1.6', color: '#e0e0e0', fontWeight: '500', maxWidth: '580px' }}>
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