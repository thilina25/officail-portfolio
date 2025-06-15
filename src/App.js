import { NavBar } from './components/NavBar';
import { MainBanner } from './components/MainBanner'; 
import { SkillsSection } from './components/SkillsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainBanner />
      <SkillsSection />
      {/* Add other sections like Projects, Education, Contact, etc. */}
      <section id="projects">
        <h2>Projects</h2>
        {/* Add your projects here */}
      </section>
    </div>
  );
}

export default App;
