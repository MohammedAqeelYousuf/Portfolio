import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Modal, Button } from 'react-bootstrap';
import { experiences } from '../Data';
import '../styles/style.css';

const Experience = () => {
  const [show, setShow] = useState(false);
  const [activeExp, setActiveExp] = useState(null);

  const handleShow = (exp) => {
    setActiveExp(exp);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="bg-dark text-dark py-5">
      <Container className="fade-in" style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
          animation: 'fadeInUp 1s ease-in-out',
        }}>
        <h2 className="text-center mb-4" style={{ paddingTop: '2rem', paddingBottom:"1rem"}}>Experience</h2>
        <Row>
          {experiences.map((exp, idx) => (
            <Col md={6} key={idx} className="mb-4">
              <Card
                className="h-100 shadow-sm bg-dark text-light"
                onClick={() => handleShow(exp)}
                style={{ cursor: 'pointer' }}
              >
                {exp.image && (
                  <Card.Img
                    variant="top"
                    src={exp.image}
                    alt={exp.title}
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: '0.5rem',
                      borderTopRightRadius: '0.5rem',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Text>{exp.shortDesc}</Card.Text>
                  <Card.Text><b>{exp.time}</b></Card.Text>
                  <Card.Text className="text-muted" style={{ fontSize: '14px' }}>Click to view more</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{activeExp?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>{activeExp?.details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Experience;
