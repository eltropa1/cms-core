import { Section } from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const plans = [
  {
    title: "Web esencial",
    price: "1000 €",
    description:
      "Para negocios que necesitan una presencia profesional clara, sólida y preparada para transmitir confianza desde el primer día.",
    points: [
      "Presencia profesional",
      "Estructura clara",
      "Contacto rápido",
      "Base sólida y moderna",
    ],
    href: "/demos/psicologia",
  },
  {
    title: "Web profesional",
    price: "1500 €",
    description:
      "Para negocios que necesitan explicar mejor lo que hacen, transmitir autoridad y convertir más visitas en contactos.",
    points: [
      "Conversión estratégica",
      "Storytelling visual",
      "Estructura comercial",
      "Autoridad y confianza",
    ],
    href: "/demos/clinica-dental",
    featured: true,
    badge: "MÁS ELEGIDA",
  },
  {
    title: "Web premium",
    price: "2000 €",
    description:
      "Para negocios que quieren una presencia más fuerte, generar contenido y construir posicionamiento a largo plazo.",
    points: [
      "Blog y contenido",
      "Autoridad digital",
      "Posicionamiento SEO",
      "Plataforma preparada para evolucionar",
    ],
    href: "/demos/abogacia",
  },
];

const demos = [
  {
    id: "demo-esencial",
    name: "Web esencial",
    description:
      "Una presencia limpia y directa para explicar quién eres, qué haces y cómo contactar contigo sin fricción.",
    href: "/demos/psicologia",
    columns: ["w-2/3", "w-1/2", "w-3/4"],
    density: "simple",
  },
  {
    id: "demo-profesional",
    name: "Web profesional",
    description:
      "Una estructura comercial con más intención: mensaje, servicios, prueba de confianza y llamadas a la acción.",
    href: "/demos/clinica-dental",
    columns: ["w-3/4", "w-5/6", "w-2/3"],
    density: "strategic",
    featured: true,
  },
  {
    id: "demo-premium",
    name: "Web premium",
    description:
      "Una plataforma más profunda, con contenido, publicación y base preparada para crecer en el tiempo.",
    href: "/demos/abogacia",
    columns: ["w-5/6", "w-2/3", "w-4/5"],
    density: "premium",
  },
];

const comparisonGroups = [
  {
    title: "Base profesional común",
    rows: [
      { label: "Diseño premium responsive", values: [true, true, true] },
      { label: "Adaptación móvil cuidada", values: [true, true, true] },
      { label: "Presencia profesional sólida", values: [true, true, true] },
    ],
  },
  {
    title: "Capa estratégica",
    rows: [
      { label: "Conversión estratégica", values: [false, true, true] },
      { label: "Storytelling visual", values: [false, true, true] },
      { label: "Arquitectura SEO ampliada", values: [false, true, true] },
    ],
  },
  {
    title: "Capa de crecimiento y posicionamiento",
    rows: [
      { label: "Blog funcional", values: [false, false, true] },
      { label: "Panel administrador", values: [false, false, true] },
      { label: "Posicionamiento mediante contenido", values: [false, false, true] },
    ],
  },
];

const structurePlans = [
  {
    title: "Web esencial",
    note: "Una web profesional seria y sólida.",
    pages: [
      "Inicio",
      "Servicios",
      "Sobre mí",
      "Contacto",
    ],
  },
  {
    title: "Web profesional",
    note: "Más profundidad para generar confianza.",
    pages: [
      "Inicio",
      "Servicios",
      "Sobre mí",
      "Contacto",
      "Preguntas frecuentes",
      "Casos / trabajos realizados",
      "Proceso de trabajo",
    ],
  },
  {
    title: "Web premium",
    note: "Preparada además para contenido y gestión.",
    pages: [
      "Inicio",
      "Servicios",
      "Sobre mí",
      "Contacto",
      "Preguntas frecuentes",
      "Casos / trabajos realizados",
      "Proceso de trabajo",
      "Blog",
      "Artículos",
      "Categorías",
    ],
  },
];

