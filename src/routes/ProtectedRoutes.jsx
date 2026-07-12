import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return currentUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;