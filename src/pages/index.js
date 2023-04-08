import { Layout, Feed, SignInForm } from '../components';
import { useSession } from '@supabase/auth-helpers-react';

export default function Home() {
  const session = useSession();
  // console.log(session.user);

  return (
    <div>
      {!session ? (
        <section className='flex flex-col items-center justify-center bg-slate-50 h-screen'>
          <h1 className='text-teal-600 text-2xl font-bold mb-4 text-center sm:text-3xl'>
            Welcome to LessonFeed
          </h1>
          <SignInForm />
        </section>
      ) : (
        <Layout>
          <Feed />
        </Layout>
      )}
    </div>
  );
}
