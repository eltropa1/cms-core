import { httpClient } from "@/api/httpClient"
import { endpoints } from "@/api/endpoints"
import type { Category } from "../types"

/**
 * Obtener todas las categorías
 */
export async function getCategories(): Promise<Category[]> {
  return httpClient<Category[]>(endpoints.categories.list)
}

/**
 * Crear categoría
 */
export async function createCategory(data: {
  name: string
  slug: string
}): Promise<Category> {

  return httpClient<Category>(endpoints.categories.list, {
    method: "POST",
    body: JSON.stringify(data)
  })
}

/**
 * Actualizar categoría
 */
export async function updateCategory(
  id: string,
  data: {
    name: string
    slug: string
  }
): Promise<Category> {

  return httpClient<Category>(endpoints.categories.byId(id), {
    method: "PUT",
    body: JSON.stringify(data)
  })
}

/**
 * Eliminar categoría
 */
export async function deleteCategory(id: string): Promise<void> {

  return httpClient<void>(endpoints.categories.byId(id), {
    method: "DELETE"
  })
}