import { createContext, useContext, useEffect, useState } from 'react';
import { useWindowOrigin } from '../utils';
import { Auth } from '@supabase/auth-ui-react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user') || null)
  );

  const logout = async origin => {
    await axios.post(`${origin}/api/auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuthContext = useContext(AuthContext);
