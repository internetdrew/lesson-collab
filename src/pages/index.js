import { Layout, Feed } from '../components';
import { useSession } from 'next-auth/react';
import { useSetRecoilState } from 'recoil';
import { sessionState } from '../atoms/sessionAtom';
import { useEffect } from 'react';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
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
