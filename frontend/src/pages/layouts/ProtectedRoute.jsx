import React, { useContext } from "react";
import User from "@contexts/User";
import { Navigate } from "react-router-dom";

export function ProtectedRoutes({ children }) {
  const userContext = useContext(User.UserContext);
  if (!userContext.user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoutes;
