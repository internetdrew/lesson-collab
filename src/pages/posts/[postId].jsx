import { useState } from 'react';
import { Layout, Comment, AddCommentForm, PdfViewer } from '@/src/components';
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import moment from 'moment';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useUser } from '@supabase/auth-helpers-react';
import axios from 'axios';

const PostDetails = ({ post }) => {
  const { comments } = post;
  const [showLessonPlan, setShowLessonPlan] = useState(false);
  const router = useRouter();
  const user = useUser();
  const currentUserIsPostOwner = user?.id === post?.users?.id;

  const handleDelete = async () => {
    if (!currentUserIsPostOwner) return;
    await axios.delete(`/api/posts/${post.id}`);
    router.push('/');
  };

  return showLessonPlan ? (
    <PdfViewer post={post} show={setShowLessonPlan} />
  ) : (
    <Layout>
      <div className='overflow-hidden rounded-lg bg-white shadow'>
        <div className='px-4 py-6 sm:px-6 flex items-center gap-2'>
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <span className='inline-flex overflow-hidden shrink-0 h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
            {/* <span className='font-medium text-sm leading-none text-white'>
              TU
            </span> */}
            <Image
              src={post?.users?.avatar}
              alt='user image'
              width={48}
              height={48}
            />
          </span>
          <div className='flex flex-col'>
            <Link href={`/profile/${post?.users?.id}`} className='font-medium'>
              {post?.users?.name}
            </Link>
            <span className='text-gray-500 text-sm'>
              {moment(post?.created_at).calendar()}
            </span>
          </div>
          {currentUserIsPostOwner ? (
            <>
              <Link href={`/create?edit=${post?.id}`}>
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
          <h1 className='text-xl font-semibold mb-2'>{post?.title}</h1>
          <p className='mb-4 text-justify'>{post?.desc}</p>

          <button
            className='bg-teal-600 block rounded-md text-white font-semibold mt-10 px-4 py-2 w-full mx-auto duration-300 sm:w-1/2 hover:bg-teal-500 hover:shadow-lg'
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
          <AddCommentForm postId={post?.id} />
          {comments.length ? (
            <p className='text-gray-500 mb-2'>Feedback</p>
          ) : null}
          {comments.map(comment => (
            <Comment key={comment?.id} comment={comment} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PostDetails;

export const getServerSideProps = async ({ query }) => {
  const { postId } = query;

  const { data: postData } = await axios.get(
    `${process.env.SITE_URL}/api/posts/${postId}`
  );

  return { props: { post: postData[0] } };
};