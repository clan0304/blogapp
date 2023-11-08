import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full px-10 py-4 border-b-2 border-purple-100 mb-8">
        <div>
          <Link href="/">
            <p className="text-xl">Mo's Blog</p>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-10">
          <div>
            <Link href="/posts">Posts</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
