import { Layout, Comment, AddCommentForm } from '@/src/components';
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/src/context/authContext';

const PostDetails = ({ post }) => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  console.log(post);
  const { id, username, date, title, desc } = post;
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

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
          {}
          <div className='flex flex-col'>
            <Link
              href={`/profile/${username}`}
              className='font-bold text-gray-900'
            >
              @{username}
            </Link>
            <span className='text-gray-500 text-sm'>
              {moment(date).calendar()}
            </span>
          </div>
          {currentUser.id === post.userId ? (
            <>
              <Link href='/posts/id/edit'>
                <PencilSquareIcon className='w-6 h-6 text-green-500' />
              </Link>
              <button onClick={() => handleDelete()}>
                <TrashIcon className='w-6 h-6 text-red-500' />
              </button>
            </>
          ) : null}
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
          <h1 className='text-xl font-semibold mb-2'>{title}</h1>
          <p className='mb-4 text-justify'>{desc}</p>
          <div className='hidden gap-2 text-gray-400'>
            <span>#topic</span>
            <span>#topic</span>
            <span>#topic</span>
            <span>#topic</span>
            <span>#topic</span>
          </div>
        </div>
        <div className='px-4 py-4 sm:px-6'>
          <AddCommentForm />
          <p className='text-gray-500 mb-2'>Feedback</p>
          <Comment />
        </div>
      </div>
    </Layout>
  );
};

export default PostDetails;

export const getServerSideProps = async ctx => {
  const { query } = ctx;
  const postResponse = await axios.get(
    `${process.env.SITE_URL}/api/posts/${query.id}`
  );
  const userResponse = '';
  // const user = userResponse.data;
  const post = postResponse.data;

  return { props: { post } };
};
