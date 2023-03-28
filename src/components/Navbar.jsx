import Link from 'next/link';
import { NavProfile } from '.';
import { IoLogOutOutline } from 'react-icons/io5';

const Navbar = () => {
  const subjects = [
    'math',
    'science',
    'social studies',
    'art',
    'history',
  ].sort();

  return (
    <nav className='h-screen flex flex-col px-6 bg-slate-100'>
      <h1 className='text-center font-semibold text-2xl my-8'>
        <Link href={'/'}>LessonFeed</Link>
      </h1>
      <NavProfile />
      <ul className='flex flex-col  text-lg font-medium'>
        <li className='pl-6 py-4 rounded-lg duration-300 ease-out hover:bg-white hover:shadow-md'>
          <Link href='/'>Home</Link>
        </li>
        {subjects.map(subject => (
          <li
            key={subject}
            className='capitalize py-4 pl-6 rounded-lg duration-300 ease-in-out hover:bg-white hover:shadow-md'
          >
            <Link
              href={`/subject/${subject.split(' ').join('-')}`}
              className='w-full block'
            >
              {subject}
            </Link>
          </li>
        ))}
      </ul>
      <button className='mt-auto text-lg mb-10 flex items-center gap-4 text-red-600 font-semibold pl-6'>
        <IoLogOutOutline className='text-2xl' />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
