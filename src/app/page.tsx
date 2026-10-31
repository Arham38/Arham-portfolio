import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-accent">
      {/* Shell: 72px Sticky Translucent Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Phase 1: Above-the-fold Hero */}
        <Hero />

        {/* Anchor stubs for seamless navigation in upcoming phases */}
        <Section id="projects" className="border-t border-border/50 py-16">
          <Container>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="font-mono text-xs">
                #projects
              </Badge>
              <span className="font-mono text-xs text-muted">
                Phase 2: Featured Projects incoming
              </span>
            </div>
          </Container>
        </Section>

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
