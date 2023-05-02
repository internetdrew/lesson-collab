import { createClient } from '@supabase/supabase-js';
// import { useSession } from 'next-auth/react';

// const { data: session } = useSession();
// console.log(session);
// const { supabaseAccessToken } = session;
// import mysql2 from 'mysql2';

// export const db = mysql2.createConnection({
//   host: 'localhost',
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: 'lessonfeed',
// });

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // {
  //   global: {
  //     headers: {
  //       Authorization: `Bearer ${supabaseAccessToken}`,
  //     },
  //   },
  // }
);
