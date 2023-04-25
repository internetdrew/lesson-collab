import { db } from '@/src/db/db';

export default function handler(req, res) {
  const { method } = req;
  const { postId } = req.query;

  switch (method) {
    case 'GET':
      // const query = 'SELECT * FROM posts WHERE id = ?';
      const query =
        'SELECT `username`, `title`, `desc`, `image`, `subject`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?';

      db.query(query, [postId], (err, data) => {
        if (err) return res.json(err);
        res.status(200).json(data[0]);
      });
      break;

    case 'DELETE':
      break;

    case 'PUT':
      break;
  }
}
