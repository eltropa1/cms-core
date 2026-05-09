import { useNavigate } from "react-router-dom"

import { usePosts } from "@/features/posts/hooks/usePosts"
import { useDeletePost } from "@/features/posts/hooks/useDeletePost"
import { usePublishPost } from "@/features/posts/hooks/usePublishPost"
import { useArchivePost } from "@/features/posts/hooks/useArchivePost"

import { PostsTable } from "@/features/posts/components/PostsTable"
import type { Post } from "@/features/posts/types"

export default function PostsPage() {

  const navigate = useNavigate()

  const { data, isLoading } = usePosts()

  const deletePost = useDeletePost()
  const publishPost = usePublishPost()
  const archivePost = useArchivePost()

  if (isLoading) return <div>Loading...</div>

  return (

    <div className="p-6">

      <div className="flex justify-between mb-4">

        <h1 className="text-xl">Posts</h1>

        <button
          onClick={() => navigate("/posts/new")}
          className="bg-black text-white px-3 py-2"
        >
          New Post
        </button>

      </div>

      <PostsTable
        posts={data ?? []}

        onEdit={(post: Post) =>
          navigate(`/posts/${post.id}`)
        }

        onDelete={(post: Post) =>
          deletePost.mutate(post.id)
        }

        onPublish={(post: Post) =>
          publishPost.mutate(post.id)
        }

        onArchive={(post: Post) =>
          archivePost.mutate(post.id)
        }
      />

    </div>
  )
}