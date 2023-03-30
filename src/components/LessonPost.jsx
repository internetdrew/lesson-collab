import Link from 'next/link';
import { AiOutlineUser, AiOutlineComment } from 'react-icons/ai';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const LessonPost = ({ post }) => {
  return (
    <>
      <article className='bg-gray-100 py-6 rounded-xl border border-slate-300 relative mb-4'>
        <div className='absolute left-6 top-10 text-md font-medium flex flex-col items-center'>
          <button type='button'>
            <BsArrowUpShort className='text-3xl' />
          </button>
          <span>50</span>
          <button type='button'>
            <BsArrowDownShort className='text-3xl' />
          </button>
        </div>
        <div className='w-[80%] mx-auto'>
          <h2 className='text-lg font-bold text-gray-900 mb-2'>
            What does the fox say?
          </h2>
          <p className='text-gray-700 border-b-2 mb-2 pb-1 line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
            dicta temporibus quibusdam enim sed, ex tempora quae pariatur, vel
            sunt ab quidem ipsam accusantium autem repellat fuga excepturi
            facere, expedita accusamus reprehenderit neque nam eum. Commodi
            fugiat unde et.
          </p>
          <div className='flex items-center text-gray-600'>
            <div className='bg-red-500 h-8 w-8 rounded-full overflow-hidden'>
              <Link
                href={''}
                className='w-full h-full flex items-center justify-center'
              >
                <AiOutlineUser className='text-xl' />
              </Link>
            </div>
            <span className='ml-2'>
              Posted by <span className='text-purple-600'>Someone Special</span>
            </span>
            <div className='flex items-center ml-auto gap-4'>
              <span className='flex items-center'>
                <AiOutlineComment className='text-lg' />
                <span className='ml-1'>50+</span>
              </span>
              <button className='my-2 px-3 py-1 bg-purple-600 text-white rounded-lg duration-300 hover:shadow-lg hover:bg-purple-700'>
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
      {/*  */}
      <div className='overflow-hidden rounded-lg bg-white shadow py-6 relative'>
        <div className='absolute left-4 top-6 text-md font-medium flex flex-col items-center'>
          <button type='button'>
            <BsArrowUpShort className='text-3xl' />
          </button>
          <span>50</span>
          <button type='button'>
            <BsArrowDownShort className='text-3xl' />
          </button>
        </div>
        <div className='ml-8'>
          <div className='px-4 sm:px-6'>
            {/* Content goes here */}
            {/* We use less vertical padding on card headers on desktop than on body sections */}
            <h2 className='text-xl font-bold text-gray-900'>
              What does the fox say?
            </h2>
          </div>
          <div className='px-4 sm:px-6 sm:py-3'>
            {/* Content goes here */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis aliquam unde quos labore ab qui obcaecati
              necessitatibus quibusdam ad suscipit quisquam fugiat magnam quis,
              commodi esse laboriosam praesentium doloribus earum iure dicta!
              Recusandae autem, numquam odio assumenda accusamus quaerat
              laudantium.
            </p>
            <hr className='mt-4' />
          </div>
          <div className='px-4 py-4 sm:px-6'>
            {/* Content goes here */}
            {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonPost;
