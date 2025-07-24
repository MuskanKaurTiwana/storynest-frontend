// import { Navigate } from 'react-router-dom';

// function ProtectedRoute({ children }) {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" />;
// }

// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem('token');
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
