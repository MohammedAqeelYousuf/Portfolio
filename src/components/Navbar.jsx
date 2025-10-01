import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => (
  <BootstrapNavbar bg="dark" variant="dark" expand="lg">
    <Container>
      {/* Brand scrolls to top or header section */}
      <BootstrapNavbar.Brand
        style={{ cursor: 'pointer' }}
        onClick={() => scrollToSection('header')}
      >
        Aqeel's Portfolio
      </BootstrapNavbar.Brand>

      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link style={{ cursor: 'pointer' }} onClick={() => scrollToSection('about')}>
            About
          </Nav.Link>
          <Nav.Link style={{ cursor: 'pointer' }} onClick={() => scrollToSection('experience')}>
            Experience
          </Nav.Link>
          <Nav.Link style={{ cursor: 'pointer' }} onClick={() => scrollToSection('projects')}>
            Projects
          </Nav.Link>
          <Nav.Link style={{ cursor: 'pointer' }} onClick={() => scrollToSection('skills')}>
            Skills
          </Nav.Link>
          <Nav.Link style={{ cursor: 'pointer' }} onClick={() => scrollToSection('contact')}>
            Contact
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
);

export default Navbar;
