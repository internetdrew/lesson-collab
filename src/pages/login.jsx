import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const Login = () => {
  const handleCallbackResponse = response => {
    const resPayload = jwtDecode(response.credential);
    const userObj = {
      id: resPayload.sub,
      firstName: resPayload.given_name,
      lastName: resPayload.family_name,
      imageUrl: resPayload.picture,
      email: resPayload.email,
    };
    console.log(userObj);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'rounded',
      size: 'large',
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <div
        id='signInDiv'
        className='w-full h-screen flex items-center justify-center'
      ></div>
    </>
  );
};

export default Login;
