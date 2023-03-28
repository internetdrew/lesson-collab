import { Footer, Navbar } from '.';

const Layout = ({ children }) => {
  return (
    <div className='grid grid-cols-6'>
      <Navbar className='col-span-1 h-screen' />
      <div className='col-span-5 bg-green-200'>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
