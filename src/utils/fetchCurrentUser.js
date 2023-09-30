import axios from 'axios';

export const fetchCurrentUser = async userId => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data;
};
