import { httpClient } from "@/api/httpClient"
import { endpoints } from "@/api/endpoints"
import type { Post } from "../types"

export async function getPosts(): Promise<Post[]> {
  return httpClient<Post[]>(endpoints.posts.list)
}

export async function getPost(id: string): Promise<Post> {
  return httpClient<Post>(endpoints.posts.byId(id))
}

export async function createPost(data: {
  id: string
  title: string
  slug: string
  content: any
}): Promise<Post> {

  return httpClient<Post>(endpoints.posts.list, {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export async function updatePost(
  id: string,
  data: {
    title: string
    slug: string
  }
): Promise<Post> {

  return httpClient<Post>(endpoints.posts.byId(id), {
    method: "PUT",
    body: JSON.stringify(data)
  })
}

export async function deletePost(id: string): Promise<void> {

  return httpClient<void>(endpoints.posts.byId(id), {
    method: "DELETE"
  })
}

export async function publishPost(id: string): Promise<Post> {

  return httpClient<Post>(`${endpoints.posts.byId(id)}/publish`, {
    method: "POST"
  })
}

export async function archivePost(id: string): Promise<Post> {

  return httpClient<Post>(`${endpoints.posts.byId(id)}/archive`, {
    method: "POST"
  })
}