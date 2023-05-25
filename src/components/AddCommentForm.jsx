'use client';

import { useRouter } from 'next/router';
import { useUser } from '@supabase/auth-helpers-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSetRecoilState } from 'recoil';
import { scrollState } from '../atoms/scrollAtom';

const schema = z.object({
  comment: z
    .string()
    .min(1, { message: 'Your feedback is required for submission.' })
    .max(455, { message: 'Feedback must be less than 455 characters.' }),
});

const AddCommentForm = ({ postId, setComments }) => {
  const setScroll = useSetRecoilState(scrollState);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const router = useRouter();
  const user = useUser();

  const onSubmit = async data => {
    const { comment } = data;

    if (!user) return router.push('/login');

    const commentRes = await axios.post(`/api/comments/${postId}`, {
      userId: user.id,
      comment,
    });

    if (commentRes.statusText === 'OK') {
      reset();
      const res = await axios.get(`/api/comments/${postId}`);
      setComments(res.data);
      setScroll(true);
    }
    return;
  };

  return (
    <form className='mb-4' onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor='feedback'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        Add your feedback
      </label>
      <div className='mt-2 flex flex-col'>
        <textarea
          rows={6}
          {...register('comment')}
          className='block w-full rounded-md text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 resize-none'
        />
        <small className='mt-1 text-red-600 text-sm'>
          {errors.comment?.message}
        </small>
        <button
          type='submit'
          className={
            'w-fit ml-auto mt-2 inline-flex items-center rounded-md bg-teal-600 duration-300 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 '
          }
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
