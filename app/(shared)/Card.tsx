import { Post } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CardProps = {
  post: Post;

  className?: string;
};

const Card = ({ post, className }: CardProps) => {
  return (
    <Link
      className={`${className} sm:h-auto relative w-full block h-96 hover:opacity-70`}
      href={`/posts/${post.id}`}
    >
      <div className="`z-0 relative w-full h-full">
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
      <div className="absolute z-1 bottom-0 left-0 p-1">
        <h3 className="inline-block px-3 py-2 font-bold text-wh-950 text-center">
          {post?.title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
