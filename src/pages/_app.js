import '@/src/styles/globals.css';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';

const queryClient = new QueryClient();

const inter = Inter({ subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <Head>
        <title>
          LessonCollab: A Platform for Collaborative Lesson Planning
        </title>
        <meta
          property='og:title'
          content='LessonCollab: A Platform for Collaborative Lesson Planning'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://media.graphassets.com/Sv9IMzfvTWyzMKeTtCHU'
        />
        <meta property='og:url' content='https://lessoncollab.com' />
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          property='og:description'
          content='A social platform where educators collaborate on and improve lesson plans.'
        />
        <meta property='og:site_name' content='LessonCollab' />
        <meta name='twitter:image:alt' content='LessonCollab banner' />
      </Head>
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
