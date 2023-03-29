import { Layout, Center, SearchBar, Feed } from '../components';

export default function Home() {
  return (
    <div>
      <Layout>
        <Center>
          <SearchBar />
          <Feed />
        </Center>
      </Layout>
    </div>
  );
}
