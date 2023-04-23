import { getServerSession } from 'next-auth';
import { Layout, Feed } from '../components';
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {
  return (
    <Layout>
      <Feed />
    </Layout>
  );
}
