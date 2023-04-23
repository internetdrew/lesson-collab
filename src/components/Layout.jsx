'use client';

import { NavProfile, SubjectsNav } from '.';
import Navbar from './Navbar';
import { sessionState } from '../atoms/sessionAtom';
import { useRecoilValue } from 'recoil';
import { useAuthContext } from '../context/authContext';

const Layout = ({ children }) => {
  const session = useRecoilValue(sessionState);
  const { currentUser } = useAuthContext();

  return (
    <div className='flex min-h-full flex-col'>
      <Navbar />
      <div className='mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-16 sm:px-6 lg:px-8'>
        <aside className='sticky top-8 hidden w-72 shrink-0 lg:block'>
          {/* Left column area */}
          <div className='shadow bg-white p-4 rounded-3xl'>
            {currentUser ? (
              <>
                <NavProfile />
                <hr className='mb-8 mt-6 text-gray-500' />
              </>
            ) : null}
            <SubjectsNav />
          </div>
        </aside>

        <main className='flex-1'>{children}</main>

        <aside className='sticky top-8 hidden w-72 shrink-0 bg-orange-300 xl:block'>
          <div>I'm right!</div>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
