import { getServerSession } from 'next-auth';
import { Layout, Feed } from '../components';
import { authOptions } from './api/auth/[...nextauth]';
import axios from 'axios';

export default function Home({ posts }) {
  return (
    <Layout>
      <Feed posts={posts} />
    </Layout>
  );
}

export const getServerSideProps = async ({ req, res, query }) => {
  const { subject } = query;
  const response = await axios.get(
    subject
      ? `${process.env.SITE_URL}/api/posts?subject=${subject}`
      : `${process.env.SITE_URL}/api/posts`
  );
  const posts = response.data;

  return { props: { posts } };
};
