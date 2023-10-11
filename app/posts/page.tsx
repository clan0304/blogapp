import Image from 'next/image';
import { prisma } from '@/app/api/client';
import { Post } from '@prisma/client';
import Link from 'next/link';

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

const Posts = async () => {
  const posts: Array<Post> = await getPosts();

  return (
    <section className="w-full h-full mx-1 my-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col sm:flex-row w-full h-96 justify-center items-center gap-2 py-5 "
        >
          <div className="w-4/5 sm:w-1/2 h-full relative">
            <Image
              src={post?.image}
              alt="posts"
              sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
              style={{ objectFit: 'cover' }}
              fill
              priority
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full sm:w-1/5 text-center gap-1 ">
            <h3 className="text-lg">{post.title}</h3>
            <h4 className="line-clamp-2 w-4/5 sm:my-3">{post.content}</h4>
            <Link
              href={`https://blogapp-iota-inky.vercel.app/posts/${post.id}`}
            >
              <button className="sm:py-3 p-4 rounded-full bg-slate-100 text-black font-bold">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Posts;
