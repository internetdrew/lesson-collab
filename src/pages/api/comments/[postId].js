import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req, res) {
  const { method } = req;
  const { postId } = req.query;

  if (method !== 'GET') return res.status(405).json('Method not allowed.');

  const supabase = createServerSupabaseClient({ req, res });

  const { data } = await supabase
    .from('comments')
    .select()
    .eq('post_id', postId);
  return res.status(200).json(data);
}
