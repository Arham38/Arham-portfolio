"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("projects");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section className="py-16 md:py-24 border-b border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="md:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <Badge variant="status" dot>
              Open to Internships · Lahore
            </Badge>

            {/* H1: 48px semibold */}
            <h1 className="text-hero text-text-primary">
              Muhammad Arham
            </h1>

            {/* Subtitle */}
            <p className="text-body max-w-lg text-text-secondary">
              MERN Stack Developer building secure full-stack web apps.
            </p>

            {/* CTAs: View Projects (primary) + Download CV (outline) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md">
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2 text-text-tertiary">
              <a
                href="https://github.com/Arham38"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-arham-bhatti-b342062a0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>

              <a
                href="mailto:muhammadarham0372@gmail.com"
                className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Rounded Profile Photo placeholder /public/me.jpg */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[16px] border border-border overflow-hidden bg-surface-2">
              <Image
                src="/me.jpg"
                alt="Muhammad Arham"
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
