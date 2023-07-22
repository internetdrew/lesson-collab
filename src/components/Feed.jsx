import { LessonPost } from './';

const Feed = ({ posts }) => {
  return (
    <section>
      {posts?.map((post, idx) => (
        <LessonPost key={`post-${idx}`} post={post} />
      ))}
    </section>
  );
};

export default Feed;
