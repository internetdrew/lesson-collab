import { LessonPost } from './';

const Feed = ({ posts, isLoading }) => {
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
