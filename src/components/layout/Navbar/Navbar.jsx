import { useLocation } from "react-router-dom";
import AuthNavbar from "./variants/AuthNavbar";
import OnboardingNavbar from "./variants/OnboardingHeader";
import AppNavbar from "./variants/AppNavbar";
import PublicNavbar from "./variants/PublicNavbar";


const Navbar = () => {
  const { pathname } = useLocation();

  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    return <AuthNavbar />;
  }

  if (pathname.startsWith("/onboarding")) {
    return <OnboardingNavbar />;
  }

  if (pathname.startsWith("/chat") || pathname.startsWith("/settings")) {
    return <AppNavbar />;
  }

  return <PublicNavbar />;
};

export default Navbar;
