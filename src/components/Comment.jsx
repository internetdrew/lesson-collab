import { useState } from 'react';
import {
  EllipsisVerticalIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import { HandThumbUpIcon as LikedThumbUp } from '@heroicons/react/24/solid';
import Image from 'next/image';
import moment from 'moment';

const Comment = ({ comment }) => {
  const [userLikedPost, setUserLikedPost] = useState(false);

  return (
    <div className='flex flex-col items-start mb-6'>
      <div className='flex items-center mb-3 w-full'>
        <span className='inline-flex shrink-0 mr-2 h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-gray-500 sm:h-10 sm:w-10'>
          {/* <span className='font-medium leading-none text-white'>TU</span> */}
          {comment ? (
            <Image
              src={comment?.users?.avatar}
              alt='user image'
              width={48}
              height={48}
            />
          ) : (
            <svg
              className='h-12 w-12 text-gray-300'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
            </svg>
          )}
        </span>
        <div>
          <p className='-mb-1'>{comment?.users?.name}</p>
          <span className='text-gray-500 text-sm'>
            {moment(comment?.created_at).calendar()}
          </span>
        </div>
        <EllipsisVerticalIcon className='h-6 w-6 ml-auto text-gray-500' />
      </div>
      <div>
        <p className='mb-2'>{comment?.text}</p>
        <div className='flex items-center gap-4 text-gray-500'>
          <button onClick={() => setUserLikedPost(!userLikedPost)}>
            {userLikedPost ? (
              <LikedThumbUp className='h-5 w-5 text-blue-600' />
            ) : (
              <HandThumbUpIcon className='h-5 w-5' />
            )}
          </button>
          {/* <button type='button'>Reply</button> */}
        </div>
      </div>
    </div>
  );
};

export default Comment;
