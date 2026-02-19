import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { routeGuardContext } from "../context/GuardContext";

function ProtectedRoute({ children, allowedRole }) {
  const { authorised, role, loading } = useContext(routeGuardContext);

  if (loading) return null; // wait until auth check finishes

  if (!authorised) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
