import Image from 'next/image';
import Link from 'next/link';
import loginImage from '/public/loginbg.jpg';

const login = () => {
  const fields = ['email', 'password'];

  return (
    <div className='h-screen flex items-center bg-teal-600'>
      <section className='m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2 overflow-hidden'>
        <div className='left'>
          <Image src={loginImage} className='w-full h-full object-cover ' />
        </div>

        <div className='right flex flex-col items-center justify-center'>
          <h1 className='text-teal-600 text-4xl font-bold p-4'>LessonFeed</h1>
          <p className='w-3/4 text-center text-gray-400'>
            Improve your lesson plans with feedback from other educators.
          </p>
          <form className='flex flex-col gap-5 items-center mt-4 w-3/4'>
            {fields.map(field => (
              <div className='form-control flex border rounded-xl relative w-full'>
                <input
                  type={`${field}`}
                  name='email'
                  placeholder={`Enter your ${field}`}
                  className='w-full py-2 px-3 border border-gray-100 rounded-xl bg-slate-50'
                />
              </div>
            ))}

            <div className='button-container'>
              <button type='submit'>Login</button>
            </div>
            <div className='button-container'>
              <button type='submit'>Sign in with Google</button>
            </div>
            <p className='text-center text-gray-400'>
              Don't have an account yet?{' '}
              <Link href={'/register'} className='text-teal-700'>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default login;
