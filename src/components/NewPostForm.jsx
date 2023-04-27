import { useRef } from 'react';
import { DocumentIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

const subjects = ['math', 'science', 'social studies', 'art', 'history'].sort();
const gradeLevels = ['elementary', 'middle', 'high'];

const capitalize = str =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export default function NewPostForm() {
  const fileUploadRef = useRef(null);
  const instance = axios.create();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const fileInput = Array.from(form.elements).find(
        ({ name }) => name === 'file'
      );
      const formData = new FormData(form);

      for (const file of fileInput.files) {
        formData.append('file', file);
      }
      formData.append('upload_preset', 'my-uploads');

      const res = await instance.post(
        'https://api.cloudinary.com/v1_1/dxtdoiyij/auto/upload',
        formData
      );
      if (res.statusText === 'OK') {
        formData.append('fileUrl', res.data.secure_url);
      }
      console.log(Object.fromEntries(formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='px-4 py-4 sm:px-6' onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor='title'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Title
        </label>
        <div className='mt-2'>
          <input
            type='text'
            name='title'
            id='title'
            className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none'
            placeholder='Title your post'
          />
        </div>
      </div>
      <div className='mt-6 gap-4 items-center sm:flex'>
        <div className='flex-1 mb-6 sm:mb-0'>
          <label
            htmlFor='gradeLevel'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Grade Level
          </label>
          <select
            id='gradeLevel'
            name='gradeLevel'
            className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          >
            {gradeLevels.map(level => (
              <option key={level} className='capitalize' value={level}>
                {capitalize(level)} School
              </option>
            ))}
          </select>
        </div>
        <div className='flex-1'>
          <label
            htmlFor='subject'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Subject
          </label>
          <select
            id='subject'
            name='subject'
            className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
          >
            {subjects.map(subject => (
              <option key={subject} className='capitalize' value={subject}>
                {capitalize(subject)}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* start */}
      <div className='mt-6'>
        <label
          htmlFor='cover-photo'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Lesson Plan
        </label>
        <div
          className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer'
          onClick={() => {
            fileUploadRef.current.click();
          }}
        >
          <div className='text-center'>
            <DocumentIcon
              className='mx-auto h-12 w-12 text-gray-300'
              aria-hidden='true'
            />
            <div className='mt-4 flex text-sm leading-6 text-gray-600'>
              <label
                htmlFor='file'
                className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
              >
                <input
                  id='file'
                  name='file'
                  type='file'
                  accept='.pdf, .doc, .docx, application/msword'
                  ref={fileUploadRef}
                  hidden
                />
              </label>
              <p className='pl-1 font-semibold text-teal-600'>
                Browse files to upload your lesson plan
              </p>
            </div>
            <small className='text-xs leading-5 text-gray-600'>
              PDF and Word Doc up to 10MB
            </small>
          </div>
        </div>
      </div>
      {/* finish */}
      <div className='mt-6'>
        <label
          htmlFor='description'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Description
        </label>
        <div className='mt-2'>
          <textarea
            name='desc'
            id='desc'
            className='min-h-[125px] block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none'
            placeholder='What would you like feedback on?'
          />
        </div>
      </div>

      <div className='flex justify-end gap-x-3 py-4 divide-y divide-gray-200'>
        <button
          type='button'
          className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='inline-flex justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700'
        >
          Post
        </button>
      </div>
    </form>
  );
}
