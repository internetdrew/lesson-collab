import { useRouter } from 'next/router';
import { LessonPost } from './';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Feed = () => {
  const router = useRouter();
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
    <section>
      {posts && posts.length ? (
        posts?.map(post => <LessonPost key={`post-${post.id}`} post={post} />)
      ) : (
        <p className='text-center text-2xl font-semibold mt-20'>
          {isLoading ? 'Loading...' : 'No posts yet'}
        </p>
      )}
    </section>
  );
};

export default Feed;
