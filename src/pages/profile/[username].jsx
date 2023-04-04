import { Navbar, SinglePanelContainer } from '@/src/components';

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
      <Navbar />
      <SinglePanelContainer>
        <div className='w-full h-40 bg-gradient-to-r from-orange-200 to-red-500 relative'>
          <div className='w-40 h-auto rounded-full overflow-hidden absolute top-1/2 left-6 border-4 border-white'>
            <img src={user.imageUrl} alt='' className='object-cover' />
          </div>
        </div>
        <div className='pt-28 w-[90%] mx-auto pb-6 relative'>
          <h1 className='text-2xl font-semibold'>Whitley Houston</h1>
          <span className='block text-gray-600 mb-2'>@username</span>
          <span className='font-light text-gray-600'>Brooklyn, NY</span>
          <button
            type='button'
            className='absolute top-6 right-4 rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Follow
          </button>
        </div>
      </SinglePanelContainer>
    </div>
  );
}
