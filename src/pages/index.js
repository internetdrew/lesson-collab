import { Layout, Feed } from '../components';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { userState } from '../atoms/userAtom';
import { useSetRecoilState } from 'recoil';

export default function Home() {
  const setUser = useSetRecoilState(userState);

  const handleCallbackResponse = response => {
    const resPayload = jwtDecode(response.credential);
    const userObj = {
      id: resPayload.sub,
      firstName: resPayload.given_name,
      lastName: resPayload.family_name,
      imageUrl: resPayload.picture,
      email: resPayload.email,
    };
    setUser(userObj);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.prompt();
  }, []);
  return (
    <Layout>
      <Feed />
    </Layout>
  );
}
