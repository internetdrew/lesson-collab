import { db } from '@/src/db/db';

export default function handler(req, res) {
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

    res.json(data);

    // Check password
    // const correctPassword = bcrypt.compareSync(req.body.password);
    // bcrypt.compareSync('not_bacon', hash); // false
  });
}
