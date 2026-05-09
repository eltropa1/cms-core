import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/layout/Section";

import { PromiseCard } from "@/components/ui/PromiseCard";

export default function HomePage() {
  {
    /* ===empieza el codigo para que funcione mi prueba de la PROMESA================ */
  }

  {
    /* ===termina el codigo para que funcione mi prueba de la PROMESA================ */
  }
  return (
    <>
      <div className="text-white">
        <Hero />

        {/* transición real */}

        <main className="relative z-20">
          {/* =========================================================== */}
          {/* ================= PROMESA ================= */}
          <Section variant="compact">
            <div className="relative">
              {/* glow continuidad hero */}

              <div className="-mt-12 md:-mt-16">
                <div className="w-full">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
                    {/* BLOQUE 1 — TEXTO */}
                    <div className="order-1 flex flex-col justify-center gap-5 lg:col-span-5 lg:gap-6 lg:min-h-[640px]">
                      {/* etiqueta + línea */}
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-400">
                          MI PROMESA
                        </p>
                        <div className="w-10 h-px bg-amber-400/60" />
                      </div>

                      {/* título */}
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
                        Webs profesionales, sólidas y pensadas para durar.
                      </h2>

                      {/* línea decorativa */}
                      <div className="w-12 h-[2px] bg-amber-400" />

                      {/* texto */}
                      <p className="text-neutral-400 leading-relaxed max-w-sm">
                        Diseñadas para transmitir confianza, explicar mejor tu
                        servicio y dar una presencia real a tu negocio.
                      </p>
                      {/* línea decorativa */}
                      <div className="w-12 h-[2px] bg-amber-400" />
                    </div>

                    {/* BLOQUE 2 — CARD DOMINANTE */}
                    <div className="order-2 lg:col-span-4 lg:h-[640px] lg:pt-24">
                      <div className="h-full flex justify-start lg:justify-center">
                        <div className="group w-full min-h-[340px] sm:min-h-[380px] lg:w-[78%] lg:h-full">
                          <PromiseCard
                            icon={
                              <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 9h8M8 13h5" />
                                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
                              </svg>
                            }
                            title="Mensaje claro"
                            description="Si alguien no entiende lo que haces en pocos segundos, no te va a elegir."
                            highlight
                            align="center"
                          />
                        </div>
                      </div>
                    </div>

                    {/* BLOQUE 3 — DOS CARDS */}
                    <div className="order-3 flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:col-span-3 lg:flex lg:grid-cols-none lg:gap-10 lg:mt-16">
                      <div className="min-h-[220px] lg:min-h-[260px] [&>*]:h-full [&>*]:!py-7 [&>*]:!px-7 lg:[&>*]:!py-8 lg:[&>*]:!px-8">
                        <div className="group h-[220px] lg:h-[260px]">
                          <PromiseCard
                            icon={
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M4 6h16M4 12h10M4 18h7" />
                              </svg>
                            }
                            title="Estructura que guía"
                            description="Cada bloque tiene un propósito: ayudar al visitante a avanzar y tomar una decisión."
                            align="top"
                          />
                        </div>
                      </div>

                      <div className="min-h-[220px] lg:min-h-[260px] [&>*]:h-full [&>*]:!py-7 [&>*]:!px-7 lg:[&>*]:!py-8 lg:[&>*]:!px-8">
                        <div className="group h-[220px] lg:h-[260px]">
                          <PromiseCard
                            icon={
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 3l9 4.5-9 4.5-9-4.5 9-4.5z" />
                                <path d="M3 12l9 4.5 9-4.5" />
                              </svg>
                            }
                            title="Base sólida"
                            description="Una web rápida, estable y preparada para crecer sin depender de parches."
                            align="top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* =========================================================== */}

          {/* ================= CÓMO FUNCIONA ================= */}
          <Section variant="default">
            <div className="-mt-10 md:-mt-16 relative">
              {/* ILUMINACIÓN LATERAL */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 85% 40%, rgba(251,191,36,0.05), transparent 60%)",
                }}
              />

              <div className="relative z-10">
                <div className="w-full">
                  {/* CONTENEDOR PRINCIPAL */}
                  <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-20 lg:items-start">
                    {/* ================= BLOQUE IZQUIERDO ================= */}
                    <div className="w-full flex flex-col gap-5 lg:w-[50%] lg:gap-8">
                      <p className="text-sm tracking-[0.18em] text-amber-400 uppercase">
                        CÓMO SE CONSTRUYE UNA WEB QUE FUNCIONA
                      </p>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                        Estrategia. Diseño. Conversión.
                      </h2>

                      <p className="text-neutral-400 leading-relaxed max-w-md">
                        Un proceso claro para que tu web deje de ser un gasto y
                        pase a ser una herramienta real.
                      </p>

                      {/* línea decorativa */}
                      <div className="w-12 h-[2px] bg-amber-400 mt-4" />
                    </div>

                    {/* ================= BLOQUE DERECHO ================= */}
                    <div className="w-full relative flex flex-col pl-5 gap-0 lg:w-[50%] lg:pl-12 lg:gap-2">
                      {/* eje vertical */}
                      <div
                        className="absolute left-0 top-5 bottom-5 w-px lg:top-2 lg:bottom-2"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)",
                          boxShadow: "0 0 12px rgba(251,191,36,0.15)",
                        }}
                      />

                      {/* ITEM 1 */}
                      <div className="py-7 lg:py-12 border-b border-white/5 flex gap-4 lg:gap-6 items-start">
                        <div className="text-amber-400 mt-1 flex-shrink-0">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M6 20c0-3 3-5 6-5s6 2 6 5" />
                          </svg>
                        </div>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-white font-semibold">
                            Estrategia digital
                          </h3>
                          <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                            Entendemos tu negocio y qué necesita comunicar para
                            posicionarse con claridad.
                          </p>
                        </div>
                      </div>

                      {/* ITEM 2 */}
                      <div className="py-7 lg:py-12 border-b border-white/5 flex gap-4 lg:gap-6 items-start">
                        <div className="text-amber-400 mt-1 flex-shrink-0">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4 6h16M6 12h12M8 18h8" />
                          </svg>
                        </div>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-white font-semibold">
                            Diseño con intención
                          </h3>
                          <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                            Cada decisión visual tiene un objetivo: transmitir
                            confianza y facilitar la comprensión.
                          </p>
                        </div>
                      </div>

                      {/* ITEM 3 */}
                      <div className="py-7 lg:py-12 border-white/5 flex gap-4 lg:gap-6 items-start">
                        <div className="text-amber-400 mt-1 flex-shrink-0">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" />
                          </svg>
                        </div>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-white font-semibold">
                            Desarrollo y optimización
                          </h3>
                          <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                            Construimos una web rápida, estable y lista para
                            convertir desde el primer día.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* =========================================================== */}


          {/* ================= SERVICIOS (VARIANTE 2) ================= */}
          <Section variant="default">
            <div className="-mt-8 md:-mt-12">
                <div className="w-full flex flex-col items-start lg:items-center">
                {/* ================= HEADER ================= */}
                <div className="max-w-3xl text-left mb-10 lg:text-center lg:mb-20">
                  <p className="text-sm tracking-[0.18em] text-amber-400 uppercase">
                    QUÉ TIPO DE WEB NECESITAS
                  </p>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mt-4">
                    Elige la web ideal para tu negocio
                  </h2>

                  <p className="text-neutral-400 leading-relaxed mt-6">
                    Soluciones pensadas para cada etapa. Desde lo esencial para
                    empezar hasta una base preparada para crecer.
                  </p>
                </div>

                {/* ================= CARDS ================= */}
                <div className="w-full flex flex-col justify-center items-stretch gap-5 md:grid md:grid-cols-3 md:items-stretch lg:flex lg:flex-row lg:items-end lg:gap-12">
                  {/* CARD 1 */}
                  <div className="w-full lg:w-[30%] lg:pt-16">
                    <div className="h-full min-h-[300px] lg:min-h-[420px] rounded-2xl border border-white/5 bg-neutral-900/40 p-7 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-amber-400 text-2xl mb-6">☆</div>

                        <h3 className="text-white text-xl font-semibold">
                          Web esencial
                        </h3>

                        <p className="mt-2 text-neutral-400">
                          desde <span className="text-amber-400">1000 €</span>
                        </p>

                        <p className="mt-6 text-neutral-400 leading-relaxed text-sm">
                          Para negocios que necesitan una presencia profesional
                          clara y bien presentada desde el primer día.
                        </p>
                      </div>

                      <a
                        href="#"
                        className="text-amber-400 text-sm mt-6 inline-block"
                      >
                        Descubrir →
                      </a>
                    </div>
                  </div>

                  {/* CARD CENTRAL (DOMINANTE) */}
                  <div className="w-full md:-mt-4 lg:mt-0 lg:w-[34%]">
                    <div className="h-full min-h-[360px] lg:min-h-[520px] rounded-2xl border border-amber-400/30 bg-neutral-900/60 p-8 lg:p-10 flex flex-col justify-between shadow-[0_0_80px_rgba(251,191,36,0.12)]">
                      <div>
                        <div className="flex items-start justify-between mb-6">
                          <div className="text-amber-400 text-3xl">♕</div>

                          <span className="text-xs uppercase tracking-wide text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full">
                            Recomendada
                          </span>
                        </div>

                        <h3 className="text-white text-2xl font-semibold">
                          Web profesional
                        </h3>

                        <p className="mt-2 text-neutral-400 text-lg">
                          Desde <span className="text-amber-400">1500 €</span>
                        </p>

                        <p className="mt-6 lg:mt-10 text-neutral-400 leading-relaxed">
                          Para negocios que quieren explicar mejor sus
                          servicios, facilitar el contacto y transmitir una
                          imagen más completa.
                        </p>
                      </div>

                      <a
                        href="#"
                        className="text-amber-400 text-sm mt-6 inline-block"
                      >
                        Descubrir →
                      </a>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="w-full lg:w-[30%] lg:pt-16">
                    <div className="h-full min-h-[300px] lg:min-h-[420px] rounded-2xl border border-white/5 bg-neutral-900/40 p-7 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-amber-400 text-2xl mb-6">◇</div>

                        <h3 className="text-white text-xl font-semibold">
                          Web completa
                        </h3>

                        <p className="mt-2 text-neutral-400">
                          desde <span className="text-amber-400">2000 €</span>
                        </p>

                        <p className="mt-6 text-neutral-400 leading-relaxed text-sm">
                          Para negocios que quieren una web con blog, contenido
                          inicial y una base preparada para crecer con el
                          tiempo.
                        </p>
                      </div>

                      <a
                        href="#"
                        className="text-amber-400 text-sm mt-6 inline-block"
                      >
                        Descubrir →
                      </a>
                    </div>
                  </div>
                </div>

                {/* ================= TEXTO APOYO ================= */}
                <div className="mt-10 lg:mt-16 lg:text-center">
                  <a href="#" className="text-amber-400">
                    Ver tipos de web →
                  </a>
                </div>
              </div>
            </div>
          </Section>

          {/* =========================================================== */}

          {/* ================= DEMOS / TRABAJOS ================= */}
          <Section variant="default">
            <div className="-mt-6 md:-mt-10 ">
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-16 lg:items-start">
                {/* ================= IZQUIERDA ================= */}
                <div className="w-full flex flex-col gap-5 lg:w-[40%] lg:gap-6">
                  <p className="text-sm tracking-[0.18em] text-amber-400 uppercase">
                    WEBS CREADAS CON CRITERIO
                  </p>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                    Ejemplos reales de cómo debe verse una web profesional
                  </h2>

                  <p className="text-neutral-400 leading-relaxed max-w-md">
                    Casos pensados para transmitir claridad, confianza y una
                    presencia sólida.
                  </p>
                </div>

                {/* ================= DERECHA ================= */}
                <div className="w-full flex flex-col gap-6 md:grid md:grid-cols-[1.35fr_1fr] lg:w-[60%] lg:flex lg:flex-row">
                  {/* DEMO PRINCIPAL */}
                  <div className="w-full flex flex-col gap-4 lg:w-[65%]">
                    <a
                      href="/demos/psicologia"
                      className="h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 relative hover:scale-[1.02] transition-all duration-300"
                    >
                      <img
                        src="/demo-1.png"
                        alt=""
                        className="w-full h-full object-cover opacity-90"
                      />

                      {/* integración */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                    </a>

                    <div>
                      <p className="text-amber-400 text-sm">Psicología</p>

                      <h3 className="text-white  text-xl font-semibold tracking-tight">
                        Bienestar emocional
                      </h3>

                      <a
                        href="/demos/psicologia"
                        className="text-amber-400 text-sm mt-2 inline-block"
                      >
                        Ver proyecto →
                      </a>
                    </div>
                  </div>

                  {/* DEMOS SECUNDARIAS */}
                  <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:flex md:flex-col lg:w-[35%]">
                    {/* DEMO 2 */}
                    <div className="flex flex-col gap-3">
                      <a
                          href="/demos/clinica-dental">
                      <div className="h-[170px] md:h-[140px] rounded-xl overflow-hidden border border-white/10 relative hover:scale-[1.02] transition-all duration-300">
                        <img
                          src="/demo-2.png"
                          alt=""
                          className="w-full h-full object-cover opacity-90"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                      </div>
                        </a>

                      <div>
                        <p className="text-amber-400 text-xs">Clínica dental</p>

                        <h4 className="text-white font-medium">
                          Cuidado dental avanzado
                        </h4>

                        <a
                          href="/demos/clinica-dental"
                          className="text-amber-400 text-xs mt-1 inline-block"
                        >
                          Ver proyecto →
                        </a>
                      </div>
                    </div>

                    {/* DEMO 3 */}
                    <div className="flex flex-col gap-3">
                      <a
                        href="/demos/abogacia"
                        className="h-[170px] md:h-[140px] rounded-xl overflow-hidden border border-white/10 relative hover:scale-[1.02] transition-all duration-300"
                      >
                        <img
                          src="/demo-3.png"
                          alt=""
                          className="w-full h-full object-cover opacity-90"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                      </a>

                      <div>
                        <p className="text-amber-400 text-xs">Abogacía</p>

                        <h4 className="text-white font-medium">
                          Defensa legal estratégica
                        </h4>

                        <a
                          href="/demos/abogacia"
                          className="text-amber-400 text-xs mt-1 inline-block"
                        >
                          Ver proyecto →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* BLOG / ARTÍCULOS oculto temporalmente para publicación inicial. */}

          {/* ================= CTA FINAL ================= */}
          <Section variant="spacious">
           <div className="w-full">

  <div
    className="
      relative
      w-full

      flex flex-col
      lg:flex-row lg:items-stretch
      gap-8 lg:gap-12

      px-6 md:px-8 lg:px-12
      py-7 lg:py-6

      border border-white/10
      rounded-2xl
      lg:min-h-[280px]

      overflow-hidden

      before:absolute before:inset-x-0 before:top-0
      before:h-px before:bg-gradient-to-r
      before:from-transparent before:via-amber-400/40 before:to-transparent
      before:content-['']
    "
  >

    {/* ========= TEXTO ========= */}
    <div className="w-full lg:w-[55%] flex flex-col justify-center gap-4 lg:gap-5">

      <p className="text-xs tracking-[0.2em] text-amber-400 uppercase">
        ¿Listo para dar el siguiente paso?
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
        Si quieres una web que esté
        <br />
        a la altura de tu negocio,{" "}
        <span className="text-amber-400">hablamos.</span>
      </h2>

      <p className="text-neutral-400 max-w-md leading-relaxed">
        Trabajo contigo de forma directa, sin ruido ni procesos innecesarios.
      </p>

      <div className="pt-2">
        <a
          href="/contact"
          className="
            inline-flex items-center gap-3
            px-7 py-3.5 rounded-full
            text-sm font-medium
            border border-amber-400/30
            text-white
            transition-all duration-300
            hover:bg-amber-400 hover:text-black
          "
        >
          Contactar →
        </a>
      </div>

   </div>

    {/* ========= IMAGEN ========= */}
   <div className="w-full lg:w-[45%] relative flex items-center justify-end">

  <div className="h-[220px] sm:h-[260px] lg:h-[300px] w-full flex items-center justify-end lg:pr-2">

    <div className="h-full w-full max-w-[95%] relative">

      <img
        src="/cta-image.png"
        alt=""
        className="
          h-full w-full object-cover
          rounded-xl
          opacity-95
        "
      />

      {/* FUNDIDO IZQUIERDA */}
      <div className="
        absolute inset-0
        bg-gradient-to-l
        from-transparent
        via-neutral-950/60
        to-neutral-950
        rounded-xl
      " />

      {/* FUNDIDO INFERIOR */}
      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-neutral-950/80
        to-transparent
        rounded-xl
      " />

    </div>

  </div>

</div>

</div>
</div>
          </Section>
          {/* =========================================================== */}
        </main>
      </div>
    </>
  );
}
