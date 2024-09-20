import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated by verifying the token
    const verifyToken = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/users/current-user'); // Check current user API
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export { ProtectedRoutes };
