import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AddCommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('postId', postId);
    const commentData = Object.fromEntries(formData);

    try {
      const res = await axios.post('/api/comments', commentData);

      if (res.status === 200) {
        setCommentText('');
        router.replace(router.asPath);
      }
    } catch (err) {
      console.log(err.response.status);
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
          rows={4}
          name='feedback'
          id='feedback'
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
          className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[125px] resize-none'
        />
        <button
          type='submit'
          className='w-fit ml-auto mt-2 inline-flex items-center rounded-md bg-teal-600 duration-300 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
