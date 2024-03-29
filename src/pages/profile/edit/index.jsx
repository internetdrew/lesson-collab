import { Navbar } from '@/src/components';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@supabase/auth-helpers-react';
import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '@/src/utils/fetchCurrentUser';

const schema = z.object({
  name: z.string().min(1, { message: 'Your name is required to save.' }),
  avatar: z.any(),
  about: z
    .string()
    .min(0)
    .max(150, { message: 'Must be less than 150 characters.' }),
  location: z.string(),
  website: z.string(),
  userId: z.string(),
});

export default function ProfileEditor() {
  const imgInputRef = useRef(null);
  const router = useRouter();
  const user = useUser();

  const userId = user?.id;

  const {
    isLoading,
    isError,
    data: currentUser,
    error,
  } = useQuery({
    queryKey: ['currentUser', user],
    queryFn: () => fetchCurrentUser(userId),
    enabled: Boolean(user),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { ref, ...rest } = register('avatar');

  const triggerImgInput = e => {
    imgInputRef.current.click();
  };

  const onSubmit = async data => {
    const { avatar, name, location, about, website, userId } = data;
    const avatarChange = avatar.length > 0;

    let avatarUrl = user?.avatar;

    if (avatarChange) {
      const { data: uploadUrl } = await axios.post('/api/upload', avatar);
      avatarUrl = uploadUrl;
    }

    const res = await axios.put(`/api/users/${userId}`, {
      avatarUrl,
      name,
      location,
      about,
      website,
      userId,
    });
    if (res.status === 200) {
      router.push(`/profile/${userId}`);
    }
  };

  if (currentUser)
    return (
      <div>
        <Navbar />

        <main>
          <div className='pt-24 mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
            <div className='overflow-hidden rounded-lg bg-white shadow'>
              <div className='divide-y divide-gray-200'>
                <form
                  className='mx-auto text-base w-[90%] divide-y divide-gray-200 lg:col-span-9'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className='px-4 py-6 sm:p-6 lg:pb-8'>
                    <div>
                      <h2 className='text-lg font-medium leading-6 text-gray-900'>
                        Profile
                      </h2>
                      <p className='mt-1 text-gray-500'>
                        This information will be displayed on your public
                        profile.
                      </p>
                    </div>

                    <div
                      className='relative mt-6 mx-auto bg-red-300 flex items-center justify-center w-32 h-32 rounded-full overflow-hidden cursor-pointer'
                      onClick={triggerImgInput}
                    >
                      <input
                        type='file'
                        accept='image/*'
                        className='bg-green-400 w-full h-full hidden'
                        {...rest}
                        name='avatar'
                        ref={e => {
                          ref(e);
                          imgInputRef.current = e;
                        }}
                      />
                      {currentUser?.avatar ? (
                        <Image
                          className='h-full w-full'
                          src={currentUser?.avatar}
                          width={48}
                          height={48}
                          style={{ objectFit: 'cover' }}
                          alt='user avatar'
                          priority
                        />
                      ) : (
                        <svg
                          className='h-full w-full text-gray-300'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                        </svg>
                      )}
                      <div className='absolute bg-gray-600 text-white flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 duration-300 ease-out hover:opacity-80'>
                        <span>Change</span>
                      </div>
                    </div>

                    <div className='mt-6'>
                      <div className='flex-grow space-y-6'>
                        <div>
                          <label
                            htmlFor='name'
                            className='font-medium leading-6 text-gray-600'
                          >
                            Name
                          </label>
                          <div className='mt-2 flex rounded-md shadow-sm'>
                            <input
                              type='text'
                              {...register('name')}
                              className='block w-full min-w-0 flex-grow rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600'
                              defaultValue={currentUser?.name}
                            />
                            <input
                              type='text'
                              hidden
                              defaultValue={currentUser?.id}
                              {...register('userId')}
                            />
                          </div>
                          {errors.name?.message && (
                            <small className='text-red-500 text-sm'>
                              {errors.name?.message}
                            </small>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor='about'
                            className='font-medium leading-6 text-gray-600'
                          >
                            About
                          </label>
                          <div className='mt-2'>
                            <textarea
                              {...register('about')}
                              className='my-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 min-h-[125px] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:py-1.5 sm:leading-6'
                              defaultValue={currentUser?.about}
                            />
                            {errors.about?.message && (
                              <small className='text-red-500 text-sm'>
                                {errors.about?.message}
                              </small>
                            )}
                          </div>
                          <small className='text-gray-500'>
                            Brief description for your profile.
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between mt-6'>
                      <div>
                        <label
                          htmlFor='location'
                          className='font-medium leading-6 text-gray-600'
                        >
                          Location
                        </label>
                        <input
                          type='text'
                          {...register('location')}
                          placeholder='Brooklyn, NY'
                          className='mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-teal-600 '
                          defaultValue={currentUser?.location}
                        />
                        {errors.location?.message && (
                          <small className='text-red-500 text-sm'>
                            {errors.location?.message}
                          </small>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor='website'
                          className='block text-sm font-medium leading-6 text-gray-900'
                        >
                          Website
                        </label>
                        <input
                          type='text'
                          defaultValue={currentUser?.website}
                          {...register('website')}
                          placeholder='http://yoursite.com'
                          className='mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-teal-600'
                        />
                        {errors.website?.message && (
                          <small className='text-red-500 text-sm'>
                            {errors.website?.message}
                          </small>
                        )}
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
  return { props: {} };
};
