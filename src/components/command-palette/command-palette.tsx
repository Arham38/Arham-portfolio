"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Search,
  FileText,
  FolderGit2,
  Terminal,
  Mail,
  ArrowDownToLine,
  Sun,
  Moon,
  ExternalLink,
  Laptop,
} from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // Listen for Ctrl+K or Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigateTo = (path: string) => {
    setOpen(false);
    if (path.startsWith("#")) {
      const id = path.substring(1);
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${path}`);
      }
    } else {
      router.push(path);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="fixed inset-0 -z-10"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className="w-full max-w-xl overflow-hidden rounded-[16px] border border-border bg-surface shadow-2xl">
        <Command className="w-full bg-transparent text-text">
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
            <Search className="h-4 w-4 text-muted shrink-0" />
            <Command.Input
              autoFocus
              placeholder="Type a command, project, or section..."
              className="w-full bg-transparent text-sm text-text placeholder:text-muted/70 focus:outline-none font-mono"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted border border-border">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-[360px] overflow-y-auto p-2 font-mono text-xs">
            <Command.Empty className="py-8 text-center text-xs text-muted">
              No matching commands or destinations found.
            </Command.Empty>

            {/* Navigation Group */}
            <Command.Group heading="Sections" className="text-muted text-[10px] uppercase tracking-wider px-2 py-1.5">
              <Command.Item
                onSelect={() => navigateTo("#projects")}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <FolderGit2 className="h-3.5 w-3.5 text-accent" />
                <span>Selected Work</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("#experience")}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <Terminal className="h-3.5 w-3.5 text-accent" />
                <span>Experience & Education</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("#skills")}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <Laptop className="h-3.5 w-3.5 text-accent" />
                <span>Technical Arsenal</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("#github")}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <FolderGit2 className="h-3.5 w-3.5 text-accent" />
                <span>GitHub Velocity</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("#about")}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <FileText className="h-3.5 w-3.5 text-accent" />
                <span>About Muhammad Arham</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("#contact")}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-accent" />
                <span>Contact Direct Inquiries</span>
              </Command.Item>
            </Command.Group>

            {/* Projects Group */}
            <Command.Group heading="Case Studies" className="text-muted text-[10px] uppercase tracking-wider px-2 py-1.5 mt-2">
              <Command.Item
                onSelect={() => navigateTo("/projects/jab-leather")}
                className="flex items-center justify-between rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <span>JAB LEATHER (E-Commerce & RLS)</span>
                <span className="text-[10px] text-muted">Featured</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("/projects/codecraft-lms")}
                className="flex items-center justify-between rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <span>CodeCraft LMS (Docker Sandbox)</span>
                <span className="text-[10px] text-muted">EdTech</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("/projects/sme-erp")}
                className="flex items-center justify-between rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <span>SME ERP (Multi-Branch Ledger)</span>
                <span className="text-[10px] text-muted">FinTech</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("/projects/authentix-ai")}
                className="flex items-center justify-between rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <span>AuthentixAI (Deepfake Detection)</span>
                <span className="text-[10px] text-amber-400">In Progress</span>
              </Command.Item>
            </Command.Group>

            {/* Engineering Notes Group */}
            <Command.Group heading="Engineering Notes (/blog)" className="text-muted text-[10px] uppercase tracking-wider px-2 py-1.5 mt-2">
              <Command.Item
                onSelect={() => navigateTo("/blog")}
                className="flex items-center justify-between rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <span>All Architecture Notes</span>
                <ExternalLink className="h-3 w-3 text-muted" />
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("/blog/postgresql-rls-multitenancy")}
                className="flex items-center justify-between rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <span>PostgreSQL Row Level Security</span>
                <span className="text-[10px] text-muted">6 min</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("/blog/currency-engine-precision")}
                className="flex items-center justify-between rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <span>Currency Integer Arithmetic</span>
                <span className="text-[10px] text-muted">5 min</span>
              </Command.Item>
            </Command.Group>

            {/* Quick Actions Group */}
            <Command.Group heading="Quick Actions" className="text-muted text-[10px] uppercase tracking-wider px-2 py-1.5 mt-2">
              <Command.Item
                onSelect={() => {
                  navigator.clipboard.writeText("arhambhatti38@gmail.com");
                  setOpen(false);
                }}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-accent" />
                <span>Copy Direct Email (arhambhatti38@gmail.com)</span>
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  window.open("/resume.pdf", "_blank");
                  setOpen(false);
                }}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                <ArrowDownToLine className="h-3.5 w-3.5 text-accent" />
                <span>Open / Download Resume PDF</span>
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setOpen(false);
                }}
                className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-xs text-text hover:bg-surface-2 hover:text-accent cursor-pointer transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-3.5 w-3.5 text-accent" />
                ) : (
                  <Moon className="h-3.5 w-3.5 text-accent" />
                )}
                <span>Toggle Theme Mode (Current: {theme || "dark"})</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          {/* Footer Helper */}
          <div className="flex items-center justify-between border-t border-border bg-surface-2 px-4 py-2 font-mono text-[11px] text-muted">
            <span>Use ↑↓ to navigate, Enter to select</span>
            <span>Esc to close</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
