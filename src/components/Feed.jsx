import { LessonPost } from './';
import { useRecoilValue } from 'recoil';
import { postsState } from '../atoms/postsAtom';

const Feed = () => {
  const posts = useRecoilValue(postsState);
  console.log(posts);
  return (
    <section>
      {posts.map(post => (
        <LessonPost post={post} />
      ))}
    </section>
  );
};

export default Feed;
