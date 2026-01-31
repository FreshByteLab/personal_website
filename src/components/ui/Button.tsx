import type { ButtonHTMLAttributes } from "react";

import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonProps = {
  label?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

const variants = {
  primary:
    "bg-white text-ink shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:bg-white/90",
  secondary:
    "border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10",
  ghost: "text-white/80 hover:text-white"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3 text-base"
};

export default function Button({
  label,
  href,
  variant = "primary",
  size = "md",
  className,
  type,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto");
    if (isExternal) {
      return (
        <a
          className={classes}
          href={href}
          rel="noreferrer"
          target={href.startsWith("http") ? "_blank" : undefined}
        >
          {label}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {label}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {label}
    </button>
  );
}
