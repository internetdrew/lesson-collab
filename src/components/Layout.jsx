import { Navbar, Center } from '.';

const Layout = ({ children }) => {
  return (
    <div className='flex'>
      <Navbar />
      <main>
        <Center>{children}</Center>
      </main>
    </div>
  );
};

export default Layout;
