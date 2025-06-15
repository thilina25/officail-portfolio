import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './SkillsSection.css';

const skillsData = [
  { name: 'Python', percentage: 90 },
  { name: 'Django', percentage: 85 },
  { name: 'Java', percentage: 80 },
  { name: 'JavaScript', percentage: 88 },
  { name: 'React', percentage: 85 },
  { name: 'PHP', percentage: 80 },
  { name: 'MySQL', percentage: 75 },
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 90 },
  { name: 'React Native', percentage: 80 }
];

function CircularProgress({percentage, name, startAnimation}) {
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = startAnimation
    ? circumference - (percentage / 100) * circumference
    : circumference;

  return (
    <div className="skill-circle" role="listitem" tabIndex="0" aria-label={`${name} skill proficiency ${percentage} percent`}>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circle-svg"
      >
        <circle
          stroke="#660033"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#E2725B"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          className="progress-ring-circle"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="progress-text"
        >
          {`${percentage}%`}
        </text>
      </svg>
      <p className="skill-label">{name}</p>
    </div>
  );
}

export const SkillsSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
          }
        });
      }, { threshold: 0.4 }
    );
    if(ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" aria-label="Skills Section" ref={ref}>
      <Container>
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid" role="list">
          {skillsData.map((skill) => (
            <CircularProgress
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              startAnimation={startAnimation}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
