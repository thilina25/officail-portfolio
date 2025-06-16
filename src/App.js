import { NavBar } from './components/NavBar';
import { MainBanner } from './components/MainBanner'; 
import { SkillsSection } from './components/SkillsSection';
import { ProjectSection } from './components/ProjectSection';
import { EducationSection } from './components/EducationSection';
import { CertificatesSection } from './components/CertificateSection';
import { ContactSection } from './components/ContactSection';
import { AboutMeSection } from './components/AboutMeSection';
import { FooterSection } from './components/FooterSection';
import React from 'react';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
