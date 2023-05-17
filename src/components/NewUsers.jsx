import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const NewUsers = () => {
  const [newUsers, setNewUsers] = useState([]);

  const getNewUsers = async () => {
    const userRes = await axios.get('/api/users');
    setNewUsers(userRes.data);
  };

  useEffect(() => {
    getNewUsers();
  }, []);

  return (
    <div className='mt-6'>
      {newUsers?.map(user => (
        <div className='flex items-center mb-3'>
          <div className='h-10 w-10 rounded-full overflow-hidden  flex mr-2'>
            <Image width={500} height={500} src={user?.avatar} />
          </div>
          <Link
            href={`/profile/${user?.id}`}
            className='text-lg font-semibold text-teal-600'
          >
            {user?.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewUsers;
