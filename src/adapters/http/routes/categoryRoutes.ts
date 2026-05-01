import { FastifyInstance } from "fastify";
import { CategoryController } from "../controllers/categoryController.js";

/**
 * Registers all HTTP routes related to categories.
 *
 * This layer only connects Fastify routes to controller methods.
 * No business logic should exist here.
 */
export async function categoryRoutes(server: FastifyInstance) {
  const controller = new CategoryController();

  /**
   * POST /categories
   */
  server.post("/categories", controller.create.bind(controller));

  /**
   * GET /categories
   */
  server.get("/categories", controller.list.bind(controller));

  /**
   * GET /categories/:id
   */
  server.get("/categories/:id", controller.getById.bind(controller));

  /**
   * GET /categories/slug/:slug
   */
  server.get("/categories/slug/:slug", controller.getBySlug.bind(controller));

  /**
   * PATCH /categories/:id
   */
  server.patch("/categories/:id", controller.update.bind(controller));

  /**
   * DELETE /categories/:id
   */
  server.delete("/categories/:id", controller.delete.bind(controller));
}