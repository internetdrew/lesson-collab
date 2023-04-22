import { db } from '@/src/db/db';
import bcrypt from 'bcryptjs';

export default function handler(req, res) {
  if (req.method !== 'POST')
    return res
      .status(405)
      .json({ message: `${req.method} method not allowed.` });
  // Check if the user already exists
  const query = 'SELECT * FROM users WHERE email = ? || username = ?';

  db.query(query, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length)
      return res
        .status(409)
        .json(
          'Username and/or email address are registered with an existing account. Try signing in, instead.'
        );

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertUserQuery =
      'INSERT INTO users(`username`, `email`, `password`) VALUES (?)';
    const values = [req.body.username, req.body.email, hash];

    db.query(insertUserQuery, [values], (err, _data) => {
      if (err) return res.json(err);

      return res.status(200).json('User has been created');
    });
  });
}
