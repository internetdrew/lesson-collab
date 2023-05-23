'use client';

import Link from 'next/link';
import React from 'react';
import { subjects } from '../lib';
import { useRouter } from 'next/router';

const SubSelector = () => {
  const router = useRouter();

  const handleChange = e => {
    router.push(`/?subject=${e.target.value}`);
  };

  return (
    <div className='mb-6 w-1/2 mx-auto relative lg:hidden'>
      <select className='w-full capitalize' onChange={handleChange}>
        <option value='all'>all</option>
        {subjects.map(sub => (
          <option key={sub.name} value={`${sub.name}`}>
            {sub.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubSelector;
