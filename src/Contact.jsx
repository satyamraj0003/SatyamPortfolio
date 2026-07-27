import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const contactLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/satyamraj03',
    brandColor: '#0a66c2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    url: 'https://github.com/satyamraj0003',
    brandColor: '#181717',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'satyamraaj674@gmail.com',
    brandColor: '#ea4335',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    )
  }
];

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ text: '', isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ text: '', isError: false });

    // AAPKI EMAILJS KEYS
    const SERVICE_ID = 'service_niihnb9';
    const TEMPLATE_ID = 'template_kehi04d';
    const PUBLIC_KEY = 'm6MMrFtMEmiNoV58t';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatusMsg({ text: 'Message sent successfully', isError: false });
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error('EmailJS Error:', error);
        setStatusMsg({ text: '❌ Failed: ' + (error.text || 'Something went wrong'), isError: true });
      });
  };

  return (
    <section 
      id="contact"
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
          background: 'linear-gradient(135deg, #150f0c 0%, #0d0907 100%)',
          borderRadius: '24px',
          padding: '28px',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.95), inset 0 0 20px rgba(180, 120, 60, 0.1)',
          border: '1.5px solid rgba(180, 120, 60, 0.3)',
          transform: 'rotate(-0.5deg)'
        }}
      >
        <div 
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#d8b889',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(245, 222, 179, 0.95) 0%, rgba(193, 154, 107, 0.85) 65%, rgba(90, 55, 25, 0.85) 100%)
            `,
            padding: '50px 40px',
            boxSizing: 'border-box',
            color: '#2b1810',
            boxShadow: 'inset 0 0 50px rgba(45, 20, 5, 0.9)',
            clipPath: 'polygon(0% 2%, 3% 0%, 97% 1%, 100% 3%, 98% 12%, 100% 25%, 97% 38%, 99% 52%, 97% 68%, 100% 82%, 97% 96%, 94% 100%, 3% 98%, 0% 95%, 2% 82%, 0% 66%, 2% 50%, 0% 32%, 3% 16%)',
            filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.8))'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '35px' }}>
            <h2 
              style={{ 
                fontFamily: '"Georgia", serif', 
                fontSize: '40px', 
                color: '#6e1005',
                letterSpacing: '1.5px',
                margin: 0,
                transform: 'rotate(-1deg)',
                borderBottom: '2px dashed #6e1005',
                paddingBottom: '6px'
              }}
            >
              Get In Touch (Contact)...
            </h2>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              alignItems: 'start'
            }}
          >
            {/* LEFT SIDE: LINKS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <p style={{ fontFamily: '"Georgia", serif', fontSize: '18px', margin: 0, color: '#3d1c06', lineHeight: '1.5' }}>
                Feel free to connect for opportunities, collaborations, or just a friendly chat over coffee! ☕
              </p>

              {contactLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    backgroundColor: 'rgba(255, 248, 235, 0.8)',
                    border: '2px dashed rgba(80, 40, 20, 0.4)',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    textDecoration: 'none',
                    color: '#3d1c06',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = item.brandColor;
                    e.currentTarget.style.boxShadow = `0 10px 20px ${item.brandColor}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(80, 40, 20, 0.4)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{ color: item.brandColor, display: 'flex' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Georgia", serif', fontWeight: 'bold', fontSize: '16px' }}>{item.name}</div>
                    <div style={{ fontSize: '13px', opacity: 0.8 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* RIGHT SIDE: WORKING FORM WITH YOUR KEYS */}
            <form 
              id="contact-form"
              ref={formRef}
              onSubmit={sendEmail}
              style={{
                backgroundColor: 'rgba(255, 248, 235, 0.65)',
                border: '2px dashed rgba(80, 40, 20, 0.4)',
                borderRadius: '16px',
                padding: '25px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                backdropFilter: 'blur(4px)'
              }}
            >
              <div>
                <label style={{ display: 'block', fontFamily: '"Georgia", serif', fontWeight: 'bold', marginBottom: '5px', color: '#3d1c06' }}>Your Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #b89768',
                    backgroundColor: '#fff8eb',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: '"Georgia", serif', fontWeight: 'bold', marginBottom: '5px', color: '#3d1c06' }}>Your Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="name@example.com"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #b89768',
                    backgroundColor: '#fff8eb',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: '"Georgia", serif', fontWeight: 'bold', marginBottom: '5px', color: '#3d1c06' }}>Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  required
                  placeholder="Type your message here..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #b89768',
                    backgroundColor: '#fff8eb',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {statusMsg.text && (
                <div style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: statusMsg.isError ? '#8b0000' : '#006400',
                  textAlign: 'center'
                }}>
                  {statusMsg.text}
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: loading ? '#888888' : '#6e1005',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontFamily: '"Georgia", serif',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 12px rgba(110, 16, 5, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;