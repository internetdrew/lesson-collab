import { Navbar } from '@/src/components';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import axios from 'axios';

export default function ProfileEditor({ user }) {
  return (
    <div>
      <Navbar />

      <main className='relative mt-24'>
        <div className='mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
          <div className='overflow-hidden rounded-lg bg-white shadow'>
            <div className='divide-y divide-gray-200'>
              <form
                className='mx-auto divide-y divide-gray-200 lg:col-span-9'
                action='#'
                method='POST'
              >
                {/* Profile section */}
                <div className='px-4 py-6 sm:p-6 lg:pb-8'>
                  <div>
                    <h2 className='text-lg font-medium leading-6 text-gray-900'>
                      Profile
                    </h2>
                    <p className='mt-1 text-sm text-gray-500'>
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>

                  <div className='mt-6 flex flex-col lg:flex-row'>
                    <div className='flex-grow space-y-6'>
                      <div>
                        <label
                          htmlFor='username'
                          className='block text-sm font-medium leading-6 text-gray-900'
                        >
                          Username
                        </label>
                        <div className='mt-2 flex rounded-md shadow-sm'>
                          {/* <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm'>
                            lessonfeed.com/profile/
                          </span> */}
                          <input
                            type='text'
                            name='username'
                            id='username'
                            autoComplete='username'
                            className='block w-full min-w-0 flex-grow rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6'
                            defaultValue={user?.id}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor='about'
                          className='block text-sm font-medium leading-6 text-gray-900'
                        >
                          About
                        </label>
                        <div className='mt-2'>
                          <textarea
                            id='about'
                            name='about'
                            rows={3}
                            className='mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 min-h-[125px] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:py-1.5 sm:text-sm sm:leading-6'
                            defaultValue={user?.about}
                          />
                        </div>
                        <p className='mt-2 text-sm text-gray-500'>
                          Brief description for your profile.
                        </p>
                      </div>
                    </div>

                    <div className='mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0'>
                      <p
                        className='text-sm font-medium leading-6 w-full ml-1 lg:text-center text-gray-900 mb-1'
                        aria-hidden='true'
                      >
                        Photo
                      </p>
                      <div className='mt-2 lg:hidden'>
                        <div className='flex items-center'>
                          <div
                            className='inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full'
                            aria-hidden='true'
                          >
                            <Image
                              className='h-full w-full rounded-full'
                              src={user?.avatar}
                              alt='user image'
                              height={48}
                              width={48}
                            />
                          </div>
                          <div className='relative ml-5'>
                            <input
                              id='mobile-user-photo'
                              name='user-photo'
                              type='file'
                              className='peer absolute h-full w-full rounded-md opacity-0'
                            />
                            <label
                              htmlFor='mobile-user-photo'
                              className='pointer-events-none block rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500'
                            >
                              <span>Change</span>
                              <span className='sr-only'> user photo</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className='relative hidden overflow-hidden rounded-full lg:block'>
                        <Image
                          className='relative h-32 w-32 rounded-full'
                          src={user?.avatar}
                          width={48}
                          height={48}
                          alt='user image'
                        />
                        <label
                          htmlFor='desktop-user-photo'
                          className='absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100'
                        >
                          <span>Change</span>
                          <span className='sr-only'> user photo</span>
                          <input
                            type='file'
                            id='desktop-user-photo'
                            name='user-photo'
                            className='absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0'
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='mt-6 grid grid-cols-12 gap-6'>
                    <div className='col-span-12 sm:col-span-6'>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        defaultValue={user?.name}
                        autoComplete='given-name'
                        className='mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6'
                      />
                    </div>

                    <div className='col-span-12 sm:col-span-6'>
                      <label
                        htmlFor='url'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        URL
                      </label>
                      <input
                        type='text'
                        name='url'
                        id='url'
                        className='mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6'
                      />
                    </div>

                    <div className='col-span-12 sm:col-span-6'>
                      <label
                        htmlFor='company'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        School
                      </label>
                      <input
                        type='text'
                        name='company'
                        id='company'
                        autoComplete='organization'
                        className='mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>

                <div className='divide-y divide-gray-200'>
                  <div className='flex justify-end gap-x-3 px-4 py-4 sm:px-6'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700'
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async ctx => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const res = await axios.get(
    `${process.env.SITE_URL}/api/users/${session?.user?.id}`
  );

  return { props: { user: res.data[0] } };
};
