// src/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  currentUser: User | null;
  signup: (userData: User) => void;
  signin: (userData: User) => void;
  signout: () => void;
  loading: boolean;
}

interface User {
  username?: string;
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (userData: User) => {
    setLoading(true);
    // Simulación de lógica de registro
    setTimeout(() => {
      setCurrentUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      setLoading(false);
    }, 1000);
  };

  const signin = (userData: User) => {
    setLoading(true);
    // Simulación de lógica de inicio de sesión
    setTimeout(() => {
      setCurrentUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      setLoading(false);
    }, 1000);
  };

  const signout = () => {
    setLoading(true);
    // Simulación de cierre de sesión
    setTimeout(() => {
      setCurrentUser(null);
      localStorage.removeItem('currentUser');
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Verificar si hay un usuario autenticado en el local storage al cargar la aplicación
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup, signin, signout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
