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
