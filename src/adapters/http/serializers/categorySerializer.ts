import { Category } from "../../../domain/category/Category.js";

/**
 * HTTP representation of a Category.
 */
export interface CategoryResponse {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Converts a Category domain entity into a HTTP-safe DTO.
 */
export function serializeCategory(category: Category): CategoryResponse {
  return {
    id: category.id,
    name: category.getName(),
    slug: category.getSlug().toString(),
    description: category.getDescription(),

    createdAt: category.getCreatedAt().toISOString(),
    updatedAt: category.getUpdatedAt().toISOString(),
  };
}

/**
 * Serializes a list of categories.
 */
export function serializeCategoryList(
  categories: Category[]
): CategoryResponse[] {
  return categories.map(serializeCategory);
}