import { useState } from 'react';
import {
  Layout,
  Comment,
  AddCommentForm,
  PdfViewer,
  Navbar,
} from '@/src/components';
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
import { HiArrowLeft } from 'react-icons/hi';

const PostDetails = ({ post }) => {
  const [showLessonPlan, setShowLessonPlan] = useState(false);
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  console.log(post);
  const { id, username, date, title, desc } = post;

  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      router.push('/');
    } catch (err) {
      if (err.request.status === 401) router.push('/login');
      console.error(err);
    }
  };

  return showLessonPlan ? (
    <>
      <Navbar />
      <iframe src={post?.fileUrl} className='w-full h-screen relative'></iframe>
      <button
        className='absolute right-2 -bottom-10 inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-4 py-2'
        onClick={() => setShowLessonPlan(false)}
      >
        <HiArrowLeft />
        Go back
      </button>
    </>
  ) : (
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
          {currentUser?.id === post?.userId ? (
            <>
              <Link href={`/create?edit=${post.id}`}>
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
          <h1 className='text-xl font-semibold mb-2'>{title}</h1>
          <p className='mb-4 text-justify'>{desc}</p>

          <button
            className='bg-teal-600 block rounded-md text-white font-semibold mt-10 px-4 py-2 w-full mx-auto duration-300 sm:w-1/2 hover:bg-teal-500 shadow-md'
            onClick={() => setShowLessonPlan(true)}
          >
            View the Lesson Plan
          </button>

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
  const post = postResponse.data;

  return { props: { post } };
};
