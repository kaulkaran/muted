import { useSelector } from "react-redux";
import FullScreenLoader from "../components/common/FullScreenLoader";

export default function AuthGate({ children }) {
  const { initialized, token } = useSelector((s) => s.auth);

  // ✅ Only block UI when token exists and we're still checking
  if (token && !initialized) return <FullScreenLoader />;

  return children;
}
