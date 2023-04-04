import { Navbar, SinglePanelContainer, Feed } from '@/src/components';
import { MapPinIcon } from '@heroicons/react/24/solid';

const user = {
  name: 'Test User',
  handle: 'testuser',
  email: 'testuser@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
};

export default function UserProfile() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='mt-24'>
        <SinglePanelContainer>
          <div className='w-full h-40 bg-gradient-to-r from-orange-200 to-red-500 relative'>
            <div className='w-40 h-auto rounded-full overflow-hidden absolute top-1/2 left-1/4 border-4 border-white sm:left-6'>
              <img src={user.imageUrl} alt='' className='object-cover' />
            </div>
          </div>
          <div className='pt-28 w-[90%] mx-auto pb-6 relative'>
            <h1 className='text-2xl font-semibold'>Whitley Houston</h1>
            <span className='block text-gray-600 mb-2'>@username</span>
            <div className='flex items-center'>
              <MapPinIcon className='w-4 h-auto text-gray-500 mr-1' />
              <span className='font-light text-gray-600'>Brooklyn, NY</span>
            </div>
            <button
              type='button'
              className='static sm:absolute w-full sm:w-fit mt-4 top-2 right-4 rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Follow
            </button>
          </div>
        </SinglePanelContainer>

        <div className='mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
          <h2 className='text-xl font-semibold mb-2 bg-white w-max px-4 py-2 rounded-lg'>
            Whitley's Posts
          </h2>
          <Feed />
        </div>
      </main>
    </div>
  );
}
