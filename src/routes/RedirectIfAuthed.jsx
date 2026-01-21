import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FullScreenLoader from "../components/common/FullScreenLoader";

const RedirectIfAuthed = ({ children }) => {
  const { token, initialized } = useSelector((state) => state.auth);

  if (!initialized) return <FullScreenLoader />;  // ✅ loader instead of null
  if (token) return <Navigate to="/chat" replace />;

  return children;
};

export default RedirectIfAuthed;
