import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

const NewUsers = () => {
  const [newUsers, setNewUsers] = useState([]);

  const getNewUsers = async () => {
    const userRes = await axios.get('/api/users');
    setNewUsers(userRes.data);
  };

  useEffect(() => {
    getNewUsers();
    console.log(newUsers);
  }, []);

  return (
    <div className='mt-6'>
      {newUsers?.map(user => (
        <div className='flex items-center mb-3'>
          <Image
            width={500}
            height={500}
            src={user?.avatar}
            className='rounded-full w-12 h-12 mr-2'
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
