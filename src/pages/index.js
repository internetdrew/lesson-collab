import { Layout, Feed, SubSelector } from '../components';

import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/userAtom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import SkeletonPost from '../skeletons/SkeletonPost';

export default function Home({ currentUser }) {
  return (
    <>
      <Layout>
        <SubSelector />
        <Feed />
      </Layout>
    </>
  );
}

// export const getServerSideProps = req => {
//   const { subject } = req.query;

//   return {
//     props: {
//       subject: subject ?? null,
//     },
//   };
// };
