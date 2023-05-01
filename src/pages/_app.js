import '@/src/styles/globals.css';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { AuthContextProvider } from '../context/authContext';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <div className={inter.className}>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <SessionProvider session={session}>
            <RecoilRoot>
              <AuthContextProvider>
                <Component {...pageProps} />
              </AuthContextProvider>
            </RecoilRoot>
          </SessionProvider>
        </SessionContextProvider>
      </div>
    </>
  );
}
