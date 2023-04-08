import { Auth } from '@supabase/auth-ui-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const SignInForm = () => {
  const supabase = useSupabaseClient();
  return (
    <div className='sm:w-96 p-6 rounded-xl bg-teal-600 shadow-2xl'>
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
      />
    </div>
  );
};

export default SignInForm;
