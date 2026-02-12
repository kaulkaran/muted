import { useSelector } from "react-redux";
import FullScreenLoader from "../components/common/FullScreenLoader";

export default function AuthGate({ children }) {
  const { initialized, token, user } = useSelector((s) => s.auth);

  // block UI while restoring session
  if (token && (!initialized || !user)) return <FullScreenLoader />;

  return children;
}
