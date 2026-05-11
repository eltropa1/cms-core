import Link from "next/link";
import { siteConfig } from "@/config/site.config";

import { HeroBlock } from "@/components/sections/home/HeroBlock";
import { TrustBlock } from "@/components/sections/home/TrustBlock";
import { ProblemsBlock } from "@/components/sections/home/ProblemsBlock";
import { TreatmentsBlock } from "@/components/sections/home/TreatmentsBlock";
import { ProcessBlock } from "@/components/sections/home/ProcessBlock";
import { ResultsBlock } from "@/components/sections/home/ResultsBlock";
import { TeamBlock } from "@/components/sections/home/TeamBlock";
import { ContactBlock } from "@/components/sections/home/ContactBlock";

export default function DemoDentalPage() {
  const home = siteConfig.demo?.dental?.home;

  if (!home) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-neutral-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs text-neutral-700 sm:px-6 lg:px-8">
          <span className="min-w-0 truncate">DEMO — Clínica dental</span>
          <Link className="shrink-0 font-medium text-neutral-900 hover:underline" href="/">
            Volver a mi web
          </Link>
        </div>
      </div>
      <div className="dental-demo min-h-screen bg-[#eef4f2] pt-8 text-neutral-900 [&_a]:text-teal-800 [&_a:hover]:text-teal-950 [&_h1]:text-neutral-900 [&_h2]:text-neutral-900 [&_h3]:text-neutral-950 [&_p]:text-neutral-700">
        <HeroBlock {...home.hero} />
        <div id="metodo">
          <TrustBlock {...home.trust} />
        </div>
        <div id="situaciones">
          <ProblemsBlock {...home.problems} />
        </div>
        <div id="tratamientos">
          <TreatmentsBlock {...home.treatments} />
        </div>
        <div id="proceso">
          <ProcessBlock {...home.process} />
        </div>
        <div id="resultados">
          <ResultsBlock {...home.results} />
        </div>
        <div id="equipo">
          <TeamBlock {...home.team} />
        </div>
        <ContactBlock {...home.contact} />
      </div>
      <style>{`
        body:has(.dental-demo) {
          background: #eef4f2;
          overflow-x: hidden;
        }

        .dental-demo {
          overflow-x: hidden;
        }

        .dental-demo * {
          min-width: 0;
        }

        .dental-demo > section,
        .dental-demo > div > section {
          padding-top: 4.25rem;
          padding-bottom: 4.25rem;
        }

        .dental-demo > section:first-child {
          padding-top: 2.25rem;
          padding-bottom: 3.75rem;
          background: linear-gradient(180deg, #eef4f2 0%, #f6f3ed 100%);
        }

        .dental-demo > div:nth-of-type(odd) > section {
          background: #f8faf8;
        }

        .dental-demo > div:nth-of-type(even) > section {
          background: #eef4f2;
        }

        .dental-demo > div:nth-of-type(3) > section,
        .dental-demo > div:nth-of-type(5) > section {
          background: #fbf8f1;
        }

        .dental-demo > section:last-child {
          background: #e5eeeb;
        }

        .dental-demo > section:first-child .min-h-\\[860px\\] {
          min-height: 720px;
          gap: 4rem;
        }

        .dental-demo > section:first-child h1 {
          max-width: 14.75ch;
          font-size: clamp(2.85rem, 5vw, 4.3rem);
          letter-spacing: 0;
        }

        .dental-demo > section:first-child h1 + p {
          margin-top: 2rem;
          max-width: 34rem;
          font-size: 1.0625rem;
          line-height: 1.9rem;
        }

        .dental-demo > section:first-child ul {
          margin-top: 2.25rem;
          display: grid;
          gap: 0.75rem;
          border-left-color: rgba(13, 85, 82, 0.28);
          background: rgba(255, 255, 255, 0.54);
          padding: 1.1rem 1.25rem;
          box-shadow: 0 14px 44px rgba(15, 23, 42, 0.06);
        }

        .dental-demo > section:first-child ul + div {
          margin-top: 2rem;
        }

        .dental-demo > section:first-child a:first-child,
        .dental-demo > section:last-child a:first-of-type {
          border-radius: 0.6rem;
          box-shadow: 0 16px 36px rgba(13, 85, 82, 0.18);
        }

        .dental-demo > section:first-child a:last-child {
          border-bottom: 1px solid rgba(13, 85, 82, 0.34);
          padding-left: 0;
          padding-right: 0;
        }

        .dental-demo > section:first-child .h-\\[420px\\],
        .dental-demo > section:first-child .lg\\:h-\\[720px\\] {
          border: 1px solid rgba(13, 85, 82, 0.16);
          box-shadow: 0 26px 72px rgba(15, 23, 42, 0.14);
        }

        .dental-demo .mb-20 {
          margin-bottom: 3.25rem;
        }

        .dental-demo .mb-12 {
          margin-bottom: 2.25rem;
        }

        .dental-demo h2 {
          letter-spacing: 0;
        }

        .dental-demo p,
        .dental-demo li {
          overflow-wrap: break-word;
        }

        .dental-demo h2 + p,
        .dental-demo [class*="border-l"] > p {
          color: #223633;
        }

        .dental-demo article {
          scroll-margin-top: 5rem;
        }

        .dental-demo .rounded-\\[1\\.5rem\\],
        .dental-demo .rounded-\\[1\\.35rem\\],
        .dental-demo .rounded-\\[1\\.25rem\\],
        .dental-demo .rounded-\\[1\\.1rem\\],
        .dental-demo .rounded-2xl {
          border-radius: 0.65rem;
        }

        .dental-demo > div:nth-of-type(1) .grid.border-y {
          border: 1px solid rgba(13, 85, 82, 0.16);
          background: #ffffff;
          padding: 0;
          box-shadow: 0 18px 54px rgba(15, 23, 42, 0.06);
        }

        .dental-demo > div:nth-of-type(1) article {
          min-height: 250px;
          padding: 1.75rem;
          border-right: 1px solid rgba(13, 85, 82, 0.12);
        }

        .dental-demo > div:nth-of-type(1) article:last-child {
          border-right: 0;
        }

        .dental-demo > div:nth-of-type(2) article,
        .dental-demo > div:nth-of-type(3) article {
          border-radius: 0.75rem;
          border-width: 1px;
          background: #ffffff;
          padding: 1.75rem;
          box-shadow: 0 18px 48px rgba(15, 23, 42, 0.07);
        }

        .dental-demo > div:nth-of-type(2) article h3 {
          max-width: 22rem;
        }

        .dental-demo > div:nth-of-type(3) .grid.gap-12 {
          gap: 1.25rem;
        }

        .dental-demo > div:nth-of-type(3) article {
          min-height: 390px;
          display: flex;
          flex-direction: column;
        }

        .dental-demo > div:nth-of-type(3) article a {
          margin-top: auto;
          width: fit-content;
          border-bottom: 1px solid currentColor;
          padding-bottom: 0.2rem;
        }

        .dental-demo > div:nth-of-type(4) .border-y {
          border: 1px solid rgba(13, 85, 82, 0.16);
          background: #ffffff;
          padding: 1.5rem;
          box-shadow: 0 18px 54px rgba(15, 23, 42, 0.06);
        }

        .dental-demo > div:nth-of-type(4) article {
          border-left: 3px solid rgba(13, 85, 82, 0.28);
          background: #f8faf8;
          padding: 1.25rem;
        }

        .dental-demo > div:nth-of-type(4) .pointer-events-none {
          display: none;
        }

        .dental-demo > div:nth-of-type(5) article {
          border: 1px solid rgba(13, 85, 82, 0.16);
          background: #ffffff;
          padding: 1.75rem;
          box-shadow: 0 18px 48px rgba(15, 23, 42, 0.06);
        }

        .dental-demo > div:nth-of-type(5) article + article {
          margin-top: 0.75rem;
        }

        .dental-demo > div:nth-of-type(5) .border-l {
          border-color: rgba(13, 85, 82, 0.18);
        }

        .dental-demo > div:nth-of-type(6) article {
          border: 1px solid rgba(13, 85, 82, 0.16);
          background: #ffffff;
          padding: 0;
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.08);
        }

        .dental-demo > div:nth-of-type(6) article > .relative.grid {
          border: 0;
        }

        .dental-demo > div:nth-of-type(6) .bg-white\\/90 {
          border: 1px solid rgba(13, 85, 82, 0.18);
          color: #0d5552;
        }

        .dental-demo > div:nth-of-type(6) blockquote {
          border-left-width: 3px;
        }

        .dental-demo > section:last-child .bg-neutral-950 {
          border-radius: 0.9rem;
          background: #123b39;
          box-shadow: 0 26px 72px rgba(15, 23, 42, 0.18);
        }

        .dental-demo > section:last-child .bg-white {
          border-radius: 0.75rem;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
        }

        .dental-demo > section:last-child input,
        .dental-demo > section:last-child textarea {
          border-radius: 0.55rem;
          background: #f8faf8;
        }

        .dental-demo > section:last-child button {
          border-radius: 0.55rem;
          background: #0f766e;
          color: white;
        }

        @media (max-width: 767px) {
          .dental-demo > section,
          .dental-demo > div > section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .dental-demo > section:first-child {
            padding-top: 1.5rem;
            padding-bottom: 2.5rem;
          }

          .dental-demo > section:first-child .min-h-\\[860px\\] {
            min-height: auto;
            gap: 2.25rem;
          }

          .dental-demo > section:first-child ul {
            padding: 1rem;
          }

          .dental-demo > section:first-child .h-\\[420px\\] {
            height: 420px;
          }

          .dental-demo > section:first-child a {
            width: 100%;
          }

          .dental-demo > div:nth-of-type(1) article {
            border-right: 0;
            border-bottom: 1px solid rgba(13, 85, 82, 0.12);
          }

          .dental-demo > div:nth-of-type(1) article:last-child {
            border-bottom: 0;
          }

          .dental-demo > div:nth-of-type(5) .border-l {
            border-left: 0;
            padding-left: 0;
          }
        }

        @media (min-width: 1024px) {
          .dental-demo > section,
          .dental-demo > div > section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }

          .dental-demo > section:first-child {
            padding-top: 2.25rem;
            padding-bottom: 4.25rem;
          }

          .dental-demo > div:nth-of-type(4) .relative.grid {
            gap: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
