import { useEffect } from 'react';
import { Layout, Feed } from '../components';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default function Home({ posts }) {
  const setPosts = useSetRecoilState(postsState);

  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  return (
    <Layout>
      {posts.length ? (
        <Feed />
      ) : (
        <p className='text-center text-2xl font-semibold mt-20'>
          Sorry, no posts on this subject... yet.
        </p>
      )}
    </Layout>
  );
}

export const getServerSideProps = async ({ req, res, query }) => {
  const supabaseServerClient = createServerSupabaseClient({ req, res });
  const { subject } = query;

  if (subject) {
    const { data } = await supabaseServerClient
      .from('posts')
      .select(
        `*, users (
        name, avatar
      )`
      )
      .eq('subject', subject);
    return { props: { posts: data } };
  }

  const { data } = await supabaseServerClient.from('posts').select(`*, users (
    name, avatar
  )`);
  return { props: { posts: data } };
};
