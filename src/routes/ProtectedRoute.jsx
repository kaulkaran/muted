import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import FullScreenLoader from "../components/common/FullScreenLoader";

const ProtectedRoute = () => {
  const { token, initialized } = useSelector((state) => state.auth);

  if (!initialized) return <FullScreenLoader />; // ✅
  if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
