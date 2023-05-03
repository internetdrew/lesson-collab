import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { method } = req;
  const { subject } = req.query;
  const token = req.cookies.access_token;

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
      if (!token) return res.status(401).json('There is no authenticated user');

      jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
        if (err) return res.status(403).json('Invalid token');
        const { id: userId } = userInfo;

        const postId = req.query.postId;
        const newPostQuery =
          'INSERT INTO posts(`title`, `grade_level`, `subject`, `file_name`, `file_url`, `desc`, `uid` ) VALUES (?)';

        const values = [
          req.body.title,
          req.body.gradeLevel,
          req.body.subject,
          req.body.fileName,
          req.body.fileUrl,
          req.body.desc,
          userId,
        ];

        db.query(newPostQuery, [values], (err, data) => {
          if (err) return res.status(500).json(err);

          return res.json('Post has been created.');
        });
      });
      break;
  }
}
