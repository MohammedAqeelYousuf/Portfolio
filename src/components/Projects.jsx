import React, { useState, useEffect } from "react";
import { Card, Button, Col, Row, Container, Modal } from "react-bootstrap";
import { projectData } from '../Data.jsx';
import "../styles/style.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible'); // ensure it resets on scroll up
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="bg-dark text-dark py-5">
      <Container
        className="fade-in"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
          animation: 'fadeInUp 1s ease-in-out',
        }}
      >
        <h2 className="text-center mb-4" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Projects</h2>
        <Row>
          {projectData.map((project, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <Card
                className="h-100 shadow-sm bg-dark text-light"
                onClick={() => handleOpenModal(project)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.shortDesc}</Card.Text>
                  <div className="mt-auto text-muted" style={{ fontSize: '14px' }}>
                    Click to view more
                  </div>
                  <div className="mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="light"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent opening the modal
                          window.open(project.link, "_blank");
                        }}
                      >
                        View Project
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedProject && (
          <Modal show onHide={handleCloseModal} centered>
            <Modal.Header closeButton className="bg-dark text-light">
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-black text-white" style={{ textAlign: 'justify' }}>
              <p style={{ whiteSpace: 'pre-wrap' }}>{selectedProject.fullDesc}</p>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light">
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Visit Project</Button>
                </a>
              )}
              <Button variant="outline-light" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </section>
  );
};

export default Projects;
