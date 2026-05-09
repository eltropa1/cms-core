import { Section } from "@/components/layout/Section";
import Image from "next/image";

const secondaryReflections = [
  {
    title: "La sensación de estar sosteniendo demasiado tiempo todo",
    description:
      "Muchas personas aprenden a seguir funcionando mientras emocionalmente llevan tiempo agotadas.",
  },
  {
    title: "Aprender a bajar la exigencia constante",
    description:
      "A veces somos capaces de comprender a los demás con mucha más suavidad que a nosotros mismos.",
  },
];

export default function ReflectionsBlock() {
  return (
    <Section variant="compact">
      <div className="border-y border-[#BFAF9E]/35 py-12 md:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F7C6B]">
              Reflexiones
            </p>
            <h2 className="mt-5 max-w-[14ch] text-[34px] font-normal leading-[1.08] text-[#302B25] sm:text-5xl lg:text-[56px]">
              Algunas lecturas sobre ansiedad, exigencia y bienestar emocional
            </h2>
          </div>

          <p className="max-w-[640px] text-[18px] leading-8 text-[#645B51] lg:pt-10">
            No siempre necesitamos respuestas inmediatas. A veces entender mejor
            lo que nos ocurre ya puede generar algo de alivio.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
          <article className="group">
            <div className="relative h-[360px] overflow-hidden bg-[#D8CCBD] md:h-[460px]">
              <Image
                src="/demo-psychology/reflections.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.015]"
                unoptimized
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2D261F]/22 via-transparent to-white/8" />
            </div>

            <div className="border-b border-[#BFAF9E]/40 bg-[#F4ECE1]/45 px-6 py-7 md:px-8 md:py-8">
              <span className="mb-6 block h-px w-14 bg-[#8B7B6B]/45" />
              <h3 className="max-w-[16ch] text-[30px] font-normal leading-[1.12] text-[#332E28] md:text-[38px]">
                Por qué a veces descansar no es suficiente
              </h3>
              <p className="mt-5 max-w-[560px] text-[16px] leading-8 text-[#6A6055]">
                El cansancio emocional no siempre desaparece simplemente
                parando. A veces necesitamos entender qué estamos sosteniendo
                internamente.
              </p>
            </div>
          </article>

          <div className="flex flex-col justify-end">
            {secondaryReflections.map((reflection, index) => (
              <article
                key={reflection.title}
                className={`border-[#BFAF9E]/40 py-8 ${
                  index === 0 ? "border-y" : "border-b"
                }`}
              >
                <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8A7A69]">
                  Lectura breve
                </p>
                <h3 className="max-w-[18rem] text-[24px] font-normal leading-[1.16] text-[#332E28]">
                  {reflection.title}
                </h3>
                <p className="mt-5 max-w-[420px] text-[15px] leading-7 text-[#6A6055]">
                  {reflection.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
