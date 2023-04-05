import { Layout, Feed, SignInForm } from '../components';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  console.log(session);

  return (
    <div>
      {!session ? (
        <section className='flex flex-col items-center justify-center bg-slate-50 h-screen'>
          <h1 className='text-teal-600 text-3xl font-bold mb-4'>
            Welcome to LessonFeed
          </h1>
          <div className='w-96 p-6 rounded-xl bg-teal-600 shadow-2xl'>
            <Auth
              supabaseClient={supabase}
              appearance={{
                style: {
                  input: {
                    background: '#f8fafc',
                    fontSize: '16px',
                    padding: '10px',
                    borderRadius: '5px',
                    borderColor: 'gray',
                  },
                  label: {
                    color: '#f8fafc',
                    fontSize: '14px',
                    fontWeight: '500',
                  },
                  button: {
                    backgroundColor: '#f8fafc',
                    color: 'rgb(13 148 136)',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    padding: '.8rem',
                    borderRadius: '5px',
                  },
                  anchor: { color: '#f8fafc' },
                  message: { color: 'rgb(220 38 38)' },
                },
              }}
              providers={['google', 'facebook', 'linkedin']}
              socialLayout='horizontal'
            />
          </div>
        </section>
      ) : (
        <Layout>
          <Feed />
        </Layout>
      )}
    </div>
  );
}
