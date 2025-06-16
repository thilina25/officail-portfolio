import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutMeSection.css';
import profilePic from '../assets/img/profile-pic.svg'; // Replace with your actual profile image path

export const AboutMeSection = () => {
  return (
    <section className="aboutme-section" id="about" aria-label="About Me Section">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="mb-4 mb-md-0">
            <Image
              src={profilePic}
              alt="Profile photo of [Your Name]"
              roundedCircle
              className="profile-image"
              fluid
            />
          </Col>
          <Col md={8}>
            <p className="aboutme-text">
              Hello! I’m [Your Name], a passionate Python Full-Stack Developer with experience building dynamic and responsive web applications. I specialize in both front-end and back-end development using modern technologies like React, Django, and Flask.
            </p>
            <p className="aboutme-text">
              I enjoy solving complex problems and continuously learning new technologies to deliver robust and scalable solutions. When I’m not coding, I love exploring new design trends, contributing to open source, and collaborating on innovative projects.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