function CheckMark({ active }: { active: boolean }) {
  return (
    <span
      className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full border ${
        active
          ? "border-amber-400/35 bg-amber-400/10 text-amber-300"
          : "border-transparent bg-transparent text-white/18"
      }`}
      aria-label={active ? "Incluido" : "No orientado a este nivel"}
    >
      {active ? (
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <span className="h-px w-3 bg-current" />
      )}
    </span>
  );
}

function DemoMockup({ demo }: { demo: (typeof demos)[number] }) {
  const isSimple = demo.density === "simple";
  const isStrategic = demo.density === "strategic";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-4">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </div>

        <div className="space-y-4">
          <div
            className={`rounded-lg border border-white/10 bg-white/[0.03] ${
              isSimple ? "p-5" : "p-6"
            }`}
          >
            <div className="h-2 w-20 rounded-full bg-amber-400/40" />
            <div className="mt-5 space-y-3">
              {demo.columns.map((width) => (
                <div
                  key={width}
                  className={`${width} h-2 rounded-full bg-white/18`}
                />
              ))}
            </div>
            <div className="mt-6 h-8 w-28 rounded-md bg-amber-400/80" />
          </div>

          {!isSimple && (
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 rounded-lg border border-white/10 bg-white/[0.035]" />
              <div className="h-20 rounded-lg border border-white/10 bg-white/[0.035]" />
            </div>
          )}

          {isStrategic && (
            <div className="grid grid-cols-3 gap-3">
              <div className="h-14 rounded-lg bg-amber-400/10" />
              <div className="h-14 rounded-lg bg-white/[0.04]" />
              <div className="h-14 rounded-lg bg-white/[0.04]" />
            </div>
          )}

          {!isSimple && !isStrategic && (
            <>
              <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
                <div className="h-24 rounded-lg border border-amber-400/15 bg-amber-400/[0.06]" />
                <div className="space-y-3">
                  <div className="h-10 rounded-lg bg-white/[0.04]" />
                  <div className="h-10 rounded-lg bg-white/[0.04]" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-lg bg-white/[0.035]" />
                <div className="h-16 rounded-lg bg-white/[0.035]" />
                <div className="h-16 rounded-lg bg-white/[0.035]" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-950 via-neutral-950 to-black" />
      <div className="absolute -right-40 -top-40 z-0 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[160px]" />
      <div className="absolute bottom-0 left-0 z-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10">
        <Section variant="spacious">
          <Container>
            <div className="max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <p className="text-sm uppercase tracking-[0.18em] text-amber-400">
                  SERVICIOS
                </p>
                <div className="h-px w-10 bg-amber-400/60" />
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                Qué tipo de web necesita tu negocio.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
                Tres formas claras de construir la web que necesita tu negocio.
              </p>
            </div>
          </Container>
        </Section>

        <Section variant="default">
          <Container>
            <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
              {plans.map((plan) => (
                <article
                  key={plan.title}
                  className={`relative flex flex-col justify-between rounded-2xl border bg-neutral-900/55 backdrop-blur-sm ${
                    plan.featured
                      ? "border-amber-400/40 p-8 shadow-[0_0_70px_rgba(251,191,36,0.13)] md:-mt-6 md:p-10"
                      : "border-white/10 p-8"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl bg-amber-400 px-4 py-2 text-xs font-medium text-black">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <div className="mb-8 h-px w-14 bg-amber-400/70" />
                    <h2
                      className={`font-semibold tracking-tight ${
                        plan.featured ? "text-3xl" : "text-2xl"
                      }`}
                    >
                      {plan.title}
                    </h2>
                    <div className="mt-5 text-sm uppercase tracking-[0.16em] text-neutral-500">
                      Desde
                    </div>
                    <div
                      className={`mt-1 font-semibold text-amber-300 ${
                        plan.featured ? "text-5xl" : "text-4xl"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <p className="mt-6 leading-relaxed text-neutral-400">
                      {plan.description}
                    </p>

                    <ul className="mt-8 space-y-4 text-sm text-neutral-300">
                      {plan.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-1 text-amber-400">✔</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={plan.href}
                    className={`mt-10 inline-flex w-fit items-center rounded-lg px-6 py-3 text-sm transition ${
                      plan.featured
                        ? "bg-amber-400 font-medium text-black hover:bg-amber-300"
                        : "border border-white/10 text-white hover:border-amber-400/40"
                    }`}
                  >
                    Ver ejemplo real →
                  </a>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="default">
          <Container>
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.18em] text-amber-400">
                DEMOS REALES
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
                Cómo se presenta cada tipo de web.
              </h2>
              <p className="mt-5 leading-relaxed text-neutral-400">
                Cada estructura responde a una necesidad distinta.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {demos.map((demo) => (
                <article
                  id={demo.id}
                  key={demo.name}
                  className={`group rounded-2xl border bg-neutral-900/40 p-4 transition ${
                    demo.featured
                      ? "border-amber-400/30 shadow-[0_0_55px_rgba(251,191,36,0.1)]"
                      : "border-white/10"
                  }`}
                >
                  <DemoMockup demo={demo} />

                  <div className="px-2 pb-2 pt-6">
                    <h3 className="text-xl font-semibold">{demo.name}</h3>
                    <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-neutral-400">
                      {demo.description}
                    </p>
                    <a
                      href={demo.href}
                      className="mt-6 inline-flex text-sm text-amber-300 transition group-hover:text-amber-200"
                    >
                      Ver demo →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="compact">
          <Container>
            <div className="relative">
              <div className="absolute -top-10 left-0 h-px w-full bg-white/5" />

              <div className="grid items-start gap-12 md:grid-cols-2">
                <h2 className="text-3xl font-semibold leading-tight md:pl-6 md:text-4xl">
                  Una web clara transmite mejor lo que haces.
                </h2>

                <div className="flex max-w-md flex-col gap-4 text-neutral-400">
                  <p className="text-white">Se trata de que haga esto:</p>

                  <ul className="space-y-3">
                    {[
                      "Que se entienda en segundos",
                      "Que transmita confianza real",
                      "Que haga que te elijan",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="inline-block h-[2px] w-2 bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute -bottom-10 left-0 h-px w-full bg-white/5" />
            </div>
          </Container>
        </Section>

        <Section variant="default">
          <Container>
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.18em] text-amber-400">
                DIFERENCIA REAL
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
                Qué cambia entre cada tipo de web.
              </h2>
              <p className="mt-5 leading-relaxed text-neutral-400">
                La diferencia no es tener “más cosas”. Es el papel que la web
                juega dentro del negocio.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/35">
              <div className="grid grid-cols-[1.35fr_repeat(3,0.8fr)] border-b border-white/10 px-4 py-5 text-sm text-neutral-400 sm:px-6">
                <div />
                {["Web esencial", "Web profesional", "Web premium"].map((item) => (
                  <div key={item} className="text-center text-white">
                    {item}
                  </div>
                ))}
              </div>

              {comparisonGroups.map((group) => (
                <div key={group.title}>
                  <div className="border-b border-white/5 bg-white/[0.025] px-4 py-4 sm:px-6">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-amber-300/80">
                      {group.title}
                    </p>
                  </div>

                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[1.35fr_repeat(3,0.8fr)] items-center border-b border-white/5 px-4 py-5 last:border-b-0 sm:px-6"
                    >
                      <div className="pr-4 text-sm text-neutral-300">
                        {row.label}
                      </div>
                      {row.values.map((value, index) => (
                        <CheckMark
                          key={`${row.label}-${index}`}
                          active={value}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-20">
              <div className="mb-10 max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  Qué incluye cada tipo de web
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-400">
                  La estructura visible de cada nivel: páginas claras,
                  secciones entendibles y una base pensada para funcionar.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 shadow-[0_0_80px_rgba(251,191,36,0.04)]">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />

                <div className="grid gap-px bg-white/10 md:grid-cols-3">
                  {structurePlans.map((plan) => (
                    <article
                      key={plan.title}
                      className="bg-neutral-950/55 p-6 sm:p-7"
                    >
                      <div className="mb-7">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-amber-300/80">
                          {plan.title}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                          {plan.note}
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-5">
                        <p className="mb-4 text-sm font-medium text-white">
                          Páginas
                        </p>

                        <ul className="space-y-3.5">
                          {plan.pages.map((page) => (
                            <li
                              key={`${plan.title}-${page}`}
                              className="flex items-start gap-3 text-sm leading-relaxed text-neutral-300"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-400/35 bg-amber-400/10 text-amber-300">
                                <svg
                                  className="h-3 w-3"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span>{page}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="default">
          <Container>
            <div className="grid items-start gap-10 md:grid-cols-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-amber-400">
                  CÓMO TRABAJAMOS
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  Un proceso claro y directo.
                </h2>
              </div>

              {[
                {
                  title: "1. Hablamos",
                  text: "Me cuentas tu negocio y vemos qué necesita realmente.",
                  icon: <path d="M8 12h8M12 8v8" />,
                },
                {
                  title: "2. Desarrollo",
                  text: "Diseño y construyo tu web con criterio, estructura y claridad.",
                  icon: <path d="M4 6h16M4 12h16M4 18h16" />,
                },
                {
                  title: "3. Publicamos",
                  text: "La dejamos preparada para funcionar desde el primer día.",
                  icon: <path d="M5 13l4 4L19 7" />,
                },
              ].map((step) => (
                <div key={step.title} className="group flex flex-col gap-4">
                  <div className="text-amber-400 transition group-hover:-translate-y-0.5">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      {step.icon}
                    </svg>
                  </div>

                  <h3 className="font-semibold text-white">{step.title}</h3>

                  <p className="text-sm leading-relaxed text-neutral-400">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="spacious">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/45 p-8 md:p-12">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-[90px]" />

              <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    La web correcta depende de lo que necesita tu negocio.
                  </h2>

                  <p className="mt-4 text-lg text-neutral-400">
                    Cada proyecto necesita una estructura distinta.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex w-fit rounded-xl bg-amber-400 px-8 py-4 font-medium text-black transition hover:bg-amber-300"
                >
                  Cuéntame qué necesitas →
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}
