import Link from 'next/link';
import { AiOutlineUser, AiOutlineComment } from 'react-icons/ai';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const LessonPost = ({ post }) => {
  const { id, title, desc, username } = post;
  return (
    <article className='overflow-hidden rounded-lg bg-white shadow py-6 mb-8'>
      <div>
        <div className='px-4 sm:px-6'>
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <h2 className='text-xl font-bold text-gray-900'>{title}</h2>
        </div>
        <div className='px-4 py-2 sm:px-6 sm:py-3'>
          {/* Content goes here */}
          <p>{desc}</p>
          <hr className='mt-4' />
        </div>

        <div className='px-4 flex items-center gap-2 text-gray-600 text-sm mt-1 sm:mt-0 sm:px-6'>
          <span className='inline-flex shrink-0 h-8 w-8 items-center justify-center rounded-full bg-gray-500'>
            <span className='font-medium leading-none text-white'>TU</span>
          </span>
          <p className='hidden sm:inline-block'>
            Posted by{' '}
            <span className='text-teal-600 duration-300 hover:text-teal-500'>
              <Link href={`/profile/${username}`}>@{username}</Link>
            </span>
          </p>
          <div className='flex items-center ml-auto gap-4'>
            <span className='flex items-center'>
              <AiOutlineComment className='text-lg' />
              <span className='ml-1'>50+</span>
            </span>
            <button className='my-2 px-3 py-1 bg-teal-600 text-white rounded duration-300 hover:shadow-lg hover:bg-teal-500'>
              <Link
                href={`/posts/${id}`}
                className='font-semibold flex items-center'
              >
                {' '}
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
