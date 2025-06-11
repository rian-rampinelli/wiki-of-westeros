import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    // Se não está logado, redireciona para login
    return <Navigate to="/login" replace />;
  }
  // Se está logado, renderiza o conteúdo protegido
  return children;
}

export default PrivateRoute;
