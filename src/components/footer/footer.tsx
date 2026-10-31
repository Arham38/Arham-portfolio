import React from "react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-text-tertiary">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
          <span>© {new Date().getFullYear()} Muhammad Arham. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-text-primary transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-text-primary transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
