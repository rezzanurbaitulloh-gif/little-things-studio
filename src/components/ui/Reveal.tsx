"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealVariant = "up" | "clip";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  variant?: RevealVariant;
  className?: string;
  as?: "div" | "section" | "figure" | "span" | "li";
}

/**
 * IntersectionObserver-based scroll reveal.
 * Adds `is-visible` once the element enters the viewport; CSS in globals.css
 * owns the actual transition and fully disables it under reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Legacy fallback — defer so the effect body stays render-free.
      queueMicrotask(() => setVisible(true));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(variant === "clip" ? "reveal-clip" : "reveal", visible && "is-visible", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
