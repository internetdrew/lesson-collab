import axios from 'axios';
import { useState, useEffect } from 'react';

export const useUserData = userId => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`/api/users/${userId}`);
        setUserData(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return userData;
};
