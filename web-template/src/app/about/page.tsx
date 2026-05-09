import Link from "next/link";
import { Section } from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <div className="text-white">
      <main>
        {/* ================= HERO SOBRE MÍ ================= */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-neutral-950" />

          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent z-[1]" />

          <img
            src="/about-hero.png"
            alt=""
            className="absolute right-0 top-0 h-full w-[62%] object-cover opacity-90 z-0"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="min-h-[760px] flex items-center">
              <div className="max-w-2xl">
                <p className="text-sm tracking-[0.22em] text-amber-400 uppercase mb-8">
                  SOBRE MÍ
                </p>

                <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
                  No hago webs
                  <br />
                  por hacerlas.
                </h1>

                <p className="mt-8 text-2xl text-neutral-300 leading-relaxed max-w-xl">
                  Trabajo cada proyecto con criterio
                  <br />
                  y con intención real.
                </p>

                <p className="mt-8 text-lg text-neutral-500 leading-relaxed max-w-lg">
                  Si tu web tiene que representar tu negocio,
                  tiene que estar bien construida.
                </p>

                <div className="mt-10">
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
                      shadow-[0_0_25px_rgba(251,191,36,0.12)]
                    "
                  >
                    Hablemos →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MI ENFOQUE ================= */}
        <Section variant="default">
          <div className="-mt-4 md:-mt-8">
            <div className="grid grid-cols-12 gap-20 items-center">
              {/* ========= IZQUIERDA ========= */}
              <div className="col-span-5">
                <p className="text-sm tracking-[0.22em] text-amber-400 uppercase mb-8">
                  MI ENFOQUE
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                  No se trata de
                  <br />
                  hacer una web bonita.
                </h2>

                <div className="w-14 h-[2px] bg-amber-400 mt-8 mb-10" />

                <div className="space-y-8 text-neutral-400 text-lg leading-relaxed max-w-xl">
                  <p>
                    Se trata de que quien entra entienda lo que haces,
                    confíe en ti y tenga claro por qué elegirte.
                  </p>

                  <p>
                    Cada decisión en el diseño, en la estructura y en el contenido
                    tiene un objetivo: que tu web funcione.
                  </p>
                </div>
              </div>

              {/* ========= DERECHA ========= */}
              <div className="col-span-7 flex flex-col gap-6">
                <AboutCard
                  icon="person"
                  title="Trabajo directo, sin intermediarios"
                  text="Tratas conmigo de principio a fin. Comunicación clara, rápida y sin capas."
                />

                <AboutCard
                  icon="list"
                  title="Sin procesos innecesarios"
                  text="Lo importante es el resultado. Simplifico el proceso para que todo fluya."
                />

                <AboutCard
                  icon="target"
                  title="Cada decisión tiene un porqué"
                  text="No diseño por gusto. Diseño con intención y criterio."
                />
              </div>
            </div>
          </div>
        </Section>

        {/* ================= MI EXPERIENCIA ================= */}
        <Section variant="default">
          <div className="-mt-8 md:-mt-12">
            <div className="grid grid-cols-12 gap-20 items-center">
              {/* ========= IZQUIERDA ========= */}
              <div className="col-span-5">
                <p className="text-sm tracking-[0.22em] text-amber-400 uppercase mb-8">
                  MI EXPERIENCIA
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                  He visto muchas webs
                  <br />
                  que no funcionan.
                </h2>

                <div className="w-14 h-[2px] bg-amber-400 mt-8 mb-10" />

                <div className="space-y-8 text-neutral-400 text-lg leading-relaxed max-w-xl">
                  <p>
                    No porque estén mal diseñadas, sino porque no comunican bien.
                  </p>

                  <p>
                    Ahí es donde pongo el foco.
                  </p>
                </div>
              </div>

              {/* ========= DERECHA IMAGEN ========= */}
              <div className="col-span-7 relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/about-experience.png"
                    alt=""
                    className="w-full h-[420px] object-cover opacity-90"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ================= CTA SOBRE MÍ ================= */}
        <Section variant="default">
          <div className="-mt-8 md:-mt-12">
            <div
              className="
                relative overflow-hidden rounded-2xl
                border border-white/10
                bg-neutral-900/30
                px-10 md:px-14 py-14
                flex items-center justify-between gap-12
              "
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

              <div>
                <p className="text-xs tracking-[0.22em] text-amber-400 uppercase mb-6">
                  ¿TE ENCAJA?
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                  Si encaja contigo,
                  <br />
                  hablemos.
                </h2>

                <p className="mt-6 text-neutral-400 leading-relaxed max-w-lg">
                  Cuéntame tu proyecto y vemos cómo puedo ayudarte
                  a llevar tu web al nivel que tu negocio necesita.
                </p>
              </div>

              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-3
                  px-10 py-4 rounded-full
                  text-sm font-medium
                  border border-amber-400/30
                  text-white
                  transition-all duration-300
                  hover:bg-amber-400 hover:text-black
                  shadow-[0_0_25px_rgba(251,191,36,0.12)]
                  shrink-0
                "
              >
                Contactar →
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

type AboutCardProps = {
  icon: "person" | "list" | "target";
  title: string;
  text: string;
};

function AboutCard({ icon, title, text }: AboutCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-neutral-900/40
        px-10 py-8
        flex items-center gap-8
        transition-all duration-300
        hover:border-amber-400/30
        hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]
      "
    >
      <div className="text-amber-400 shrink-0">
        <AboutIcon type={icon} />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-neutral-400 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

function AboutIcon({ type }: { type: AboutCardProps["icon"] }) {
  if (type === "person") {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" />
        <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
      </svg>
    );
  }

  if (type === "list") {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8 6h12M8 12h12M8 18h12" />
        <path d="M4 6h.01M4 12h.01M4 18h.01" />
      </svg>
    );
  }

  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  );
}