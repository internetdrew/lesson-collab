import { useEffect } from 'react';
import { Layout, Feed, SubSelector } from '../components';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom';
import { userState } from '../atoms/userAtom';
import { useUser } from '@supabase/auth-helpers-react';
import axios from 'axios';

export default function Home({ posts, newUsers }) {
  const setPosts = useSetRecoilState(postsState);
  const setCurrentUser = useSetRecoilState(userState);

  const currentUser = useUser();

  const getSetCurrentUser = async () => {
    if (currentUser) {
      const { data: userData } = await axios.get(
        `/api/users/${currentUser?.id}`
      );
      setCurrentUser(userData[0]);
      return;
    }

    setCurrentUser(null);
  };

  useEffect(() => {
    getSetCurrentUser();
  });

  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  return (
    <Layout>
      <SubSelector />
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

export const getServerSideProps = async ({ req, res, query }) => {
  try {
    const subject = query.subject ? query.subject.toLowerCase() : null;

    const { data: posts } = await axios.get(
      `${process.env.SITE_URL}/api/posts${
        subject ? `/?subject=${subject.toLowerCase()}` : ''
      }`
    );

    return {
      props: { posts },
    };
  } catch (error) {
    console.error(error);
  }
};
