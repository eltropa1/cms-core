import { Section } from "@/components/layout/Section";

const states = [
  {
    title: "Te cuesta descansar incluso cuando paras",
    description:
      "Sientes que tu cabeza sigue funcionando incluso cuando intentas desconectar.",
    className: "lg:col-span-7",
  },
  {
    title: "Llevas demasiado tiempo sosteniendo todo",
    description:
      "Has aprendido a seguir funcionando, aunque emocionalmente estés agotado.",
    className: "lg:col-span-5 lg:mt-16",
  },
  {
    title: "Hay cosas que no sabes cómo explicar",
    description:
      "Notas ansiedad, bloqueo o malestar, pero ponerlo en palabras no siempre es sencillo.",
    className: "lg:col-span-5 lg:ml-10",
  },
  {
    title: "Te exiges más de lo que mostrarías a otros",
    description:
      "Muchas veces eres comprensivo con los demás, pero muy duro contigo mismo.",
    className: "lg:col-span-7 lg:mt-10",
  },
  {
    title: "Sientes que necesitas espacio mental",
    description:
      "No necesariamente respuestas rápidas. A veces solo un lugar donde poder ordenar lo que estás viviendo.",
    className: "lg:col-span-8 lg:col-start-3",
  },
];

export default function EmotionalStatesBlock() {
  return (
    <Section variant="compact">
      <div className="border-b border-[#BFAF9E]/35 pb-12 md:pb-14 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F7C6B]">
              A veces no es fácil ponerlo en palabras
            </p>
            <h2 className="mt-5 max-w-[13ch] text-[34px] font-normal leading-[1.08] text-[#302B25] sm:text-5xl lg:text-[56px]">
              Quizás reconoces alguna de estas sensaciones
            </h2>
          </div>

          <p className="max-w-[680px] text-[18px] leading-8 text-[#645B51] lg:pt-10">
            No siempre sabemos explicar exactamente lo que nos ocurre. A veces
            solo sentimos agotamiento, bloqueo o la sensación de estar
            sosteniendo demasiado tiempo cosas que pesan.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {states.map((state, index) => (
            <article
              key={state.title}
              className={`${state.className} border border-[#C8B9A7]/35 bg-[#F4ECE1]/55 px-7 py-8 md:px-9 md:py-9 ${
                index === 4 ? "lg:px-10" : ""
              }`}
            >
              <span className="mb-7 block h-px w-12 bg-[#8B7B6B]/45" />
              <h3 className="max-w-[18rem] text-[22px] font-normal leading-[1.18] text-[#332E28] md:text-[25px]">
                {state.title}
              </h3>
              <p className="mt-5 max-w-[27rem] text-[15px] leading-7 text-[#6A6055]">
                {state.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
