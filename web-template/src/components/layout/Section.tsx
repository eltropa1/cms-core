import type { ReactNode } from "react";
import Container from "./Container";

type SectionVariant = "spacious" | "default" | "compact";

type SectionProps = {
  title?: string;
  description?: string;
  align?: "center" | "left";
  variant?: SectionVariant;
  children?: ReactNode;
};

export function Section({
  title,
  description,
  align = "left",
  variant = "default",
  children,
}: SectionProps) {
  const isCenter = align === "center";

  const spacing = {
    spacious: "py-24 md:py-[7.5rem] lg:py-32",
    default: "py-16 md:py-20 lg:py-24",
    compact: "py-14 md:py-16 lg:py-20",
  };




return (
  <section className={spacing[variant]}>
    <Container>
        {(title || description) && (
          <div
            className={`${
              children ? "mb-16" : ""
            } ${
              isCenter
                ? "text-center mx-auto max-w-2xl"
                : "max-w-2xl"
            }`}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                {title}
              </h2>
            )}

            {description && (
              <p className="text-neutral-400 mt-5 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {children && <div>{children}</div>}
      </Container>
    </section>
  );
}
