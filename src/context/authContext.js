'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = async (origin, userData) => {
    const res = await axios.post(`${origin}/api/auth/login`, userData);
    if ((res.statusText = 'OK')) {
      localStorage.setItem('user', JSON.stringify(res.data));
      setCurrentUser(res.data);
    }
  };

  const logout = async () => {
    const res = await axios.post(`http://localhost:3000/api/auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    const stored = localStorage.getItem('user');
    setCurrentUser(stored ? JSON.parse(stored) : null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
