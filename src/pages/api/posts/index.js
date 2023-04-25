import { db } from '@/src/db/db';

export default function handler(req, res) {
  const { method } = req;
  const { subject } = req.query;

  switch (method) {
    case 'GET':
      const query =
        'SELECT p.id,`title`, `desc`, `date`, `username` FROM posts p JOIN users u ON p.uid = u.id' +
        `${subject ? ' WHERE subject = ?' : ''}`;

      db.query(query, [req.query.subject], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
      });
      break;

    case 'POST':
      break;

    case 'PUT':
      break;
  }
}
