import { Layout, Feed } from '../components';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Layout>
        <Feed />
      </Layout>
    </div>
  );
}
