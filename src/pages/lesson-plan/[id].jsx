import { Layout } from '@/src/components';
import { AiOutlineUser } from 'react-icons/ai';

const PostDetails = () => {
  return (
    <Layout>
      <section className='my-20 border p-6 bg-slate-50 rounded-xl'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='h-8 w-8 bg-blue-400 flex items-center justify-center rounded-full mr-4'>
              <AiOutlineUser className='text-2xl' />
            </div>
            <p className='text-lg font-semibold'>Posting User</p>
          </div>
          <span className='text-gray-500'>6 Hours Ago</span>
        </div>
        <iframe
          src='/testpdf.pdf'
          frameborder='0'
          allow='fullscreen'
          className='bg-red-200 w-full mt-4 mb-6 h-96'
        ></iframe>
        <h1 className='text-xl font-semibold mb-2'>Post title made by user</h1>
        <p className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam aut
          provident ad quidem. Quaerat dolorem velit soluta, quia ex rerum
          tenetur incidunt excepturi optio odio dolore aperiam fugiat enim
          laboriosam perspiciatis ab distinctio neque tempore asperiores?
          Accusantium, repudiandae odit.
        </p>
        <div className='flex gap-2 text-gray-400 mb-6'>
          <span>#topic</span>
          <span>#topic</span>
          <span>#topic</span>
          <span>#topic</span>
          <span>#topic</span>
        </div>

        {/* Comments */}
        <div className='flex items-start'>
          <div className='pt-1'>
            <div className='h-8 w-8 bg-blue-400 flex items-center justify-center rounded-full mr-2'>
              <AiOutlineUser className='text-2xl' />
            </div>
          </div>
          <div>
            <p className='w-full'>
              <span className='mr-2 font-semibold'>username</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati impedit in sequi atque commodi nesciunt cum accusamus
              neque quo, quidem repudiandae accusantium labore facere id numquam
              delectus, nostrum eos rerum aliquid incidunt natus consequuntur
              cumque iusto? Ducimus sed possimus dolore!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostDetails;
