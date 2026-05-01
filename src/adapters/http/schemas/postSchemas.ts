import { z } from "zod";

/**
 * Shared schema for UUID-like identifiers.
 *
 * IMPORTANT:
 * We keep it as a non-empty string for now because
 * the current application layer only guarantees string IDs,
 * not a specific UUID value object.
 */
const postIdSchema = z.string().min(1, "Post id is required");

/**
 * Shared schema for slug values.
 */
const postSlugSchema = z.string().min(1, "Post slug is required");

/**
 * Shared schema for title values.
 */
const postTitleSchema = z.string().min(1, "Post title is required");

/**
 * Minimal content schema placeholder.
 *
 * We intentionally keep this permissive in this phase because:
 * - the domain already validates ContentDocument
 * - full HTTP contract for content blocks should be defined
 *   together with controllers/routes, not guessed prematurely
 */
const contentDocumentSchema = z.unknown();

/**
 * Route params for GET /posts/:id
 */
export const getPostByIdParamsSchema = z.object({
  id: postIdSchema,
});

/**
 * Route params for GET /posts/slug/:slug
 */
export const getPostBySlugParamsSchema = z.object({
  slug: postSlugSchema,
});

/**
 * Request body for future POST /posts
 */
export const createPostBodySchema = z.object({
  id: postIdSchema,
  title: postTitleSchema,
  description: z.string().min(1, "Post description is required"),
  content: contentDocumentSchema,
});

/**
 * Request body for future PATCH /posts/:id/title
 */
export const updatePostTitleBodySchema = z.object({
  title: postTitleSchema,
});

/**
 * Request body for future PATCH /posts/:id/content
 */
export const updatePostContentBodySchema = z.object({
  content: contentDocumentSchema,
});

/**
 * Route params for operations targeting a post by id.
 */
export const postByIdParamsSchema = z.object({
  id: postIdSchema,
});

/**
 * Request body for future PUT /posts/:id/categories
 */
export const assignCategoriesToPostBodySchema = z.object({
  categoryIds: z.array(z.string().min(1)).superRefine((value, ctx) => {
    const unique = new Set(value);

    if (unique.size !== value.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Category ids must be unique",
      });
    }
  }),
});

export type GetPostByIdParams = z.infer<typeof getPostByIdParamsSchema>;
export type GetPostBySlugParams = z.infer<typeof getPostBySlugParamsSchema>;
export type CreatePostBody = z.infer<typeof createPostBodySchema>;
export type UpdatePostTitleBody = z.infer<typeof updatePostTitleBodySchema>;
export type UpdatePostContentBody = z.infer<typeof updatePostContentBodySchema>;
export type PostByIdParams = z.infer<typeof postByIdParamsSchema>;
export type AssignCategoriesToPostBody = z.infer<
  typeof assignCategoriesToPostBodySchema
>;

export const updatePostDescriptionBodySchema = z.object({
  description: z.string().min(1, "Post description is required"),
});

export const updatePostDescriptionParamsSchema = z.object({
  id: postIdSchema,
});