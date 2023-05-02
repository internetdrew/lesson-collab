import { Navbar, NewPostForm } from '@/src/components';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

const Create = ({ postData, userData }) => {
  return (
    <div>
      <Navbar />
      <main className='mt-24'>
        <div className='mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
          <div className='bg-white rounded-lg'>
            <NewPostForm postData={postData} userData={userData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Create;

export const getServerSideProps = async ctx => {
  const supabase = createServerSupabaseClient(ctx);
  const { edit: postId } = ctx.query;

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

  const { data: userData } = await supabase
    .from('users')
    .select()
    .eq('id', session.user.id);

  if (postId) {
    const { data: postData } = await supabase
      .from('posts')
      .select()
      .eq('id', postId);

    return {
      props: { userData: userData[0], postData: postData[0] },
    };
  }
};
