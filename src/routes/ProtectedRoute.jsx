import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { token, initialized } = useSelector((state) => state.auth);

  if (!initialized) return null; // or loader component
  if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
