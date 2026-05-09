import { cmsFetch } from "@/api/cmsClient";
import { PostListItem } from "@/types/post";
import { PostList } from "@/components/posts/PostList";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site.config";

export function generateMetadata() {
  if (!siteConfig.modules.blog) {
    return {
      title: "Contenido no disponible",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: "Posts",
  };
}

export default async function PostsPage() {
  if (!siteConfig.modules.blog) {
    notFound();
  }

  const posts = await cmsFetch<PostListItem[]>("/posts");

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <PostList posts={posts} />
    </main>
  );
}
