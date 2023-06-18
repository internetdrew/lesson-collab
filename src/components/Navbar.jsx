'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BellIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userAtom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const currentUser = useRecoilValue(userState);
  const supabase = useSupabaseClient();

  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav className='sticky top-0 w-full shrink-0 border-b border-gray-200 bg-white z-10'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link href={'/'} className='font-bold text-2xl text-[--primary-color]'>
          LessonCollab
        </Link>
        <div className='flex items-center gap-x-4'>
          {currentUser ? (
            <>
              <button
                type='button'
                className='-m-2.5 p-2.5 text-gray-500 hover:text-gray-300'
              >
                <span className='sr-only'>View notifications</span>
                <BellIcon className='h-6 w-6' aria-hidden='true' />
              </button>
              <Menu as='div' className='relative mt-1'>
                <Menu.Button>
                  <span className='sr-only'>Your profile</span>
                  <span className='inline-flex h-9 w-9 items-center justify-center rounded-full overflow-hidden bg-gray-500'>
                    {currentUser ? (
                      <Image
                        src={currentUser?.avatar}
                        alt='user image'
                        width={500}
                        height={500}
                        style={{ objectFit: 'cover' }}
                        priority
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
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='/profile/edit'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2'
                            )}
                          >
                            Edit profile
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type='button'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-left'
                            )}
                            onClick={() => logout()}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Link href={'/create'}>
                <button className='rounded-full h-10 w-10 flex items-center justify-center bg-[--primary-color] px-3 py-2 text-sm font-semibold text-white shadow-sm duration-300 sm:block sm:rounded-md sm:w-auto sm:h-auto hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
                  <span className='hidden sm:block'>New Post</span>
                  <span className='sm:hidden'>
                    <PlusIcon className='w-6 h-6' />
                  </span>
                </button>
              </Link>
            </>
          ) : (
            <Link href={'/login'}>
              <button className='rounded-md bg-[--primary-color] px-3 py-2 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
                Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
