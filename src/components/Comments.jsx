import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Comment, AddCommentForm } from '@/src/components';
import { useRecoilState } from 'recoil';
import { scrollState } from '../atoms/scrollAtom';
import { useUser } from '@supabase/auth-helpers-react';
import Link from 'next/link';

const Comments = ({ comments }) => {
  const [scrollToBottom, setScrollToBottom] = useRecoilState(scrollState);
  const lastCommentRef = useRef(null);
  const user = useUser();

  useEffect(() => {
    if (scrollToBottom) {
      lastCommentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setScrollToBottom(false);
    }
  }, [scrollToBottom]);

  return (
    <div>
      {user ? (
        <AddCommentForm postId={postId} setComments={setComments} />
      ) : (
        <div className='flex justify-center'>
          <Link href='/login' className='text-teal-600 font-bold my-4'>
            <button className='bg-teal-600 rounded-md text-white font-semibold px-4 py-2 mb-4 duration-300 text-center hover:bg-teal-500 hover:shadow-lg'>
              Sign in to chime in
            </button>
          </Link>
        </div>
      )}
      {comments?.length ? <p className='text-gray-500 mb-2'>Feedback</p> : null}
      {comments?.map((comment, idx) => (
        <Comment key={`comment-${idx}`} comment={comment} />
      ))}
      <div ref={lastCommentRef} />
    </div>
  );
};

export default Comments;
