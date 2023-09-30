import axios from 'axios';

export const fetchPostById = async id => {
  const { data } = await axios.get(`/api/posts/${id}`);
  return data[0];
};
