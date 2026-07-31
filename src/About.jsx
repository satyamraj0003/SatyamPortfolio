import React from 'react';
import ScaleFit from './ScaleFit';

const About = () => {
  return (
    <section 
      id="about"
      style={{
        position: 'relative',
        zIndex: 5,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 20px 80px',
        boxSizing: 'border-box'
      }}
    >
      <ScaleFit width={880}>
      {/* OUTER DEEP COSMIC MATTE CARD */}
      <div 
        style={{
          width: '100%',
          backgroundColor: '#130d24',
          borderRadius: '16px',
          padding: '35px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(112, 0, 255, 0.2)',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          transform: 'rotate(-1deg)',
          transition: 'all 0.5s ease',
          boxSizing: 'border-box'
        }}
      >
        {/* VINTAGE CHAMPAGNE PARCHMENT */}
        <div 
          className="burnt-paper"
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#EACEAA',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, #fff8ec 0%, #f2ddba 55%, #EACEAA 100%)
            `,
            padding: '45px 50px',
            boxSizing: 'border-box',
            color: '#2b1810',
            boxShadow: 'inset 0 0 30px rgba(120, 90, 50, 0.5)',
            borderRadius: '4px'
          }}
        >
          {/* TOP RIGHT TITLE */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <h2 className="heading-about" style={{ transform: 'rotate(2deg)' }}>
              About Me...
            </h2>
          </div>

          {/* PARCHMENT BODY TEXT MATCHING YOUR TECH STACK */}
          <div className="parchment-body">
            <p style={{ marginBottom: '16px' }}>
              Greetings, Traveler! 👋 I'm <strong className="parchment-strong-lg name-cursive">Satyam Raj</strong>, a passionate Software & Full-Stack Web Developer dedicated to building high-performance applications.
            </p>
            <p style={{ marginBottom: '16px' }}>
              My expertise bridges both modern front-end user experiences and robust enterprise back-end architectures. I specialize in crafting interactive UIs using <strong className="parchment-strong">React, Angular, GSAP</strong>, and scalable backends using <strong className="parchment-strong">.NET, C#, and SQL Databases</strong>.
            </p>
            <p style={{ margin: 0 }}>
              Whether it's designing fluid animations or architecting clean API pipelines, I focus on delivering seamless, scalable, and visually captivating digital solutions.
            </p>
          </div>

        </div>
      </div>
      </ScaleFit>
    </section>
  );
};

export default About;