import { getServerSession } from 'next-auth';
import { Layout, Feed } from '../components';
import { authOptions } from './api/auth/[...nextauth]';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom';

export default function Home({ posts }) {
  const setPosts = useSetRecoilState(postsState);
  setPosts(posts);
  console.log(posts);
  return (
    <Layout>
      <Feed />
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
