import { NavProfile, SubjectsNav, Feed } from '.';
import { BellIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-full flex-col'>
      <header className='shrink-0 border-b border-gray-200 bg-white'>
        <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <Link href={'/'} className='font-bold text-2xl text-blue-500'>
            LessonFeed
          </Link>
          <div className='flex items-center gap-x-8'>
            <button
              type='button'
              className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-300'
            >
              <span className='sr-only'>View notifications</span>
              <BellIcon className='h-6 w-6' aria-hidden='true' />
            </button>
            <Link href='/profile/user' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your profile</span>
              <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
                <span className='font-medium leading-none text-white'>TU</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className='mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-16 sm:px-6 lg:px-8'>
        <aside className='sticky top-8 hidden w-72 shrink-0 lg:block'>
          {/* Left column area */}
          <div className='shadow bg-slate-50 p-4 rounded-3xl'>
            <NavProfile />
            <hr className='my-8 text-gray-500' />
            {/* Where you can filter by subject */}
            <SubjectsNav />
          </div>
        </aside>

        <main className='flex-1'>
          {/* Main area */}
          {children}
        </main>

        <aside className='sticky top-8 hidden w-72 shrink-0 bg-orange-300 xl:block'>
          {/* Right column area */}
          <div>I'm right!</div>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
