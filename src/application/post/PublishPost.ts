import { PostRepository } from "../../domain/post/PostRepository.js";
import { PostNotFoundError } from "../errors/PostErrors.js";
import { CacheInvalidationService } from "../ports/CacheInvalidationService.js";

export interface PublishPostInput {
  id: string;
}

export class PublishPost {
  constructor(
    private readonly repository: PostRepository,
    private readonly cacheInvalidation: CacheInvalidationService,
  ) {}

  async execute(input: PublishPostInput): Promise<void> {
    const post = await this.repository.findById(input.id);

    if (!post) {
      throw new PostNotFoundError(input.id);
    }

    post.publish();

    await this.repository.save(post);

    // 🔥 intención (no implementación)
    await this.cacheInvalidation.invalidatePosts();
  }
}
