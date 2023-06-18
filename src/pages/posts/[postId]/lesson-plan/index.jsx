import axios from 'axios';
import { Navbar } from '@/src/components';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFView = ({ post }) => {
  return (
    <>
      <Navbar />
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
        <Viewer fileUrl={post?.file_url} />
      </Worker>
      {/* <div id='iframe-container'>
        <iframe
          src={post?.file_url}
          allow='fullscreen'
          credentialless
          className='w-full h-screen'
        />
      </div> */}
    </>
  );
};

export default PDFView;

export const getServerSideProps = async ({ params }) => {
  try {
    const { postId } = params;

    const { data: postData } = await axios.get(
      `${process.env.SITE_URL}/api/posts/${postId}`
    );

    return { props: { post: postData[0] } };
  } catch (error) {
    console.error(error);
  }
};
