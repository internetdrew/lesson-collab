import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json('Method not allowed');
  const { userId } = req.query;

  const supabase = createServerSupabaseClient({ req, res });

  const { data: userData } = await supabase
    .from('users')
    .select(
      `id, name, avatar, about, posts(title, desc, id, uid, users(id, name, avatar))`
    )
    .eq('id', userId);

  return res.status(200).json(userData);
}
