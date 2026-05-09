/**
 * Navigation domain (frontend)
 * -------------------------------------------------------
 * Representa un item de navegación ya resuelto.
 * No contiene lógica, solo datos listos para render.
 */
export type NavigationItem = {
  label: string;
  href: string;
};