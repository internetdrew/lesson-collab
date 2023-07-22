import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

const NewUsers = ({ newUsers }) => {
  return (
    <div className='mt-6'>
      {newUsers?.map((user, idx) => (
        <div key={`user-${idx}`} className='flex items-center mb-3'>
          {user?.avatar ? (
            <Image
              width={500}
              height={500}
              src={user?.avatar}
              className='rounded-full w-12 h-12 mr-2'
              alt='user avatar'
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className='inline-block h-12 w-12 mr-2 overflow-hidden rounded-full bg-gray-100'>
              <svg
                className='h-full w-full text-gray-300'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </span>
          )}
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
