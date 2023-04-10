import Image from 'next/image';
import Link from 'next/link';
import loginImage from '/public/loginbg.jpg';
import { HiAtSymbol, HiFingerPrint, HiUser } from 'react-icons/hi';

const login = () => {
  const fields = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Please enter your username',
      symbol: <HiUser />,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Please enter your email address',
      symbol: <HiAtSymbol />,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Please enter your password',
      symbol: <HiFingerPrint />,
    },
    {
      name: 'password2',
      type: 'password',
      placeholder: 'Please confirm your password',
      symbol: <HiFingerPrint />,
    },
  ];

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
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className='w-full py-3 px-4 focus:outline-none focus:ring-0 border-none rounded-xl bg-slate-50'
                />
                <span className='flex items-center justify-center p-4 text-gray-400'>
                  {field.symbol}
                </span>
              </div>
            ))}

            <button
              type='submit'
              className='w-full bg-teal-600 py-3 text-slate-50 text-lg rounded-lg font-semibold hover:shadow-lg duration-300'
            >
              Sign up
            </button>

            <p className='text-center text-gray-400 p-4'>
              Already have an account?{' '}
              <Link href={'/login'} className='text-teal-700'>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default login;
