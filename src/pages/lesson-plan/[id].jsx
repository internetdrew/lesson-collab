import { Layout } from '@/src/components';
import { AiOutlineUser } from 'react-icons/ai';

const PostDetails = () => {
  return (
    <Layout>
      <section className='mt-20 border px-4 p-6 bg-slate-50 rounded-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='h-8 w-8 bg-blue-400 flex items-center justify-center rounded-full mr-4'>
              <AiOutlineUser className='text-2xl' />
            </div>
            <p className='text-lg'>Test User</p>
          </div>
          <span>6 Hours Ago</span>
        </div>
        <h1>PostDetails title</h1>
      </section>
    </Layout>
  );
};

export default PostDetails;
