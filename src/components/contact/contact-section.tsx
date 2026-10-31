"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  Copy,
  Check,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const emailAddress = "arhambhatti38@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setShowToast(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);

      setTimeout(() => {
        setShowToast(false);
      }, 3500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Section id="contact" className="border-t border-border/60 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-[10px] border border-accent/40 bg-surface px-4 py-3 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-250">
          <Check className="h-4 w-4 text-success" />
          <span className="font-mono text-xs text-text">
            Email copied to clipboard!
          </span>
        </div>
      )}

      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <Reveal delay={0.05}>
            <Badge variant="accent">Get In Touch</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-h2 tracking-tight">Let&apos;s build something.</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-body text-muted max-w-2xl leading-relaxed">
              Available for software engineering internships, junior full-stack opportunities, and select freelance client systems.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal delay={0.15}>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-text">
                  Direct Inquiries
                </h3>
                <p className="text-body text-sm text-muted leading-relaxed">
                  Whether you have an internship position, a complex backend architectural hurdle, or want to discuss full-stack MERN best practices, my inbox is always open.
                </p>
              </div>
            </Reveal>

            {/* Email Copy Card */}
            <Reveal delay={0.2}>
              <div className="rounded-[14px] border border-border bg-surface p-5 space-y-3 hover:border-accent/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    Direct Email
                  </span>
                  <span className="text-[10px] text-success">Verified Active</span>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-[8px] bg-surface-2 p-3 border border-border/60">
                  <span className="font-mono text-xs sm:text-sm text-text select-all truncate">
                    {emailAddress}
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-[6px] bg-surface px-3 py-1.5 font-mono text-xs text-muted hover:text-accent hover:border-accent/40 border border-border transition-all active:scale-95"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-success" />
                        <span className="text-success font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Social Channels */}
            <Reveal delay={0.25}>
              <div className="space-y-3">
                <span className="font-mono text-xs text-muted uppercase tracking-wider block">
                  Connect & Inspect
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Arham38"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-[10px] bg-surface border border-border hover:border-accent/40 hover:bg-surface-2 transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <GithubIcon className="h-4 w-4 text-text group-hover:text-accent transition-colors" />
                      <span className="font-mono text-xs font-medium text-text">GitHub</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/arham-bhatti-b342062a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-[10px] bg-surface border border-border hover:border-accent/40 hover:bg-surface-2 transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="h-4 w-4 text-text group-hover:text-accent transition-colors" />
                      <span className="font-mono text-xs font-medium text-text">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Response Time Guarantee Note */}
            <Reveal delay={0.3}>
              <div className="flex items-center gap-2.5 rounded-[10px] bg-surface-2/60 border border-border/60 p-3 text-xs font-mono text-muted">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                <span>Response time: typically within 24 hours (PKT / UTC+5).</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
