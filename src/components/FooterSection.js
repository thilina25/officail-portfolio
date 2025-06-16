import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './FooterSection.css';

export const FooterSection = () => {
  return (
    <footer className="footer-section" role="contentinfo">
      <Container>
        <Row className="footer-top">
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <h3 className="footer-title">About Me</h3>
            <p>
              Passionate Python Full-Stack Developer building clean and responsive web applications using modern technologies.
            </p>
          </Col>
          <Col md={4} sm={6} className="mb-4 mb-sm-0">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links" aria-label="Footer Quick Links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} sm={6}>
            <h3 className="footer-title">Connect With Me</h3>
            <div className="social-icons" role="list" aria-label="Social Media Links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="mailto:your.email@example.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col>
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
