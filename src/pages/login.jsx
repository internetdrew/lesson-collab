import Image from 'next/image';
import Link from 'next/link';
import loginImage from '/public/login.jpg';
import { FcGoogle } from 'react-icons/fc';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import { validateLogin } from '../lib/validate';

const login = () => {
  const onSubmit = async values => {};

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validate: validateLogin,
    onSubmit,
  });

  const fields = [
    {
      name: 'email',
      type: 'email',
      symbol: <HiAtSymbol />,
    },
    { name: 'password', type: 'password', symbol: <HiFingerPrint /> },
  ];

  const handleGoogleSignin = async () => {
    signIn('google', { callbackUrl: '/' });
  };

  return (
    <div className='h-full min-h-screen flex items-center bg-teal-600'>
      <section className='m-auto bg-slate-50 rounded-md w-[90%] sm:w-3/5 grid lg:grid-cols-2 overflow-hidden'>
        <div className='left hidden relative lg:block'>
          <Image
            src={loginImage}
            alt='woman writing in notepad'
            className='w-full h-full object-cover'
            priority
          />
        </div>

        <div className='right flex flex-col items-center justify-center'>
          <h1 className='text-teal-600 text-4xl font-bold p-4'>LessonFeed</h1>
          <p className='w-3/4 text-center text-gray-400'>
            Improve your lesson plans with feedback from other educators.
          </p>
          <form
            className='flex flex-col gap-5 items-center mt-4 w-4/5'
            onSubmit={formik.handleSubmit}
          >
            {fields.map(field => (
              <div key={field.name} className='w-full'>
                <div
                  className={`form-control flex border rounded-xl relative w-full ${
                    formik.errors?.[`${field.name}`] &&
                    formik.touched?.[`${field.name}`]
                      ? 'border-red-500'
                      : ''
                  }`}
                >
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={`Enter your ${field.name}`}
                    className='w-full py-3 px-4 focus:outline-none focus:ring-0 border-none rounded-xl bg-slate-50'
                    {...formik.getFieldProps(field.name)}
                  />
                  <span className='flex items-center justify-center p-4 text-gray-400'>
                    {field.symbol}
                  </span>
                </div>
                {formik.errors?.[`${field.name}`] &&
                formik.touched?.[`${field.name}`] ? (
                  <span
                    key={`${field?.name} error`}
                    className='text-red-500 mt-1 text-sm'
                  >
                    {formik.errors?.[`${field.name}`]}
                  </span>
                ) : null}
              </div>
            ))}

            <button
              type='submit'
              className='w-full bg-teal-600 py-3 text-slate-50 text-lg rounded-lg font-semibold hover:bg-teal-500 hover:shadow-lg duration-300'
            >
              Login
            </button>
            <button
              type='button'
              className='w-full border rounded-lg py-3 inline-flex items-center justify-center gap-2 text-gray-700 hover:shadow-lg duration-300'
              onClick={handleGoogleSignin}
            >
              <FcGoogle className='text-xl' />
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
