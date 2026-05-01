import Fastify, { FastifyInstance } from "fastify";
import { httpErrorHandler } from "../errors/httpErrorHandler.js";
import repositoriesPlugin from "../plugins/repositoriesPlugin.js";
import { postRoutes } from "../routes/postRoutes.js";
import { categoryRoutes } from "../routes/categoryRoutes.js";
import cors from "@fastify/cors";

/**
 * Creates and configures the Fastify HTTP server.
 *
 * IMPORTANT:
 * - This file wires HTTP-level concerns only.
 * - It does not execute business logic.
 * - Routes and controllers will be registered in later steps.
 */
export async function createServer(): Promise<FastifyInstance> {
  const server = Fastify({
    logger: true,
  });

  await server.register(cors, {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  /**
   * Register infrastructure dependencies exposed to the HTTP layer.
   */
  await server.register(repositoriesPlugin);

  /**
   * Register the global HTTP error handler.
   */
  server.setErrorHandler(httpErrorHandler);

  /**
   * Register rutas para Post y Category.
   */
  server;
  await server.register(postRoutes);
  await server.register(categoryRoutes);

  /**
   * Minimal health endpoint to verify server bootstrap.
   */
  server.get("/health", async () => {
    return {
      status: "ok",
    };
  });

  return server;
}
