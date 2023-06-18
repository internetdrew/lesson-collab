import { useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '@/src/components';

const PDFView = ({ post }) => {
  useEffect(() => {
    const iframe = document.getElementById('iframe');
    const onLoad = () => {
      // Get the width and height of the iframe's content.
      const width = iframe.contentDocument.body.scrollWidth;
      const height = iframe.contentDocument.body.scrollHeight;

      // Set the width and height of the iframe.
      iframe.style.width = width + 'px';
      iframe.style.height = height + 'px';
    };

    // Set the iframe's onload event listener.
    iframe.addEventListener('load', onLoad);

    // Return a function to remove the event listener on unmount.
    return () => {
      iframe.removeEventListener('load', onLoad);
    };
  }, []);

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
