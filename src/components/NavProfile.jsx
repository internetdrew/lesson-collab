import { AiOutlineUser } from 'react-icons/ai';

const NavProfile = () => {
  return (
    <div className='flex items-center my-10 bg-white px-4 py-2 rounded-lg border hover:shadow-lg duration-300 cursor-pointer'>
      <div className=' h-10 w-10 bg-blue-400 flex items-center justify-center rounded-full mr-4'>
        <AiOutlineUser className='text-2xl' />
      </div>
      <span className='text-lg font-semibold'>Test User</span>
    </div>
  );
};

export default NavProfile;
