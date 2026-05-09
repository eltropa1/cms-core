import { Section } from "@/components/layout/Section";
import Image from "next/image";

export default function TherapistBlock() {
  return (
    <Section variant="compact">
      <div className="grid gap-8 border-y border-[#BFAF9E]/35 py-12 md:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-16">
        <div className="relative min-h-[520px] overflow-hidden bg-[#D8CCBD] md:min-h-[640px] lg:min-h-[720px]">
          <Image
            src="/demo-psychology/therapist.jpg"
            alt="Psicóloga"
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2D261F]/18 via-transparent to-white/6" />
        </div>

        <div className="flex flex-col justify-center lg:pl-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F7C6B]">
            Psicóloga
          </p>
          <h2 className="mt-5 max-w-[12ch] text-[36px] font-normal leading-[1.08] text-[#302B25] sm:text-5xl lg:text-[58px]">
            Quién te va a acompañar
          </h2>

          <p className="mt-7 max-w-[480px] text-[17px] leading-8 text-[#645B51]">
            Trabajo desde una terapia cercana, clara y adaptada a cada proceso
            personal.
          </p>

          <blockquote className="my-9 border-y border-[#BFAF9E]/40 py-8">
            <p className="max-w-[520px] text-[28px] font-normal leading-[1.18] text-[#332E28] md:text-[34px]">
              “No siempre necesitamos tener todo claro para empezar a hablar de
              lo que nos pasa.”
            </p>
          </blockquote>

          <p className="max-w-[500px] text-[16px] leading-8 text-[#6A6055]">
            La terapia también consiste en encontrar un lugar donde poder
            pensar, sentir y hablar sin exigencia constante.
          </p>
        </div>
      </div>
    </Section>
  );
}
