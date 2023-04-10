import Link from 'next/link';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userAtom';

const NavProfile = () => {
  const user = useRecoilValue(userState);
  console.log(user);
  return (
    <div className='flex items-center'>
      <span className='inline-flex h-full w-auto items-center overflow-hidden justify-center rounded-full bg-gray-500'>
        <Link href={'/profile/user'}>
          <Image
            src={user?.imageUrl}
            width={48}
            height={48}
            className='font-medium leading-none text-white'
          />
        </Link>
      </span>
      <div className='ml-4 flex flex-col justify-center'>
        <p className='font-medium text-gray-700 group-hover:text-gray-900'>
          {user && `${user.firstName} ${user.lastName}`}
        </p>
        <Link href='/profile/user'>
          <p className='text-md font-medium text-blue-500 group-hover:text-gray-700'>
            View profile
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavProfile;
