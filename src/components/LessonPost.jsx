import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineComment } from 'react-icons/ai';
import Image from 'next/image';
import axios from 'axios';

const LessonPost = ({ post }) => {
  const [commentCount, setCommentCount] = useState(null);

  const fetchComments = async () => {
    const comments = await axios(`/api/comments/${post?.id}`);
    setCommentCount(comments?.data?.length);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <article className='overflow-hidden rounded-lg bg-white shadow py-6 mb-8'>
      <div>
        <div className='px-4 sm:px-6'>
          <h2 className='text-xl font-bold text-gray-900'>{post?.title}</h2>
        </div>
        <div className='px-4 py-2 sm:px-6 sm:py-3'>
          <p>{post?.desc}</p>
          <hr className='mt-4' />
        </div>

        <div className='px-4 flex items-center gap-2 text-gray-600 text-sm mt-1 sm:mt-0 sm:px-6'>
          <span className='inline-flex overflow-hidden shrink-0 h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
            <Image
              src={post?.users?.avatar}
              alt='user image'
              width={500}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </span>
          <div>
            <p className='hidden sm:inline-block'>Posted by </p>{' '}
            <Link
              href={`/profile/${post?.uid}`}
              className='text-teal-600 duration-300 hover:text-teal-500'
            >
              {post?.users?.name}
            </Link>
          </div>
          <div className='flex items-center ml-auto gap-4'>
            {commentCount ? (
              <span className='flex items-center'>
                <AiOutlineComment className='text-lg' />
                <span className='ml-1'>{commentCount}</span>
              </span>
            ) : null}
            <button className='my-2 px-3 py-1 bg-teal-600 text-white rounded duration-300 hover:shadow-lg hover:bg-teal-500'>
              <Link
                href={`/posts/${post?.id}`}
                className='font-semibold flex items-center'
              >
                <span className='mr-1'>👀</span> Take a look
              </Link>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LessonPost;
