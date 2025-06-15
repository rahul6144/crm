import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login to access this page');
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;