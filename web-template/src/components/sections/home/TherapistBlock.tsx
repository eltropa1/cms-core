import { Section } from "@/components/layout/Section";
import Image from "next/image";

export default function TherapistBlock() {
  return (
    <Section variant="compact">
      <div className="grid gap-8 border-y border-[#BFAF9E]/35 py-9 md:py-10 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-12">
        <div className="relative min-h-[380px] overflow-hidden bg-[#D8CCBD] md:min-h-[480px] lg:min-h-[560px]">
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
          <h2 className="mt-4 max-w-[12ch] text-[34px] font-normal leading-[1.08] text-[#302B25] sm:text-[44px] lg:text-[52px]">
            Quién te va a acompañar
          </h2>

          <p className="mt-5 max-w-[480px] text-[16px] leading-7 text-[#645B51]">
            Soy psicóloga y trabajo con personas que necesitan un espacio
            profesional para entender lo que están viviendo y avanzar con más
            claridad.
          </p>

          <blockquote className="my-7 border-y border-[#BFAF9E]/40 py-6">
            <p className="max-w-[500px] text-[24px] font-normal leading-[1.2] text-[#332E28] md:text-[30px]">
              “Puedes empezar aunque todavía no sepas explicar exactamente lo
              que te pasa.”
            </p>
          </blockquote>

          <p className="max-w-[500px] text-[15px] leading-7 text-[#6A6055]">
            La primera conversación sirve para conocernos, resolver dudas y ver
            qué tipo de acompañamiento puede ayudarte.
          </p>
        </div>
      </div>
    </Section>
  );
}
