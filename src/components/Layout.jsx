import { Footer, Navbar } from '.';

const Layout = ({ children }) => {
  return (
    <div className='grid grid-cols-5 2xl:grid-cols-7'>
      <Navbar className='col-span-1 h-screen' />
      <div className='col-span-4 bg-slate-200 flex flex-col 2xl:col-span-6'>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
