import { db } from '@/src/db/db';

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const query = req.query.subject
        ? 'SELECT * FROM posts WHERE subject = ?'
        : 'SELECT * FROM posts';

      db.query(query, [req.query.subject], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
      });
      break;

    case 'POST':
      break;

    case 'UPDATE':
      break;
  }
}
