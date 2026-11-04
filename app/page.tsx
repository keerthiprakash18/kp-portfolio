import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticleBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import DataLabSection from "./components/DataLabSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <ParticleBackground />
      <Navigation />
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        
        {/* Divider */}
        <div className="container">
          <div className="divider" />
        </div>
        
        <AboutSection />
        
        <div className="container">
          <div className="divider" />
        </div>
        
        <SkillsSection />
        
        <div className="container">
          <div className="divider" />
        </div>
        
        <ProjectsSection />
        
        <div className="container">
          <div className="divider" />
        </div>
        
        <DataLabSection />
        
        <div className="container">
          <div className="divider" />
        </div>
        
        <ExperienceSection />
        
        <div className="container">
          <div className="divider" />
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
      <AIAssistant />
    </>
  );
}
