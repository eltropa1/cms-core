export type PostStatus =
  | "draft"
  | "published"
  | "archived"

export type Post = {
  id: string
  title: string
  slug: string
  description: string
  content: any
  status: PostStatus
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}