import { Section } from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export default function ServicesPage() {
  return (
    <div className="relative text-white overflow-hidden bg-neutral-950">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950 to-black z-0" />

      {/* Glow top-right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-400/10 blur-[160px] rounded-full z-0" />

      {/* Glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* ========================================================= */}
        {/* ================= HERO ================= */}
        <Section variant="spacious">
          <Container>
            <div className="max-w-3xl flex flex-col gap-8">
              <p className="text-sm tracking-[0.18em] text-amber-400 uppercase">
                SERVICIOS
              </p>

              <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                Qué web necesita tu negocio para funcionar de verdad
              </h1>

              <p className="text-neutral-400 text-lg leading-relaxed">
                No todas las webs son iguales.
                <br />
                Y no todos los negocios necesitan lo mismo.
                <br />
                <span className="text-amber-400">
                  Aquí tienes tres formas claras de hacerlo bien, según tu momento.
                </span>
              </p>
            </div>
          </Container>
        </Section>

        {/* ========================================================= */}
        {/* ================= PLANES ================= */}
        <Section variant="default">
          <Container>
            <div className="grid md:grid-cols-3 gap-10">
              {/* ================= CARD 1 ================= */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm p-8 flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 mb-6">
                    {/* icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="6" width="18" height="12" rx="2" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-semibold">Web esencial</h3>

                  <p className="text-neutral-400 mt-3">
                    Para negocios que necesitan empezar con una base clara, sin complicaciones ni decisiones innecesarias.
                  </p>

                  <div className="mt-6 text-sm text-neutral-500">DESDE</div>
                  <div className="text-3xl font-semibold text-amber-400 mt-1">
                    1000 €
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-neutral-400">
                    <li>✔ Estructura clara y directa</li>
                    <li>✔ Diseño profesional</li>
                    <li>✔ Adaptada a móviles</li>
                    <li>✔ Formulario de contacto</li>
                  </ul>
                </div>

                <a
                  href="/contact?plan=esencial"
                  className="mt-8 inline-block border border-white/10 px-6 py-3 rounded-lg text-sm hover:border-amber-400/30 transition"
                >
                  Hablamos de esto →
                </a>
              </div>

              {/* ================= CARD 2 (DESTACADA) ================= */}
              <div className="relative rounded-2xl border border-amber-400/40 bg-neutral-900/60 p-10 flex flex-col justify-between shadow-[0_0_60px_rgba(251,191,36,0.12)]">
                {/* badge */}
                <div className="absolute top-0 right-0 bg-amber-400 text-black text-xs px-4 py-2 rounded-bl-xl rounded-tr-xl font-medium">
                  MÁS ELEGIDA
                </div>

                <div>
                  <div className="text-amber-400 mb-6">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l7 7-7 7-7-7 7-7z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-semibold">Web profesional</h3>

                  <p className="text-neutral-400 mt-3">
                    Para negocios que quieren explicar bien lo que hacen, generar confianza y empezar a convertir.
                  </p>

                  <div className="mt-6 text-sm text-neutral-500">DESDE</div>
                  <div className="text-4xl font-semibold text-amber-400 mt-1">
                    1500 €
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-neutral-400">
                    <li>✔ Diseño a medida</li>
                    <li>✔ Página de servicios</li>
                    <li>✔ SEO básico</li>
                    <li>✔ Optimizada para velocidad</li>
                    <li>✔ Formulario avanzado</li>
                  </ul>
                </div>

                <a
                  href="/contact?plan=profesional"
                  className="mt-8 inline-block bg-amber-400 text-black px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                  Quiero esta web →
                </a>
              </div>

              {/* ================= CARD 3 ================= */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm p-8 flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 mb-6">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17l-5 3 1-5-4-4 5-.5L12 6l3 4.5 5 .5-4 4 1 5-5-3z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-semibold">Web premium</h3>

                  <p className="text-neutral-400 mt-3">
                    Para negocios que quieren una web pensada para
                    crecer, posicionarse y generar resultados reales.
                  </p>

                  <div className="mt-6 text-sm text-neutral-500">DESDE</div>
                  <div className="text-3xl font-semibold text-amber-400 mt-1">
                    2000 €
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-neutral-400">
                    <li>✔ Diseño avanzado</li>
                    <li>✔ Estructura estratégica</li>
                    <li>✔ SEO avanzado</li>
                    <li>✔ Integraciones</li>
                    <li>✔ Soporte y mantenimiento</li>
                  </ul>
                </div>

                <a
                  href="/contact?plan=completa"
                  className="mt-8 inline-block border border-white/10 px-6 py-3 rounded-lg text-sm hover:border-amber-400/30 transition"
                >
                  Hablamos de esto →
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* ========================================================= */}
{/* ================= BLOQUE MENSAJE ================= */}
<Section variant="compact">
  <Container>
    <div className="relative">

      {/* línea superior */}
      <div className="absolute -top-10 left-0 w-full h-[1px] bg-white/5" />

      {/* contenido */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* IZQUIERDA */}
        <h2 className="text-3xl md:text-4xl font-semibold md:pl-6">
          No se trata de hacer una web bonita.
        </h2>

        {/* DERECHA */}
        <div className="flex flex-col gap-4 text-neutral-400 max-w-md">

          <p className="text-white">
            Se trata de que haga esto:
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-[2px] bg-amber-400 inline-block" />
              <span>Que se entienda en segundos</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-[2px] bg-amber-400 inline-block" />
              <span>Que transmita confianza real</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-[2px] bg-amber-400 inline-block" />
              <span>Que haga que te elijan</span>
            </li>
          </ul>

        </div>
      </div>

      {/* línea inferior */}
      <div className="absolute -bottom-10 left-0 w-full h-[1px] bg-white/5" />

    </div>
  </Container>
</Section>

        {/* ========================================================= */}
{/* ================= PROCESO ================= */}
<Section variant="default">
  <Container>

    <div className="grid md:grid-cols-4 gap-10 items-start">

      {/* INTRO */}
      <div>
        <p className="text-sm text-amber-400 uppercase tracking-[0.18em]">
          CÓMO TRABAJAMOS
        </p>

        <h2 className="text-3xl font-semibold mt-4">
          Un proceso directo, sin complicaciones.
        </h2>
      </div>

      {/* STEP 1 */}
      <div className="flex flex-col gap-4 group">
        
        {/* icon */}
        <div className="text-amber-400 transition group-hover:translate-y-[-2px]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24 ">
            <path d="M8 12h8M12 8v8" />
          </svg>
        </div>

        <h3 className="text-white font-semibold">1. Hablamos</h3>

        <p className="text-neutral-400 text-sm">
          Me cuentas tu caso y definimos qué necesitas realmente.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="flex flex-col gap-4 group">

        <div className="text-amber-400 transition group-hover:translate-y-[-2px]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <h3 className="text-white font-semibold">2. Desarrollo</h3>

        <p className="text-neutral-400 text-sm">
          Diseño y construyo tu web con criterio y sin ruido.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="flex flex-col gap-4 group">

        <div className="text-amber-400 transition group-hover:translate-y-[-2px]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-white font-semibold">3. Publicamos</h3>

        <p className="text-neutral-400 text-sm">
          La publicamos y te la dejo lista para funcionar desde el primer día.
        </p>
      </div>

    </div>

  </Container>
</Section>

        {/* ========================================================= */}
        {/* ================= CTA FINAL ================= */}
        <Section variant="spacious">
          <Container>
            <div className="border border-white/10 rounded-2xl p-10 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-semibold">
                  No todas las webs son iguales.
                </h2>

                <p className="text-neutral-400 mt-3">
                  Si quieres hacerlo bien desde el principio, hablamos.
                </p>
              </div>

              <a
                href="/contact"
                className="bg-amber-400 text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
              >
                Cuéntame qué necesitas →
              </a>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}
