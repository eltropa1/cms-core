import Link from "next/link";
import { PostListItem } from "@/types/post";

type Props = {
  post: PostListItem;
};

export function PostCard({ post }: Props) {
  return (
    <article className="border p-4 rounded">
  <Link href={`/posts/${post.slug}`} className="block">
    <h2 className="text-xl font-semibold">
      {post.title}
    </h2>

    <p className="text-sm text-gray-500">
      {new Date(post.publishedAt).toLocaleDateString()}
    </p>
  </Link>
</article>
  );
}