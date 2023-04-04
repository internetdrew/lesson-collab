import { NavProfile, SubjectsNav, Feed } from '.';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-full flex-col'>
      <Navbar />

      <div className='mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-16 sm:px-6 lg:px-8'>
        <aside className='sticky top-8 hidden w-72 shrink-0 lg:block'>
          {/* Left column area */}
          <div className='shadow bg-white p-4 rounded-3xl'>
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
