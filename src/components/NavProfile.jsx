import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@supabase/auth-helpers-react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const NavProfile = () => {
  const user = useUser();
  const userId = user?.id;

  const fetchCurrentUser = async () => {
    const { data } = await axios.get(`/api/users/${userId}`);
    return data;
  };

  const {
    isLoading,
    isError,
    data: currentUser,
    error,
  } = useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchCurrentUser,
  });

  if (currentUser)
    return (
      <>
        <div className='flex items-center'>
          <span className='inline-flex h-full w-auto items-center overflow-hidden justify-center rounded-full bg-gray-500'>
            <Link href={`/profile/${currentUser?.id}`}>
              {currentUser ? (
                <div className='w-12 h-12 overflow-hidden'>
                  {currentUser?.avatar ? (
                    <Image
                      src={currentUser?.avatar}
                      alt='user image'
                      width={500}
                      height={500}
                      style={{ objectFit: 'cover' }}
                      priority
                      className='font-medium leading-none text-white'
                    />
                  ) : (
                    <span className='inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
                      <svg
                        className='h-full w-full text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                      </svg>
                    </span>
                  )}
                </div>
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
              {currentUser?.name}
            </p>
            <Link
              href={`/profile/${currentUser?.id}`}
              className='text-md font-medium text-[--primary-color] hover:text-teal-500'
            >
              View profile
            </Link>
          </div>
        </div>
        <hr className='mb-8 mt-6 text-gray-500' />
      </>
    );
};

export default NavProfile;
