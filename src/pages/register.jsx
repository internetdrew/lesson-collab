import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import loginImage from '/public/login.jpg';
import { HiAtSymbol, HiFingerPrint, HiUser } from 'react-icons/hi';
import { useFormik } from 'formik';
import { validateRegistration } from '../lib/validate';
import axios from 'axios';

const Register = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const fields = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Please choose a username',
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

  const onSubmit = async values => {
    try {
      const baseUrl = window.location.origin;
      const res = await axios.post(`${baseUrl}/api/auth/register`, values);
      if ((res.statusText = 'OK')) router.push('/login');
    } catch (err) {
      setError(err.response.data);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      password2: '',
    },
    validate: validateRegistration,
    onSubmit,
  });

  return (
    <div className='h-full min-h-screen flex items-center bg-teal-600'>
      <section className='m-auto bg-slate-50 rounded-md w-[90%] sm:w-3/5 grid lg:grid-cols-2 overflow-hidden'>
        <div className='left hidden lg:block'>
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
                    placeholder={field.placeholder}
                    className='w-full py-3 px-4 focus:outline-none focus:ring-0 border-none rounded-xl bg-slate-50'
                    {...formik.getFieldProps(field.name)}
                  />
                  <span className='flex items-center justify-center p-4 text-gray-400'>
                    {field.symbol}
                  </span>
                </div>
                {formik.errors?.[`${field.name}`] &&
                formik.touched?.[`${field.name}`] ? (
                  <small
                    key={`${field?.name} error`}
                    className='text-red-500 mt-1 text-sm'
                  >
                    {formik.errors?.[`${field.name}`]}
                  </small>
                ) : null}
              </div>
            ))}

            <button
              type='submit'
              className='w-full bg-teal-600 py-3 text-slate-50 text-lg rounded-lg font-semibold hover:bg-teal-500 hover:shadow-lg duration-300'
            >
              Sign up
            </button>
            {error ? (
              <small className='text-center text-red-600 text-sm'>
                {error}
              </small>
            ) : null}

            <p className='text-center text-gray-400 p-4'>
              Already have an account?{' '}
              <Link
                href={'/login'}
                className='text-teal-600 hover:text-teal-500 duration-200'
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
