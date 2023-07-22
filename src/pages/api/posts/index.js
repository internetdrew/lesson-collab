import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req, res) {
  try {
    const { method } = req;
    const { subject } = req.query;
    const {
      subject: postSubject,
      title,
      gradeLevel,
      desc,
      uid,
      fileName,
      fileUrl,
    } = req.body;
    const supabase = createServerSupabaseClient({
      req,
      res,
    });

    switch (method) {
      case 'GET':
        let query = supabase
          .from('posts')
          .select(
            `id, created_at, title, grade_level, subject, file_name, file_url, desc, users(id, name, avatar), comments(id, created_at, user_id, text)`
          );

        if (subject) {
          query = query.eq('subject', subject);
        }

        const { data } = await query.order('id', { ascending: false });
        res.status(200).json(data);
        break;

      case 'POST':
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

        const { error } = await supabase.from('posts').insert({
          title,
          grade_level: gradeLevel,
          subject: postSubject,
          file_name: fileName,
          file_url: fileUrl,
          desc,
          uid,
        });
        if (!error) res.status(200).json('Post successfully added.');
        break;
    }
  } catch (error) {
    console.error(error);
  }
}
