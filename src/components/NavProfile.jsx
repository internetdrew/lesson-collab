import Link from 'next/link';
import Image from 'next/image';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

const NavProfile = () => {
  const supabase = useSupabaseClient();
  const currentUser = useUser();

  return (
    <div className='flex items-center'>
      <span className='inline-flex h-full w-auto items-center overflow-hidden justify-center rounded-full bg-gray-500'>
        <Link href={`/profile/${currentUser?.user_metadata?.username}`}>
          {currentUser ? (
            <Image
              src={currentUser?.user_metadata?.picture}
              alt='user image'
              width={48}
              height={48}
              className='font-medium leading-none text-white'
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
        </Link>
      </span>
      <div className='ml-4 flex flex-col justify-center'>
        <p className='font-medium text-gray-700 group-hover:text-gray-900'>
          {currentUser?.user_metadata?.name}
        </p>
        <Link
          href={`/profile/${currentUser?.username}`}
          className='text-md font-medium text-[--primary-color] hover:text-teal-500'
        >
          View profile
        </Link>
      </div>
    </div>
  );
};

export default NavProfile;
