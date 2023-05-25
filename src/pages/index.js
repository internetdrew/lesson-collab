import { useEffect } from 'react';
import { Layout, Feed, SubSelector } from '../components';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom';
import { newUsersState } from '../atoms/newUsersAtom';
import { userState } from '../atoms/userAtom';
import { useUser } from '@supabase/auth-helpers-react';
import axios from 'axios';

export default function Home({ posts, newUsers }) {
  const setPosts = useSetRecoilState(postsState);
  const setNewUsers = useSetRecoilState(newUsersState);
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
    setNewUsers(newUsers);
  }, [newUsers]);

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
  const { subject } = query;

  const { data: posts } = await axios.get(
    `${process.env.SITE_URL}/api/posts${subject ? `/?subject=${subject}` : ''}`
  );

  const { data: newUsers } = await axios.get(
    `${process.env.SITE_URL}/api/users`
  );

  return {
    props: { posts, newUsers },
  };
};
