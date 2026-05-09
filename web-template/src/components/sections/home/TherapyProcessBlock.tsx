import { Section } from "@/components/layout/Section";

const steps = [
  {
    number: "01",
    title: "Empezamos hablando",
    description:
      "La primera sesión es un espacio para entender qué estás viviendo y cómo te estás sintiendo, sin presión y sin necesidad de explicarlo todo perfectamente.",
  },
  {
    number: "02",
    title: "Vamos dando contexto",
    description:
      "A veces hay cosas que llevan mucho tiempo acumulándose. La terapia permite empezar a mirarlas con más claridad y menos exigencia.",
  },
  {
    number: "03",
    title: "Construimos un proceso estable",
    description:
      "Cada persona necesita tiempos distintos. El objetivo no es ir rápido, sino avanzar de una forma que tenga sentido para ti.",
  },
  {
    number: "04",
    title: "Creamos un espacio seguro",
    description:
      "La terapia también consiste en tener un lugar donde poder hablar sin sentir que tienes que sostenerlo todo constantemente.",
  },
];

export default function TherapyProcessBlock() {
  return (
    <Section variant="compact">
      <div className="grid gap-10 border-y border-[#BFAF9E]/40 py-12 md:py-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-16">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F7C6B]">
            Qué puedes esperar
          </p>
          <h2 className="mt-5 max-w-[12ch] text-[36px] font-normal leading-[1.08] text-[#302B25] sm:text-5xl lg:text-[58px]">
            La terapia no tiene por qué sentirse complicada.
          </h2>
          <p className="mt-7 max-w-[520px] text-[17px] leading-8 text-[#645B51]">
            Muchas personas llegan sin saber exactamente cómo empezar o qué
            decir. El proceso consiste precisamente en poder construir ese
            espacio poco a poco.
          </p>
        </div>

        <div className="lg:pt-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`grid gap-5 border-[#BFAF9E]/35 py-7 sm:grid-cols-[4.5rem_1fr] ${
                index === 0 ? "border-t" : "border-t"
              } ${index === steps.length - 1 ? "border-b" : ""}`}
            >
              <span className="text-[13px] font-semibold tracking-[0.16em] text-[#8A7A69]">
                {step.number}
              </span>
              <div>
                <h3 className="text-[24px] font-normal leading-[1.16] text-[#332E28]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#6A6055]">
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
