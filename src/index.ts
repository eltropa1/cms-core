// Public API for cms-core
export const coreVersion = "1.0.0";

// --------------------
// Application: Post
// --------------------
export { CreatePost } from "./application/post/CreatePost.js";
export type { CreatePostInput } from "./application/post/CreatePost.js";

export { UpdatePostTitle } from "./application/post/UpdatePostTitle.js";
export type { UpdatePostTitleInput } from "./application/post/UpdatePostTitle.js";

export { UpdatePostContent } from "./application/post/UpdatePostContent.js";
export type { UpdatePostContentInput } from "./application/post/UpdatePostContent.js";

export { PublishPost } from "./application/post/PublishPost.js";
export type { PublishPostInput } from "./application/post/PublishPost.js";

export { ArchivePost } from "./application/post/ArchivePost.js";
export type { ArchivePostInput } from "./application/post/ArchivePost.js";

export { DeletePost } from "./application/post/DeletePost.js";
export type { DeletePostInput } from "./application/post/DeletePost.js";

export { AssignCategoriesToPost } from "./application/post/AssignCategoriesToPost.js";
export type { AssignCategoriesToPostInput } from "./application/post/AssignCategoriesToPost.js";

export { GetPostById } from "./application/post/GetPostById.js";
export type { GetPostByIdInput } from "./application/post/GetPostById.js";

export { GetPostBySlug } from "./application/post/GetPostBySlug.js";
export type { GetPostBySlugInput } from "./application/post/GetPostBySlug.js";

export { ListPublishedPosts } from "./application/post/ListPublishedPosts.js";

export { ListPostsByCategoryId } from "./application/post/ListPostsByCategoryId.js";
export type { ListPostsByCategoryIdInput } from "./application/post/ListPostsByCategoryId.js";

// --------------------
// Application: Category
// --------------------
export { CreateCategory } from "./application/category/CreateCategory.js";
export type { CreateCategoryInput } from "./application/category/CreateCategory.js";

export { UpdateCategory } from "./application/category/UpdateCategory.js";
export type { UpdateCategoryInput } from "./application/category/UpdateCategory.js";

export { DeleteCategory } from "./application/category/DeleteCategory.js";
export type { DeleteCategoryInput } from "./application/category/DeleteCategory.js";

export { GetCategoryById } from "./application/category/GetCategoryById.js";
export type { GetCategoryByIdInput } from "./application/category/GetCategoryById.js";

export { GetCategoryBySlug } from "./application/category/GetCategoryBySlug.js";
export type { GetCategoryBySlugInput } from "./application/category/GetCategoryBySlug.js";

export { ListCategories } from "./application/category/ListCategories.js";

// --------------------
// Domain: Repositories (interfaces)
// --------------------
export type { PostRepository } from "./domain/post/PostRepository.js";
export type { CategoryRepository } from "./domain/category/CategoryRepository.js";

// --------------------
// Domain: Useful Value Objects / Types
// --------------------
export { Slug } from "./domain/value-objects/Slug.js";
export { PublicationState } from "./domain/value-objects/PublicationState.js";

// --------------------
// Application Errors (typed)
// --------------------
export { ApplicationError } from "./application/errors/ApplicationError.js";
export { NotFoundError } from "./application/errors/NotFoundError.js";
export { ConflictError } from "./application/errors/ConflictError.js";
export {
  PostNotFoundError,
  PostSlugAlreadyExistsError,
} from "./application/errors/PostErrors.js";
export {
  CategoryNotFoundError,
  CategorySlugAlreadyExistsError,
  CategoryNameAlreadyExistsError,
} from "./application/errors/CategoryErrors.js";