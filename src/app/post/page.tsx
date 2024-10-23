'use client';

import Link from 'next/link';

const Posts = () => {
  const postLinks = [
    { id: 1, title: 'post 1' },
    { id: 2, title: 'post 2' },
    { id: 3, title: 'post 3' },
    { id: 4, title: 'post 4' },
  ];
  return (
    <div>
      <div className='flex flex-col gap-5'>
        {postLinks.map((post, index) => (
          <Link
            // replace ertit ukan abrunebs
            href={`/post/${post.id}`}
            className='block px-4 bg-blue-400 text-white hover:bg-blue-900 w-[400px]'
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
