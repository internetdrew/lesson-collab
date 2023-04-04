import Link from 'next/link';
import { AiOutlineUser, AiOutlineComment } from 'react-icons/ai';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const LessonPost = ({ post }) => {
  return (
    <article className='overflow-hidden rounded-lg bg-white shadow py-6 mb-8'>
      <div>
        <div className='px-4 sm:px-6'>
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <h2 className='text-xl font-bold text-gray-900'>
            What does the fox say?
          </h2>
        </div>
        <div className='px-4 py-2 sm:px-6 sm:py-3'>
          {/* Content goes here */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aliquam unde quos labore ab qui obcaecati necessitatibus quibusdam
            ad suscipit quisquam fugiat magnam quis, commodi esse laboriosam
            praesentium doloribus earum iure dicta! Recusandae autem, numquam
            odio assumenda accusamus quaerat laudantium.
          </p>
          <hr className='mt-4' />
        </div>

        <div className='px-4 flex items-center gap-2 text-gray-600 text-sm mt-1 sm:mt-0 sm:px-6'>
          <span className='inline-flex shrink-0 h-8 w-8 items-center justify-center rounded-full bg-gray-500'>
            <span className='font-medium leading-none text-white'>TU</span>
          </span>
          <p className='hidden sm:inline-block'>
            Posted by{' '}
            <span className='text-blue-500'>
              <Link href={`/profile/${'id'}`}>Someone Special</Link>
            </span>
          </p>
          <div className='flex items-center ml-auto gap-4'>
            <span className='flex items-center'>
              <AiOutlineComment className='text-lg' />
              <span className='ml-1'>50+</span>
            </span>
            <button className='my-2 px-3 py-1 bg-blue-500 text-white rounded duration-300 hover:shadow-lg hover:bg-purple-700'>
              <Link
                href={`/lesson-plan/${'id'}`}
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