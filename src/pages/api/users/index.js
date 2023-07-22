import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json('Method not allowed');

  const supabase = createServerSupabaseClient({ req, res });

  const { data: userData } = await supabase
    .from('users')
    .select(`created_at, name, avatar`)
    .order('created_at', { ascending: false })
    .limit(5);

  return res.status(200).json(userData);
}
