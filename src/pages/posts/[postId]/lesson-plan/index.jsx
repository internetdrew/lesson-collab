import axios from 'axios';
import { Navbar } from '@/src/components';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFView = ({ post }) => {
  return (
    <>
      <Navbar />
      <iframe
        src={post?.file_url}
        allow='fullscreen'
        credentialless
        className='w-full h-screen'
      />
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
