import { Center, Layout, SearchBar, Feed } from '@/src/components';

const Subject = ({ posts }) => {
  return (
    <div className='flex flex-col'>
      <Layout>
        <h1 className='text-center text-2xl font-bold mb-10'>
          Params Lesson Plans
        </h1>
        <SearchBar />
      </Layout>
    </div>
  );
};

export default Subject;
