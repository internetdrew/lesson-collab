import Link from 'next/link';
import { AiOutlineUser, AiOutlineComment } from 'react-icons/ai';

const LessonPost = () => {
  return (
    <article className='bg-gray-100 py-6 rounded-xl border border-slate-300 relative mb-4'>
      <div className='absolute left-4 text-md font-medium'>50</div>
      <div className='w-[80%] mx-auto'>
        <h2 className='text-lg font-bold text-gray-900 mb-2'>
          What does the fox say?
        </h2>
        <p className='text-gray-700 border-b-2 pb-3 mb-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
          dicta temporibus quibusdam enim sed, ex tempora quae pariatur, vel
          sunt ab quidem ipsam accusantium autem repellat fuga excepturi facere,
          expedita accusamus reprehenderit neque nam eum. Commodi fugiat unde
          et.
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
          <span className='flex items-center ml-auto'>
            <AiOutlineComment className='text-lg' />
            <span className='ml-1'>50+</span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default LessonPost;
