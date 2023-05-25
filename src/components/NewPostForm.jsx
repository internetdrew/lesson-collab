import { DocumentIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const subjects = ['math', 'science', 'social studies', 'art', 'history'].sort();
const gradeLevels = ['elementary', 'middle', 'high'];

const capitalize = str =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const schema = z.object({
  title: z.string().min(1, { message: 'Title is required for submission.' }),
  gradeLevel: z
    .string()
    .min(1, { message: 'Grade level is required for submission.' }),
  subject: z
    .string()
    .min(1, { message: 'Subject is required for submission.' }),
  file: z.object(),
  desc: z
    .string()
    .min(1, { message: 'Description is required for submission.' }),
});

export default function NewPostForm({ postData, userData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fileName = watch('file');
  const postToEdit = Object.keys(postData).length !== 0;

  const router = useRouter();

  const onSubmit = async data => {
    try {
      const { title, gradeLevel, subject, desc, file } = data;

      const { data: fileUrl } =
        data?.file?.length !== 0
          ? await axios.post('/api/upload', file)
          : postData?.file_url;

      const fileName = file?.[0]?.name || postData?.fileUrl;

      if (postToEdit) {
        const res = await axios.put(`/api/posts/${postData?.id}`, {
          title,
          gradeLevel,
          subject,
          fileName: fileName || postData?.file_name,
          fileUrl,
          desc,
          uid: userData?.id,
        });

        if (res.statusText === 'OK') router.push(`/posts/${postData?.id}`);
        return;
      }

      if (!postToEdit) {
        const res = await axios.post('/api/posts', {
          title,
          gradeLevel,
          subject,
          fileName,
          fileUrl,
          desc,
          uid: userData?.id,
        });
        console.log(res);
        if (res.statusText === 'OK') router.push('/');
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='px-4 py-4 sm:px-6' onSubmit={handleSubmit(onSubmit)}>
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
            defaultValue={postData?.title || ''}
            {...register('title')}
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
            defaultValue={postData?.grade_level || gradeLevels[0]}
            {...register('gradeLevel')}
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
            defaultValue={postData?.subject || subjects[0]}
            {...register('subject')}
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
        <div className='flex justify-center items-center w-full border-4 rounded-lg my-2 relative hover:outline-none h-[300px] border-dashed'>
          <div className='flex flex-col items-center justify-center'>
            <DocumentIcon className='w-20 text-teal-600' />
            <p className='text-sm'>Browse files to upload your lesson plan</p>
            <small className='text-gray-600'>PDF and Word Doc up to 10MB</small>
          </div>
          <input
            type='file'
            accept='.pdf, .doc, .docx, application/msword'
            {...register('file')}
            className='absolute w-full h-full cursor-pointer opacity-0 '
          />
        </div>
        {postData?.file_name || fileName ? (
          <p className='w-full mt-2 text-center text-sm text-gray-600'>
            Current file: {fileName?.[0]?.name || postData?.file_name}
          </p>
        ) : null}
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
            defaultValue={postData?.desc || ''}
            {...register('desc')}
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
          className='inline-flex justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700'
        >
          {postToEdit ? 'Update' : 'Post'}
        </button>
      </div>
    </form>
  );
}
