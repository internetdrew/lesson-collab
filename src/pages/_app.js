import '@/src/styles/globals.css';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const inter = Inter({ subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <div className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
          >
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </SessionContextProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}
