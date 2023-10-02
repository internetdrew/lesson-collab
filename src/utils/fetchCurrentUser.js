import axios from 'axios';

export const fetchCurrentUser = async userId => {
  try {
    const { data } = await axios.get(`/api/users/${userId}`);
    const currentUser = data?.[0];
    return currentUser;
  } catch (error) {
    console.error(error);
  }
};
