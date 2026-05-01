import { FastifyInstance } from "fastify";
import { PostController } from "../controllers/postController.js";

export async function postRoutes(server: FastifyInstance) {
  const controller = new PostController();

  server.post("/posts", controller.create.bind(controller));

  server.get("/posts", controller.listPublished.bind(controller));

  server.get("/posts/:id", controller.getById.bind(controller));

  server.get("/posts/slug/:slug", controller.getBySlug.bind(controller));

  server.patch(
    "/posts/:id/title",
    controller.updateTitle.bind(controller)
  );

  server.patch(
    "/posts/:id/content",
    controller.updateContent.bind(controller)
  );

  server.patch(
    "/posts/:id/description",
    controller.updateDescription.bind(controller)
  );

  server.post(
    "/posts/:id/publish",
    controller.publish.bind(controller)
  );

  server.post(
    "/posts/:id/archive",
    controller.archive.bind(controller)
  );

  server.delete(
    "/posts/:id",
    controller.delete.bind(controller)
  );

  server.put(
    "/posts/:id/categories",
    controller.assignCategories.bind(controller)
  );
}