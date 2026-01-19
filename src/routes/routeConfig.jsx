import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import HomePage from "../pages/Home/HomePage";
import DisplayNamePage from "../pages/Onboarding/Step1DisplayName/DisplayNamePage";
import PrivacyPage from "../pages/Onboarding/Step2Privacy/PrivacyPage";
import InvitePage from "../pages/Onboarding/Step3Invite/InvitePage";

export const routes = [
  /* Public */
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },

  /* Onboarding */
  { path: "/onboarding/name", element: <DisplayNamePage /> },
  { path: "/onboarding/privacy", element: <PrivacyPage /> },
  { path: "/onboarding/invite", element: <InvitePage /> },
];