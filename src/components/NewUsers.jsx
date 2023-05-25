import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { newUsersState } from '../atoms/newUsersAtom';

const NewUsers = () => {
  const newUsers = useRecoilValue(newUsersState);

  return (
    <div className='mt-6'>
      {newUsers?.map(user => (
        <div key={user?.id} className='flex items-center mb-3'>
          <Image
            width={500}
            height={500}
            src={user?.avatar}
            className='rounded-full w-12 h-12 mr-2'
            alt='user avatar'
            style={{ objectFit: 'cover' }}
          />
          <div className='flex flex-col'>
            <Link
              href={`/profile/${user?.id}`}
              className='font-medium text-teal-600'
            >
              {user?.name}
            </Link>
            <p className='text-gray-900 text-sm'>
              Joined {moment(user?.created_at).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewUsers;
