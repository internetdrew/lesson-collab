import { LessonPost } from './';

const Feed = ({ posts }) => {
  return (
    <section>
      {posts?.map(post => (
        <LessonPost key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Feed;
