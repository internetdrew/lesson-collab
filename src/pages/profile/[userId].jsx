import { Navbar, SinglePanelContainer, Feed } from '@/src/components';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import axios from 'axios';

export default function UserProfile({ userData }) {
  const { posts } = userData;
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='mt-24'>
        <SinglePanelContainer>
          <div className='w-full h-40 bg-gradient-to-r from-orange-200 to-red-500 relative'>
            <div className='w-32 h-32 rounded-full overflow-hidden absolute top-1/2 mt-3 left-1/4 border-4 border-white sm:left-6'>
              <Image
                src={userData?.avatar}
                alt='user image'
                width={48}
                height={48}
                className='w-full h-full'
              />
            </div>
          </div>
          <div className='pt-28 w-[90%] mx-auto pb-6 relative'>
            <h1 className='text-2xl font-semibold'>{userData?.name}</h1>
            <span className='block text-gray-600 mb-2'>@{userData?.id}</span>
            <div className='flex items-center'>
              <MapPinIcon className='w-4 h-auto text-gray-500 mr-1' />
              <span className='font-light text-gray-600'>Brooklyn, NY</span>
            </div>
            <button
              type='button'
              className='static sm:absolute w-full sm:w-fit mt-4 top-2 right-4 rounded-md bg-teal-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 duration-300'
            >
              Follow
            </button>
          </div>
        </SinglePanelContainer>

        <div className='mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
          <h2 className='text-xl font-semibold mb-2 bg-white w-max px-4 py-2 rounded-lg'>
            {userData?.name}'s Posts
          </h2>
          <Feed posts={posts} />
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ res, req, query }) => {
  const { userId } = query;

  const { data: userData } = await axios.get(
    `${process.env.SITE_URL}/api/users/${userId}`
  );

  return { props: { userData: userData[0] } };
};
