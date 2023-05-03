export default function handler(req, res) {
  const { method } = req;
  const { postId } = req.query;

  if (method !== 'GET')
    return res.status(405).json('Only GET requests work on this route.');

  const getCommentsQuery =
    'SELECT c.id, c.user_id AS userId, c.date AS date, c.text AS text, u.username, u.image AS userImg FROM comments c JOIN users u ON c.user_id = u.id WHERE `post_id` = ?';

  db.query(getCommentsQuery, [postId], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
}
