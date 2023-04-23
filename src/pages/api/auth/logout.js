import { deleteCookie } from 'cookies-next';

export default function handler(req, res) {
  deleteCookie('access_token', {
    req,
    res,
    sameSite: 'none',
    secure: true,
  });

  return res.status(200).json('User successfully logged out.');
}
