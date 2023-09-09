import { useEffect, useState } from 'react';
import { LessonPost } from './';
import { useRouter } from 'next/router';
import axios from 'axios';

const Feed = () => {
  const router = useRouter();
  const { subject } = router.query;
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get(
      `/api/posts${subject ? `/?subject=${subject}` : ''}`
    );
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, [subject]);

  return (
    <section>
      {posts.length ? (
        posts?.map(post => <LessonPost key={`post-${post.id}`} post={post} />)
      ) : (
        <p className='text-center text-2xl font-semibold mt-20'>
          Sorry, no posts on this subject... yet.
        </p>
      )}
    </section>
  );
};

export default Feed;
