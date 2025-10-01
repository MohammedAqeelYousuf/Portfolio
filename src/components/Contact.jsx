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
      <Container>
        <Row className="justify-content-center">
          {/* Make it same width as Skills cards (3 per row) */}
          <Col md={16} className="fade-in">
            <div className="p-4 rounded shadow bg-white contact-card">
              <h2 className="mb-4 text-center">Contact Me</h2>
              <p>Email: mohammedaqeelyousuf@gmail.com</p>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
