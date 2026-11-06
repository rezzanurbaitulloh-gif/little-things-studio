import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "dark" | "outline" | "light";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  dark: "btn-dark",
  outline: "btn-outline",
  light: "btn-light",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children, ariaLabel } = props;
  const classes = cn("btn", variantClass[variant], className);

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
