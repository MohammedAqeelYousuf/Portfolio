import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/profile.jpg';
import background from '../assets/background.jpg'; // Add your background image
import '../styles/style.css';

const Header = () => {
  const name = "Mohammed Aqeel Yousuf";

  return (
    <section
      className="text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 45%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div style={{ backgroundColor: 'transparent', width: '100%', backdropFilter: 'blur(5px)', }}>
        <Container style={{ zIndex: 2 }}>
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
