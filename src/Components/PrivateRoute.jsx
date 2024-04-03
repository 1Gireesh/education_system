import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavBar from './NavBar';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state?.auth?.user);

  if (!isAuthenticated) {
    return <Navigate to='/signup' />;
  }

  return <>
    <NavBar />
    {children}
  </>
}

export default PrivateRoute;
