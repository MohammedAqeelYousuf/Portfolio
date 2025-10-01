import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/profile.jpg';
import background from '../assets/background.jpg';
import '../styles/style.css';

const Header = () => {
  const name = "Mohammed Aqeel Yousuf";

  return (
    <section
      className="text-white d-flex align-items-center fade-in"
      style={{
        position: 'relative',
        height: '100vh',
        borderRadius: '15px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '80% center',
          filter: 'blur(8px)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          transform: 'scale(1.1)',
        }}
      />

      <div style={{ backgroundColor: 'transparent', width: '100%', zIndex: 2, position: 'relative' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start py-5">
              <h1 className="animated-name fw-bold display-6">Hello, I'm</h1>
              <h1 className="animated-name fw-bold display-6">
                {name.split('').map((char, index) => (
                  <span
                    key={index}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    className={`letter${char === ' ' ? ' space' : ''}`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h1>
              <p className="role-highlight mt-3">
                Programmer Analyst Trainee <span>@Cognizant</span>
              </p>
            </Col>

            <Col md={6} className="text-center">
              <img
                src={profile}
                alt="profile"
                className="img-fluid rounded-circle shadow-lg"
                style={{
                  width: '400px',
                  height: '670px',
                  objectFit: 'cover',
                  marginRight: '-150px',
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Header;
