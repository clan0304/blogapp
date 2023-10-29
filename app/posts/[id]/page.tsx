import { prisma } from '@/app/api/client';
import { Post } from '@prisma/client';
import Image from 'next/image';

type Props = {
  params: { id: string };
};

const getPost = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post is not found!`);
    return null;
  }
  return post;
};

const page = async ({ params }: Props) => {
  const { id } = params;
  const post: Post | null = await getPost(id);

  if (!post) {
    return <div>Post is not found!</div>;
  }
  return (
    <section className="flex flex-col gap-3 px-5 py-10 items-center w-full h-full">
      <div>
        <h4 className="text-4xl font-bold pb-10">{post.title}</h4>
      </div>
      <div className="w-full sm:w-2/3 h-[400px] relative">
        <Image
          fill
          alt="post"
          src={post?.image}
          sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="w-full sm:w-2/3 pt-5">
        <h4 className="text-md indent-2">{post.content}</h4>
      </div>

      <div className="flex flex-col text-center items-center pt-10 gap-3">
        <h4 className="text-xl font-bold">Address: {post.location}</h4>
        <a href={post.website}>
          <h4 className="text-lg underline">{post.website}</h4>
        </a>
        <a href={post.map}>
          <h4 className="text-lg underline">Google Map</h4>
        </a>
      </div>
    </section>
  );
};

export default page;
