import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FullScreenLoader from "../components/common/FullScreenLoader";

const RedirectIfAuthed = ({ children }) => {
  const { token, initialized, user } = useSelector((state) => state.auth);

  if (!initialized) return <FullScreenLoader />;

  if (token) {
    // ✅ if onboarding not complete, go onboarding
    if (!user?.onboardingComplete) {
      return <Navigate to="/onboarding/name" replace />;
    }
    return <Navigate to="/chat" replace />;
  }

  return children;
};

export default RedirectIfAuthed;
