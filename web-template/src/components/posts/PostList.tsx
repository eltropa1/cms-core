import { PostListItem } from "@/types/post";
import { PostCard } from "./PostCard";

type Props = {
  posts: PostListItem[];
};

export function PostList({ posts }: Props) {
  return (
    <section className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}