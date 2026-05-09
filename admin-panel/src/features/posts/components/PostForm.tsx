import { useState } from "react";
import type { Post } from "../types";
import { PostContentEditor } from "./PostContentEditor";

type Props = {
  post?: Post;
  onSubmit: (data: {
    title: string;
    description: string;
    content: unknown; // ✅ no any
  }) => void;
};

export function PostForm({ post, onSubmit }: Props) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [description, setDescription] = useState(post?.description ?? "");
  const [content, setContent] = useState<unknown>(post?.content ?? null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const finalContent = content ?? {
          blocks: [
            {
              type: "paragraph",
              data: { text: "" },
            },
          ],
        };

        const mappedContent = {
          schemaVersion: 1,
          blocks: (finalContent as any).blocks.map((block: any) => ({
            // ⚠️ mantenemos UUID por ahora (aceptable)
            id: crypto.randomUUID(),
            type: block.type,
            data: block.data,
          })),
        };

        onSubmit({
          title,
          description,
          content: mappedContent,
        });
        setTitle("");
        setDescription("");
        setContent(null);
      }}
      className="flex flex-col gap-3 max-w-xl"
    >
      <input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />

      <textarea
        value={description}
        placeholder="Describe brevemente el contenido del post (SEO)"
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2"
        rows={3}
      />

      <PostContentEditor data={content} onChange={setContent} />

      <button type="submit" className="bg-black text-white p-2">
        Save
      </button>
    </form>
  );
}
