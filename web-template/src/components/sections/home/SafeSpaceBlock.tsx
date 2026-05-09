import { Section } from "@/components/layout/Section";
import Image from "next/image";

export default function SafeSpaceBlock() {
  return (
    <Section variant="compact">
      <div className="relative py-6 md:py-8 lg:py-10">
        <div className="relative min-h-[520px] overflow-hidden bg-[#D8CCBD] md:min-h-[620px] lg:min-h-[680px]">
          <Image
            src="/demo-psychology/space.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 1120px, 100vw"
            className="object-cover"
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#2A241D]/28 via-transparent to-[#F1E7DA]/20" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A241D]/24 via-transparent to-white/5" />
        </div>

        <div className="relative -mt-24 max-w-[560px] bg-[#F3EADF]/94 px-7 py-8 shadow-[0_22px_70px_rgba(69,58,46,0.12)] backdrop-blur-sm md:-mt-36 md:ml-10 md:px-9 md:py-10 lg:absolute lg:bottom-0 lg:left-12 lg:ml-0 lg:translate-y-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F7C6B]">
            El espacio también importa
          </p>
          <h2 className="mt-5 max-w-[12ch] text-[34px] font-normal leading-[1.08] text-[#302B25] sm:text-5xl">
            Un lugar tranquilo donde poder hablar sin sentir presión.
          </h2>
          <p className="mt-6 max-w-[430px] text-[16px] leading-8 text-[#645B51]">
            La terapia también consiste en encontrar un espacio donde poder
            parar, pensar y hablar desde otro lugar más calmado.
          </p>
        </div>
      </div>
    </Section>
  );
}
