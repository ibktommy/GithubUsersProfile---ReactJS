import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  // Destructuring Values from the useAuth Object and checking if the values we get back are defined or undefined

  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user

  if (!isUser) {
    return <Navigate to='/login' />
  }

  return children
};
export default PrivateRoute;
