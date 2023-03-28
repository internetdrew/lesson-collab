import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';

const NavProfile = () => {
  return (
    <Link href='/profile/user'>
      <div className='flex items-center my-10 bg-white px-4 py-2 rounded-lg border hover:shadow-lg duration-300'>
        <div className=' h-14 w-14 bg-blue-400 flex items-center justify-center rounded-full mr-4'>
          <AiOutlineUser className='text-2xl' />
        </div>
        <div className='flex flex-col'>
          <span className='text-md font-semibold'>Test User</span>
          <span className='text-sm text-gray-600'>History Teacher</span>
          <span className='text-sm text-gray-600'>12 Upvotes</span>
        </div>
      </div>
    </Link>
  );
};

export default NavProfile;
