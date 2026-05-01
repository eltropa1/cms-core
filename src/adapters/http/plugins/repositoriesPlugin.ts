import fp from "fastify-plugin";
import { FastifyPluginAsync } from "fastify";

import { SqlPostRepository } from "../../../infrastructure/persistence/post/SqlPostRepository.js";
import { SqlCategoryRepository } from "../../../infrastructure/category/SqlCategoryRepository.js";
import { getPool } from "../../../infrastructure/db/connection.js";

/**
 * Repository container exposed to the HTTP layer.
 *
 * IMPORTANT:
 * - This is an adapter-level composition object.
 * - It does not belong to Domain or Application.
 * - It allows future controllers to resolve concrete repositories
 *   without coupling route handlers to infrastructure construction logic.
 */
export interface CmsRepositories {
  postRepository: SqlPostRepository;
  categoryRepository: SqlCategoryRepository;
}

declare module "fastify" {
  interface FastifyInstance {
    cmsRepositories: CmsRepositories;
  }
}

/**
 * Fastify plugin responsible for instantiating and exposing
 * repository implementations to the HTTP layer.
 *
 * IMPORTANT:
 * - This is infrastructure wiring only.
 * - No use cases are instantiated here yet.
 * - No route logic is introduced here.
 */
const repositoriesPlugin: FastifyPluginAsync = async (server) => {
  const pool = getPool();

  const repositories: CmsRepositories = {
    postRepository: new SqlPostRepository(pool),
    categoryRepository: new SqlCategoryRepository(pool),
  };

  server.decorate("cmsRepositories", repositories);
};

export default fp(repositoriesPlugin, {
  name: "repositories-plugin",
});