import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (!token) return <Navigate to="/register" replace />;

  return children;
}

export default PrivateRoute;
