"use client";

/**
 * Navigation component
 *
 * - Desktop: navegación horizontal
 * - Mobile: menú hamburguesa + overlay + panel fijo
 * - Estado local UI
 * - Cierre por:
 *    - click en link
 *    - cambio de ruta
 *    - click fuera (overlay)
 * - Scroll lock en mobile
 */

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { NavigationItem } from "@/types/navigation";

type NavigationProps = {
  links: NavigationItem[];
  siteName: string;
};

export default function Navigation({ links, siteName }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 🔒 cerrar al cambiar de ruta
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsOpen(false);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // 🔒 bloquear scroll cuando menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative">
      {/* MOBILE BUTTON */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          group
          inline-flex h-10 w-10 items-center justify-center
          rounded-[14px] border border-white/[0.09]
          bg-neutral-950/28 text-white/88
          shadow-[0_14px_38px_rgba(0,0,0,0.28)]
          backdrop-blur-md
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:border-amber-300/25 hover:bg-white/[0.045] hover:text-amber-100
          md:hidden
        "
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <span className="relative block h-3.5 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 h-px w-5 bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "w-0 opacity-0" : "w-5 opacity-100"
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex items-center gap-7">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/62 transition-colors duration-500 hover:text-amber-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* MOBILE LAYER */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/72 backdrop-blur-[3px]"
          onClick={() => setIsOpen(false)}
        />

        {/* PANEL */}
        <div
          className={`absolute inset-0 z-50 overflow-hidden bg-[rgba(6,6,6,0.94)] transform backdrop-blur-md transition-all duration-[760ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 80% 8%, rgba(251,191,36,0.08), transparent 44%), linear-gradient(to bottom, rgba(255,255,255,0.04), transparent 24%, rgba(0,0,0,0.42))",
            }}
          />

          <div className="pointer-events-none absolute inset-x-6 top-20 h-px bg-gradient-to-r from-amber-400/35 via-white/10 to-transparent" />

          <div className="relative flex h-full flex-col px-6 pb-10 pt-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="text-[15px] font-medium tracking-[0.08em] text-white/92"
              >
                {siteName}
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="
                  inline-flex h-10 w-10 items-center justify-center
                  rounded-[14px] border border-white/[0.09]
                  bg-white/[0.035] text-white/88
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:border-amber-300/25 hover:bg-white/[0.06] hover:text-amber-100
                "
                aria-label="Cerrar menú"
              >
                <span className="relative block h-5 w-5" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <div className="flex flex-1 items-center">
              <ul className="flex w-full flex-col gap-6">
                {links.map((link, index) => (
                  <li
                    key={link.label}
                    className={`transition-all duration-[680ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-3 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${120 + index * 55}ms` : "0ms",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="
                        group flex items-center justify-between
                        border-b border-white/[0.06] pb-5
                        text-[1rem] font-medium
                        tracking-[0.09em] text-white/92
                        transition-colors duration-500
                        hover:text-amber-300
                      "
                    >
                      <span>{link.label}</span>
                      <span className="h-px w-8 bg-amber-400/38 transition-all duration-500 group-hover:w-12 group-hover:bg-amber-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
              Webs con criterio, claridad y presencia.
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
