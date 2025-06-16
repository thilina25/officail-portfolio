import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg'; // Adjust the path as necessary
import { Col } from 'react-bootstrap';
import './ContactSection.css';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [validated, setValidated] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(false);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);

    // For now, simulate submission success
    setTimeout(() => {
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setValidated(false);
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact Section">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-description">
          I’d love to hear from you! Whether you want to discuss a project, collaborate, or just say hello, feel free to reach out.
        </p>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
          <Form.Group controlId="contactName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              required
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="contactEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              required
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="contactMessage" className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              required
              as="textarea"
              rows={4}
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a message.
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="primary" size="lg" className='btn-submit'>
            Send Message
          </Button>
        </Form>

        {submitSuccess && (
          <Alert variant="success" className="mt-4" role="alert">
            Thank you! Your message has been sent successfully.
          </Alert>
        )}

        {submitError && (
          <Alert variant="danger" className="mt-4" role="alert">
            Oops! Something went wrong. Please try again later.
          </Alert>
        )}
        
      </Container>
    </section>
  );
};
