import Link from 'next/link';
import { NavProfile } from '.';

const Navbar = () => {
  const subjects = [
    'math',
    'science',
    'social studies',
    'art',
    'history',
  ].sort();

  return (
    <nav className='h-screen flex flex-col p-4 bg-slate-100'>
      <h1 className='text-center font-semibold text-2xl my-4'>
        <Link href={'/'}>LessonFeed</Link>
      </h1>
      <NavProfile />
      <ul className='flex flex-col gap-6 text-lg font-medium ml-1'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {subjects.map(subject => (
          <li key={subject} className='capitalize '>
            <Link href={`/subject/${subject.split(' ').join('-')}`}>
              {subject}
            </Link>
          </li>
        ))}
      </ul>
      <div className='mt-auto text-lg'>
        <span>Logout</span>
      </div>
    </nav>
  );
};

export default Navbar;
