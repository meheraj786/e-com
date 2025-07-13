import React from 'react'
import { useAuth } from '../../contexts/Auth'
import { Navigate } from 'react-router'

const AdminRoute = ({ children }) => {
  const { userLoggedIn, role } = useAuth();

  // if (loading) return <p>Loading...</p>;

  return userLoggedIn && role === "admin" ? children : <Navigate to="/" />;
};


export default AdminRoute