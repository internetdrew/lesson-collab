import Link from 'next/link';

const Login = () => {
  const fields = [
    { name: 'username', type: 'text' },
    { name: 'password', type: 'password' },
  ];
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-teal-600'>
      <form className='flex flex-col  bg-slate-50 px-6 py-8 rounded-lg'>
        <h1 className='text-2xl font-semibold text-center mb-1 text-teal-600'>
          Login to LessonFeed
        </h1>
        <span className='text-center mb-4'>
          Don't have an account?{' '}
          <Link href={'/signup'} className='text-teal-600'>
            Sign up!
          </Link>
        </span>
        <div className='flex flex-col gap-4 mt-4'>
          {fields.map(field => (
            <div key={field.name} className='flex flex-col'>
              <input
                type={`${field.type}`}
                placeholder={
                  field === 'email'
                    ? `Enter your email address`
                    : `Enter your ${field.name}`
                }
                className='px-3 py-2 focus-within:outline-none rounded-lg border focus-within:shadow-sm transition-[shadow] duration-300'
              />
            </div>
          ))}
        </div>
        <button
          type='submit'
          className='bg-teal-600 p-2 text-white font-semibold text-xl mt-6 hover:shadow-lg duration-500'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
