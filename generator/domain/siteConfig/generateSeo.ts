/**
 * Generate SEO description from basic inputs
 * -------------------------------------------------------
 * Produces a consistent, optimized description
 * based on site name and business type.
 */

export function generateSEODescription(
  name: string,
  businessType?: string
): string {
  if (businessType) {
    return `${name}: ${businessType} profesional con diseño optimizado, presencia clara y enfoque en resultados. Mejora tu visibilidad y consigue más clientes desde el primer momento.`;
  }

  return `${name}: solución profesional con diseño optimizado y enfoque en resultados. Mejora tu presencia online desde el primer momento.`;
}