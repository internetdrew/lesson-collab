import { deleteCookie } from 'cookies-next';

export default function handler(req, res) {
  deleteCookie('access_token', {
    sameSite: 'none',
    secure: true,
  });

  res.status(200).json('User successfully logged out.');
}
