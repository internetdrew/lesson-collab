import { Comment } from '@/src/components';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments && comments?.length > 0 && (
        <p className='text-gray-500 mb-2'>Feedback</p>
      )}
      {comments &&
        comments?.map(comment => (
          <Comment key={`comment-${comment?.id}`} comment={comment} />
        ))}
    </div>
  );
};

export default Comments;
