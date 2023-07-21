import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req, res) {
  const { method } = req;
  const supabase = createServerSupabaseClient({ req, res });

  if (req.method !== 'GET' && req.method !== 'PUT')
    return res.status(405).json('Method not allowed');

  switch (method) {
    case 'GET': {
      const { userId } = req.query;
      const { data: userData } = await supabase
        .from('users')
        .select(
          `id, name, avatar, about, location, website, posts(title, desc, id, uid, users(id, name, avatar))`
        )
        .eq('id', userId);

      res.status(200).json(userData[0]);
      break;
    }

    case 'PUT': {
      const { name, about, location, website, avatarUrl, userId } = req.body;

      const { data, error } = await supabase
        .from('users')
        .update({
          name: name,
          about: about,
          location: location,
          website: website,
          avatar: avatarUrl,
        })
        .eq('id', userId)
        .select();

      if (!error) res.status(200).json('Successfully updated user info.');

      break;
    }
  }
}
