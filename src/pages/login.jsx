import Script from 'next/script';
import { useEffect } from 'react';

const Login = () => {
  const handleCallbackResponse = response => {};

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <>
      <Script src='https://accounts.google.com/gsi/client' />
    </>
  );
};

export default Login;
