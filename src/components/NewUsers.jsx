import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewUsers = () => {
  const [newUsers, setNewUsers] = useState([]);

  const fetchNewUsers = async () => {
    try {
      const { data: newUsers } = await axios.get('/api/users');
      setNewUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewUsers();
  }, []);

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
