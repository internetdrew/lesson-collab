export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const query = req.query.subject
        ? 'SELECT * FROM posts WHERE subject = ?'
        : 'SELECT * FROM posts';
      break;

    case 'POST':
      break;

    case 'UPDATE':
      break;
  }
}
