type PromiseCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean; // card dominante
  align?: "top" | "center";
};


export function PromiseCard({
  icon,
  title,
  description,
  highlight = false,
  align = "top",
}: PromiseCardProps) {
  const isFeatured = highlight;

  return (
    <div
      className={`
        relative
        h-full
        rounded-2xl
        border border-white/10
        bg-neutral-900/60
        ${isFeatured ? "p-10" : "p-6"}
        flex flex-col
        ${align === "center" ? "justify-center" : "justify-start"}

        transition-all duration-300

        ${isFeatured ? "scale-[1.02]" : ""}

        hover:border-amber-400/40
        hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]
      `}
    >
      {/* GLOW SUAVE */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(251,191,36,0.12), transparent 60%)",
        }}
      />

      {/* CONTENIDO */}
      <div
        className={`
          flex flex-col
          ${isFeatured ? "items-start text-left" : ""}
        `}
      >

        {/* ICONO */}
        <div
          className={`
            text-amber-400
            ${isFeatured ? "mb-12 scale-[1.8]" : "mb-6"}
          `}
        >
          {icon}
        </div>

        {/* TÍTULO */}
        <h3
          className={`
            text-white font-semibold
            ${isFeatured ? "text-2xl" : "text-lg"}
          `}
        >
          {title}
        </h3>

        {/* LÍNEA */}
        <div
          className={`
            bg-amber-400
            ${isFeatured ? "w-10 h-[2px] my-4 opacity-80" : "w-8 h-[2px] my-4"}
          `}
        />

        {/* TEXTO */}
        <p
          className={`
            text-neutral-400 leading-relaxed
            ${isFeatured ? "text-sm mt-4 max-w-xs" : "text-sm"}
          `}
        >
          {description}
        </p>

      </div>
    </div>
  );
}