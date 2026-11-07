import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Editorial section heading: numbered eyebrow + serif display title.
 * The eyebrow carries a small asterisk mark — a recurring brand motif.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "eyebrow mb-4 flex items-center gap-2.5",
          align === "center" && "justify-center",
          light ? "text-butter" : "text-forest"
        )}
      >
        <AsteriskMark className={cn("h-3 w-3", light ? "text-butter" : "text-terracotta")} />
        {eyebrow}
      </p>
      <h2 className={cn("display-2 text-balance", light ? "text-cream" : "text-forest")}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-cream/70" : "text-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Small hand-drawn asterisk / bloom mark used across the site. */
export function AsteriskMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { Container };
