import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Comment, AddCommentForm } from '@/src/components';
import { useRecoilState } from 'recoil';
import { scrollState } from '../atoms/scrollAtom';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [scrollToBottom, setScrollToBottom] = useRecoilState(scrollState);
  const lastCommentRef = useRef(null);

  useEffect(() => {
    if (scrollToBottom) {
      lastCommentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setScrollToBottom(false);
    }
  }, [scrollToBottom]);

  useEffect(() => {
    axios.get(`/api/comments/${postId}`).then(res => setComments(res.data));
  }, []);

  return (
    <div>
      <AddCommentForm postId={postId} setComments={setComments} />
      {comments?.length ? <p className='text-gray-500 mb-2'>Feedback</p> : null}
      {comments?.map(comment => (
        <Comment key={comment?.id} comment={comment} />
      ))}
      <div ref={lastCommentRef} />
    </div>
  );
};

export default Comments;
