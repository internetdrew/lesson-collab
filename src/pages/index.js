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
  console.log(subject);
  const response = await axios.get(
    `${process.env.SITE_URL}/api/posts?subject=${subject}`
  );
  const posts = response.data;
  console.log(posts);

  return { props: { posts } };
};
