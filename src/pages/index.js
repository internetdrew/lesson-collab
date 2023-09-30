import { useRouter } from 'next/router';
import { Layout, Feed, SubSelector } from '../components';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const router = useRouter();
  const { subject } = router.query;

  const fetchPostsBySubject = async () => {
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
    queryFn: fetchPostsBySubject,
  });

  return (
    <>
      <Layout>
        <SubSelector />
        <Feed posts={posts} isLoading={isLoading} />
      </Layout>
    </>
  );
}
