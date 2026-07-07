import { CustomCursor } from "./components/CustomCursor";
import { ParticleBackground } from "./components/ParticleBackground";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { BackToTop } from "./components/BackToTop";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactFooter } from "./components/ContactFooter";
import { useScrollSpy } from "./hooks/useScrollSpy";

const SECTION_IDS = ["work", "services", "about", "contact"];

function App() {
  const { activeSection, progress } = useScrollSpy(SECTION_IDS);

  return (
    <>
      <ScrollProgressBar progress={progress} />
      <CustomCursor />
      <ParticleBackground />

      <Navbar activeSection={activeSection} />
      <Hero />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ContactFooter />

      <BackToTop visible={progress > 5} />
    </>
  );
}

export default App;
