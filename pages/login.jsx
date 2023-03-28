import Link from 'next/link';

const Login = () => {
  const fields = ['email', 'password'];
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-teal-600'>
      <h1 className='text-2xl font-bold mb-10 text-center text-slate-50'>
        Login to LessonFeed
      </h1>
      <form className='flex flex-col gap-3 w-80 bg-slate-50 px-6 py-8 rounded-md'>
        {fields.map(field => (
          <div className='flex flex-col'>
            <label className='capitalize text-lg font-medium mb-1'>
              {field}
            </label>
            <input
              type={`${field}`}
              placeholder={`Enter your ${field}`}
              className='p-2 focus-within:outline-none rounded-lg border'
            />
          </div>
        ))}

        <button
          type='submit'
          className='bg-teal-600 p-2 text-white font-semibold text-xl mt-2'
        >
          Login
        </button>
        <span className='text-center mt-2'>
          Don't have an account?{' '}
          <Link href={'/register'} className='text-teal-800'>
            Register!
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
