import type { Post } from "../types"

type Props = {
  posts: Post[]
  onEdit: (post: Post) => void
  onDelete: (post: Post) => void
  onPublish: (post: Post) => void
  onArchive: (post: Post) => void
}

export function PostsTable({
  posts,
  onEdit,
  onDelete,
  onPublish,
  onArchive
}: Props) {

  return (

    <table className="w-full border">

      <thead>
        <tr className="border-b">

          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Slug</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Published</th>
          <th className="p-2 text-left">Updated</th>
          <th className="p-2 text-left">Actions</th>

        </tr>
      </thead>

      <tbody>

        {posts.map(post => (

          <tr key={post.id} className="border-b">

            <td className="p-2">{post.title}</td>

            <td className="p-2">{post.slug}</td>

            <td className="p-2">{post.status}</td>

            <td className="p-2">
              {post.publishedAt ?? "-"}
            </td>

            <td className="p-2">
              {post.updatedAt}
            </td>

            <td className="p-2 flex gap-2">

              <button
                onClick={() => onEdit(post)}
                className="text-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(post)}
                className="text-red-600"
              >
                Delete
              </button>

              <button
                onClick={() => onPublish(post)}
                className="text-green-600"
              >
                Publish
              </button>

              <button
                onClick={() => onArchive(post)}
                className="text-orange-600"
              >
                Archive
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )
}