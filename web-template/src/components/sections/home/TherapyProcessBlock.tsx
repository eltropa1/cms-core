import { Section } from "@/components/layout/Section";

const steps = [
  {
    number: "01",
    title: "Me escribes",
    description:
      "Puedes contar brevemente qué necesitas o pedir una primera orientación.",
  },
  {
    number: "02",
    title: "Vemos si encaja",
    description:
      "Hablamos de tu situación y resolvemos dudas antes de empezar.",
  },
  {
    number: "03",
    title: "Empezamos el proceso",
    description:
      "Definimos un ritmo de sesiones claro, adaptado a tu momento.",
  },
];

export default function TherapyProcessBlock() {
  return (
    <Section variant="compact">
      <div id="proceso" className="grid gap-8 border-y border-[#BFAF9E]/40 py-9 md:py-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:py-12">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F7C6B]">
            Qué puedes esperar
          </p>
          <h2 className="mt-4 max-w-[13ch] text-[34px] font-normal leading-[1.08] text-[#302B25] sm:text-[44px] lg:text-[52px]">
            Un proceso sencillo desde el primer contacto.
          </h2>
          <p className="mt-5 max-w-[500px] text-[16px] leading-7 text-[#645B51]">
            La idea es que sepas qué va a pasar, cómo empezar y qué puedes
            esperar de las primeras sesiones.
          </p>
        </div>

        <div className="lg:pt-2">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`grid gap-4 border-[#BFAF9E]/35 py-5 sm:grid-cols-[4rem_1fr] ${
                index === 0 ? "border-t" : "border-t"
              } ${index === steps.length - 1 ? "border-b" : ""}`}
            >
              <span className="text-[13px] font-semibold tracking-[0.16em] text-[#8A7A69]">
                {step.number}
              </span>
              <div>
                <h3 className="text-[22px] font-normal leading-[1.16] text-[#332E28]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-[#6A6055]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
