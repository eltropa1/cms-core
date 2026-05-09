import { Section } from "@/components/layout/Section";

const principles = [
  {
    title: "Escucha real",
    description:
      "Cada proceso empieza entendiendo tu situación, no aplicando respuestas automáticas.",
  },
  {
    title: "Sin juicios",
    description: "No necesitas explicarte perfecto para empezar a hablar.",
  },
  {
    title: "Un proceso claro",
    description:
      "La terapia también puede sentirse estable, clara y acompañada.",
  },
];

export default function ApproachBlock() {
  return (
    <Section variant="compact">
      <div className="border-y border-[#BFAF9E]/45 py-12 md:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="max-w-[12ch] text-[36px] font-normal leading-[1.08] text-[#2F2B25] sm:text-5xl lg:text-[58px]">
              La terapia no consiste en tener respuestas rápidas.
            </h2>
            <div className="mt-8 h-px w-28 bg-[#8B7B6B]/55" />
          </div>

          <div className="max-w-[680px] lg:pt-3">
            <p className="text-[18px] leading-8 text-[#5F574D] md:text-[19px] md:leading-9">
              A veces lo importante no es solucionar todo de inmediato, sino
              encontrar un espacio donde poder entender lo que te está pasando
              sin sentirte juzgado.
            </p>
            <p className="mt-7 text-[17px] leading-8 text-[#6D6358] md:text-[18px]">
              Trabajamos desde una terapia cercana, clara y adaptada a tu
              momento personal.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-0 border-t border-[#BFAF9E]/40 md:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className={`py-7 md:px-7 md:py-8 ${
                index === 0 ? "md:pl-0" : "border-t border-[#BFAF9E]/35 md:border-l md:border-t-0"
              }`}
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#6F7C6B]">
                {principle.title}
              </p>
              <p className="mt-4 max-w-[18rem] text-[15px] leading-7 text-[#62594F]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
