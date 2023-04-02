import { Layout, Comment, AddCommentForm } from '@/src/components';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { AiOutlineUser } from 'react-icons/ai';

const PostDetails = () => {
  return (
    <Layout>
      <div className='overflow-hidden rounded-lg bg-white shadow'>
        <div className='px-4 py-6 sm:px-6 flex items-center gap-2'>
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <span className='inline-flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
            <span className='font-medium text-sm leading-none text-white'>
              TU
            </span>
          </span>
          <div className='flex flex-col'>
            <h1 className='font-bold text-gray-900'>Test User</h1>
            <span className='text-gray-500 text-sm'>6 Hours Ago</span>
          </div>
          <button className='ml-auto'>
            <EllipsisVerticalIcon className='w-6 h-6 text-gray-500' />
          </button>
        </div>
        <div className='px-4 py-5 sm:p-6'>
          {/* Content goes here */}
          <iframe
            src='/testpdf.pdf'
            allow='fullscreen'
            className='bg-red-200 w-full mt-4 mb-6 h-96'
          ></iframe>
          <h1 className='text-xl font-semibold mb-2'>
            Post title made by user
          </h1>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam
            aut provident ad quidem. Quaerat dolorem velit soluta, quia ex rerum
            tenetur incidunt excepturi optio odio dolore aperiam fugiat enim
            laboriosam perspiciatis ab distinctio neque tempore asperiores?
            Accusantium, repudiandae odit.
          </p>
          <div className='flex gap-2 text-gray-400'>
            <span>#topic</span>
            <span>#topic</span>
            <span>#topic</span>
            <span>#topic</span>
            <span>#topic</span>
          </div>
        </div>
        <div className='px-4 py-4 sm:px-6'>
          <AddCommentForm />
          <p className='text-gray-500 mb-2'>Comments</p>
          {/* Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
          <Comment />
        </div>
      </div>
    </Layout>
  );
};

export default PostDetails;
