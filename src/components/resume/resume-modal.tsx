"use client";

import React, { useState } from "react";
import { X, ArrowDownToLine, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-bg/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex flex-col h-[90vh] w-full max-w-4xl rounded-[16px] border border-border bg-surface shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-border bg-surface-2 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-surface border border-border text-accent">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-text">
                Muhammad Arham — Resume
              </h3>
              <span className="font-mono text-[11px] text-muted">
                Software Engineering · BSSE @ UCP
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Muhammad_Arham_Resume.pdf"
              className="inline-flex"
            >
              <Button
                variant="primary"
                size="sm"
                rightIcon={<ArrowDownToLine className="h-3.5 w-3.5" />}
                className="font-mono text-xs"
              >
                Download PDF
              </Button>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ExternalLink className="h-3.5 w-3.5" />}
                className="font-mono text-xs hidden sm:inline-flex"
              >
                New Tab
              </Button>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="rounded-[8px] p-2 text-muted hover:text-text hover:bg-surface border border-transparent hover:border-border transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full bg-[#0B0D12] relative overflow-hidden flex flex-col">
          <iframe
            src="/resume.pdf#view=FitH&toolbar=1"
            className="w-full h-full border-0"
            title="Muhammad Arham Resume"
          />

          {/* Fallback info bar */}
          <div className="bg-surface-2 border-t border-border px-4 py-2.5 flex items-center justify-between text-xs font-mono text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              <span>Verified PDF document format</span>
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  window.location.origin + "/resume.pdf"
                );
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="hover:text-accent underline text-[11px]"
            >
              {copied ? "Link Copied!" : "Copy Share Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
