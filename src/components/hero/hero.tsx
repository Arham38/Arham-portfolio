"use client";

import React from "react";
import { ArrowRight, ArrowDownToLine, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ProjectTiltCard } from "./project-tilt-card";

export function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("projects");
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section className="pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <Container>
        {/* Main Hero 2-Column Grid (55% / 45%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (55% -> 7 cols on 12-col grid) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <Reveal delay={0.05}>
              {/* Status Pill: Open to Internships · Lahore */}
              <Badge variant="success" dot pulse className="py-1.5 px-3.5 text-xs sm:text-[13px]">
                Open to Internships · Lahore
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-hero text-text tracking-tight font-heading">
                Muhammad Arham
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-body md:text-xl text-muted max-w-xl leading-relaxed">
                I build secure, scalable full-stack web apps with the MERN stack.
              </p>
            </Reveal>

            {/* CTAs (Stack vertically on mobile, full-width) */}
            <Reveal delay={0.2} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={scrollToProjects}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full sm:w-auto justify-center"
                >
                  View Projects
                </Button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    rightIcon={<ArrowDownToLine className="h-4 w-4" />}
                    className="w-full sm:w-auto justify-center font-mono text-sm"
                  >
                    Download CV
                  </Button>
                </a>
              </div>
            </Reveal>

            {/* Social Icons & Links */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-muted">
                <a
                  href="https://github.com/Arham38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1.5 py-1 -ml-1.5"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span className="font-mono text-xs">GitHub</span>
                </a>
                <span className="text-border" aria-hidden="true">·</span>
                <a
                  href="https://www.linkedin.com/in/arham-bhatti-b342062a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1.5 py-1"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span className="font-mono text-xs">LinkedIn</span>
                </a>
                <span className="text-border" aria-hidden="true">·</span>
                <a
                  href="mailto:muhammadarham0372@gmail.com"
                  className="flex items-center gap-2 hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1.5 py-1"
                  aria-label="Send Email"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-mono text-xs">Email</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column (45% -> 5 cols on 12-col grid) */}
          <div className="lg:col-span-5 w-full">
            <Reveal delay={0.2}>
              <ProjectTiltCard />
            </Reveal>
          </div>
        </div>

        {/* Proof Strip Under CTAs & Grid */}
        <Reveal delay={0.3} className="mt-12 sm:mt-16 lg:mt-20">
          <div className="rounded-[12px] border border-border bg-surface/70 backdrop-blur-sm p-4 sm:p-5 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* Metric 1 */}
              <div className="flex flex-col items-center md:items-start md:px-6 first:pl-0 pt-2 md:pt-0">
                <span className="font-mono text-xs text-muted">Core Build</span>
                <span className="font-mono text-sm sm:text-base font-semibold text-text mt-1">
                  14-category store
                </span>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col items-center md:items-start md:px-6 pt-3 md:pt-0">
                <span className="font-mono text-xs text-muted">Backend Architecture</span>
                <span className="font-mono text-sm sm:text-base font-semibold text-text mt-1">
                  40+ APIs
                </span>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col items-center md:items-start md:px-6 pt-3 md:pt-0">
                <span className="font-mono text-xs text-muted">Security Standard</span>
                <span className="font-mono text-sm sm:text-base font-semibold text-text mt-1">
                  RBAC + RLS
                </span>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col items-center md:items-start md:px-6 last:pr-0 pt-3 md:pt-0">
                <span className="font-mono text-xs text-muted">Automated QA</span>
                <span className="font-mono text-sm sm:text-base font-semibold text-text mt-1">
                  Jest/Playwright tested
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
