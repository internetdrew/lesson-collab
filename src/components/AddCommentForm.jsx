import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AddCommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState({ status: false, message: '' });
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('postId', postId);
    const commentData = Object.fromEntries(formData);
    if (commentData.feedback.trim() === '') {
      return setError({
        status: true,
        message: 'Please leave feedback to post.',
      });
    }

    try {
      const res = await axios.post('/api/comments', commentData);

      if (res.status === 200) {
        setCommentText('');
        setError({ status: false, message: '' });
        router.replace(router.asPath);
      }
    } catch (err) {
      if (err.response.status === 401) {
        router.push('/login');
      }
    }
  };

  return (
    <form className='mb-4' onSubmit={handleSubmit}>
      <label
        htmlFor='feedback'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        Add your feedback
      </label>
      <div className='mt-2 flex flex-col'>
        <textarea
          rows={6}
          name='feedback'
          id='feedback'
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
          className={`block w-full rounded-md text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:py-1.5 sm:leading-6 resize-none ${
            error.status ? 'border-red-700' : ''
          }`}
        />
        {error.status && (
          <small className='text-right mt-1 text-red-700 text-sm'>
            {error?.message}
          </small>
        )}
        <button
          type='submit'
          className={
            'w-fit ml-auto mt-2 inline-flex items-center rounded-md bg-teal-600 duration-300 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 '
          }
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
