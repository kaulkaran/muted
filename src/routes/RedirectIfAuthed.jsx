import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthed({ children }) {
  const { token, initialized } = useSelector((s) => s.auth);

  if (!initialized) return null;
  if (token) return <Navigate to="/chat" replace />;

  return children;
}
