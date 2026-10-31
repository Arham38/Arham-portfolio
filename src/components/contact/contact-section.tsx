import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactForm } from "./contact-form";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function ContactSection() {
  return (
    <Section id="contact" className="border-b border-border bg-bg-alt">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: 5 cols */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-h2 text-text-primary">Contact</h2>
              <p className="text-body text-sm">
                Feel free to reach out for internship opportunities, project collaborations, or questions about my work.
              </p>
            </div>

            <div className="space-y-3 font-sans text-sm text-text-secondary pt-2">
              <div>
                <span className="text-xs text-text-tertiary block">Email</span>
                <a
                  href="mailto:muhammadarham0372@gmail.com"
                  className="text-text-primary hover:text-accent font-medium transition-colors"
                >
                  muhammadarham0372@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs text-text-tertiary block">Phone / WhatsApp</span>
                <a
                  href="tel:+923459725016"
                  className="text-text-primary hover:text-accent font-medium transition-colors"
                >
                  +92 345 9725016
                </a>
              </div>

              <div className="pt-2 flex items-center gap-4 text-text-tertiary">
                <a
                  href="https://github.com/Arham38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-arham-bhatti-b342062a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 7 cols */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
