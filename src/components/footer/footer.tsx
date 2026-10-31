"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail, ArrowDownToLine, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
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
    <footer className="border-t border-border bg-surface/40 pt-16 pb-12 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          {/* Brand & Value Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-border bg-surface font-heading font-bold text-sm text-text">
                AB
              </div>
              <span className="font-heading font-bold text-base text-text">
                Muhammad Arham<span className="text-accent">.</span>
              </span>
            </div>

            <p className="text-body text-xs sm:text-sm text-muted max-w-sm leading-relaxed">
              Full-Stack MERN Software Engineer specializing in security-first architectures, PostgreSQL Row-Level Security, and automated test harnesses.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span>Available for Internships · Lahore, PK</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs font-semibold text-text uppercase tracking-wider block">
              Navigation
            </span>

            <ul className="grid grid-cols-2 gap-2 text-xs font-mono text-muted">
              <li>
                <a
                  href="#projects"
                  onClick={(e) => scrollTo(e, "projects")}
                  className="hover:text-accent transition-colors"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => scrollTo(e, "experience")}
                  className="hover:text-accent transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => scrollTo(e, "skills")}
                  className="hover:text-accent transition-colors"
                >
                  Competencies
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollTo(e, "about")}
                  className="hover:text-accent transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, "contact")}
                  className="hover:text-accent transition-colors"
                >
                  Contact Form
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <span>Resume PDF</span>
                  <ArrowDownToLine className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* External Social Profiles */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-semibold text-text uppercase tracking-wider block">
              Profiles
            </span>

            <div className="space-y-2 text-xs font-mono text-muted">
              <a
                href="https://github.com/Arham38"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>github.com/Arham38</span>
                <ArrowUpRight className="h-3 w-3 ml-auto text-muted/60" />
              </a>

              <a
                href="https://www.linkedin.com/in/arham-bhatti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>linkedin.com/in/arham-bhatti</span>
                <ArrowUpRight className="h-3 w-3 ml-auto text-muted/60" />
              </a>

              <a
                href="mailto:arhambhatti38@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>arhambhatti38@gmail.com</span>
                <ArrowUpRight className="h-3 w-3 ml-auto text-muted/60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <span>© 2026 Muhammad Arham. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Built with Next.js 14 · Tailwind · Framer Motion</span>
            <span className="text-border">·</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-accent hover:underline"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
