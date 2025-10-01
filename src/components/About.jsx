import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/style.css';

const About = () => {

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
    <section id="about" className="py-5 bg-dark">
          <Container className="fade-in"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
              animation: 'fadeInUp 1s ease-in-out',
            }}>
        <div className="p-4 rounded  fade-in">
          <h2 className="mb-4 text-center fw-bold fade-in">
            About Me
          </h2>

          <div className="paragraph fs-5 lh-lg mb-4 fade-in">
            I'm an enthusiastic tech creator and a recent BTech graduate in Information Technology. 
            I enjoy transforming ideas into real-world applications through thoughtful and efficient code. 
            Driven by curiosity and a strong work ethic, I aim to craft software that’s not only functional 
            but also scalable and user-friendly.
          </div>

          <div className="paragraph fs-5 lh-lg mb-4 fade-in">
            As the Co-Founder of my college's coding club, I’ve had the opportunity to lead initiatives, 
            guide peers, and contribute to a collaborative learning environment. My work spans from 
            developing smart academic tools to systems that detect vulnerabilities in source code — 
            all focused on solving meaningful problems through technology.
          </div>

          <div className="paragraph fs-5 lh-lg mb-4 fade-in">
            Beyond programming, I’m a dedicated gamer 🎮 who enjoys the creativity and challenge of strategic play. 
            I also love to travel 🌍 and experience new places, which helps me stay inspired and think from diverse perspectives.
          </div>

          <div className="paragraph fs-5 lh-lg mb-0 fade-in">
            I believe in lifelong learning, building impactful projects, and pushing the boundaries of what software can do.
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
