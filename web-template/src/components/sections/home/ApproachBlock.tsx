import { Section } from "@/components/layout/Section";

const principles = [
  {
    title: "Primero hablamos",
    description:
      "La primera parte consiste en entender qué necesitas y cómo puedo ayudarte.",
  },
  {
    title: "Ritmo claro",
    description: "Avanzamos paso a paso, con objetivos comprensibles y sin prisa.",
  },
  {
    title: "Acompañamiento cercano",
    description:
      "Tendrás un espacio profesional, confidencial y fácil de seguir.",
  },
];

export default function ApproachBlock() {
  return (
    <Section variant="compact">
      <div className="border-y border-[#BFAF9E]/45 py-9 md:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <h2 className="max-w-[13ch] text-[34px] font-normal leading-[1.08] text-[#2F2B25] sm:text-[44px] lg:text-[52px]">
              Una forma clara y cercana de empezar terapia.
            </h2>
            <div className="mt-6 h-px w-24 bg-[#8B7B6B]/55" />
          </div>

          <div className="max-w-[640px] lg:pt-2">
            <p className="text-[17px] leading-8 text-[#5F574D] md:text-[18px]">
              Si estás pensando en pedir ayuda, no necesitas tenerlo todo
              ordenado. La primera conversación sirve para entender tu
              situación y ver si este espacio encaja contigo.
            </p>
            <p className="mt-5 text-[16px] leading-7 text-[#6D6358] md:text-[17px]">
              Trabajo de forma cercana, profesional y adaptada a tu momento,
              con una estructura sencilla desde el inicio.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-0 border-t border-[#BFAF9E]/40 md:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className={`py-6 md:px-6 md:py-7 ${
                index === 0 ? "md:pl-0" : "border-t border-[#BFAF9E]/35 md:border-l md:border-t-0"
              }`}
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#6F7C6B]">
                {principle.title}
              </p>
              <p className="mt-3 max-w-[18rem] text-[15px] leading-7 text-[#62594F]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
