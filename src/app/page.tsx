import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { AboutSection } from "@/components/about/about-section";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-accent">
      {/* Shell: 72px Sticky Translucent Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Phase 1: Above-the-fold Hero */}
        <Hero />

        {/* Phase 2: Selected Work Projects Section */}
        <ProjectsSection />

        {/* Phase 3: Experience & Education Timeline */}
        <ExperienceSection />

        {/* Phase 3: Skills 3x2 Tagged Cards */}
        <SkillsSection />

        {/* Phase 3: About Me 2-Column Section */}
        <AboutSection />

        {/* Anchor stub for Phase 4: Contact */}
        <div id="contact" />
      </main>

      {/* Minimal clean shell footer */}
      <footer className="border-t border-border py-8 text-center text-xs font-mono text-muted">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>© {new Date().getFullYear()} Muhammad Arham. All rights reserved.</span>
            <span>MERN Stack · Lahore, Pakistan</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
