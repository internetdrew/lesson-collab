import { Layout, Feed, SubSelector } from '../components';
import Head from 'next/head';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/userAtom';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Home({ currentUser }) {
  const router = useRouter();
  // Figure this out for the layout
  const setCurrentUser = useSetRecoilState(userState);
  if (currentUser) setCurrentUser(currentUser[0]);
  //
  const { subject } = router.query;

  const fetchPosts = async () => {
    const { data } = await axios.get(
      `/api/posts${subject ? `/?subject=${subject}` : ''}`
    );
    return data;
  };

  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ['posts', subject],
    queryFn: fetchPosts,
  });

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
      <Layout currentUser={currentUser}>
        <SubSelector />
        <Feed posts={posts} />
      </Layout>
    </>
  );
}
