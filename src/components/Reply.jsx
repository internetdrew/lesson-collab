import { useState } from 'react';
import {
  EllipsisVerticalIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import { HandThumbUpIcon as LikedThumbUp } from '@heroicons/react/24/solid';

const Reply = () => {
  const [userLikedPost, setUserLikedPost] = useState(false);

  return (
    <div className='flex items-start mt-4'>
      <div className='flex items-center mb-3'>
        <span className='inline-flex shrink-0 mr-4 h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
          <span className='font-medium leading-none text-white'>TU</span>
        </span>
      </div>
      <div>
        <p className='font-semibold'>@testuser</p>
        <p className='mb-2'>
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
        <div className='flex items-center gap-4 text-gray-500'>
          <button>
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

export default Reply;
