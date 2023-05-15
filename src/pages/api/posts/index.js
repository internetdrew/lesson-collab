import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req, res) {
  const { method } = req;
  const { subject } = req.query;
  const supabase = createServerSupabaseClient({
    req,
    res,
  });

  switch (method) {
    case 'GET':
      if (subject) {
        const { data } = await supabase
          .from('posts')
          .select(
            `*, users (
            name, avatar
            )`
          )
          .eq('subject', subject);
        return res.status(200).json(data);
      }

      const { data } = await supabase.from('posts').select(`*, users (
            name, avatar
            )`);
      res.status(200).json(data);
      break;

    case 'POST':
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);
      res.status(200).json(session);
      break;
  }
}
