import { FastifyReply, FastifyRequest } from "fastify";

import {
  getPostByIdParamsSchema,
  getPostBySlugParamsSchema,
  createPostBodySchema,
  updatePostTitleBodySchema,
  updatePostContentBodySchema,
  postByIdParamsSchema,
  assignCategoriesToPostBodySchema,
  updatePostDescriptionBodySchema,
  updatePostDescriptionParamsSchema,
} from "../schemas/postSchemas.js";

import {
  serializePost,
  serializePostList,
} from "../serializers/postSerializer.js";

import { CreatePost } from "../../../application/post/CreatePost.js";
import { GetPostById } from "../../../application/post/GetPostById.js";
import { GetPostBySlug } from "../../../application/post/GetPostBySlug.js";
import { ListPublishedPosts } from "../../../application/post/ListPublishedPosts.js";
import { UpdatePostTitle } from "../../../application/post/UpdatePostTitle.js";
import { UpdatePostContent } from "../../../application/post/UpdatePostContent.js";
import { PublishPost } from "../../../application/post/PublishPost.js";
import { ArchivePost } from "../../../application/post/ArchivePost.js";
import { DeletePost } from "../../../application/post/DeletePost.js";
import { AssignCategoriesToPost } from "../../../application/post/AssignCategoriesToPost.js";

import { UpdatePostDescription } from "../../../application/post/UpdatePostDescription.js";
import { ContentMapper } from "../../../application/content/ContentMapper.js";
import { NextRevalidationService } from "../../../infrastructure/cache/NextRevalidationService.js";

export class PostController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const body = createPostBodySchema.parse(request.body);

    const useCase = new CreatePost(
      request.server.cmsRepositories.postRepository
    );

    const content = ContentMapper.fromExternal(body.content);

    const post = await useCase.execute({
      id: body.id,
      title: body.title,
      description: body.description,
      content,
    });

    return reply.status(201).send(serializePost(post));
  }

  async getById(request: FastifyRequest, reply: FastifyReply) {
    const params = getPostByIdParamsSchema.parse(request.params);

    const useCase = new GetPostById(
      request.server.cmsRepositories.postRepository
    );

    const post = await useCase.execute({ id: params.id });

if (!post) {
  return reply.status(404).send();
}

return reply.send(serializePost(post));
  }

  async getBySlug(request: FastifyRequest, reply: FastifyReply) {
    const params = getPostBySlugParamsSchema.parse(request.params);

    const useCase = new GetPostBySlug(
      request.server.cmsRepositories.postRepository
    );

    const post = await useCase.execute({ slug: params.slug });

if (!post) {
  return reply.status(404).send();
}

return reply.send(serializePost(post));
  }

  async listPublished(request: FastifyRequest, reply: FastifyReply) {
    const useCase = new ListPublishedPosts(
      request.server.cmsRepositories.postRepository
    );

    const posts = await useCase.execute();

    return reply.send(serializePostList(posts));
  }

  async updateTitle(request: FastifyRequest, reply: FastifyReply) {
    const params = postByIdParamsSchema.parse(request.params);
    const body = updatePostTitleBodySchema.parse(request.body);

    const useCase = new UpdatePostTitle(
      request.server.cmsRepositories.postRepository
    );

    await useCase.execute({
      id: params.id,
      title: body.title,
    });

    return reply.status(204).send();
  }

  async updateContent(request: FastifyRequest, reply: FastifyReply) {
    const params = postByIdParamsSchema.parse(request.params);
    const body = updatePostContentBodySchema.parse(request.body);

    const useCase = new UpdatePostContent(
      request.server.cmsRepositories.postRepository
    );

    const content = ContentMapper.fromExternal(body.content);

    await useCase.execute({
      id: params.id,
      content,
    });

    return reply.status(204).send();
  }

  async updateDescription(request: FastifyRequest, reply: FastifyReply) {
    const params = updatePostDescriptionParamsSchema.parse(request.params);
    const body = updatePostDescriptionBodySchema.parse(request.body);

    const useCase = new UpdatePostDescription(
      request.server.cmsRepositories.postRepository
    );

    await useCase.execute({
      id: params.id,
      description: body.description,
    });

    return reply.status(204).send();
  }

  async publish(request: FastifyRequest, reply: FastifyReply) {
    const params = postByIdParamsSchema.parse(request.params);

    const useCase = new PublishPost(
  request.server.cmsRepositories.postRepository,
  new NextRevalidationService()
);

    await useCase.execute({ id: params.id });

    return reply.status(204).send();
  }

  async archive(request: FastifyRequest, reply: FastifyReply) {
    const params = postByIdParamsSchema.parse(request.params);

    const useCase = new ArchivePost(
      request.server.cmsRepositories.postRepository
    );

    await useCase.execute({ id: params.id });

    return reply.status(204).send();
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const params = postByIdParamsSchema.parse(request.params);

    const useCase = new DeletePost(
      request.server.cmsRepositories.postRepository
    );

    await useCase.execute({ id: params.id });

    return reply.status(204).send();
  }

  async assignCategories(request: FastifyRequest, reply: FastifyReply) {
    const params = postByIdParamsSchema.parse(request.params);
    const body = assignCategoriesToPostBodySchema.parse(request.body);

    const useCase = new AssignCategoriesToPost(
  request.server.cmsRepositories.postRepository,
  request.server.cmsRepositories.categoryRepository
);

    await useCase.execute({
  postId: params.id,
  categoryIds: body.categoryIds,
});

    return reply.status(204).send();
  }
}