import { Section } from "@/components/layout/Section";

const messages = [
  "Sin presión ni compromiso",
  "Terapia presencial y online",
  "Respuesta personal y cercana",
];

export default function TherapyContactBlock() {
  return (
    <Section variant="compact">
      <div className="border-t border-[#BFAF9E]/35 pb-4 pt-12 md:pt-14 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F7C6B]">
              Contacto
            </p>
            <h2 className="mt-5 max-w-[12ch] text-[38px] font-normal leading-[1.08] text-[#302B25] sm:text-5xl lg:text-[60px]">
              Podemos tener una primera conversación.
            </h2>
            <p className="mt-7 max-w-[520px] text-[18px] leading-8 text-[#645B51]">
              No hace falta explicarlo perfecto. Puedes escribir con
              tranquilidad y te responderé personalmente.
            </p>

            <ul className="mt-9 divide-y divide-[#BFAF9E]/35 border-y border-[#BFAF9E]/35">
              {messages.map((message) => (
                <li
                  key={message}
                  className="py-4 text-[15px] font-medium text-[#62594F]"
                >
                  {message}
                </li>
              ))}
            </ul>
          </div>

          <form className="bg-[#F4ECE1]/55 p-6 md:p-8 lg:p-10">
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full border-0 border-b border-[#BFAF9E]/55 bg-transparent px-0 py-4 text-[15px] text-[#302B25] outline-none transition placeholder:text-[#8A7A69] focus:border-[#6F7C6B]"
              />
              <input
                type="text"
                placeholder="Email o teléfono"
                className="w-full border-0 border-b border-[#BFAF9E]/55 bg-transparent px-0 py-4 text-[15px] text-[#302B25] outline-none transition placeholder:text-[#8A7A69] focus:border-[#6F7C6B]"
              />
              <textarea
                placeholder="Mensaje"
                className="min-h-36 w-full resize-none border-0 border-b border-[#BFAF9E]/55 bg-transparent px-0 py-4 text-[15px] leading-7 text-[#302B25] outline-none transition placeholder:text-[#8A7A69] focus:border-[#6F7C6B]"
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center border-b border-[#6F7C6B] pb-2 text-[15px] font-semibold text-[#55624F] transition hover:border-[#3F493A] hover:text-[#3F493A]"
            >
              Escribir con tranquilidad
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
