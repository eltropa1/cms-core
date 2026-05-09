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
};

export default function Navigation({ links }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 🔒 cerrar al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
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
        className="md:hidden text-gray-700"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        ☰
      </button>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* MOBILE LAYER */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />

        {/* PANEL */}
        <div
          className={`absolute top-16 right-4 w-56 bg-white border rounded-lg shadow-md z-50 transform transition-all duration-200 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col divide-y">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-sm text-neutral-300 hover:text-amber-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}