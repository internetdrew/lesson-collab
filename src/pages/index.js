import { useEffect } from 'react';
import { Layout, Feed } from '../components';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom';
import axios from 'axios';

export default function Home({ posts }) {
  const setPosts = useSetRecoilState(postsState);

  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  return (
    <Layout>
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p className='text-center text-2xl font-semibold mt-20'>
          Sorry, no posts on this subject... yet.
        </p>
      )}
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { subject } = query;
  const { data: posts } = await axios.get(
    `${process.env.SITE_URL}/api/posts/${subject ? `?subject=${subject}` : ''}`
  );

  return { props: { posts } };
};
