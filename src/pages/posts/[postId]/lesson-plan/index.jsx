import axios from 'axios';
import { Navbar } from '@/src/components';

const PDFView = ({ post }) => {
  return (
    <>
      <Navbar />
      <iframe
        src={post?.file_url}
        allow='fullscreen'
        credentialless
        className='w-full h-screen'
        id='iframe'
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
