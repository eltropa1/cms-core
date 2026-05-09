/**
 * CMS API Client
 * -------------------------------------------------------
 * Cliente base para consumir la API del CMS Core.
 * Centraliza:
 * - Base URL
 * - Llamadas HTTP
 * - Manejo básico de errores
 * - Caching (Next.js)
 */

const BASE_URL = process.env.NEXT_PUBLIC_CMS_API_URL;

/**
 * Extensión tipada de RequestInit para soportar
 * opciones de Next.js (revalidate, tags, etc.)
 */
type CmsFetchOptions = RequestInit & {
  next?: {
    revalidate?: number;
    tags?: string[];
  };
};

/**
 * Wrapper genérico para peticiones HTTP
 */
export async function cmsFetch<T>(
  endpoint: string,
  options?: CmsFetchOptions
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,

    // ✅ Next.js caching (tipado)
    next: {
      revalidate: 60,
      tags: ["posts"],
      ...options?.next,
    },

    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  // Manejo de errores HTTP
  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `CMS API Error: ${response.status} - ${errorText}`
    );
  }

  // Parseo JSON tipado
  const data: T = await response.json();

  return data;
}