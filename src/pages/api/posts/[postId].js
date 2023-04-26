import { db } from '@/src/db/db';
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { method } = req;
  const { postId } = req.query;
  const token = req.cookies.access_token;
  console.log(req.method);

  switch (method) {
    case 'GET':
      const getQuery =
        'SELECT p.id, u.id AS userId, `username`, `title`, `desc`, `image`, `subject`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?';

      db.query(getQuery, [postId], (err, data) => {
        if (err) return res.json(err);
        res.status(200).json(data[0]);
      });
      break;

    case 'DELETE':
      if (!token) return res.status(401).json('There is no authenticated user');

      jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
        if (err) return res.status(403).json('Invalid token');
        const { id: userId } = userInfo;

        const postId = req.query.postId;
        const deleteQuery = 'DELETE FROM posts WHERE `id` = ? AND `uid` = ?';

        db.query(deleteQuery, [postId, userId], (err, data) => {
          if (err) {
            return res.status(403).json('You can only delete your own posts.');
          }

          return res.json('Post has been deleted');
        });
      });

      break;

    case 'PUT':
      break;
  }
}
