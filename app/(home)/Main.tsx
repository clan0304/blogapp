import { Post } from '@prisma/client';
import Card from '../(shared)/Card';
import Link from 'next/link';

type MainPostProps = {
  mainPost: Array<Post>;
};

const Main = ({ mainPost }: MainPostProps) => {
  return (
    <section className="w-full px-3 py-3">
      <div className="hidden sm:flex justify-between mx-5">
        <div className="font-bold text-lg">
          How about going to these cafes if you are in Melbourne?
        </div>
      </div>
      <div className="sm:grid gap-3 grid-cols-2 grid-rows-2 sm:h-[600px] my-5">
        <Card className="col-span-1 row-span-2 m-1" post={mainPost[0]} />
        <Card
          className="col-span-1 row-span-1 m-1  bg-gray-500"
          post={mainPost[1]}
        />
        <Card
          className="col-span-1 row-span-1 m-1 bg-gray-500"
          post={mainPost[2]}
        />
      </div>

      <div className="sm:grid gap-3 grid-cols-2 grid-rows-2 sm:h-[600px] my-10">
        <Card
          className="col-span-1 row-span-1 m-1  bg-gray-500"
          post={mainPost[3]}
        />
        <Card
          className="col-span-1 row-span-2 m-1  bg-gray-500"
          post={mainPost[4]}
        />
        <Card
          className="col-span-1 row-span-1 m-1  bg-gray-500"
          post={mainPost[5]}
        />
      </div>
      <div className="flex justify-center sm:justify-end items-center">
        <div className="px-3 text-lg">Do you want more Post?</div>
        <Link href="https://blogapp-iota-inky.vercel.app/posts">
          <button className="bg-wh-100 text-3xl p-2 rounded-md font-bold">
            Click Here!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Main;
