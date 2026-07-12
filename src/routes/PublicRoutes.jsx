import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return currentUser ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;