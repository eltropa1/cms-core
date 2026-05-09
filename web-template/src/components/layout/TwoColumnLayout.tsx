import type { ReactNode } from "react";

type TwoColumnLayoutProps = {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
  align?: "start" | "center";
};

/**
 * TwoColumnLayout
 * -------------------------------------------------------
 * Layout estructural reutilizable para secciones con:
 * - contenido principal (izquierda)
 * - contenido complementario (derecha)
 *
 * ⚠️ IMPORTANTE:
 * - NO gestiona ancho (eso lo hace Section)
 * - NO aplica estilos visuales
 * - SOLO layout
 * - pensado para composiciones con intención (no grid automático)
 */
export function TwoColumnLayout({
  left,
  right,
  reverse = false,
  align = "start",
}: TwoColumnLayoutProps) {
  const alignment =
    align === "center" ? "md:items-center" : "md:items-start";

  return (
    <div
      className={`
        flex flex-col
        md:flex-row
        ${reverse ? "md:flex-row-reverse" : ""}

        ${alignment}

        gap-12 md:gap-20
      `}
    >
      {/* LEFT COLUMN (contenido principal) */}
      <div className="md:w-[58%] w-full">
        {left}
      </div>

      {/* RIGHT COLUMN (contenido secundario / stacking) */}
      <div className="md:w-[42%] w-full">
        {right}
      </div>
    </div>
  );
}