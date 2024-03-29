import Head from 'next/head';
import { NavProfile, SubjectsNav, Navbar, NewUsers } from '.';
import { useUser } from '@supabase/auth-helpers-react';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-full flex-col'>
      <Head>
        <link rel='icon' type='image/png' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </Head>
      <Navbar />
      <div className='mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-36 sm:px-6 lg:px-8'>
        <aside className='sticky top-28 hidden w-72 shrink-0 md:block'>
          {/* Left column area */}
          <div className='shadow bg-white p-4 rounded-3xl'>
            <NavProfile />
            <SubjectsNav />
          </div>
        </aside>

        <main className='flex-1'>{children}</main>

        <aside className='sticky top-28 hidden w-72 shrink-0 xl:block'>
          <div className='shadow bg-white p-4 rounded-3xl'>
            <h3 className='text-lg text-gray-700 font-semibold text-center'>
              Look who's here!
            </h3>
            <NewUsers />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
