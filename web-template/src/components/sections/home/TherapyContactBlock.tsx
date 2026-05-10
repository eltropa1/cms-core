import { Section } from "@/components/layout/Section";

const messages = [
  "Primera respuesta personal",
  "Terapia presencial y online",
  "Sin presión para decidir",
];

export default function TherapyContactBlock() {
  return (
    <Section variant="compact">
      <div className="border-t border-[#BFAF9E]/35 pb-4 pt-9 md:pt-10 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F7C6B]">
              Contacto
            </p>
            <h2 className="mt-4 max-w-[12ch] text-[34px] font-normal leading-[1.08] text-[#302B25] sm:text-[44px] lg:text-[52px]">
              Puedes escribir cuando lo necesites.
            </h2>
            <p className="mt-5 max-w-[500px] text-[16px] leading-7 text-[#645B51]">
              Cuéntame brevemente qué estás buscando y te responderé de forma
              personal. No hace falta tenerlo todo claro.
            </p>

            <ul className="mt-7 divide-y divide-[#BFAF9E]/35 border-y border-[#BFAF9E]/35">
              {messages.map((message) => (
                <li
                  key={message}
                  className="py-3.5 text-[15px] font-medium text-[#62594F]"
                >
                  {message}
                </li>
              ))}
            </ul>
          </div>

          <form className="bg-[#F4ECE1]/55 p-5 md:p-7 lg:p-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full border-0 border-b border-[#BFAF9E]/55 bg-transparent px-0 py-3.5 text-[15px] text-[#302B25] outline-none transition placeholder:text-[#8A7A69] focus:border-[#6F7C6B]"
              />
              <input
                type="text"
                placeholder="Email o teléfono"
                className="w-full border-0 border-b border-[#BFAF9E]/55 bg-transparent px-0 py-3.5 text-[15px] text-[#302B25] outline-none transition placeholder:text-[#8A7A69] focus:border-[#6F7C6B]"
              />
              <textarea
                placeholder="Mensaje"
                className="min-h-32 w-full resize-none border-0 border-b border-[#BFAF9E]/55 bg-transparent px-0 py-3.5 text-[15px] leading-7 text-[#302B25] outline-none transition placeholder:text-[#8A7A69] focus:border-[#6F7C6B]"
              />
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center border-b border-[#6F7C6B] pb-2 text-[15px] font-semibold text-[#55624F] transition hover:border-[#3F493A] hover:text-[#3F493A]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
