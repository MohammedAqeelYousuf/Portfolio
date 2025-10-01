import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/style.css';

const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact" className="py-5 bg-dark">
      <Container className="fade-in"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
          animation: 'fadeInUp 1s ease-in-out',
        }}>
        <div className="justify-content-center">
          <div>
            <div className="p-4 rounded contact-card">
              <h2 className="mb-4 text-center">Contact Me</h2>
              <p>Email: <a href="mailto:mohammedaqeelyousuf@gmail.com" className="text-info">mohammedaqeelyousuf@gmail.com</a></p>
              <p>
                GitHub:{' '}
                <a
                  href="https://github.com/MohammedAqeelYousuf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-info"
                >
                  MohammedAqeelYousuf
                </a>
              </p>
              <p>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/mohammed-aqeel-yousuf-81792322b"
                  target="_blank"
                  rel="noreferrer"
                  className="text-info"
                >
                  in/mohammed-aqeel-yousuf
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
