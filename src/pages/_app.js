import '@/src/styles/globals.css';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { AuthContextProvider } from '../context/authContext';

const inter = Inter({ subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <div className={inter.className}>
        <SessionProvider session={session}>
          <RecoilRoot>
            <AuthContextProvider>
              <Component {...pageProps} />
            </AuthContextProvider>
          </RecoilRoot>
        </SessionProvider>
      </div>
    </>
  );
}
