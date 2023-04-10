import { Layout, Feed } from '../components';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { userState } from '../atoms/userAtom';
import { sessionState } from '../atoms/sessionAtom';
import { useSetRecoilState } from 'recoil';
import { useSession } from '@supabase/auth-helpers-react';

export default function Home() {
  const handleCallbackResponse = response => {
    console.log(response.credentials);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signin'), {
      theme: 'blue',
      size: 'large',
    });
  }, []);

  return (
    <Layout>
      <div id='signin'></div>
      <Feed />
    </Layout>
  );
}
