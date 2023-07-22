import { Layout, Feed, SubSelector } from '../components';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import axios from 'axios';
import Head from 'next/head';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/userAtom';

export default function Home({ posts, newUsers, currentUser }) {
  const setCurrentUser = useSetRecoilState(userState);
  console.log(currentUser);
  if (currentUser) setCurrentUser(currentUser[0]);

  return (
    <>
      <Head>
        <title>
          LessonCollab: A Platform for Collaborative Lesson Planning
        </title>
        <meta
          property='og:title'
          content='LessonCollab: A Platform for Collaborative Lesson Planning'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://media.graphassets.com/Sv9IMzfvTWyzMKeTtCHU'
        />
        <meta property='og:url' content='https://lessoncollab.com' />
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          property='og:description'
          content='A social platform where educators collaborate on and improve lesson plans.'
        />
        <meta property='og:site_name' content='LessonCollab' />
        <meta name='twitter:image:alt' content='LessonCollab banner' />
      </Head>
      <Layout currentUser={currentUser} newUsers={newUsers}>
        <SubSelector />
        {posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className='text-center text-2xl font-semibold mt-20'>
            Sorry, no posts on this subject... yet.
          </p>
        )}
      </Layout>
    </>
  );
}

export const getServerSideProps = async ctx => {
  const subject = ctx.query?.subject ? ctx.query?.subject.toLowerCase() : null;
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  try {
    const { data: currentUser } = await axios.get(
      `${process.env.SITE_URL}/api/users/${session?.user?.id}`
    );
    console.log(currentUser);

    const { data: posts } = await axios.get(
      `${process.env.SITE_URL}/api/posts${
        subject ? `/?subject=${subject}` : ''
      }`
    );

    const { data: newUsers } = await axios.get(
      `${process.env.SITE_URL}/api/users`
    );

    return {
      props: { posts, newUsers, currentUser },
    };
  } catch (error) {
    console.error(error);
  }
};
