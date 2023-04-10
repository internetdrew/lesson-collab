import Image from 'next/image';
import Link from 'next/link';
import loginImage from '/public/loginbg.jpg';
import { FcGoogle } from 'react-icons/fc';

const login = () => {
  const fields = ['email', 'password'];

  return (
    <div className='h-screen flex items-center bg-teal-600'>
      <section className='m-auto bg-slate-50 rounded-md w-[90%] sm:w-3/5 grid lg:grid-cols-2 overflow-hidden'>
        <div className='left hidden lg:block'>
          <Image src={loginImage} className='w-full h-full object-cover ' />
        </div>

        <div className='right flex flex-col items-center justify-center'>
          <h1 className='text-teal-600 text-4xl font-bold p-4'>LessonFeed</h1>
          <p className='w-3/4 text-center text-gray-400'>
            Improve your lesson plans with feedback from other educators.
          </p>
          <form className='flex flex-col gap-5 items-center mt-4 w-4/5'>
            {fields.map(field => (
              <div className='form-control flex border rounded-xl relative w-full'>
                <input
                  type={`${field}`}
                  name={`${field}`}
                  placeholder={`Enter your ${field}`}
                  className='w-full py-3 px-4 border border-none rounded-xl bg-slate-50'
                />
              </div>
            ))}

            <button
              type='submit'
              className='w-full bg-teal-600 py-3 text-slate-50 text-lg rounded-lg font-semibold hover:shadow-lg duration-300'
            >
              Login
            </button>
            <button
              type='button'
              className='w-full border rounded-lg py-3 inline-flex items-center justify-center gap-2 text-gray-700 hover:shadow-lg duration-300'
            >
              <FcGoogle className='text-lg' />
              Sign in with Google
            </button>
            <p className='text-center text-gray-400 p-4'>
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
