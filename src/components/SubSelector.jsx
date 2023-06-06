'use client';

import Link from 'next/link';
import React from 'react';
import { subjects } from '../lib';
import { useRouter } from 'next/router';

const SubSelector = () => {
  const formattedSubs = subjects.map(
    sub => sub.charAt(0).toUpperCase() + sub.slice(1)
  );
  const router = useRouter();

  const handleChange = e => {
    if (e.target.value === 'all') {
      return router.push('/');
    }
    router.push(`/?subject=${e.target.value}`);
  };

  return (
    <div className='mb-6 w-1/2 mx-auto relative md:hidden'>
      <select className='w-full rounded-lg shadow-md' onChange={handleChange}>
        <option value='all'>All</option>
        {formattedSubs.map(sub => (
          <option key={sub} value={`${sub}`}>
            {sub}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubSelector;
