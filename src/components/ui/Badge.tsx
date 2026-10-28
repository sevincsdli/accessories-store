import React from "react";
import { cn } from "../../utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "accent" | "dark";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  className,
}) => {
  const styles = {
    neutral: "bg-brand-light text-brand-dark border border-brand-beige",
    accent: "bg-brand-accent text-white",
    dark: "bg-brand-dark text-white",
  };

  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 text-[10px] tracking-widest uppercase font-medium",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};
