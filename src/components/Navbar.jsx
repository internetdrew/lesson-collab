import Link from 'next/link';
import { NavProfile } from '.';

const Navbar = () => {
  const subjects = ['math', 'science', 'social studies', 'art', 'history'];

  return (
    <nav className='h-screen flex flex-col p-4 bg-slate-100'>
      <NavProfile />
      <ul className='flex flex-col gap-4'>
        {subjects.map(subject => (
          <Link
            key={subject}
            href={`/subjects/${subject.split(' ').join('-')}`}
            className='text-lg capitalize border-b pb-2 border-slate-200'
          >
            {subject}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
