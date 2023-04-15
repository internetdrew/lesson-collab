import Link from 'next/link';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { sessionState } from '../atoms/sessionAtom';

const NavProfile = () => {
  const session = useRecoilValue(sessionState);

  return (
    <div className='flex items-center'>
      <span className='inline-flex h-full w-auto items-center overflow-hidden justify-center rounded-full bg-gray-500'>
        <Link href={'/profile/user'}>
          <Image
            src={session?.user?.image}
            alt='user image'
            width={48}
            height={48}
            className='font-medium leading-none text-white'
          />
        </Link>
      </span>
      <div className='ml-4 flex flex-col justify-center'>
        <p className='font-medium text-gray-700 group-hover:text-gray-900'>
          {session?.user?.name}
        </p>
        <Link
          href='/profile/user'
          className='text-md font-medium text-[--primary-color] hover:text-teal-700'
        >
          View profile
        </Link>
      </div>
    </div>
  );
};

export default NavProfile;
