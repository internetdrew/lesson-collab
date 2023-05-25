import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req, res) {
  try {
    const { method } = req;
    const { postId } = req.query;
    const { title, gradeLevel, subject, fileName, fileUrl, desc, uid } =
      req.body;

    const supabase = createServerSupabaseClient({
      req,
      res,
    });

    switch (method) {
      case 'GET': {
        const { data, error } = await supabase
          .from('posts')
          .select(`*, users(id, avatar, name)`)
          .eq('id', postId);

        if (error) return res.status(400).json(error);

        res.status(200).json(data);
        break;
      }

      case 'DELETE': {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          return res.status(401).json({
            error: 'not_authenticated',
            description:
              'The user does not have an active session or is not authenticated',
          });
        }

        const { error: deletionError } = await supabase
          .from('posts')
          .delete()
          .eq('id', postId);

        if (!deletionError) res.json('post has been deleted');
        break;
      }

      case 'PUT': {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          return res.status(401).json({
            error: 'not_authenticated',
            description:
              'The user does not have an active session or is not authenticated',
          });
        }

        const { data, error } = await supabase
          .from('posts')
          .update({
            title,
            grade_level: gradeLevel,
            subject,
            file_name: fileName,
            file_url: fileUrl,
            desc,
            uid,
          })
          .eq('id', postId)
          .select();
        if (error) return res.status(500).json(error);

        res.status(200).json(data);

        break;
      }
    }
  } catch (error) {
    console.error(error);
  }
}
