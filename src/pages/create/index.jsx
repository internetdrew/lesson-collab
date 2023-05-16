import { Navbar, NewPostForm } from '@/src/components';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import axios from 'axios';

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
  const userRes = await axios.get(
    `${process.env.SITE_URL}/api/users/${session?.user?.id}`
  );

  if (postId) {
    const postRes = await axios.get(
      `${process.env.SITE_URL}/api/posts/${postId}`
    );

    return {
      props: { userData: userRes.data[0], postData: postRes.data[0] },
    };
  }

  return { props: { userData: userRes.data[0], postData: {} } };
};
