"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle2, AlertCircle, RefreshCw, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear inline error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (err: unknown) {
      setStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again later.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
    setErrors({});
  };

  if (status === "success") {
    return (
      <Card className="p-8 sm:p-10 text-center space-y-6 border-accent/40 bg-surface">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 border border-success/30 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-bold text-text">
            Message Delivered!
          </h3>
          <p className="text-body text-sm text-muted max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out. Your transmission was received and I will review and reply within 24 hours.
          </p>
        </div>

        <Button
          variant="ghost"
          size="md"
          onClick={handleReset}
          rightIcon={<RefreshCw className="h-4 w-4" />}
          className="font-mono text-xs"
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8 space-y-6">
      <div className="border-b border-border/60 pb-3">
        <h3 className="font-heading text-xl font-bold text-text">
          Direct Transmission
        </h3>
        <p className="font-mono text-xs text-muted">
          Type-safe & rate-limited delivery endpoint
        </p>
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-[10px] bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold block">Submission Error:</span>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Anti-bot honeypot field (hidden from view) */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="honeypot">Leave this blank</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="block font-mono text-xs font-medium text-text"
          >
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Vance"
            disabled={isSubmitting}
            className={`w-full rounded-[10px] border bg-surface-2 px-4 py-2.5 text-sm text-text placeholder:text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
              errors.name ? "border-red-500/70" : "border-border hover:border-border-bright"
            }`}
          />
          {errors.name && (
            <p className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block font-mono text-xs font-medium text-text"
          >
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            disabled={isSubmitting}
            className={`w-full rounded-[10px] border bg-surface-2 px-4 py-2.5 text-sm text-text placeholder:text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
              errors.email ? "border-red-500/70" : "border-border hover:border-border-bright"
            }`}
          />
          {errors.email && (
            <p className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block font-mono text-xs font-medium text-text"
          >
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, team opportunity, or timeline..."
            disabled={isSubmitting}
            className={`w-full rounded-[10px] border bg-surface-2 px-4 py-2.5 text-sm text-text placeholder:text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y ${
              errors.message ? "border-red-500/70" : "border-border hover:border-border-bright"
            }`}
          />
          {errors.message && (
            <p className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full justify-center font-medium mt-2"
          rightIcon={
            isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )
          }
        >
          {isSubmitting ? "Transmitting..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
