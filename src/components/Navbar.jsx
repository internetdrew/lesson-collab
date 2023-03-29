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
    <nav className='fixed w-64 h-screen flex flex-col px-6 bg-slate-100 z-10 overflow-y-scroll lg:overflow-auto'>
      <h1 className='text-center font-semibold text-2xl my-8'>
        <Link href={'/'}>LessonFeed</Link>
      </h1>
      <NavProfile />
      <ul className='flex flex-col gap-4 text-lg font-medium'>
        <li className='pl-6 py-2 rounded-lg ease-out hover:bg-white hover:shadow-md'>
          <Link href='/' className='block'>
            Show All
          </Link>
        </li>
        <hr />
        {subjects.map(subject => (
          <li
            key={subject}
            className='capitalize py-2 pl-6 rounded-lg ease-in-out hover:bg-white hover:shadow-md'
          >
            <Link
              href={`/lesson-plans/${subject.split(' ').join('-')}`}
              className='block'
            >
              {subject}
            </Link>
          </li>
        ))}
      </ul>
      <button className='mt-auto text-lg mb-6 flex items-center gap-4 text-red-600 font-semibold pl-6 py-2 rounded-lg hover:bg-red-200 hover:shadow-md'>
        <IoLogOutOutline className='text-2xl' />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
