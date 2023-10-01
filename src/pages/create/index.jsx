import { Navbar, NewPostForm } from '@/src/components';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import axios from 'axios';

const Create = () => {
  return (
    <div>
      <Navbar />
      <main className='mt-24'>
        <div className='mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
          <div className='bg-white rounded-lg'>
            <NewPostForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Create;

export const getServerSideProps = async ctx => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
};
