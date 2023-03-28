import { Footer, Navbar } from '.';

const Layout = ({ children }) => {
  return (
    <div className='grid grid-cols-5'>
      <Navbar className='col-span-1 h-screen' />
      <div className='col-span-4 bg-green-200 flex flex-col'>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
