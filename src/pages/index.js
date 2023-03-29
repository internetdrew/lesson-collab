import { Layout, Center, SearchBar, Feed } from '../components';

export default function Home() {
  return (
    <div>
      <Layout>
        <SearchBar />
        <Feed />
      </Layout>
    </div>
  );
}
