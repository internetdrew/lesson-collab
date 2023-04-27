import { Navbar, NewPostForm } from '@/src/components';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

const Create = ({ postData }) => {
  return (
    <div>
      <Navbar />
      <main className='mt-24'>
        <div className='mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
          <div className='bg-white rounded-lg'>
            <NewPostForm postData={postData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Create;

export const getServerSideProps = async ctx => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const { edit: postId } = ctx.query;

  const res = await fetch(`${process.env.SITE_URL}/api/posts/${postId}`);
  const postData = postId ? await res.json() : null;

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: { postData },
  };
};
