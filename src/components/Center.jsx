import { SearchBar, Feed } from '.';

const Center = () => {
  return (
    <main className='flex flex-col pt-10'>
      <div className='w-[90%] md:w-1/2 mx-auto'>
        <SearchBar />
        <Feed />
      </div>
    </main>
  );
};

export default Center;
