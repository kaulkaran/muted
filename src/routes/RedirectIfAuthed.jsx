import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FullScreenLoader from "../components/common/FullScreenLoader";

const RedirectIfAuthed = ({ children }) => {
  const { token, initialized, user } = useSelector((state) => state.auth);

  // still initializing auth (loadUser running)
  if (!initialized) return <FullScreenLoader />;

  // token exists but user not in redux yet (extra safety)
  if (token && !user) return <FullScreenLoader />;

  if (token) {
    // ✅ fallback: if backend flag missing, treat having a displayName as completed
    const onboardingDone =
      user?.onboardingComplete ?? Boolean(user?.displayName?.trim());

    return <Navigate to={onboardingDone ? "/chat" : "/onboarding/name"} replace />;
  }

  return children;
};

export default RedirectIfAuthed;
