import { NavBar } from './components/NavBar';
import { MainBanner } from './components/MainBanner'; 
import { SkillsSection } from './components/SkillsSection';
import { ProjectSection } from './components/ProjectSection';
import { EducationSection } from './components/EducationSection';
import { CertificatesSection } from './components/CertificateSection';
import { ContactSection } from './components/ContactSection';
import { AboutMeSection } from './components/AboutMeSection';
import { FooterSection } from './components/FooterSection';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:8000/api/projects/')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

  return (

    <div className="App">
      <NavBar />
      <MainBanner />
      <SkillsSection />
      <ProjectSection />
      <EducationSection />
      <CertificatesSection />
      <AboutMeSection />
      <ContactSection />
      <FooterSection />
      <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      </div>
    </div>
  );
}

export default App;
