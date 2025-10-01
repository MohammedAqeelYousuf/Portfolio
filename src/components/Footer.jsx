import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <Container>
      <small>&copy; {new Date().getFullYear()} Mohammed Aqeel Yousuf. All rights reserved.</small>
    </Container>
  </footer>
);

export default Footer;
