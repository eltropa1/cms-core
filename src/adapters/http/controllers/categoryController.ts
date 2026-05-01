import { FastifyReply, FastifyRequest } from "fastify";

import {
  createCategoryBodySchema,
  getCategoryByIdParamsSchema,
  getCategoryBySlugParamsSchema,
  updateCategoryBodySchema,
  categoryByIdParamsSchema,
} from "../schemas/categorySchemas.js";

import {
  serializeCategory,
  serializeCategoryList,
} from "../serializers/categorySerializer.js";

import {
  CreateCategory,
  GetCategoryById,
  GetCategoryBySlug,
  ListCategories,
  UpdateCategory,
  DeleteCategory,
} from "../../../index.js";

/**
 * Controller responsible for Category HTTP operations.
 */
export class CategoryController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const body = createCategoryBodySchema.parse(request.body);

    const repo = request.server.cmsRepositories.categoryRepository;

    const useCase = new CreateCategory(repo);

    const category = await useCase.execute(body);

    reply.status(201).send(serializeCategory(category));
  }

  async getById(request: FastifyRequest, reply: FastifyReply) {
    const params = getCategoryByIdParamsSchema.parse(request.params);

    const repo = request.server.cmsRepositories.categoryRepository;

    const useCase = new GetCategoryById(repo);

    const category = await useCase.execute(params);

    if (!category) {
      reply.status(404).send();
      return;
    }

    reply.send(serializeCategory(category));
  }

  async getBySlug(request: FastifyRequest, reply: FastifyReply) {
    const params = getCategoryBySlugParamsSchema.parse(request.params);

    const repo = request.server.cmsRepositories.categoryRepository;

    const useCase = new GetCategoryBySlug(repo);

    const category = await useCase.execute(params);

    if (!category) {
      reply.status(404).send();
      return;
    }

    reply.send(serializeCategory(category));
  }

  async list(_request: FastifyRequest, reply: FastifyReply) {
    const repo = _request.server.cmsRepositories.categoryRepository;

    const useCase = new ListCategories(repo);

    const categories = await useCase.execute();

    reply.send(serializeCategoryList(categories));
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
  const params = categoryByIdParamsSchema.parse(request.params);
  const body = updateCategoryBodySchema.parse(request.body);

  const repo = request.server.cmsRepositories.categoryRepository;
  const useCase = new UpdateCategory(repo);

  await useCase.execute({
    id: params.id,
    ...body,
  });

  reply.status(204).send();
}
  async delete(request: FastifyRequest, reply: FastifyReply) {
    const params = categoryByIdParamsSchema.parse(request.params);

    const repo = request.server.cmsRepositories.categoryRepository;

    const useCase = new DeleteCategory(repo);

    await useCase.execute(params);

    reply.status(204).send();
  }
}