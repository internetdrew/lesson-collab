import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { method } = req;
  const token = req.cookies.access_token;

  if (method !== 'POST') return res.status(405).json('Method not allowed.');

  if (!token) return res.status(401).json('User must be authenticated.');

  jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
    if (err) return res.status(403).json('Invalid token');
    const { id: userId } = userInfo;

    const insertNewComment =
      'INSERT INTO comments(`post_id`, `user_id`, `text`) VALUES (?)';

    const values = [req.body.postId, userId, req.body.feedback];

    db.query(insertNewComment, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json('Post has been created.');
    });
  });
}
