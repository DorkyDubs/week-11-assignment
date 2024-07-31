import { db } from "@/db";

export async function generateMetadata({ params }) {
  const postId = params.postId;
  const { rows: posts } = await db.query(
    `SELECT posts.id, posts.title, posts.body, posts.created_at, users.name, 
      COALESCE(SUM(votes.vote), 0) AS vote_total
      FROM posts
      JOIN users ON posts.user_id = users.id
      LEFT JOIN votes ON votes.post_id = posts.id
      WHERE posts.id = $1
      GROUP BY posts.id, users.name
      LIMIT 1;`,
    [postId]
  );
  const post = posts[0];

  return {
    title: `${post.title}`,
    description: `${post.body}`,
  };
}
