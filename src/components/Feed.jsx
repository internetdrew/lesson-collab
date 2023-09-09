import { useEffect, useState } from 'react';
import { LessonPost } from './';
import { useRouter } from 'next/router';
import axios from 'axios';

const Feed = ({ posts, userName = null }) => {
  return (
    <section>
      {posts.length ? (
        posts?.map(post => <LessonPost key={`post-${post.id}`} post={post} />)
      ) : (
        <p className='text-center text-2xl font-semibold mt-20'>
          {userName
            ? `${userName.split(' ')[0]} hasn't posted yet.`
            : 'Sorry, no posts on that subject yet.'}
        </p>
      )}
    </section>
  );
};

export default Feed;
