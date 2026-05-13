import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import type { ThemeVariant } from "@/config/site.config";
import Container from "@/components/layout/Container";

/**
 * HERO ROOT
 */
export function Hero() {
  const { theme, site } = siteConfig;

  const renderByVariant = () => {
    switch (theme.hero.variant) {
      case "centered-glow":
        return renderCenteredGlow(theme.variant, site.name);

      case "centered-clean":
        return renderCenteredClean(theme.variant, site.name);

      case "minimal":
        return renderMinimal(theme.variant, site.name);

      case "split-modern":
        return renderSplitModern(theme.variant, site.name);

      default:
        return renderCenteredClean(theme.variant, site.name);
    }
  };

  return renderByVariant();
}

/**
 * VARIANT: CENTERED GLOW
 */
function renderCenteredGlow(
  themeVariant: ThemeVariant,
  siteName: string
) {
  const isDark = themeVariant === "dark-premium";

  return (
    <section
      className={`relative min-h-[90vh] flex items-center overflow-hidden ${
        isDark ? "bg-neutral-950" : "bg-white"
      }`}
    >
      {/* ESPACIO PARA HEADER (CLAVE) */}
      <div className="absolute top-0 left-0 w-full h-20 lg:h-24 pointer-events-none" />

      {/* IMAGE */}
      {isDark && (
        <img
          src="/hero-person.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            right-[8%]
            lg:right-[2%]
            bottom-0
            h-[95%] lg:h-[110%]
            object-contain
            z-[1]
            select-none pointer-events-none
            [mask-image:linear-gradient(to_left,black_82%,transparent_100%)]
          "
          style={{
            filter: "drop-shadow(0px 40px 80px rgba(0,0,0,0.6))",
          }}
        />
      )}

      {/* OVERLAYS */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/30 to-transparent z-[2] pointer-events-none" />
      )}

      {isDark && (
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(255,160,40,0.08), transparent 60%), linear-gradient(to bottom, transparent 70%, #0a0a0a 100%)",
          }}
        />
      )}

      {/* CONTENT */}
      <Container>
        <div className="relative z-20 pt-20 lg:pt-24">
          <div className="max-w-[720px] text-center lg:text-left lg:pl-10">

            <p className="font-semibold tracking-tight tracking-[-0.02em] leading-[1.08] lg:leading-[1.02] text-white">
              <span className="block text-4xl sm:text-5xl text-neutral-500 tracking-wide">
                Diseño web profesional con estructura y criterio.
              </span>
            </p>

            <h1 className="font-semibold tracking-tight tracking-[-0.02em] leading-[1.08] lg:leading-[1.02] text-white">
              <span className="block text-6xl sm:text-7xl lg:text-8xl mt-6 lg:mt-8">
                Hacemos webs para que te{" "}
                <span className="text-amber-400">elijan</span> antes.
              </span>
            </h1>

            <p className="text-base sm:text-lg mt-8 text-neutral-400 leading-relaxed max-w-[560px]">
              Claridad, estructura y diseño con intención. Sin procesos innecesarios.
            </p>

            <div className="pt-12 lg:pt-14">
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-3
                  px-8 py-4 rounded-full
                  text-sm font-medium
                  border border-amber-400/30
                  text-white
                  transition-all duration-300
                  hover:bg-amber-400 hover:text-black
                  shadow-[0_0_30px_rgba(251,191,36,0.15)]
                  backdrop-blur-sm
                "
              >
                Contactar →
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

/* OTROS VARIANTS SIN TOCAR */

function renderCenteredClean(themeVariant: ThemeVariant, siteName: string) {
  const isDark = themeVariant === "dark-premium";

  return (
    <section className="min-h-[70vh] flex items-center justify-center text-center">
      <h1
        className={`text-5xl font-semibold tracking-tight ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {siteName}
      </h1>
    </section>
  );
}

function renderMinimal(themeVariant: ThemeVariant, siteName: string) {
  const isDark = themeVariant === "dark-premium";

  return (
    <section className="min-h-[60vh] flex items-center justify-center text-center">
      <h1
        className={`text-4xl font-medium ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {siteName}
      </h1>
    </section>
  );
}

function renderSplitModern(themeVariant: ThemeVariant, siteName: string) {
  const isDark = themeVariant === "dark-premium";

  return (
    <section className="min-h-[70vh] grid grid-cols-2 items-center">
      <div className="p-10">
        <h1
          className={`text-5xl font-semibold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {siteName}
        </h1>
      </div>
    </section>
  );
}
