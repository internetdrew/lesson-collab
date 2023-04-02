import { useState } from 'react';
import { Reply } from './';
import {
  EllipsisVerticalIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import { HandThumbUpIcon as LikedThumbUp } from '@heroicons/react/24/solid';

const Comment = () => {
  const [userLikedPost, setUserLikedPost] = useState(false);

  return (
    <div className='flex flex-col items-start'>
      <div className='flex items-center mb-3 w-full'>
        <span className='inline-flex shrink-0 mr-2 h-8 w-8 items-center justify-center rounded-full bg-gray-500 sm:h-10 sm:w-10'>
          <span className='font-medium leading-none text-white'>TU</span>
        </span>
        <p>Test User</p>
        <EllipsisVerticalIcon className='h-6 w-6 ml-auto text-gray-500' />
      </div>
      <div>
        <p className='mb-2'>
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
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
