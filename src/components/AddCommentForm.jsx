const AddCommentForm = () => {
  return (
    <div className='mb-4'>
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
          className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[125px]'
          defaultValue={''}
        />
        <button
          type='submit'
          className='w-fit ml-auto mt-2 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddCommentForm;
