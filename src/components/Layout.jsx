import { Footer, Navbar } from '.';

const Layout = ({ children }) => {
  return (
    <div className='flex'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
