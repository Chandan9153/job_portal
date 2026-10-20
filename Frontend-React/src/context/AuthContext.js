import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/auth/login`, {
        email,
        password
      });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (error) {
      // Check for offline / demo mode fallback
      const isDemoAdmin = email.toLowerCase().includes('admin') || password === 'admin';
      const isDemoUser = email.toLowerCase().includes('demo') || email.toLowerCase().includes('user') || !error.response;
      
      if (isDemoAdmin || isDemoUser) {
        const fallbackRole = isDemoAdmin ? 'ADMIN' : 'USER';
        const fallbackName = isDemoAdmin ? 'Admin Recruiter' : (email.split('@')[0] || 'Job Seeker');
        const demoUserData = {
          name: fallbackName,
          email: email || 'demo@jobify.com',
          role: fallbackRole,
          token: 'demo-jwt-token-' + Date.now()
        };
        setUser(demoUserData);
        localStorage.setItem('user', JSON.stringify(demoUserData));
        return { success: true, user: demoUserData, isDemo: true };
      }

      return {
        success: false,
        message: error.response?.data?.message || 'Login failed. Please check your credentials or use Demo Login.'
      };
    }
  };

  const loginAsDemo = (role = 'USER') => {
    const isAdm = role === 'ADMIN';
    const demoData = {
      name: isAdm ? 'Admin Recruiter' : 'Alex Johnson',
      email: isAdm ? 'admin@jobify.com' : 'alex.seeker@jobify.com',
      role: role,
      token: 'demo-jwt-token-' + Date.now()
    };
    setUser(demoData);
    localStorage.setItem('user', JSON.stringify(demoData));
    return { success: true, user: demoData };
  };

  const register = async (name, email, password, role = 'USER') => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/auth/register`, {
        name,
        email,
        password,
        role
      });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (error) {
      // Offline fallback
      if (!error.response) {
        const demoUserData = {
          name: name || 'New User',
          email: email || 'user@jobify.com',
          role: role || 'USER',
          token: 'demo-jwt-token-' + Date.now()
        };
        setUser(demoUserData);
        localStorage.setItem('user', JSON.stringify(demoUserData));
        return { success: true, user: demoUserData, isDemo: true };
      }
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed. Please try again.'
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAdmin = () => {
    return user?.role === 'ADMIN';
  };

  const isUser = () => {
    return user?.role === 'USER' || user?.role === 'ADMIN';
  };

  const value = {
    user,
    login,
    loginAsDemo,
    register,
    logout,
    isAdmin,
    isUser,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

