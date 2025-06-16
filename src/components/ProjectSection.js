import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import './ProjectSection.css';

const projects = [
  {
    title: 'Personal Blog',
    description: 'A full-featured blog platform built with Django, featuring user authentication, post creation, and rich text editing.',
    github: 'https://github.com/yourusername/django-blog',
    demo: 'https://yourblogdemo.example.com',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a03b4e25-9d8c-406e-94c7-c57ee23b9b2e.png',
  },
  {
    title: 'Task Manager',
    description: 'A React front-end paired with a Flask API backend implementing task creation, tagging, and drag-and-drop organization.',
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://taskmanagerdemo.example.com',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/630e4f3c-6f38-4e1b-9d30-71ba28e7ab53.png',
  },
  {
    title: 'E-commerce Site',
    description: 'An online store built with Django and React, featuring product browsing, search, and secure checkout functionality.',
    github: 'https://github.com/yourusername/ecommerce-site',
    demo: 'https://ecommercedemo.example.com',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41a61a58-1fdf-47ca-87a6-3d3fb9ff0130.png',
  },
    {
    title: 'E-commerce Site',
    description: 'An online store built with Django and React, featuring product browsing, search, and secure checkout functionality.',
    github: 'https://github.com/yourusername/ecommerce-site',
    demo: 'https://ecommercedemo.example.com',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41a61a58-1fdf-47ca-87a6-3d3fb9ff0130.png',
  }
];

export const ProjectSection = () => {
  return (
    <section className="project-section" id="projects" aria-label="Projects Section">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Row className="projects-grid">
          {projects.map(({title, description, github, demo, image}) => (
            <Col key={title} sm={10} md={6} lg={4} className="mb-4">
              <Card className="project-card shadow-lg">
                <Card.Img variant="top" src={image} alt={`${title} project screenshot`} className="project-image" />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <div className="project-links">
                    <Button variant="primary" href={github} target="_blank" rel="noopener" className="me-2">GitHub</Button>
                    <Button variant="outline-primary" href={demo} target="_blank" rel="noopener">Live Demo</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

