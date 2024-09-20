import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const accessToken = localStorage.getItem('accessToken');
  
  // Check if the user and accessToken exist
  return user && accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export { ProtectedRoutes };
