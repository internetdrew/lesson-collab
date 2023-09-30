import axios from 'axios';
import { Navbar } from '@/src/components';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

const PDFView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const fetchPostData = async postId => {
    const { data } = await axios.get(`/api/posts/${postId}`);
    return data[0];
  };

  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ['currentPost', postId],
    queryFn: () => fetchPostData(postId),
  });

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
