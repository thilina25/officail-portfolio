import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './CertificateSection.css'; // Assuming you have a CSS file for styling

const certificates = [
  {
    title: 'Introduction to Python Programming',
    issuer: 'SoloLearn',
    date: 'June 2023',
    image: 'https://api2.sololearn.com/v2/certificates/CC-VMHYTXCJ/image/png?t=638128215392733060',
    certificateUrl: 'https://www.sololearn.com/certificates/CC-VMHYTXCJ'
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'April 2023',
    image: 'https://placehold.co/400x250/4f46e5/ffffff?text=React+Complete+Guide',
    certificateUrl: 'https://www.udemy.com/certificate/ABC456'
  },
  {
    title: 'Python for Everybody',
    issuer: 'edX',
    date: 'January 2023',
    image: 'https://placehold.co/400x250/8b5cf6/ffffff?text=Python+for+Everybody',
    certificateUrl: 'https://courses.edx.org/certificates/DEF789'
  }
];

export const CertificatesSection = () => {
  return (
    <section className="certificates-section" id="certificates" aria-label="Certificates Section">
      <Container>
        <h2 className="section-title">Online Course Certificates</h2>
        <Row className="certificates-grid">
          {certificates.map(({title, issuer, date, image, certificateUrl}) => (
            <Col key={title} xs={12} md={6} lg={4} className="mb-4">
              <Card className="certificate-card h-100 shadow-sm">
                <a href={certificateUrl} target="_blank" rel="noopener noreferrer" aria-label={`View certificate for ${title} on ${issuer}`}>
                  <Card.Img variant="top" src={image} alt={`Certificate for ${title} by ${issuer}`} className="certificate-image" />
                </a>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{issuer}</Card.Subtitle>
                  <Card.Text className="certificate-date">{date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
