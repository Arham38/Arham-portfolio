"use client";

import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.3,
  className,
  yOffset = 16,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: yOffset }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
