import React from 'react';
import ScaleFit from './ScaleFit';

const skillsList = [
  {
    name: 'HTML5',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    brandColor: '#e34f26'
  },
  {
    name: 'CSS3',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    brandColor: '#1572b6'
  },
  {
    name: 'JavaScript',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    brandColor: '#f7df1e'
  },
  {
    name: 'GSAP',
    iconUrl: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg',
    brandColor: '#88ce02'
  },
  {
    name: 'Tailwind CSS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    brandColor: '#06b6d4'
  },
  {
    name: 'Bootstrap',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    brandColor: '#7952b3'
  },
  {
    name: 'React',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    brandColor: '#61dafb'
  },
  {
    name: 'Angular',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    brandColor: '#dd0031'
  },
  {
    name: '.NET',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    brandColor: '#512bd4'
  },
  {
    name: 'C#',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    brandColor: '#68217a'
  },
  {
    name: 'SQL',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
    brandColor: '#00758f'
  }
];

const Skills = () => {
  return (
    <section 
      id="skills"
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
      {/* OUTER BACK-PAGE CONTAINER (Unique Midnight Obsidian & Antique Bronze Theme) */}
      <ScaleFit width={1000}>
      <div 
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #0d1117 0%, #16120c 100%)',
          borderRadius: '24px',
          padding: '28px',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.95), inset 0 0 20px rgba(212, 175, 55, 0.1)',
          border: '1.5px solid rgba(212, 175, 55, 0.3)',
          transform: 'rotate(0.5deg)',
          boxSizing: 'border-box'
        }}
      >
        {/* INNER WHISKEY SOUR PARCHMENT */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#D39858',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, #fff2df 0%, #e8b877 55%, #D39858 100%)
            `,
            padding: '50px 45px',
            boxSizing: 'border-box',
            color: '#2b1810',
            boxShadow: 'inset 0 0 50px rgba(90, 55, 15, 0.6)',
            clipPath: 'polygon(0% 2%, 3% 0%, 97% 1%, 100% 3%, 98% 12%, 100% 25%, 97% 38%, 99% 52%, 97% 68%, 100% 82%, 97% 96%, 94% 100%, 3% 98%, 0% 95%, 2% 82%, 0% 66%, 2% 50%, 0% 32%, 3% 16%)',
            filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.8))'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '35px' }}>
            <h2 
              className="heading-skills"
              style={{ 
                color: '#6e1005',
                transform: 'rotate(-1.5deg)',
                borderBottom: '2px dashed #6e1005',
                paddingBottom: '6px'
              }}
            >
              My Arsenal (Skills)...
            </h2>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '20px',
              justifyItems: 'center'
            }}
          >
            {skillsList.map((skill, index) => (
              <div 
                key={index}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255, 248, 235, 0.75)',
                  border: '2px dashed rgba(80, 40, 20, 0.4)',
                  borderRadius: '16px',
                  padding: '20px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 8px 18px rgba(0,0,0,0.12)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)';
                  // Dynamic Brand Color Hover Effect (Glow & Border)
                  e.currentTarget.style.boxShadow = `0 12px 25px ${skill.brandColor}66, 0 0 15px ${skill.brandColor}aa`;
                  e.currentTarget.style.borderColor = skill.brandColor;
                  e.currentTarget.style.borderStyle = 'solid';
                  
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.filter = 'drop-shadow(0 0 8px ' + skill.brandColor + ') scale(1.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 18px rgba(0,0,0,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(80, 40, 20, 0.4)';
                  e.currentTarget.style.borderStyle = 'dashed';
                  
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.filter = 'none';
                    img.style.transform = 'scale(1)';
                  }
                }}
              >
                <div
                  className="skill-float"
                  style={{
                    animationDelay: `${index * 0.18}s`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <img 
                    src={skill.iconUrl} 
                    alt={skill.name} 
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'contain',
                      transition: 'filter 0.3s ease, transform 0.3s ease'
                    }}
                  />
                  <span 
                    style={{ 
                      fontFamily: '"Georgia", serif', 
                      fontSize: '16px', 
                      fontWeight: 'bold', 
                      color: '#3d1c06' 
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      </ScaleFit>
    </section>
  );
};

export default Skills;