import { db } from '@/src/db/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} method not allowed.` });
  }
  // Check if the user already exists
  const query = 'SELECT * FROM users WHERE username = ?';

  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) {
      return res
        .status(404)
        .json(
          "This username wasn't found. You'll want to sign up before you login."
        );
    }

    // Check password
    const correctPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!correctPassword) {
      return res.status(400).json('Incorrect username or password.');
    }

    const token = jwt.sign({ id: data[0].id }, process.env.JWT_KEY);
    const { password, ...safeUserData } = data[0];

    setCookie('access_token', token, { req, res, maxAge: 60 * 6 * 24 });
    res.status(200).json(safeUserData);
  });
}
