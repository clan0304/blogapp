import { Post } from '@prisma/client';
import Main from './(home)/Main';
import { prisma } from './api/client';

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

export default async function Home() {
  const posts = await getPosts();

  const randomPosts = () => {
    let mainPost: Array<Post> = posts.sort(() => Math.random() - 0.5);
    let selectedPosts = mainPost.slice(0, 6);
    return selectedPosts;
  };

  const mainPost = randomPosts();

  return (
    <main>
      <Main mainPost={mainPost} />
    </main>
  );
}
