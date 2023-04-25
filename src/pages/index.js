import { useEffect } from 'react';
import { getServerSession } from 'next-auth';
import { Layout, Feed } from '../components';
import { authOptions } from './api/auth/[...nextauth]';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom';

export default function Home({ posts }) {
  const setPosts = useSetRecoilState(postsState);

  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  return (
    <Layout>
      <Feed />
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { subject } = query;
  const response = await axios.get(
    `${process.env.SITE_URL}/api/posts${subject ? `?subject=${subject}` : ''}`
  );
  const posts = response.data;

  return { props: { posts } };
};
