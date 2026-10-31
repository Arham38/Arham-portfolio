"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowDownToLine, Command as CmdIcon, Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ResumeModal } from "@/components/resume/resume-modal";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "GitHub", href: "/#github" },
  { name: "About", href: "/#about" },
  { name: "Notes", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Handle scroll detection for dynamic border & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["projects", "experience", "skills", "github", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile sheet is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.substring(2);
      const elem = document.getElementById(targetId);
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
    }
  };

  const triggerCommandPalette = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true })
    );
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 h-[72px] w-full transition-all duration-250 ease-out",
          scrolled
            ? "border-b border-border bg-bg/85 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-bg/60 backdrop-blur-sm"
        )}
      >
        <Container className="flex h-full items-center justify-between">
          {/* [AB logo] */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-label="Muhammad Arham Portfolio Home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-[10px] border border-border bg-surface font-heading text-base font-bold text-text transition-all duration-250 group-hover:border-accent group-hover:shadow-[0_0_16px_rgba(108,99,255,0.25)]">
              <span className="tracking-tight">AB</span>
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent" />
            </div>
            <span className="hidden font-heading text-sm font-semibold tracking-tight text-text sm:inline-block">
              Arham<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.startsWith("/#") ? link.href.substring(2) : "";
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive
                      ? "text-text"
                      : "text-muted hover:text-text"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavbarIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA & Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={triggerCommandPalette}
              className="flex items-center gap-2 rounded-[8px] border border-border bg-surface-2/80 px-2.5 py-1.5 font-mono text-xs text-muted hover:border-accent/40 hover:text-text transition-colors"
              title="Open Command Palette (Ctrl+K / Cmd+K)"
            >
              <Search className="h-3 w-3" />
              <span className="text-[11px]">Search</span>
              <kbd className="rounded bg-surface px-1.5 py-0.5 text-[10px] text-muted border border-border/70 flex items-center gap-0.5">
                <CmdIcon className="h-2.5 w-2.5" />K
              </kbd>
            </button>

            {/* Resume Viewer Trigger */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setResumeOpen(true)}
              rightIcon={<ArrowDownToLine className="h-3.5 w-3.5" />}
              className="text-xs font-mono"
            >
              Resume
            </Button>

            <div className="h-4 w-px bg-border mx-0.5" />
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={triggerCommandPalette}
              className="rounded-[10px] border border-border bg-surface p-2 text-muted hover:text-text"
              aria-label="Open Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <ThemeToggle className="h-9 w-9 p-2" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-[10px] border border-border bg-surface p-2 text-text hover:border-accent hover:text-accent transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        {/* Mobile Full-Screen Sheet */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 top-[72px] z-40 flex flex-col justify-between bg-bg/98 backdrop-blur-xl px-6 py-8 md:hidden border-t border-border overflow-y-auto"
            >
              <nav className="flex flex-col space-y-3 pt-2">
                {NAV_LINKS.map((link) => {
                  const targetId = link.href.startsWith("/#") ? link.href.substring(2) : "";
                  const isActive = activeSection === targetId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "flex items-center justify-between py-2.5 font-heading text-2xl font-semibold tracking-tight transition-colors border-b border-border/40",
                        isActive
                          ? "text-accent"
                          : "text-text hover:text-accent"
                      )}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-accent" />
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-3 pb-6 pt-6 border-t border-border">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeOpen(true);
                  }}
                  className="w-full justify-center"
                  rightIcon={<ArrowDownToLine className="h-4 w-4" />}
                >
                  View / Download Resume
                </Button>
                <p className="text-center font-mono text-caption text-muted">
                  Muhammad Arham · Full-Stack MERN
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Inline Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}
