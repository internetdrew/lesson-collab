import axios from 'axios';

export const useFetchCurrentUser = () => {
  const fetchCurrentUser = async userId => {
    const { data } = await axios.get(`/api/users/${userId}`);
    return data[0];
  };
  return fetchCurrentUser;
};
