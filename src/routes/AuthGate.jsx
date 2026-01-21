import { useSelector } from "react-redux";
import FullScreenLoader from "../components/common/FullScreenLoader";

export default function AuthGate({ children }) {
  const { initialized } = useSelector((s) => s.auth);
  if (!initialized) return <FullScreenLoader />;
  return children;
}
