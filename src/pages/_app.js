import '@/src/styles/globals.css';
import { Inter } from 'next/font/google';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <div className={inter.className}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </div>
      </SessionContextProvider>
    </>
  );
}
