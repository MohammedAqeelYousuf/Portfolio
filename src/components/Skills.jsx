import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { skillData } from '../Data';
import '../styles/style.css';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleOpenModal = (skill) => {
    setSelectedSkill(skill);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
    setShowModal(false);
  };

  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <Container className="fade-in"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
          animation: 'fadeInUp 1s ease-in-out',
        }}>
        <h2 className="text-center mb-4" style={{ paddingTop: '2rem', paddingBottom: '1rem', color:'black' }}>Skills</h2>
        <Row>
          {skillData.map((skill, index) => (
            <Col
              md={6}
              lg={4}
              className="mb-4 text-center fade-in"
              key={index}
            >
              <Card
                className="bg-dark text-white h-100 shadow-lg p-3"
                onClick={() => handleOpenModal(skill)}
                style={{ cursor: 'pointer', borderRadius: '15px' }}
              >
               
                <div
                  className="circular-skill hover-spin"
                  style={{ '--value': skill.level }}
                >
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                </div>
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                  <Card.Text className="fst-italic">Click to view fluency</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        {selectedSkill && (
          <>
            <Modal.Header closeButton className="bg-dark text-white">
              <Modal.Title>{selectedSkill.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white text-center">
              <div
                className="circular-skill big hover-spin"
                style={{ '--value': selectedSkill.level }}
              >
                <img
                  src={selectedSkill.logo}
                  alt={selectedSkill.name}
                  className="skill-logo"
                />
              </div>
              <h6 className="mt-3">Fluency Level: {selectedSkill.level}%</h6>
            </Modal.Body>
            <Modal.Footer className="bg-dark">
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Skills;
