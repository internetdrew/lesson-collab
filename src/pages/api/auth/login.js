import { db } from '../pages/api/db';

export default function handler(req, res) {
  // Check if the user already exists
  const query = 'SELECT * FROM users WHERE email = ? || username = ?';

  db.query(query, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
  });
}
