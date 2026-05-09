import type { ReactNode } from "react";

type CardTone = "default" | "quiet";
type CardSize = "default" | "dominant" | "compact"; // ✅ añadido

type CardProps = {
  label?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  featured?: boolean;
  tone?: CardTone;
  size?: CardSize; // ✅ añadido
};

export function Card({
  label,
  title,
  description,
  action,
  featured = false,
  tone = "default",
  size = "default", // ✅ añadido
}: CardProps) {
  const surface =
    tone === "quiet"
      ? "bg-neutral-900/20 hover:bg-neutral-900/28 border-white/[0.03]"
      : "bg-neutral-900/30 hover:bg-neutral-900/40 border-white/[0.04]";

  const light =
    tone === "quiet"
      ? "bg-amber-300/20"
      : "bg-amber-300/35";

  // ✅ añadido (no rompe nada existente)
  const sizeClasses =
    size === "dominant"
      ? "min-h-[360px]"
      : size === "compact"
      ? "min-h-[160px] py-8 md:py-9 px-7 md:px-8"
      : "";

  return (
    <div
      className={`
        relative overflow-hidden
        ${featured ? "md:col-span-2" : ""}

        rounded-2xl
        border
        ${surface}

        px-8 py-14
        md:px-10 md:py-16

        ${sizeClasses}  // ✅ añadido

        transition-all duration-300
      `}
    >
      {/* subtle light activation */}
      <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[1px] ${light} blur-sm`}
        />
      </div>

      {label && (
        <div className="text-sm text-amber-400 mb-5">
          {label}
        </div>
      )}

      <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
        {title}
      </h3>

      {description && (
        <p className="text-neutral-400 mt-6 leading-relaxed max-w-md">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-10">
          {action}
        </div>
      )}
    </div>
  );
}