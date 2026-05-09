import { useParams, useNavigate } from "react-router-dom";

import { usePost } from "@/features/posts/hooks/usePost";
import { useCreatePost } from "@/features/posts/hooks/useCreatePost";
import { useUpdatePost } from "@/features/posts/hooks/useUpdatePost";

import { PostForm } from "@/features/posts/components/PostForm";

import { toast } from "sonner";

import { PostContentRenderer } from "@/features/posts/components/PostContentRenderer";
import { useState } from "react";

export default function PostEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: post } = usePost(id ?? "");
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  const isNew = !id;

  const [preview, setPreview] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">{isNew ? "New Post" : "Edit Post"}</h1>
      <button onClick={() => setPreview(!preview)}>Preview</button>

      <PostForm
        post={post}
        onSubmit={(data) => {
          if (isNew) {
            createPost.mutate(
              {
                ...data,
                id: crypto.randomUUID(),
              },
              {
                onSuccess: (p) => {
                  toast.success("Post created");
                  navigate(`/posts/${p.id}`);
                },
              },
            );
          } else {
            updatePost.mutate({
              id: id!,
              ...data,
            });
          }
        }}
      />
    </div>
  );
}
