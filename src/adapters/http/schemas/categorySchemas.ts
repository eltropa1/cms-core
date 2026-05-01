import { z } from "zod";

/**
 * Shared schema for category identifiers.
 *
 * We keep it as a generic non-empty string to stay aligned
 * with the current application contract.
 */
const categoryIdSchema = z.string().min(1, "Category id is required");

/**
 * Shared schema for category slug values.
 */
const categorySlugSchema = z.string().min(1, "Category slug is required");

/**
 * Shared schema for category name values.
 */
const categoryNameSchema = z.string().min(1, "Category name is required");

/**
 * Shared schema for optional category description.
 */
const categoryDescriptionSchema = z.string().optional();

/**
 * Route params for GET /categories/:id
 */
export const getCategoryByIdParamsSchema = z.object({
  id: categoryIdSchema,
});

/**
 * Route params for GET /categories/slug/:slug
 */
export const getCategoryBySlugParamsSchema = z.object({
  slug: categorySlugSchema,
});

/**
 * Request body for future POST /categories
 */
export const createCategoryBodySchema = z.object({
  id: categoryIdSchema,
  name: categoryNameSchema,
  slug: categorySlugSchema,
  description: categoryDescriptionSchema,
});

/**
 * Route params for operations targeting a category by id.
 */
export const categoryByIdParamsSchema = z.object({
  id: categoryIdSchema,
});

/**
 * Request body for future PATCH /categories/:id
 */
export const updateCategoryBodySchema = z.object({
  name: categoryNameSchema.optional(),
  slug: categorySlugSchema.optional(),
  description: categoryDescriptionSchema,
}).refine(
  (value) =>
    value.name !== undefined ||
    value.slug !== undefined ||
    value.description !== undefined,
  {
    message: "At least one field must be provided",
  }
);

export type GetCategoryByIdParams = z.infer<typeof getCategoryByIdParamsSchema>;
export type GetCategoryBySlugParams = z.infer<typeof getCategoryBySlugParamsSchema>;
export type CreateCategoryBody = z.infer<typeof createCategoryBodySchema>;
export type CategoryByIdParams = z.infer<typeof categoryByIdParamsSchema>;
export type UpdateCategoryBody = z.infer<typeof updateCategoryBodySchema>;