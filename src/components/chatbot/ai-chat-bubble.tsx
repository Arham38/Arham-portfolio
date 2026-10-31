"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Sparkles, User } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const KNOWLEDGE_BASE: Array<{ keywords: string[]; answer: string }> = [
  {
    keywords: ["stack", "tech", "technologies", "mern", "framework"],
    answer:
      "Arham specializes in the full-stack MERN & TypeScript ecosystem: React 18, Next.js 14, Node.js, Express, PostgreSQL with Row Level Security (RLS), Supabase, MongoDB, Redis, Docker, Vitest, and Playwright.",
  },
  {
    keywords: ["jab", "leather", "ecommerce", "store", "client"],
    answer:
      "JAB LEATHER is Arham's flagship client project: a custom e-commerce suite featuring a Shopify-style admin dashboard, dual-currency USD/PKR integer arithmetic engine, and PostgreSQL Row-Level Security ensuring zero cross-tenant order leaks across 1,400+ orders.",
  },
  {
    keywords: ["internship", "hire", "job", "available", "opportunity", "work"],
    answer:
      "Yes! Muhammad Arham is actively seeking software engineering internships and junior full-stack roles starting immediately. He is based in Lahore, Pakistan and fully equipped for remote or on-site roles.",
  },
  {
    keywords: ["security", "rls", "rbac", "auth", "jwt"],
    answer:
      "Security is Arham's core differentiator. He enforces PostgreSQL Row Level Security (RLS) policies at the database layer rather than relying on application code, uses HttpOnly SameSite Strict cookies with JWT rotations, and runtime Zod validation.",
  },
  {
    keywords: ["education", "degree", "university", "ucp", "college"],
    answer:
      "Arham is pursuing his Bachelor of Science in Software Engineering (BSSE) at the University of Central Punjab (UCP) in Lahore, expected to graduate in July 2027.",
  },
  {
    keywords: ["contact", "email", "reach", "message", "phone", "whatsapp", "call"],
    answer:
      "You can email Arham directly at muhammadarham0372@gmail.com, reach him on WhatsApp/Phone at +92 345 9725016, connect on LinkedIn (https://www.linkedin.com/in/arham-bhatti-b342062a0/), or submit the interactive form in the Contact section of this page.",
  },
];

export function AIChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! I'm Arham's portfolio assistant. Ask me about his tech stack, client projects, PostgreSQL RLS security, or internship availability!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedAnswer =
        "Muhammad Arham is a Full-Stack MERN engineer specializing in PostgreSQL RLS, high-concurrency Node.js APIs, and automated Playwright testing. Feel free to ask about his projects like JAB LEATHER, CodeCraft LMS, or his internship availability!";

      for (const entry of KNOWLEDGE_BASE) {
        if (entry.keywords.some((k) => lower.includes(k))) {
          matchedAnswer = entry.answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { sender: "bot", text: matchedAnswer }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Bubble */}
      <div className="fixed bottom-6 left-6 z-40">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 shadow-xl transition-all duration-250 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_24px_rgba(108,99,255,0.35)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
            aria-label="Open AI portfolio assistant"
          >
            <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <span className="font-mono text-xs font-medium text-text group-hover:text-accent transition-colors">
              Ask AI
            </span>
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          </button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 flex h-[480px] w-[350px] sm:w-[390px] flex-col rounded-[16px] border border-border bg-surface shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <span className="font-heading font-bold text-xs text-text block">
                  Arham AI Assistant
                </span>
                <span className="font-mono text-[10px] text-success flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Online · Portfolio Knowledge
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-[6px] p-1.5 text-muted hover:text-text hover:bg-surface border border-transparent hover:border-border transition-colors"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "bot" && (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent border border-accent/20">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}

                <div
                  className={`rounded-[10px] p-3 max-w-[85%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-accent text-white rounded-br-none"
                      : "bg-surface-2 border border-border text-text rounded-bl-none font-sans text-xs"
                  }`}
                >
                  {m.text}
                </div>

                {m.sender === "user" && (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border text-muted">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-muted font-mono text-xs pl-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                <span>Arham AI is formulating response...</span>
              </div>
            )}
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 border-t border-border/50 bg-surface flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => handleSend("What is Arham's core stack?")}
              className="rounded-[6px] bg-surface-2 border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted hover:text-accent hover:border-accent/40 transition-colors"
            >
              Tech Stack
            </button>
            <button
              type="button"
              onClick={() => handleSend("Tell me about JAB LEATHER")}
              className="rounded-[6px] bg-surface-2 border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted hover:text-accent hover:border-accent/40 transition-colors"
            >
              JAB LEATHER
            </button>
            <button
              type="button"
              onClick={() => handleSend("Is Arham available for internships?")}
              className="rounded-[6px] bg-surface-2 border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted hover:text-accent hover:border-accent/40 transition-colors"
            >
              Internships?
            </button>
          </div>

          {/* Input Box */}
          <div className="border-t border-border bg-surface-2 p-2.5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Arham's engineering..."
                className="flex-1 rounded-[8px] border border-border bg-surface px-3 py-1.5 font-mono text-xs text-text placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-accent text-white hover:bg-accent-hover transition-colors"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
