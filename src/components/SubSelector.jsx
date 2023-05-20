import Link from 'next/link';
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const subjects = [];

const SubSelector = () => {
  return (
    <div className='mb-4'>
      <div className='w-1/2 mx-auto bg-white rounded-lg flex justify-between items-center py-2 px-4'>
        <span>Filter by subject</span>
        <ChevronDownIcon className='w-6 h-6' />
      </div>
      <ul>
        <li>
          <Link />
        </li>
      </ul>
    </div>
  );
};

export default SubSelector;
