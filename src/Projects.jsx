import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import charityLogo from './assets/CharityLogo.jpg';

const projectsList = [
  {
    title: 'Online Charity Management System',
    techStack: ['ASP.NET MVC', 'C#', 'SQL Server', 'ADO.NET', 'Bootstrap'],
    description: [
      'Designed and developed a secure role-based web portal connecting Donors, Beneficiaries, and Admin with a verification system.',
      'Implemented real-time transaction tracking and utilized ADO.NET with Parameterized queries for safe database operations.',
      'Integrated customizable cause cards for donations, beneficiary request management, and top donor leaderboards.'
    ],
    githubUrl: 'https://github.com/satyamraj0003/Online-Charity-Management-System'
  }
];

const Projects = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const anim = gsap.to(cardRef.current, {
      y: '-=10',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => anim.kill();
  }, []);

  return (
    <section 
      id="project"
      style={{
        position: 'relative',
        zIndex: 5,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '120px 20px 80px',
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '1000px',
          backgroundColor: '#1b120c',
          borderRadius: '24px',
          padding: '30px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(205, 168, 122, 0.2)',
          border: '1px solid rgba(205, 168, 122, 0.3)',
          transform: 'rotate(-0.5deg)'
        }}
      >
        {/* BURNT & TORN PARCHMENT PAPER WITH CLIP-PATH */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#d8b889',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(245, 222, 179, 0.95) 0%, rgba(193, 154, 107, 0.85) 65%, rgba(90, 55, 25, 0.85) 100%)
            `,
            padding: '50px 45px',
            boxSizing: 'border-box',
            color: '#2b1810',
            boxShadow: 'inset 0 0 50px rgba(45, 20, 5, 0.9)',
            clipPath: 'polygon(0% 2%, 3% 0%, 97% 1%, 100% 3%, 98% 12%, 100% 25%, 97% 38%, 99% 52%, 97% 68%, 100% 82%, 97% 96%, 94% 100%, 3% 98%, 0% 95%, 2% 82%, 0% 66%, 2% 50%, 0% 32%, 3% 16%)',
            filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.8))'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '35px' }}>
            <h2 
              style={{ 
                fontFamily: '"Georgia", "Brush Script MT", cursive', 
                fontSize: '42px', 
                color: '#6e1005',
                letterSpacing: '1.5px',
                margin: 0,
                transform: 'rotate(-1.5deg)',
                borderBottom: '2px dashed #6e1005',
                paddingBottom: '6px'
              }}
            >
              Featured Work (Projects)...
            </h2>
          </div>

          {projectsList.map((project, index) => (
            <div 
              key={index}
              ref={cardRef}
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '30px',
                backgroundColor: 'rgba(255, 248, 235, 0.65)',
                border: '2px dashed rgba(80, 40, 20, 0.4)',
                borderRadius: '16px',
                padding: '30px',
                alignItems: 'center',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                backdropFilter: 'blur(4px)'
              }}
            >
              {/* CHARITY LOGO BOX */}
              <div 
                style={{ 
                  flex: '1 1 260px', 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '3px solid #3d2112',
                  padding: '15px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                }}
              >
                <img 
                  src={charityLogo} 
                  alt="Charity Logo"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '220px',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </div>

              {/* DETAILS */}
              <div style={{ flex: '1.2 1 380px', display: 'flex', flexDirection: 'column', gap: '14px', fontFamily: '"Georgia", serif' }}>
                <h3 style={{ margin: 0, fontSize: '28px', color: '#3d1c06', fontWeight: 'bold' }}>
                  {project.title}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        backgroundColor: '#3d2112',
                        color: '#f5deb3',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul style={{ margin: 0, paddingLeft: '20px', color: '#2b1810', fontSize: '15px', lineHeight: '1.5' }}>
                  {project.description.map((point, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: '6px' }}>{point}</li>
                  ))}
                </ul>

                <div style={{ marginTop: '10px' }}>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#6e1005',
                      color: '#ffffff',
                      textDecoration: 'none',
                      padding: '10px 22px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      boxShadow: '0 4px 12px rgba(110, 16, 5, 0.4)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#8b0000';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#6e1005';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;