import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm font-medium transition-all duration-300";

  const styles = {
    primary: `
      px-6 py-3 rounded-full
      text-white
      border border-amber-400/30
      bg-transparent
      hover:border-amber-300/50
      hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]
    `,

    secondary: `
      px-6 py-3 rounded-full
      text-neutral-300
      border border-neutral-700
      hover:border-neutral-500
      hover:text-white
    `,

    tertiary: `
      text-neutral-400
      hover:text-white
    `,
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}