import { HiArrowLeft } from 'react-icons/hi';
import { Navbar } from './';

const PdfViewer = ({ post, show }) => {
  return (
    <>
      <Navbar />
      <iframe
        src={post?.file_url}
        className='w-full h-screen relative'
      ></iframe>
      <button
        className='absolute right-2 -bottom-10 inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-4 py-2'
        onClick={() => show(false)}
      >
        <HiArrowLeft />
        Go back
      </button>
    </>
  );
};

export default PdfViewer;
