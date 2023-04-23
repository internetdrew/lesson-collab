import { addPost } from '@/src/controllers/post';

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      addPost(req, res);
      break;

    case 'POST':
      break;

    case 'UPDATE':
      break;
  }
}
