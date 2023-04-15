import { Layout, Feed } from '../components';
import { useSession } from 'next-auth/react';
import { useSetRecoilState } from 'recoil';
import { sessionState } from '../atoms/sessionAtom';
import { useEffect } from 'react';
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {
  const { data: session } = useSession();
  const setSession = useSetRecoilState(sessionState);

  useEffect(() => {
    setSession(session);
  }, [session]);

  return (
    <Layout>
      <Feed />
    </Layout>
  );
}
