import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
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

        {/* Anchor stubs for upcoming phases */}
        <div id="experience" />
        <div id="skills" />
        <div id="about" />
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
