import { db } from '@/src/db/db';

export default function handler(req, res) {
  const { method } = req;
  console.log(req.query);

  switch (method) {
    case 'GET':
      const query = 'SELECT * FROM posts WHERE id = ?';
      db.query(query, [req.query.postId], (err, data) => {
        if (err) return res.json(err);
        res.status(200).json(data);
      });
      break;

    case 'DELETE':
      break;

    case 'PUT':
      break;
  }
}
