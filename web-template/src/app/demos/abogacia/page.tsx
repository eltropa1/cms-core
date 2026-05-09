import Link from "next/link";
import { siteConfig } from "@/config/site.config";

import LegalHeroBlock from "@/components/sections/home/LegalHeroBlock";
import { TrustBlock } from "@/components/sections/home/TrustBlock";
import { ProblemsBlock } from "@/components/sections/home/ProblemsBlock";
import { TreatmentsBlock } from "@/components/sections/home/TreatmentsBlock";
import { ProcessBlock } from "@/components/sections/home/ProcessBlock";
import { ResultsBlock } from "@/components/sections/home/ResultsBlock";
import { TeamBlock } from "@/components/sections/home/TeamBlock";
import { ContactBlock } from "@/components/sections/home/ContactBlock";

export default function DemoAbogaciaPage() {
  const home = siteConfig.demo?.abogacia?.home;

  if (!home) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-[#4A3D32]/70 bg-[#17130F]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-[#B8A895] sm:px-6 lg:px-8">
          <span>DEMO - Abogacía</span>
          <Link className="font-medium text-[#F1E6D6] hover:underline" href="/">
            Volver a mi web
          </Link>
        </div>
      </div>
      <div className="law-demo min-h-screen bg-[#17130F] pt-6 text-[#F1E6D6] [&_a]:text-[#C2A36E] [&_a:hover]:text-[#E8D3AA] [&_h1]:text-[#F3E8D8] [&_h2]:text-[#F3E8D8] [&_h3]:text-[#F0E2CF] [&_p]:text-[#BBAE9E]">
        <LegalHeroBlock {...home.hero} />
        <TrustBlock {...home.trust} />
        <ProblemsBlock {...home.problems} />
        <TreatmentsBlock {...home.treatments} />
        <ProcessBlock {...home.process} />
        <ResultsBlock {...home.results} />
        <TeamBlock {...home.team} />
        <ContactBlock {...home.contact} />
      </div>
      <style>{`
        .law-demo > section {
          padding-top: 6.5rem;
          padding-bottom: 6.5rem;
          background: #17130F;
        }

        .law-demo > section:first-child {
          padding-top: 0;
          padding-bottom: 0;
          background: #17130F;
        }

        .law-demo > section:nth-of-type(2),
        .law-demo > section:nth-of-type(5),
        .law-demo > section:nth-of-type(8) {
          background: #1D1712;
        }

        .law-demo > section:nth-of-type(3),
        .law-demo > section:nth-of-type(6) {
          background: #241B15;
        }

        .law-demo > section:nth-of-type(4),
        .law-demo > section:nth-of-type(7) {
          background: #191410;
        }

        .law-demo h1,
        .law-demo h2,
        .law-demo h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          letter-spacing: -0.018em;
        }

        .law-demo p,
        .law-demo li,
        .law-demo a,
        .law-demo span,
        .law-demo dd,
        .law-demo dt,
        .law-demo input,
        .law-demo textarea,
        .law-demo button {
          letter-spacing: 0;
        }

        .law-demo .bg-teal-900,
        .law-demo .bg-teal-50,
        .law-demo .bg-amber-50,
        .law-demo .bg-amber-100,
        .law-demo .bg-sky-50\\/70,
        .law-demo .bg-\\[\\#eaf6fb\\] {
          background-color: transparent;
        }

        .law-demo .bg-white,
        .law-demo .bg-neutral-100,
        .law-demo .bg-\\[\\#fffdf9\\],
        .law-demo .bg-\\[\\#fff8ec\\],
        .law-demo .bg-\\[\\#fff5e4\\],
        .law-demo .bg-\\[\\#fcfffd\\],
        .law-demo .bg-\\[\\#f5fbf8\\],
        .law-demo .bg-\\[\\#f7f8ff\\],
        .law-demo .bg-\\[\\#fffaf1\\] {
          background-color: transparent;
        }

        .law-demo .text-teal-800,
        .law-demo .text-teal-800\\/70,
        .law-demo .text-teal-900,
        .law-demo .text-teal-950,
        .law-demo .text-amber-900,
        .law-demo .text-amber-950,
        .law-demo .text-sky-900 {
          color: #C2A36E;
        }

        .law-demo .text-neutral-900,
        .law-demo .text-neutral-950 {
          color: #F3E8D8;
        }

        .law-demo .text-neutral-800,
        .law-demo .text-neutral-700,
        .law-demo .text-neutral-600,
        .law-demo .text-neutral-500,
        .law-demo .text-neutral-400,
        .law-demo .text-neutral-300 {
          color: #BBAE9E;
        }

        .law-demo .border-teal-100,
        .law-demo .border-teal-200,
        .law-demo .border-teal-200\\/80,
        .law-demo .border-teal-800\\/30,
        .law-demo .border-amber-200,
        .law-demo .border-amber-300,
        .law-demo .border-amber-300\\/80,
        .law-demo .border-sky-100,
        .law-demo .border-sky-200,
        .law-demo .border-neutral-300\\/70 {
          border-color: rgba(216, 203, 185, 0.18);
        }

        .law-demo .bg-teal-700\\/45,
        .law-demo .bg-teal-700\\/55,
        .law-demo .bg-teal-800,
        .law-demo .bg-amber-700 {
          background-color: rgba(194, 163, 110, 0.62);
        }

        .law-demo .shadow-\\[0_18px_48px_rgba\\(15\\,23\\,42\\,0\\.06\\)\\],
        .law-demo .shadow-\\[0_20px_58px_rgba\\(15\\,23\\,42\\,0\\.07\\)\\],
        .law-demo .shadow-\\[0_26px_74px_rgba\\(120\\,53\\,15\\,0\\.13\\)\\],
        .law-demo .shadow-\\[0_34px_100px_rgba\\(15\\,23\\,42\\,0\\.18\\)\\],
        .law-demo .shadow-\\[0_18px_48px_rgba\\(14\\,116\\,144\\,0\\.08\\)\\] {
          box-shadow: none;
        }

        .law-demo > section:nth-of-type(2) .mb-20,
        .law-demo > section:nth-of-type(4) .mb-20,
        .law-demo > section:nth-of-type(5) .mb-20,
        .law-demo > section:nth-of-type(6) .mb-20,
        .law-demo > section:nth-of-type(7) .mb-20 {
          margin-bottom: 5.75rem;
        }

        .law-demo > section:nth-of-type(2) .grid.border-y {
          border: 0;
          padding-top: 0;
          padding-bottom: 0;
        }

        .law-demo > section:nth-of-type(2) article {
          min-height: auto;
          padding-top: 0;
          padding-bottom: 0;
        }

        .law-demo > section:nth-of-type(2) article .size-10 {
          width: 1.75rem;
          height: 1.75rem;
          background: transparent;
          color: #C2A36E;
          border-radius: 0;
        }

        .law-demo > section:nth-of-type(2) article .mb-10 {
          margin-bottom: 2rem;
        }

        .law-demo > section:nth-of-type(3) article {
          border: 0;
          border-top: 1px solid rgba(216, 203, 185, 0.16);
          border-radius: 0;
          background: transparent;
          padding: 3.25rem 0;
          transform: none;
        }

        .law-demo > section:nth-of-type(3) article:hover {
          background: transparent;
          transform: none;
          box-shadow: none;
        }

        .law-demo > section:nth-of-type(3) article > .pointer-events-none,
        .law-demo > section:nth-of-type(3) article .rounded-full.text-\\[12px\\] {
          display: none;
        }

        .law-demo > section:nth-of-type(3) article .size-14 {
          width: 2rem;
          height: 2rem;
          border: 0;
          border-radius: 0;
          box-shadow: none;
        }

        .law-demo > section:nth-of-type(3) .rounded-\\[1\\.25rem\\],
        .law-demo > section:nth-of-type(3) .rounded-\\[1\\.35rem\\] {
          border-radius: 0;
          background: transparent;
          box-shadow: none;
        }

        .law-demo > section:nth-of-type(4) .grid.gap-12 {
          gap: 5rem;
        }

        .law-demo > section:nth-of-type(4) article {
          min-height: auto;
          padding-top: 3rem;
          padding-bottom: 0;
          border-color: rgba(216, 203, 185, 0.18);
        }

        .law-demo > section:nth-of-type(4) article .size-12 {
          width: 2rem;
          height: 2rem;
          background: transparent;
          border-radius: 0;
        }

        .law-demo > section:nth-of-type(4) article span.text-\\[12px\\] {
          color: #C2A36E;
          letter-spacing: 0.08em;
        }

        .law-demo > section:nth-of-type(5) .border-y {
          padding-top: 3.75rem;
          padding-bottom: 3.75rem;
          border-color: rgba(216, 203, 185, 0.16);
        }

        .law-demo > section:nth-of-type(5) .size-12 {
          display: none;
        }

        .law-demo > section:nth-of-type(5) .relative.grid {
          gap: 5rem;
        }

        .law-demo > section:nth-of-type(5) .pointer-events-none {
          display: none;
        }

        .law-demo > section:nth-of-type(5) article .mb-8 {
          margin-bottom: 1.25rem;
        }

        .law-demo > section:nth-of-type(6) article {
          padding-top: 4rem;
          padding-bottom: 4rem;
          border-color: rgba(216, 203, 185, 0.16);
        }

        .law-demo > section:nth-of-type(6) .size-12 {
          display: none;
        }

        .law-demo > section:nth-of-type(6) .border-l {
          border-left: 0;
          padding-left: 0;
        }

        .law-demo > section:nth-of-type(6) blockquote {
          border-color: rgba(216, 203, 185, 0.16);
        }

        .law-demo > section:nth-of-type(7) article {
          border-color: rgba(216, 203, 185, 0.16);
          padding-top: 0;
          padding-bottom: 0;
        }

        .law-demo > section:nth-of-type(7) article > .relative.grid {
          background: transparent;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
        }

        .law-demo > section:nth-of-type(7) .lg\\:min-h-\\[520px\\] {
          min-height: 680px;
        }

        .law-demo > section:nth-of-type(7) img {
          filter: saturate(0.78) contrast(1.04) brightness(0.78);
        }

        .law-demo > section:nth-of-type(7) .bg-white\\/90 {
          display: none;
        }

        .law-demo > section:nth-of-type(7) blockquote {
          border-color: rgba(194, 163, 110, 0.42);
        }

        .law-demo > section:nth-of-type(8) .bg-neutral-950 {
          background: transparent;
          color: #F3E8D8;
          padding: 0;
          box-shadow: none;
        }

        .law-demo > section:nth-of-type(8) h2,
        .law-demo > section:nth-of-type(8) p,
        .law-demo > section:nth-of-type(8) li,
        .law-demo > section:nth-of-type(8) span {
          color: #F3E8D8 !important;
        }

        .law-demo > section:nth-of-type(8) .bg-white {
          background: transparent;
          padding: 0;
        }

        .law-demo > section:nth-of-type(8) input,
        .law-demo > section:nth-of-type(8) textarea {
          border-radius: 0;
          border-width: 0 0 1px 0;
          border-color: rgba(216, 203, 185, 0.2);
          background: transparent;
          padding-left: 0;
          padding-right: 0;
          box-shadow: none;
          color: #F3E8D8;
        }

        .law-demo > section:nth-of-type(8) button {
          border-radius: 0;
          border-width: 0 0 1px 0;
          background: transparent;
          padding-left: 0;
          padding-right: 0;
          color: #F3E8D8;
          border-color: rgba(194, 163, 110, 0.48);
        }

        @media (min-width: 1024px) {
          .law-demo > section {
            padding-top: 8.75rem;
            padding-bottom: 8.75rem;
          }

        }
      `}</style>
    </>
  );
}
