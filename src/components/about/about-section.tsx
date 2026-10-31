"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { MapPin, GraduationCap, Clock, Sparkles } from "lucide-react";
import { AboutPortrait } from "./about-portrait";

export function AboutSection() {
  return (
    <Section id="about" className="border-t border-border/60">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <Reveal delay={0.05}>
            <Badge variant="accent">Background</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-h2 tracking-tight">About Me</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-body text-muted max-w-2xl leading-relaxed">
              Engineering philosophy, core competencies, and career trajectory.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Square Photo with Accent Border */}
          <div className="lg:col-span-5 w-full">
            <Reveal delay={0.15}>
              <AboutPortrait />
            </Reveal>
          </div>

          {/* Right Column: 3 Paragraphs + Quick Facts */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.2}>
              <div className="space-y-4 text-body text-muted leading-relaxed">
                {/* Paragraph 1: Who you are */}
                <p>
                  I’m <span className="text-text font-semibold">Muhammad Arham</span>, a full-stack engineer and software engineering student based in Lahore, Pakistan. I build robust, data-intensive web applications with the MERN stack and modern TypeScript ecosystems, focusing on end-to-end reliability from database transactions to responsive customer interfaces.
                </p>

                {/* Paragraph 2: What you’re good at */}
                <p>
                  My core technical differentiator is <span className="text-text font-semibold">security and defensive architecture</span>. Rather than treating security as an afterthought, I engineer solutions with PostgreSQL Row-Level Security (RLS) policies, strict role-based access control (RBAC), and automated testing suites via Vitest and Playwright to guarantee that multi-tenant boundaries and financial operations cannot be breached.
                </p>

                {/* Paragraph 3: What you’re looking for */}
                <p>
                  I’m actively seeking <span className="text-accent font-medium">software engineering internships and junior full-stack roles</span> where I can bring my disciplined development standards, deep curiosity for scalable systems, and production experience to high-performing product engineering teams.
                </p>
              </div>
            </Reveal>

            {/* 3 Quick Facts Under Text */}
            <Reveal delay={0.25} className="pt-4 border-t border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Fact 1: Location */}
                <div className="rounded-[12px] border border-border bg-surface p-4 space-y-1 hover:border-accent/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-accent text-xs font-mono">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Location</span>
                  </div>
                  <div className="font-heading font-semibold text-sm text-text">
                    Lahore, PK
                  </div>
                  <p className="font-mono text-[11px] text-muted">
                    PKT · UTC+5
                  </p>
                </div>

                {/* Fact 2: Education */}
                <div className="rounded-[12px] border border-border bg-surface p-4 space-y-1 hover:border-accent/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-accent text-xs font-mono">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>Education</span>
                  </div>
                  <div className="font-heading font-semibold text-sm text-text">
                    BSSE @ UCP
                  </div>
                  <p className="font-mono text-[11px] text-muted">
                    Graduating Jul 2027
                  </p>
                </div>

                {/* Fact 3: Availability */}
                <div className="rounded-[12px] border border-border bg-surface p-4 space-y-1 hover:border-accent/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-success text-xs font-mono">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Availability</span>
                  </div>
                  <div className="font-heading font-semibold text-sm text-text">
                    Internships & Roles
                  </div>
                  <p className="font-mono text-[11px] text-success">
                    Immediate Start
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Personal Mantra / Quality Note */}
            <Reveal delay={0.3}>
              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-muted">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>Zero fluff, zero bloated dependencies, 100% typed contracts.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
