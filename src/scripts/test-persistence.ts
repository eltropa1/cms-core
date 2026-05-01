import { Pool } from "pg";
import { SqlPostRepository } from "../infrastructure/persistence/post/SqlPostRepository.js";
import { Post } from "../domain/post/Post.js";
import { ContentDocument } from "../domain/content/ContentDocument.js";
import { ParagraphData } from "../domain/content/editorial/ParagraphData.js";

const pool = new Pool({
  host: "localhost",
  port: 5433,
  user: "cms",
  password: "cms",
  database: "cms_core",
});

const postRepo = new SqlPostRepository(pool);

async function main() {
  const content = new ContentDocument({
    schemaVersion: 1,
    blocks: [
      {
        id: "block-1",
        type: "paragraph",
        data: new ParagraphData({
          text: "Hello world from real PostgreSQL",
        }),
      },
    ],
  });

  const post = new Post({
    id: crypto.randomUUID(),
    title: "Mi primer post real",
    description: "Descripción de prueba del post",
    content,
  });

  post.publish();

  await postRepo.save(post);

  console.log("Post guardado correctamente.");

  await pool.end();
}

main().catch(console.error);