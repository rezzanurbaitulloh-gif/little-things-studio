"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export interface HeadlineLine {
  text: string;
  className?: string;
}

/**
 * Hero headline with masked-line stagger on first paint.
 * Gracefully static under reduced motion (handled in globals.css).
 */
export function AnimatedHeadline({
  lines,
  className,
  as: Tag = "h1",
}: {
  lines: HeadlineLine[];
  className?: string;
  as?: "h1" | "h2" | "p";
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className={cn("line-mask", visible && "is-visible")}>
          <span
            className={line.className}
            style={{ ["--reveal-delay" as string]: `${120 + i * 160}ms` }}
          >
            {line.text}
          </span>
        </span>
      ))}
    </Tag>
  );
}
