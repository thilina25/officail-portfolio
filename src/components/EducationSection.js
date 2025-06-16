import React from 'react';
import { Container } from 'react-bootstrap';
import './EducationSection.css';

const educationData = [
  {
    institution: 'The Open University of Sri Lanka',
    degree: 'Undergraduate of Bachelor of Software Engineering',
    period: '2016 - 2020',
    description: 'Focused on software engineering, data structures, and algorithms. Graduated with honors.',
  },
  {
    institution: 'Example Technical Institute',
    degree: 'Full Stack Web Development Bootcamp',
    period: '2021',
    description: 'Comprehensive program covering front-end and back-end web technologies including React and Django.',
  },
  {
    institution: 'The Open University of Sri Lanka',
    degree: 'Undergraduate of Bachelor of Software Engineering',
    period: '2016 - 2020',
    description: 'Focused on software engineering, data structures, and algorithms. Graduated with honors.',
  },
  {
    institution: 'Example Technical Institute',
    degree: 'Full Stack Web Development Bootcamp',
    period: '2021',
    description: 'Comprehensive program covering front-end and back-end web technologies including React and Django.',
  }
];

export const EducationSection = () => {
  return (
    <section className="education-section" id="education" aria-label="Education Section">
      <Container>
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationData.map(({ institution, degree, period, description }, index) => (
            <div key={index} className="education-item" tabIndex="0">
              <h3 className="education-institution">{institution}</h3>
              <p className="education-degree">{degree}</p>
              <span className="education-period">{period}</span>
              <p className="education-description">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
